import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Navigation, CheckCircle } from 'lucide-react';

const ContactConcierge = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    details: '',
    payment: 'Transferencia',
    address: '',
    locationUrl: ''
  });

  const [loadingLocation, setLoadingLocation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getMyLocation = () => {
    setLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setFormData({ ...formData, locationUrl: googleMapsUrl, address: 'Ubicación detectada por GPS' });
        setLoadingLocation(false);
      }, () => {
        alert("No se pudo obtener la ubicación automáticamente.");
        setLoadingLocation(false);
      });
    }
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const phone = "529981894167";
    const message = `🧁 *PASTELERÍA 9 DE SEPTIEMBRE* 🧁\n` +
      `*NUEVO PEDIDO ESPECIAL*\n\n` +
      `👤 *Cliente:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📅 *Fecha:* ${formData.date}\n` +
      `💳 *Método de Pago:* ${formData.payment}\n` +
      `📍 *Dirección:* ${formData.address}\n` +
      `${formData.locationUrl ? `🔗 *Ubicación GPS:* ${formData.locationUrl}\n` : ''}` +
      `📝 *Detalles:* ${formData.details}\n\n` +
      `_Enviado desde el Concierge Digital_`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  const openInMaps = () => {
    if (formData.address) {
      window.open(`https://www.google.com/maps/search/${encodeURIComponent(formData.address)}`, '_blank');
    }
  };

  return (
    <section id="pedidos" className="section-py bg-soft">
      <div className="container">
        <div className="grid grid-2 gap-lg items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-label" style={{ display: 'block', marginBottom: '1.5rem' }}>Solicitud de Concierge</span>
            <h2 className="text-h2" style={{ marginBottom: '2rem' }}>Personaliza cada detalle de tu celebración</h2>
            <p className="text-body" style={{ color: 'var(--text-soft)', marginBottom: '3rem' }}>
              Para brindarte una experiencia a la altura de tus expectativas, por favor completa el siguiente formulario. Una vez enviado, serás redirigido a nuestra línea exclusiva de WhatsApp para finalizar los detalles.
            </p>

            <div className="flex flex-col" style={{ gap: '1.5rem' }}>
              <div className="flex items-center" style={{ gap: '1rem' }}>
                <div className="bg-white" style={{ padding: '0.8rem', borderRadius: '50%', boxShadow: 'var(--shadow-soft)' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-pink)' }} />
                </div>
                <p className="sans font-medium" style={{ fontSize: '0.95rem' }}>Atención 100% personalizada</p>
              </div>
              <div className="flex items-center" style={{ gap: '1rem' }}>
                <div className="bg-white" style={{ padding: '0.8rem', borderRadius: '50%', boxShadow: 'var(--shadow-soft)' }}>
                  <MapPin size={20} style={{ color: 'var(--accent-pink)' }} />
                </div>
                <p className="sans font-medium" style={{ fontSize: '0.95rem' }}>Envíos a todo Cancún y Riviera Maya</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-white"
            style={{ padding: 'clamp(1.5rem, 5vw, 3.5rem)', boxShadow: 'var(--shadow-soft)', borderRadius: 'var(--card-radius)' }}
          >
            <form onSubmit={sendToWhatsApp} className="flex flex-col" style={{ gap: '1.5rem' }}>
              
              <div className="grid grid-2 gap-sm">
                <div>
                  <label className="text-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Nombre</label>
                  <input type="text" name="name" required placeholder="Tu nombre" className="input-premium" onChange={handleInputChange} />
                </div>
                <div>
                  <label className="text-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Fecha del Evento</label>
                  <input type="date" name="date" required className="input-premium" onChange={handleInputChange} />
                </div>
              </div>

              <div>
                <label className="text-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Método de Pago Preferido</label>
                <select name="payment" className="input-premium" onChange={handleInputChange}>
                  <option value="Transferencia">Transferencia Bancaria</option>
                  <option value="Efectivo">Efectivo (Contra entrega)</option>
                  <option value="Tarjeta">Tarjeta de Crédito / Débito</option>
                </select>
              </div>

              <div>
                <label className="text-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Dirección de Envío</label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="address" 
                    required 
                    value={formData.address}
                    placeholder="Calle, número, colonia..." 
                    className="input-premium"
                    style={{ paddingRight: '100px' }} 
                    onChange={handleInputChange} 
                  />
                  <div className="absolute flex" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)', gap: '8px' }}>
                    <button 
                      type="button" 
                      onClick={getMyLocation} 
                      title="Usar mi ubicación actual"
                      className="bg-soft"
                      style={{ border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', transition: 'var(--transition)' }}
                    >
                      <Navigation size={18} className={loadingLocation ? 'animate-spin' : ''} />
                    </button>
                    <button 
                      type="button" 
                      onClick={openInMaps} 
                      title="Validar en Google Maps"
                      className="bg-soft"
                      style={{ border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', transition: 'var(--transition)' }}
                    >
                      <MapPin size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Detalles del Pedido</label>
                <textarea 
                  name="details" 
                  required 
                  rows="4" 
                  placeholder="Sabores, decoración, porciones..." 
                  className="input-premium"
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1.2rem', justifyContent: 'center', gap: '10px', marginTop: '1rem' }}>
                <MessageCircle size={20} /> Enviar Pedido vía WhatsApp
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactConcierge;
