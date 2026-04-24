import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

import { products } from '../data/products';

const ProductSection = () => {
  return (
    <section id="tienda" className="section-py bg-soft">
      <div className="container">
        <div className="flex justify-between items-end" style={{ marginBottom: 'var(--space-lg)' }}>
          <div>
            <span className="text-label" style={{ display: 'block', marginBottom: 'var(--space-xs)' }}>Colección Exclusiva</span>
            <h2 className="text-h2">Para Momentos Especiales</h2>
          </div>
          <div className="flex mobile-hidden gap-md">
            {['Todos', 'Pasteles', 'Individuales'].map(cat => (
              <button key={cat} className="text-label" style={{
                background: 'none', border: 'none', cursor: 'pointer', opacity: cat === 'Todos' ? 1 : 0.5,
                transition: 'var(--transition-smooth)'
              }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid product-grid">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="product-card bg-white"
              whileHover={{ y: -8 }}
              style={{ borderRadius: 'var(--card-radius)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}
            >
              <div className="product-image-container" style={{ height: 'clamp(280px, 30vw, 380px)', position: 'relative' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full"
                  style={{ objectFit: 'cover' }}
                />
                <button className="add-btn">
                  <Plus size={18} />
                </button>
              </div>
              <div className="text-center" style={{ padding: 'clamp(1rem, 2vw, 1.5rem)' }}>
                <p className="text-label" style={{ fontSize: '9px', marginBottom: 'var(--space-xs)', opacity: 0.7 }}>{product.category}</p>
                <h4 className="product-title" style={{ marginBottom: 'var(--space-sm)' }}>{product.name}</h4>
                <p className="sans font-bold" style={{ color: 'var(--text-main)', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                  {`$${product.price.toFixed(2)}`}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
