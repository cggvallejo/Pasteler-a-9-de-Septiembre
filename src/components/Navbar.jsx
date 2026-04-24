import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Mascot from './Mascot';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{
      background: isScrolled ? 'rgba(252, 251, 250, 0.95)' : 'linear-gradient(180deg, var(--primary-pink) 0%, rgba(253, 241, 246, 0) 100%)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none'
    }}>
      <div className="container flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <button className="md-hide" onClick={() => setIsMenuOpen(true)} style={{background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: 'var(--text-main)'}}>
            <Menu size={24} />
          </button>
          <div className="md-flex gap-lg flex-1 justify-center">
            <a href="#inicio" className="nav-item">Inicio</a>
            <a href="#galeria" className="nav-item">Galería</a>
            <a href="#pedidos" className="nav-item">Pedidos</a>
          </div>
        </div>

        <div className="flex-none px-4 md:px-8 flex justify-center">
          <img 
            src="/logo.png" 
            alt="Pastelería 9 de Septiembre" 
            className="navbar-logo"
            style={{ 
              height: isScrolled ? '55px' : '90px', 
              width: 'auto',
              transition: 'var(--transition-smooth)',
              display: 'block'
            }} 
          />
        </div>

        <div className="flex-1 flex justify-end items-center gap-lg">
          <div className="md-flex gap-lg flex-1 justify-center">
            <a href="#tienda" className="nav-item">Colección</a>
            <a href="#contacto" className="nav-item">Contacto</a>
          </div>
          <button style={{background: 'none', border: 'none', position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-main)'}}>
            <ShoppingCart size={22} />
            <span style={{
              position: 'absolute', top: '-8px', right: '-8px', 
              background: 'var(--accent-pink)', color: 'white', 
              fontSize: '10px', width: '18px', height: '18px', 
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700
            }}>0</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu-overlay"
            style={{
              background: 'rgba(252, 251, 250, 0.98)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 'var(--space-md)' }}>
              <button style={{alignSelf: 'flex-end', background: 'none', border: 'none', marginBottom: 'var(--space-lg)', cursor: 'pointer', color: 'var(--text-main)'}} onClick={() => setIsMenuOpen(false)}>
                <X size={32} />
              </button>
              <div className="flex flex-col gap-md text-center justify-center flex-1">
                <a href="#inicio" className="text-display-md" onClick={() => setIsMenuOpen(false)}>Inicio</a>
                <a href="#galeria" className="text-display-md" onClick={() => setIsMenuOpen(false)}>Galería</a>
                <a href="#pedidos" className="text-display-md" onClick={() => setIsMenuOpen(false)}>Pedidos</a>
                <a href="#tienda" className="text-display-md" onClick={() => setIsMenuOpen(false)}>Colección</a>
                <a href="#contacto" className="text-display-md" onClick={() => setIsMenuOpen(false)}>Contacto</a>
                <div className="flex gap-lg justify-center mt-lg pt-lg border-t border-[rgba(0,0,0,0.05)]">
                  <a href="https://www.instagram.com/09septiembre_pasteleria/" target="_blank" rel="noopener noreferrer" className="social-icon shadow-premium" style={{ '--hover-color': '#E4405F' }}><Instagram size={24} /></a>
                  <a href="https://www.facebook.com/profile.php?id=61565226608758" target="_blank" rel="noopener noreferrer" className="social-icon shadow-premium" style={{ '--hover-color': '#1877F2' }}><Facebook size={24} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
