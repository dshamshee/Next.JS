'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.4, 0, 0.6, 1] as const
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ paddingTop: '88px' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          animate={{ 
            ...floatingAnimation, 
            transition: { 
              ...floatingAnimation.transition, 
              delay: 2 
            } 
          }}
        />
      </div>

      <motion.div
        className="portfolio-container text-center z-10 relative hero-container content-spacing-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          className="element-spacing-lg"
          variants={itemVariants}
        >
          <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-amber-500 p-1 glow">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              DS
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="element-spacing-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight element-spacing-md">
            Hi, I&apos;m{' '}
            <span className="gradient-text">Danish Shamshee</span>
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">
            <motion.span
              className="inline-block"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              MERN
            </motion.span>{' '}
            Stack Developer
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed element-spacing-lg"
        >
          Passionate about creating dynamic, scalable web applications using MongoDB, Express.js, 
          React.js, and Node.js. I transform ideas into powerful digital experiences.
        </motion.p>

        {/* Tech Stack Icons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center flex-wrap gap-4 sm:gap-6 lg:gap-8 element-spacing-lg"
        >
          {['MongoDB', 'Express', 'React', 'Node.js'].map((tech) => (
            <motion.div
              key={tech}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-2 border border-gray-700 hover:border-indigo-500 transition-colors">
                <span className="text-sm font-bold text-indigo-400">
                  {tech.charAt(0)}
                </span>
              </div>
              <span className="text-xs text-gray-500">{tech}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center element-spacing-lg"
        >
          <motion.button
            className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Download Resume
          </motion.button>
          <motion.button
            className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 border border-gray-600 hover:border-indigo-500 text-gray-300 hover:text-white rounded-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-4 sm:space-x-6 element-spacing-xl"
        >
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-gray-500" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
