import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandManifesto from './components/BrandManifesto';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import ProductSection from './components/ProductSection';
import ContactConcierge from './components/ContactConcierge';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Mascot from './components/Mascot';
import SocialSidebar from './components/SocialSidebar';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <BrandManifesto />
        <Showcase />
        <Testimonials />
        <ProductSection />
        <ContactConcierge />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}


export default App;
