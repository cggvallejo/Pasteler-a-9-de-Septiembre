import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Package, MapPin, CreditCard, User, ArrowLeft, Send, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import Mascot from './Mascot';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('welcome'); // welcome, categories, productList, suggestions, checkoutName, checkoutPayment, checkoutAddress, orderSummary
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState({ name: '', payment: '', address: '' });
  const [messages, setMessages] = useState([
    { type: 'bot', text: '¡Hola! ✨ Bienvenido a Pastelería 9 de Septiembre. Soy tu Concierge Dulce. ¿Cómo puedo ayudarte hoy?' }
  ]);
  const scrollRef = useRef(null);

  // Teléfono oficial configurado en el ContactConcierge
  const businessPhone = '529981894167';

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (text, type = 'bot') => {
    setMessages(prev => [...prev, { type, text }]);
  };

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    addMessage(`¡Añadido! 🍰 Has agregado "${product.name}" al carrito.`, 'bot');
    
    // Sugerencia inteligente cruzada
    if (product.category === 'Pasteles') {
      const companion = products.find(p => p.category === 'Petit Fours' || p.category === 'Individuales');
      if (companion) {
        setTimeout(() => {
          addMessage(`✨ Sugerencia: ¿Sabías que nuestros clientes suelen acompañar los pasteles con un delicioso "${companion.name}"?`, 'bot');
        }, 800);
      }
    }
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  };

  const getCategories = () => {
    return [...new Set(products.map(p => p.category))];
  };

  const handleSuggestionSelect = (type) => {
    if (type === 'cumple') {
      addMessage('Para un cumpleaños especial, te recomiendo nuestro pastel insignia:', 'bot');
      const cake = products.find(p => p.category === 'Pasteles');
      if (cake) {
        addToCart(cake);
      }
    } else if (type === 'boda') {
      addMessage('Para bodas y eventos premium, sugerimos un paquete elegante de macarons y tarta fina:', 'bot');
      products.forEach(p => {
        if (p.name.includes('Nupcial') || p.name.includes('Macarons')) {
          addToCart(p);
        }
      });
    } else {
      addMessage('Para quitarse el antojo hoy mismo, te sugiero algo individual:', 'bot');
      const cup = products.find(p => p.category === 'Individuales');
      if (cup) {
        addToCart(cup);
      }
    }
    setStep('welcome');
  };

  const sendToWhatsApp = () => {
    const orderDetails = cart.map(item => `- ${item.name} ($${item.price.toFixed(2)})`).join('\n');
    const text = `🧁 *PASTELERÍA 9 DE SEPTIEMBRE* 🧁\n` +
                `*NUEVO PEDIDO ESPECIAL*\n\n` +
                `👤 *Cliente:* ${userData.name}\n` +
                `💳 *Método de Pago:* ${userData.payment}\n` +
                `📍 *Dirección:* ${userData.address}\n\n` +
                `🛍️ *Productos:* \n${orderDetails}\n\n` +
                `💰 *Total:* $${calculateTotal()}\n\n` +
                `_Enviado desde el Concierge Digital_`;
    
    window.open(`https://wa.me/${businessPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          className="chatbot-bubble" 
          onClick={() => setIsOpen(true)}
        >
          <Mascot size={32} />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="chatbot-window"
          >
            <div className="chatbot-header">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-brand" style={{fontSize: '1.2rem', letterSpacing: '0.05em'}}>Concierge Dulce</span>
              </div>
              <button onClick={() => setIsOpen(false)} style={{background: 'none', border: 'none', color: 'white', cursor: 'pointer'}}><X size={20} /></button>
            </div>

            <div className="chatbot-messages" ref={scrollRef}>
              {messages.map((msg, i) => (
                <div key={i} className={`message-wrapper ${msg.type}`}>
                  <div className={`message-bubble ${msg.type}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="chatbot-footer">
              
              {/* MENU PRINCIPAL */}
              {step === 'welcome' && (
                <div className="options-grid">
                  <button onClick={() => { setStep('categories'); addMessage('Por favor, selecciona qué tipo de delicia buscas hoy: 🍰', 'bot'); }}>
                    <Package size={16} /> Productos
                  </button>
                  <button onClick={() => { setStep('suggestions'); addMessage('¡Excelente! Cuéntame, ¿cuál es la ocasión del evento? ✨', 'bot'); }}>
                    <Sparkles size={16} /> Sugerencias
                  </button>
                  <button onClick={() => { 
                    if (cart.length === 0) {
                      addMessage('Tu carrito está vacío. Agrega algunos productos primero para continuar. 😊', 'bot');
                    } else {
                      setStep('checkoutName'); 
                      addMessage('¡Excelente elección! Vamos a preparar tu pedido. ¿Cuál es tu nombre completo?', 'bot');
                    }
                  }}>
                    <User size={16} /> Comprar ({cart.length})
                  </button>
                </div>
              )}

              {/* SUBMENU: CATEGORÍAS */}
              {step === 'categories' && (
                <div className="chat-product-list">
                  <button className="back-btn" onClick={() => setStep('welcome')}><ArrowLeft size={14} /> Volver al menú principal</button>
                  <div className="options-grid">
                    {getCategories().map(cat => (
                      <button key={cat} onClick={() => {
                        setSelectedCategory(cat);
                        setStep('productList');
                        addMessage(`Aquí tienes nuestra selección de ${cat}:`, 'bot');
                      }}>
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* SUBMENU: LISTA DE PRODUCTOS POR CATEGORIA */}
              {step === 'productList' && (
                <div className="chat-product-list">
                  <button className="back-btn" onClick={() => setStep('categories')}><ArrowLeft size={14} /> Volver a categorías</button>
                  <div className="scroll-area">
                    {products.filter(p => p.category === selectedCategory).map(p => (
                      <div key={p.id} className="chat-product-item">
                        <span>{p.name} - ${p.price.toFixed(2)}</span>
                        <button onClick={() => addToCart(p)} className="add-tiny-btn">+</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SUBMENU: SUGERENCIAS POR OCASIÓN */}
              {step === 'suggestions' && (
                <div className="chat-product-list">
                  <button className="back-btn" onClick={() => setStep('welcome')}><ArrowLeft size={14} /> Volver al menú principal</button>
                  <div className="options-grid">
                    <button onClick={() => handleSuggestionSelect('cumple')}>🎉 Cumpleaños</button>
                    <button onClick={() => handleSuggestionSelect('boda')}>💍 Boda / Aniversario</button>
                    <button onClick={() => handleSuggestionSelect('antojo')}>☕ Antojo de la tarde</button>
                  </div>
                </div>
              )}

              {/* FLUJO DE COMPRA 1: NOMBRE */}
              {step === 'checkoutName' && (
                <div className="input-row">
                  <input 
                    placeholder="Escribe tu nombre aquí..." 
                    defaultValue={userData.name}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.target.value.trim()) {
                        setUserData({ ...userData, name: e.target.value });
                        addMessage(e.target.value, 'user');
                        setStep('checkoutPayment');
                        addMessage('¿Qué método de pago prefieres utilizar para el pedido?', 'bot');
                      }
                    }}
                  />
                  <button onClick={(e) => {
                    const val = e.currentTarget.previousSibling.value;
                    if (val.trim()) {
                      setUserData({ ...userData, name: val });
                      addMessage(val, 'user');
                      setStep('checkoutPayment');
                      addMessage('¿Qué método de pago prefieres utilizar para el pedido?', 'bot');
                    }
                  }}><Send size={18} /></button>
                </div>
              )}

              {/* FLUJO DE COMPRA 2: MÉTODO DE PAGO */}
              {step === 'checkoutPayment' && (
                <div className="options-grid">
                  <button onClick={() => {
                    setUserData({ ...userData, payment: 'Transferencia' });
                    addMessage('Transferencia Bancaria', 'user');
                    setStep('checkoutAddress');
                    addMessage('Perfecto. Ahora, por favor ingresa tu dirección para calcular el envío:', 'bot');
                  }}><CreditCard size={16} /> Transferencia</button>
                  <button onClick={() => {
                    setUserData({ ...userData, payment: 'Efectivo contra entrega' });
                    addMessage('Efectivo contra entrega', 'user');
                    setStep('checkoutAddress');
                    addMessage('Perfecto. Ahora, por favor ingresa tu dirección para calcular el envío:', 'bot');
                  }}><CreditCard size={16} /> Efectivo</button>
                </div>
              )}

              {/* FLUJO DE COMPRA 3: DIRECCIÓN CON VALIDACIÓN DE CANCÚN Y GPS */}
              {step === 'checkoutAddress' && (
                <div className="flex flex-col gap-sm">
                  <div className="input-row">
                    <input 
                      placeholder="Dirección o usa el botón de GPS..." 
                      defaultValue={userData.address}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.target.value.trim()) {
                          const val = e.target.value;
                          addMessage(val, 'user');
                          
                          // Validación de Cancún (si no es link de coordenadas, valida el texto)
                          if (!val.includes('maps?q=') && !val.toLowerCase().includes('cancun') && !val.toLowerCase().includes('cancún')) {
                            addMessage('⚠️ Lo sentimos, actualmente solo realizamos entregas locales dentro de Cancún, Q.Roo. Por favor, asegúrate de ingresar una dirección válida en Cancún.', 'bot');
                          } else {
                            setUserData({ ...userData, address: val });
                            setStep('orderSummary');
                            addMessage('¡Todo listo! A continuación verás el resumen de tu pedido. Confirma para enviarlo por WhatsApp.', 'bot');
                          }
                        }
                      }}
                    />
                    <button onClick={(e) => {
                      const val = e.currentTarget.previousSibling.value;
                      if (val.trim()) {
                        addMessage(val, 'user');
                        
                        // Validación de Cancún
                        if (!val.includes('maps?q=') && !val.toLowerCase().includes('cancun') && !val.toLowerCase().includes('cancún')) {
                          addMessage('⚠️ Lo sentimos, actualmente solo realizamos entregas locales dentro de Cancún, Q.Roo. Por favor, asegúrate de ingresar una dirección válida en Cancún.', 'bot');
                        } else {
                          setUserData({ ...userData, address: val });
                          setStep('orderSummary');
                          addMessage('¡Todo listo! A continuación verás el resumen de tu pedido. Confirma para enviarlo por WhatsApp.', 'bot');
                        }
                      }
                    }}><Send size={18} /></button>
                  </div>
                  <button 
                    onClick={() => {
                      addMessage('📍 Intentando obtener tu ubicación actual...', 'bot');
                      if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition((pos) => {
                          const { latitude, longitude } = pos.coords;
                          const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
                          addMessage(`Ubicación GPS detectada.`, 'user');
                          setUserData({ ...userData, address: `Ubicación GPS (Cancún): ${locationUrl}` });
                          setStep('orderSummary');
                          addMessage('¡Ubicación cargada con éxito! A continuación verás el resumen de tu pedido. Confirma para enviarlo por WhatsApp.', 'bot');
                        }, () => {
                          addMessage('❌ No se pudo acceder a tu ubicación. Por favor, escribe tu dirección manualmente en el campo.', 'bot');
                        });
                      } else {
                        addMessage('❌ Tu navegador no soporta geolocalización. Por favor, escribe tu dirección manualmente.', 'bot');
                      }
                    }}
                    className="confirm-btn"
                    style={{ background: 'var(--accent-gold)', marginTop: '0', padding: '0.6rem' }}
                  >
                    📍 Usar mi ubicación GPS
                  </button>
                </div>
              )}

              {/* FLUJO DE COMPRA 4: CONFIRMACIÓN FINAL */}
              {step === 'orderSummary' && (
                <div className="cart-summary">
                  <p style={{fontSize: '0.9rem', marginBottom: '0.5rem'}}>Total: <strong>${calculateTotal()}</strong></p>
                  <button 
                    className="confirm-btn"
                    onClick={() => {
                      sendToWhatsApp();
                      setCart([]);
                      setUserData({ name: '', payment: '', address: '' });
                      addMessage('¡Muchas gracias por tu pedido! Te hemos redirigido a WhatsApp para finalizar la entrega.', 'bot');
                      setStep('welcome');
                    }}
                  >
                    Confirmar y Enviar WhatsApp
                  </button>
                  <button onClick={() => setStep('welcome')} className="text-btn" style={{marginTop: '0.5rem', display: 'block', margin: '0.5rem auto 0'}}>Cancelar y volver</button>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
