import React from 'react';
import { motion } from 'framer-motion';
import reposteraImg from '../assets/repostera.png';

const BrandManifesto = () => {
  return (
    <section id="filosofia" className="section-py bg-white relative overflow-hidden">
      <div className="container">
        <div className="grid grid-2 gap-xl items-center" style={{'--bs-gutter-x': 'clamp(2rem, 5vw, 5rem)'}}>
          
          {/* Columna Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex justify-center items-center"
          >
            <div className="manifesto-wrapper" style={{maxWidth: 'clamp(18rem, 35vw, 28rem)'}}>
              <div className="manifesto-img-bg"></div>
              <div className="manifesto-img-container">
                <img
                  src={reposteraImg}
                  alt="Nuestra Chef Repostera"
                  className="manifesto-img"
                />
              </div>
              <div className="manifesto-badge mobile-hidden">
                <span className="badge-title">Hecho con amor</span>
                <span className="badge-subtitle">Arte en cada detalle</span>
              </div>
            </div>
          </motion.div>

          {/* Columna Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <span className="text-label mb-sm block" style={{display: 'block', marginBottom: 'clamp(0.5rem, 1vw, 1rem)'}}>
              Compromiso con la Excelencia
            </span>
            <div style={{ display: 'inline-block' }}>
              <h2 className="text-h2 mb-md" style={{marginBottom: 'clamp(1rem, 2vw, 1.5rem)'}}>Nuestra Filosofía</h2>
              <div className="divider-line" style={{ width: '100%', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)'}}></div>
            </div>

            <div className="flex flex-col gap-lg text-body-lg text-soft" style={{gap: 'clamp(1rem, 2vw, 1.5rem)'}}>
              <p>
                En <span className="serif font-bold" style={{ color: 'var(--accent-pink)' }}>Pastelería 9 de Septiembre</span>, cada creación está pensada para emocionar.
              </p>
              <p>
                No solo hacemos pasteles, creamos experiencias que acompañan tus momentos más importantes.
                Desde un cumpleaños hasta un detalle especial, cuidamos cada diseño, sabor y presentación para que sea tan especial como la persona que lo recibe.
              </p>
            </div>

            <div className="quote-block" style={{marginTop: 'clamp(1.5rem, 3vw, 2.5rem)'}}>
              <p className="text-display-md text-main" style={{ lineHeight: '1.2', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
                "Porque los mejores momentos merecen algo <br/>
                <span className="serif italic" style={{ color: 'var(--accent-pink)' }}>dulce, bonito y hecho con amor.</span>"
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BrandManifesto;
