import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Sofía Valente', text: 'Los macarons son simplemente de otro mundo. La textura y el equilibrio del azúcar son perfectos.', role: 'Cliente Frecuente' },
  { id: 2, name: 'Marco Rossi', text: 'Encargué mi pastel de boda aquí y superó todas mis expectativas. Minimalismo puro y un sabor inolvidable.', role: 'Novio Feliz' },
  { id: 3, name: 'Elena Méndez', text: 'La atención al detalle en cada cupcake es una obra de arte. Mi pastelería favorita sin duda.', role: 'Gourmet Enthusiast' },
];

const Testimonials = () => {
  return (
    <section className="section-py bg-white">
      <div className="container">
        <div className="text-center" style={{marginBottom: '5rem'}}>
          <span className="text-label">Experiencias Dulces</span>
          <h3 className="text-display-md" style={{marginTop: '1rem'}}>Lo que dicen nuestros clientes</h3>
        </div>

        <div className="grid grid-3 gap-md">
          {testimonials.map((t) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-soft"
              style={{
                padding: '3rem', borderRadius: '4px',
                textAlign: 'center', position: 'relative'
              }}
            >
              <Quote size={32} style={{color: 'var(--primary-pink)', marginBottom: '1.5rem', opacity: 0.5}} />
              <p className="text-hand" style={{fontSize: '1.8rem', marginBottom: '2.5rem', color: 'var(--text-main)', lineHeight: '1.2'}}>
                "{t.text}"
              </p>
              <div>
                <h5 className="text-h3" style={{marginBottom: '0.3rem'}}>{t.name}</h5>
                <p className="text-label" style={{fontSize: '0.7rem'}}>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
