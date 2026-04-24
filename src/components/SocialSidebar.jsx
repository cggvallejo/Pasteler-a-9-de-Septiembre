import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';

const SocialSidebar = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram size={26} />,
      url: 'https://www.instagram.com/09septiembre_pasteleria/',
      color: '#E4405F' // Instagram Pink/Red
    },
    {
      name: 'Facebook',
      icon: <Facebook size={26} />,
      url: 'https://www.facebook.com/profile.php?id=61565226608758',
      color: '#1877F2' // Facebook Blue
    }
  ];

  return (
    <div className="social-sidebar mobile-hidden">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-sidebar-link"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
          whileHover={{ x: -5, scale: 1.1 }}
          style={{ '--hover-color': link.color }}
        >
          {link.icon}
          <span className="social-sidebar-tooltip">{link.name}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialSidebar;
