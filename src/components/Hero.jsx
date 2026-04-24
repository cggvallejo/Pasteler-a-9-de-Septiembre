import React from 'react';
import { motion } from 'framer-motion';
import Mascot from './Mascot';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-soft">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, var(--primary-pink) 0%, var(--bg-soft) 100%)',
      }}>
        {/* Elementos decorativos minimalistas */}
        <div style={{
          position: 'absolute',
          top: '-20px', left: '-20px',
          width: '150px', height: '150px',
          background: 'rgba(216,112,147,0.05)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%', right: '-30px',
          width: '200px', height: '200px',
          background: 'rgba(216,112,147,0.08)',
          borderRadius: '50%',
          filter: 'blur(50px)'
        }} />
      </div>

      {/* Hero Container - Usamos gap-xl/gap-2xl y flex-row en escritorio para separarlos */}
      <div className="container relative z-10 flex flex-col md-flex-row items-center justify-center gap-xl md-gap-2xl lg-gap-4rem" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
        
        {/* Text Content */}
        <div className="flex flex-col items-center md-items-start text-center md-text-left flex-1" style={{ maxWidth: '42rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-label" style={{ marginBottom: '0.5rem', display: 'block' }}>
              Alta Repostería de Autor
            </span>
            <h1 className="text-display-lg" style={{
              color: 'var(--text-main)',
              marginBottom: '1rem',
              fontWeight: '400',
              lineHeight: '1.05',
            }}>
              Detalles dulces que crean <br className="mobile-hidden" />
              <span className="serif italic" style={{ color: 'var(--accent-pink)' }}>momentos inolvidables</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-body-lg"
            style={{
              color: 'var(--text-soft)',
              marginBottom: '1.5rem',
              opacity: 0.8,
              lineHeight: '1.5'
            }}
          >
            Diseñamos piezas únicas de repostería donde la estética premium <br className="mobile-hidden" />
            se fusiona con sabores que perduran en el corazón.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex gap-md justify-center md-justify-start flex-col sm-flex-row items-center w-full"
          >
            <a href="#pedidos" className="btn-primary" style={{ borderRadius: '40px', width: '100%', maxWidth: '280px', textAlign: 'center', padding: '1rem 2rem' }}>
              Solicitar Pedido Especial
            </a>
            <a href="#galeria" className="nav-item" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              borderBottom: '1px solid var(--accent-pink)',
              padding: '0.5rem 0',
              marginTop: '0'
            }}>
              Ver Nuestra Vitrina
            </a>
          </motion.div>
        </div>

        {/* Mascot / Avatar - Ahora a la derecha del texto en monitores grandes, con estilo de retrato */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 6 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
          style={{ 
            position: 'relative',
            marginTop: '0.5rem',
          }}
        >
          {/* Marco decorativo para la mascota */}
          <div style={{
            position: 'relative',
            width: '16rem',
            height: '18rem',
            borderRadius: '24px',
            background: 'var(--surface-color, #ffffff)',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(216,112,147,0.15)',
            padding: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {/* Borde interior sutil */}
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '16px',
              border: '1px dashed rgba(216,112,147,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'radial-gradient(circle at 50% 50%, rgba(216,112,147,0.03) 0%, rgba(255,255,255,0) 100%)',
            }}>
              <Mascot size="11rem" />
            </div>
            
            {/* Cinta decorativa */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '20px',
              width: '24px',
              height: '50px',
              background: 'var(--accent-pink)',
              opacity: '0.2',
              transform: 'rotate(15deg)',
              borderRadius: '4px'
            }} />
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;
