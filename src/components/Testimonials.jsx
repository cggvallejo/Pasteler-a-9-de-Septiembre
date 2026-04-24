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
        <div className="text-center" style={{marginBottom: 'var(--space-lg)'}}>
          <span className="text-label">Experiencias Dulces</span>
          <h3 className="text-display-md" style={{marginTop: 'var(--space-sm)'}}>Lo que dicen nuestros clientes</h3>
        </div>

        <div className="grid grid-3 gap-lg">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-soft"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 1.5rem)',
                borderRadius: 'var(--card-radius)',
                textAlign: 'center',
                position: 'relative',
                boxShadow: 'var(--shadow-premium)',
                border: '1px solid rgba(0,0,0,0.02)'
              }}
            >
              <Quote size={20} style={{color: 'var(--accent-pink)', marginBottom: 'clamp(0.75rem, 1.5vw, 1.25rem)', opacity: 0.2}} />
              <p className="text-hand" style={{
                fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                marginBottom: 'clamp(0.75rem, 1.5vw, 1.25rem)',
                color: 'var(--text-main)',
                lineHeight: '1.3',
                opacity: 0.9
              }}>
                "{t.text}"
              </p>
              <div style={{ marginTop: 'auto' }}>
                <h5 className="text-h3" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', marginBottom: 'var(--space-xs)' }}>{t.name}</h5>
                <p className="text-label" style={{ fontSize: '0.6rem', opacity: 0.7 }}>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
