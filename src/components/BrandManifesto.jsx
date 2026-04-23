import React from 'react';
import { motion } from 'framer-motion';

const BrandManifesto = () => {
  return (
    <section className="section-py bg-white relative overflow-hidden">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{ maxWidth: '900px', margin: '0 auto' }}
        >
          <img src="/logo.png" alt="" style={{ height: '80px', width: 'auto', objectFit: 'contain', marginBottom: '2rem' }} />
           <h2 className="text-h2" style={{ marginBottom: '1.5rem' }}>Nuestra Filosofía</h2>
          <p className="text-body-lg" style={{
            maxWidth: '800px', 
            margin: '0 auto',
          }}>
            En <span className="serif font-bold" style={{ color: 'var(--accent-pink)' }}>Pastelería 9 de Septiembre</span>, cada creación está pensada para emocionar. 
            No solo hacemos pasteles, creamos experiencias que acompañan tus momentos más importantes. 
            Desde un cumpleaños hasta un detalle especial, cuidamos cada diseño, sabor y presentación para que sea tan especial como la persona que lo recibe.
          </p>
          <p className="text-display-md" style={{
            marginTop: '5rem', 
            color: 'var(--text-main)',
            fontSize: '1.8rem',
            lineHeight: '1.4',
            letterSpacing: '0.03em'
          }}>
            “Porque los mejores momentos merecen algo <span className="serif italic" style={{color: 'var(--accent-pink)'}}>dulce, bonito y hecho con amor.</span>”
          </p>

        </motion.div>
      </div>
      
    </section>
  );
};

export default BrandManifesto;
