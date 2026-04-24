import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryData = [
  { 
    id: 1,
    src: '/assets/role_fresa.png', 
    title: 'Role de Fresa', 
    category: 'Roles',
    description: 'Rol de canela artesanal con glaseado de crema, hilos de chocolate y fresas frescas seleccionadas.'
  },
  { 
    id: 2,
    src: '/assets/role_oreo.png', 
    title: 'Role de Oreo', 
    category: 'Roles',
    description: 'Explosión de sabor con nuestro rol de Oreo: crema suave, trozos de galleta y chocolate premium.'
  },
  { 
    id: 3,
    src: '/assets/pastel_roblox.png', 
    title: 'Pastel Roblox', 
    category: 'Pasteles',
    description: 'Creatividad comestible: pastel temático de Roblox con texturas de bosque y acabados profesionales.'
  },
  { 
    id: 4,
    src: '/assets/pastel_jack.png', 
    title: 'Pastel de Jack', 
    category: 'Pasteles',
    description: 'Elegancia oscura: pastel en forma de corazón inspirado en Jack Skellington, perfecto para celebraciones únicas.'
  },
  { 
    id: 5,
    src: '/assets/cupcakes_valentin.png', 
    title: 'Cupcakes de San Valentín', 
    category: 'Cupcakes',
    description: 'Pequeños bocados de amor: cupcakes decorados con rosas de crema y detalles románticos.'
  },
  { 
    id: 6,
    src: '/assets/pastel_floral.png', 
    title: 'Pastel Floral', 
    category: 'Pasteles',
    description: 'Sutileza y arte: pastel decorado con flores de crema hechas a mano, ideal para eventos exclusivos.'
  },
  { 
    id: 7,
    src: '/assets/macarons.png', 
    title: 'Macarons de Autor', 
    category: 'Pasteles',
    description: 'Bocados parisinos: macarons artesanales con rellenos gourmet y texturas perfectas.'
  },
  { 
    id: 8,
    src: '/assets/cupcake.png', 
    title: 'Cupcake Signature', 
    category: 'Cupcakes',
    description: 'Nuestra firma en miniatura: bizcocho suave con frosting sedoso y decoraciones de temporada.'
  },
];

const categories = ['Todos', 'Pasteles', 'Roles', 'Cupcakes'];

const Showcase = () => {
  const [filter, setFilter] = useState('Todos');

  const filteredImages = filter === 'Todos' 
    ? galleryData 
    : galleryData.filter(img => img.category === filter);

  return (
    <section id="galeria" className="section-py bg-soft">
      <div className="container">
        <div className="text-center" style={{marginBottom: 'var(--space-lg)'}}>
          <span className="text-label" style={{ marginBottom: 'var(--space-sm)', display: 'block' }}>
            La Colección
          </span>
          <h2 className="text-h2" style={{marginBottom: 'var(--space-sm)'}}>Nuestra Vitrina</h2>
          <p className="text-body-lg" style={{color: 'var(--text-soft)', maxWidth: '700px', margin: '0 auto', opacity: 0.8}}>
            Una curaduría de nuestras piezas más emblemáticas, donde cada detalle <br className="mobile-hidden" />
            es una declaración de arte y sabor.
          </p>
        </div>

          {/* Filters */}
          <div className="flex justify-center gap-sm" style={{marginBottom: 'var(--space-lg)', flexWrap: 'wrap'}}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="filter-btn"
                style={{
                  padding: '0.8rem 2rem',
                  borderRadius: '30px',
                  border: '1px solid var(--primary-pink)',
                  background: filter === cat ? 'var(--accent-pink)' : 'var(--bg-white)',
                  color: filter === cat ? 'var(--bg-white)' : 'var(--text-main)',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  boxShadow: filter === cat ? 'var(--shadow-hover)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

        <motion.div 
          layout
          className="grid grid-4 gap-lg"
          style={{'--bs-gutter-x': 'clamp(1rem, 2vw, 2rem)'}}
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="gallery-card bg-white"
                style={{
                  borderRadius: 'var(--card-radius)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-soft)',
                  position: 'relative',
                  border: '1px solid rgba(0,0,0,0.02)'
                }}
              >
                <div style={{height: 'clamp(220px, 25vw, 300px)', overflow: 'hidden'}}>
                  <motion.img 
                    src={item.src} 
                    alt={item.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  />
                </div>
                <div className="card-content" style={{padding: 'clamp(1rem, 2vw, 1.5rem)'}}>
                  <span className="text-label" style={{ marginBottom: 'var(--space-xs)', display: 'block' }}>
                    {item.category}
                  </span>
                  <h3 className="text-h3" style={{marginBottom: 'var(--space-xs)'}}>{item.title}</h3>
                  <p className="text-body-sm" style={{color: 'var(--text-soft)'}}>
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;

