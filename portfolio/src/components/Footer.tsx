'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-gray-800">
      <div className="portfolio-container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo/Name */}
          <motion.div
            className="text-2xl font-bold gradient-text mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Danish.dev
          </motion.div>

          {/* Description */}
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            MERN Stack Developer passionate about creating innovative web solutions 
            and bringing ideas to life through code.
          </p>

          {/* Quick Links */}
          <div className="flex justify-center space-x-8 mb-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

          {/* Copyright */}
          <motion.div
            className="flex items-center justify-center space-x-2 text-gray-500"
            whileHover={{ scale: 1.02 }}
          >
            <span>© {currentYear} Danish Shamshee. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="text-red-500" size={16} fill="currentColor" />
            </motion.div>
            <span>and Next.js</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
