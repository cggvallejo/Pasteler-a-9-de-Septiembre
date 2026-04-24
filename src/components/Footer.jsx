import React from 'react';
import { Instagram, Globe, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="footer border-t border-[rgba(240,98,146,0.05)]">
      <div className="container">
        <div className="grid footer-grid mb-2xl" style={{marginBottom: 'clamp(3rem, 6vw, 5rem)'}}>
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-lg" style={{marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)'}}>
              <img
                src="/logo.png"
                alt="Pastelería 9 de Septiembre"
                className="h-[clamp(50px, 8vw, 75px)] w-auto object-contain"
              />
            </div>
            <p className="text-body-sm text-soft max-w-[280px] leading-[1.8]">
              Artesanos de la repostería fina. Cada detalle es una pieza única diseñada para elevar tus celebraciones.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-label text-accent mb-lg" style={{marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)'}}>Colecciones</h5>
            <div className="flex flex-col text-body-sm gap-[1rem]">
              <a href="#inicio" className="hover-accent no-underline text-inherit tracking-[0.05em]">Tradición</a>
              <a href="#galeria" className="hover-accent no-underline text-inherit tracking-[0.05em]">Galería de Autor</a>
              <a href="#pedidos" className="hover-accent no-underline text-inherit tracking-[0.05em]">Pedidos Especiales</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-label text-accent mb-lg" style={{marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)'}}>Concierge</h5>
            <div className="flex flex-col text-body-sm gap-[1.25rem]">
              <p className="flex items-center gap-[10px] text-soft">
                <MapPin size={13} className="text-accent" />
                Calle de la Dulzura 123
              </p>
              <p className="flex items-center gap-[10px] text-soft">
                <Mail size={13} className="text-accent" />
                atencion@9septiembre.com
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-label text-accent mb-lg" style={{marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)'}}>Social</h5>
            <div className="flex gap-md">
              <a href="#" className="social-icon shadow-premium"><Instagram size={16} /></a>
              <a href="#" className="social-icon shadow-premium"><Globe size={16} /></a>
            </div>
          </div>
        </div>

        <div className="text-center pt-lg border-t border-[rgba(0,0,0,0.02)]" style={{paddingTop: 'clamp(2rem, 4vw, 3.5rem)'}}>
          <p className="text-label text-soft text-[9px] opacity-60">
            © 2026 Pastelería 9 de Septiembre | Alta Repostería de Autor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
