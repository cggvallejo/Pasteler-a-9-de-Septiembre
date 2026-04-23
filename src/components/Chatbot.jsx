import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ShoppingCart, Package, MapPin, CreditCard, User, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import Mascot from './Mascot';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('welcome');
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState({ name: '', payment: '', address: '' });
  const [messages, setMessages] = useState([
    { type: 'bot', text: '¡Hola! ✨ Bienvenido a Pastelería 9 de Septiembre. ¿En qué puedo ayudarte hoy?' }
  ]);
  const scrollRef = useRef(null);

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
    addMessage(`Añadiste ${product.name} al carrito. 🍰`);
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  };

  const getTopSellers = () => {
    return [...products].sort((a, b) => b.sales - a.sales).slice(0, 5);
  };

  const sendToWhatsApp = () => {
    const businessPhone = '1234567890'; // Replace with actual business phone
    const orderDetails = cart.map(item => `- ${item.name} ($${item.price})`).join('\\n');
    const text = `*Nuevo Pedido - Pastelería 9 de Septiembre*\\n\\n` +
                `*Cliente:* ${userData.name}\\n` +
                `*Pago:* ${userData.payment}\\n` +
                `*Dirección:* ${userData.address}\\n\\n` +
                `*Productos:*\\n${orderDetails}\\n\\n` +
                `*Total:* $${calculateTotal()}`;
    
    window.open(`https://wa.me/${businessPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handlePayment = (method) => {
    setUserData(prev => ({ ...prev, payment: method }));
    if (method === 'Transferencia') {
      addMessage('Perfecto. Recuerda, por favor, enviar el comprobante de pago una vez realizada la transferencia para confirmar tu pedido. 😊');
    } else {
      addMessage('Entendido, el pago será en efectivo.');
    }
    setStep('address');
    addMessage('Ahora, ¿podrías indicarme tu dirección de envío?');
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
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
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
              {step === 'welcome' && (
                <div className="options-grid">
                  <button onClick={() => { setStep('products'); addMessage('Aquí tienes nuestros productos:', 'bot'); }}>
                    <Package size={16} /> Ver Productos
                  </button>
                  <button onClick={() => { setStep('topSellers'); addMessage('Nuestros favoritos de la casa: ✨', 'bot'); }}>
                    <ShoppingCart size={16} /> Top Ventas
                  </button>
                  <button onClick={() => { setStep('checkout'); addMessage('¡Vamos a finalizar tu pedido!', 'bot'); }}>
                    <User size={16} /> Hacer Pedido
                  </button>
                </div>
              )}

              {step === 'products' && (
                <div className="chat-product-list">
                  <button className="back-btn" onClick={() => setStep('welcome')}><ArrowLeft size={14} /> Volver</button>
                  <div className="scroll-area">
                    {products.map(p => (
                      <div key={p.id} className="chat-product-item">
                        <span>{p.name} - ${p.price}</span>
                        <button onClick={() => addToCart(p)} className="add-tiny-btn">+</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 'topSellers' && (
                <div className="chat-product-list">
                  <button className="back-btn" onClick={() => setStep('welcome')}><ArrowLeft size={14} /> Volver</button>
                  <div className="scroll-area">
                    {getTopSellers().map(p => (
                      <div key={p.id} className="chat-product-item">
                        <span>{p.name} - ${p.price}</span>
                        <button onClick={() => addToCart(p)} className="add-tiny-btn">+</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 'checkout' && (
                <div className="checkout-flow">
                  { !userData.name ? (
                    <div className="input-row">
                      <input 
                        placeholder="Tu nombre..." 
                        value={userData.name}
                        onChange={(e) => setUserData({...userData, name: e.target.value})}
                      />
                      <button onClick={() => {
                        if(userData.name) {
                          addMessage(`Hola ${userData.name}, ¿cómo prefieres pagar?`, 'bot');
                          setStep('payment');
                        }
                      }}><Send size={18} /></button>
                    </div>
                  ) : (
                    <div className="cart-summary">
                      <p><strong>Total: ${calculateTotal()}</strong></p>
                      <button onClick={() => setStep('welcome')} className="text-btn">Continuar comprando</button>
                    </div>
                  )}
                </div>
              )}

              {step === 'payment' && (
                <div className="options-grid">
                  <button onClick={() => handlePayment('Transferencia')}><CreditCard size={16} /> Transferencia</button>
                  <button onClick={() => handlePayment('Efectivo')}><CreditCard size={16} /> Efectivo</button>
                </div>
              )}

              {step === 'address' && (
                <div className="address-flow">
                  <div className="input-row">
                    <input 
                      placeholder="Tu dirección..." 
                      value={userData.address}
                      onChange={(e) => setUserData({...userData, address: e.target.value})}
                    />
                    <button onClick={() => {
                      if(navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition((pos) => {
                          addMessage(`Ubicación capturada: ${pos.coords.latitude}, ${pos.coords.longitude}`, 'bot');
                          setUserData(prev => ({...prev, address: `${pos.coords.latitude}, ${pos.coords.longitude}`}));
                        });
                      }
                    }}><MapPin size={18} /></button>
                  </div>
                  <button 
                    className="confirm-btn" 
                    onClick={() => {
                      addMessage('¡Pedido listo! Te redirigiremos a WhatsApp para finalizar.', 'bot');
                      sendToWhatsApp();
                      setStep('welcome');
                      setCart([]);
                      setUserData({ name: '', payment: '', address: '' });
                    }}
                  >
                    Confirmar y Enviar WhatsApp
                  </button>
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
