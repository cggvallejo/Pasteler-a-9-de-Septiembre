import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-soft">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #FCE4EC 0%, #FFF7FB 100%)',
      }}>
        {/* Elementos decorativos minimalistas */}
        <div style={{
          position: 'absolute',
          top: '-20px', left: '-20px',
          width: '150px', height: '150px',
          background: 'rgba(252,228,236,0.45)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%', right: '-30px',
          width: '200px', height: '200px',
          background: 'rgba(240,98,146,0.08)',
          borderRadius: '50%',
          filter: 'blur(50px)'
        }} />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center text-center" style={{ paddingTop: '80px', paddingBottom: '40px' }}>

        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-brand"
          style={{
            marginBottom: '2.5rem',
            color: 'var(--accent-pink)',
            maxWidth: '1100px',
            fontSize: 'clamp(2.5rem, 8vw, 4.8rem)',
            lineHeight: '1.1',
            letterSpacing: '0.04em',
          }}
        >
          “Creamos detalles dulces que se convierten en momentos inolvidables”
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-body-lg serif italic"
          style={{
            color: 'var(--text-soft)',
            maxWidth: '650px',
            marginBottom: '2.5rem',
            opacity: 0.9
          }}
        >
          Pasteles y postres personalizados, diseñados con amor para sorprender, celebrar y regalar algo único.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <a href="#pedidos" className="btn-primary">
            Solicitar Pedido Especial
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
