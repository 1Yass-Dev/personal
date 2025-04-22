import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageSquare, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com', 
      icon: <Github size={18} /> 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com', 
      icon: <Linkedin size={18} /> 
    },
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/1234567890', 
      icon: <MessageSquare size={18} /> 
    }
  ];

  return (
    <footer className="pt-16 pb-8 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-800">
          {/* Logo and Introduction */}
          <div className="md:col-span-2">
            <motion.a 
              href="#home" 
              className="text-2xl font-bold text-white inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              1<span className="text-primary-500">Yass</span>-Dev
            </motion.a>
            <p className="text-gray-400 mb-6 max-w-md">
              Full-Stack Developer passionate about building high-performance 
              and innovative web applications. Let's work together to bring your ideas to life.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-all duration-300"
                  whileHover={{ y: -5 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  FAQ
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Services
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Privacy Policy
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              @ 1Yass-Dev | All Rights Reserved {currentYear} | Made with 
            </motion.span>
            <motion.span 
              className="inline-block mx-1 text-red-500"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                repeatType: "loop" 
              }}
            >
              <Heart size={14} fill="currentColor" />
            </motion.span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;