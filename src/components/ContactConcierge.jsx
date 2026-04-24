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
        <div className="grid grid-2 gap-xl items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-label mb-xl block">Solicitud de Concierge</span>
            <h2 className="text-h2 mb-lg" style={{fontSize: 'clamp(1.8rem, 3.5vw, 3rem)'}}>Personaliza cada detalle de tu celebración</h2>
            <p className="text-body text-soft mb-xl">
              Para brindarte una experiencia a la altura de tus expectativas, por favor completa el siguiente formulario. Una vez enviado, serás redirigido a nuestra línea exclusiva de WhatsApp para finalizar los detalles.
            </p>

            <div className="flex flex-col gap-lg">
              <div className="flex items-center gap-md">
                <div className="bg-white p-3 rounded-full shadow-soft">
                  <CheckCircle size={18} className="text-accent" />
                </div>
                <p className="sans font-medium text-[0.9rem]">Atención 100% personalizada</p>
              </div>
              <div className="flex items-center gap-md">
                <div className="bg-white p-3 rounded-full shadow-soft">
                  <MapPin size={18} className="text-accent" />
                </div>
                <p className="sans font-medium text-[0.9rem]">Envíos a todo Cancún y Riviera Maya</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-white p-[clamp(1.5rem, 4vw, 3rem)] shadow-soft rounded-[var(--card-radius)]"
          >
            <form onSubmit={sendToWhatsApp} className="flex flex-col gap-lg">

              <div className="grid grid-2 gap-md">
                <div>
                  <label className="text-label block mb-xs">Nombre</label>
                  <input type="text" name="name" required placeholder="Tu nombre" className="input-premium" onChange={handleInputChange} />
                </div>
                <div>
                  <label className="text-label block mb-xs">Fecha del Evento</label>
                  <input type="date" name="date" required className="input-premium" onChange={handleInputChange} />
                </div>
              </div>

              <div>
                <label className="text-label block mb-xs">Método de Pago Preferido</label>
                <select name="payment" className="input-premium" onChange={handleInputChange}>
                  <option value="Transferencia">Transferencia Bancaria</option>
                  <option value="Efectivo">Efectivo (Contra entrega)</option>
                  <option value="Tarjeta">Tarjeta de Crédito / Débito</option>
                </select>
              </div>

              <div>
                <label className="text-label block mb-xs">Dirección de Envío</label>
                <div className="relative">
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    placeholder="Calle, número, colonia..."
                    className="input-premium pr-[90px]"
                    onChange={handleInputChange}
                  />
                  <div className="absolute flex items-center gap-2 right-2 top-1/2 -translate-y-1/2">
                    <button
                      type="button"
                      onClick={getMyLocation}
                      title="Usar mi ubicación actual"
                      className="bg-soft p-2 rounded-lg border-none cursor-pointer transition-colors hover:bg-primary-pink"
                    >
                      <Navigation size={16} className={loadingLocation ? 'animate-spin text-accent' : 'text-main'} />
                    </button>
                    <button
                      type="button"
                      onClick={openInMaps}
                      title="Validar en Google Maps"
                      className="bg-soft p-2 rounded-lg border-none cursor-pointer transition-colors hover:bg-primary-pink"
                    >
                      <MapPin size={16} className="text-main" />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-label block mb-xs">Detalles del Pedido</label>
                <textarea
                  name="details"
                  required
                  rows="3"
                  placeholder="Sabores, decoración, porciones..."
                  className="input-premium"
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full p-3 flex justify-center items-center gap-2 mt-sm" style={{fontSize: '0.85rem'}}>
                <MessageCircle size={18} /> Enviar Pedido vía WhatsApp
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactConcierge;
