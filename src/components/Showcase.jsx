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
        <div className="text-center" style={{marginBottom: '4rem'}}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2"
            style={{marginBottom: '1rem'}}
          >
            Nuestra Vitrina
          </motion.h2>
          <p className="text-body" style={{color: 'var(--text-soft)', maxWidth: '600px', margin: '0 auto 2.5rem'}}>
            Descubre nuestra selección de creaciones artesanales, donde el diseño premium se encuentra con el sabor inolvidable.
          </p>

          {/* Filters */}
          <div className="flex justify-center gap-md" style={{marginBottom: '4rem', flexWrap: 'wrap'}}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="filter-btn"
                style={{
                  padding: '0.8rem 2rem',
                  borderRadius: '30px',
                  border: '1px solid #eee',
                  background: filter === cat ? 'var(--accent-pink)' : 'white',
                  color: filter === cat ? 'white' : '#333',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  boxShadow: filter === cat ? '0 10px 20px rgba(255, 182, 193, 0.3)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-3 gap-md"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="gallery-card bg-white"
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-soft)',
                  position: 'relative',
                }}
              >
                <div style={{height: '280px', overflow: 'hidden'}}>
                  <motion.img 
                    src={item.src} 
                    alt={item.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  />
                </div>
                <div className="card-content" style={{padding: '2rem'}}>
                  <span className="text-label" style={{ marginBottom: '0.5rem', display: 'block' }}>
                    {item.category}
                  </span>
                  <h3 className="text-h3" style={{marginBottom: '0.8rem'}}>{item.title}</h3>
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

