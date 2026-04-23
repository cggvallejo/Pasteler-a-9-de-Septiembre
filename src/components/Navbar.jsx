import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Instagram, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'linear-gradient(180deg, #FCE4EC 0%, #FFF7FB 100%)',
    }}>
      <div className="container flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <button className="md-hide" onClick={() => setIsMenuOpen(true)} style={{background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: 'inherit'}}>
            <Menu size={24} />
          </button>
          <div className="md-flex gap-md">
            <a href="#inicio" className="nav-item">Inicio</a>
            <a href="#galeria" className="nav-item">Galería</a>
            <a href="#pedidos" className="nav-item">Pedidos</a>
          </div>
        </div>

        <div className="flex-none px-4 md:px-8">
          <img 
            src="/logo.png" 
            alt="Pastelería 9 de Septiembre" 
            className="navbar-logo"
            style={{ 
              height: isScrolled ? '60px' : '95px', 
              width: 'auto',
              transition: 'var(--transition)',
              display: 'block'
            }} 
          />
        </div>

        <div className="flex-1 flex justify-end items-center gap-sm md:gap-md">
          <div className="md-flex gap-md">
            <a href="#tienda" className="nav-item">Colección</a>
            <a href="#contacto" className="nav-item">Contacto</a>
          </div>
          <button style={{background: 'none', border: 'none', position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'inherit'}}>
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
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-menu-overlay"
          >
            <button style={{alignSelf: 'flex-end', background: 'none', border: 'none', marginBottom: '3rem', cursor: 'pointer'}} onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
             <div className="flex flex-col gap-md text-center">
              <a href="#inicio" className="nav-item" style={{ fontSize: '1.5rem' }} onClick={() => setIsMenuOpen(false)}>Inicio</a>
              <a href="#galeria" className="nav-item" style={{ fontSize: '1.5rem' }} onClick={() => setIsMenuOpen(false)}>Galería</a>
              <a href="#pedidos" className="nav-item" style={{ fontSize: '1.5rem' }} onClick={() => setIsMenuOpen(false)}>Pedidos</a>
              <a href="#tienda" className="nav-item" style={{ fontSize: '1.5rem' }} onClick={() => setIsMenuOpen(false)}>Colección</a>
              <a href="#contacto" className="nav-item" style={{ fontSize: '1.5rem' }} onClick={() => setIsMenuOpen(false)}>Contacto</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
