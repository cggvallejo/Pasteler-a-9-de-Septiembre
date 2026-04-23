import React from 'react';
import { Instagram, Globe, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="grid footer-grid" style={{marginBottom: '5rem'}}>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div style={{ marginBottom: '2rem' }}>
              <img 
                src="/logo.png" 
                alt="Pastelería 9 de Septiembre" 
                style={{ 
                  height: '80px', 
                  width: 'auto',
                  objectFit: 'contain',
                  marginBottom: '1rem'
                }} 
              />
            </div>
            <p className="text-body-sm" style={{ color: 'var(--text-soft)', maxWidth: '300px' }}>
              Pastelería artesanal donde cada detalle cuenta. Creamos experiencias dulces que perduran en la memoria.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-label" style={{ marginBottom: '2rem' }}>Enlaces</h5>
            <div className="flex flex-col text-body-sm" style={{gap: '1.2rem', alignItems: 'center', md: {alignItems: 'flex-start'}}}>
              <a href="#inicio" className="hover-accent" style={{textDecoration: 'none', color: 'inherit'}}>Inicio</a>
              <a href="#galeria" className="hover-accent" style={{textDecoration: 'none', color: 'inherit'}}>Galería</a>
              <a href="#tienda" className="hover-accent" style={{textDecoration: 'none', color: 'inherit'}}>Tienda</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-label" style={{ marginBottom: '2rem' }}>Contacto</h5>
            <div className="flex flex-col text-body-sm" style={{gap: '1.2rem', alignItems: 'center', md: {alignItems: 'flex-start'}}}>
              <p className="flex items-center" style={{gap: '10px'}}><MapPin size={16} style={{color: 'var(--accent-pink)'}} /> Calle de la Dulzura 123</p>
              <p className="flex items-center" style={{gap: '10px'}}><Mail size={16} style={{color: 'var(--accent-pink)'}} /> hola@9septiembre.com</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-label" style={{ marginBottom: '2rem' }}>Síguenos</h5>
            <div className="flex" style={{gap: '1.5rem'}}>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Globe size={20} /></a>
            </div>
          </div>
        </div>

        <div style={{textAlign: 'center', paddingTop: '3rem', borderTop: '1px solid var(--bg-soft)'}}>
          <p className="text-label" style={{ color: 'var(--text-soft)', fontSize: '9px' }}>
            © 2026 Pastelería 9 de Septiembre. Hecho con amor y elegancia.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
