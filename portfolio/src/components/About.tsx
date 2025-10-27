'use client';

import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone } from 'lucide-react';

export default function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React.js, Next.js, and modern CSS frameworks."
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express.js, and RESTful API development."
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing and optimizing MongoDB databases for scalable and efficient data management."
    },
    {
      icon: Smartphone,
      title: "Full Stack Solutions",
      description: "End-to-end web application development from concept to deployment with modern DevOps practices."
    }
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate MERN stack developer with a love for creating innovative web solutions
            </p>
          </motion.div>

          <div className="portfolio-grid lg:grid-cols-2 items-start">
            {/* Left Column - Personal Info */}
            <motion.div variants={itemVariants} className="content-spacing">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold element-spacing-sm text-white">
                    My Journey
                  </h3>
                  <div className="content-spacing text-gray-300 leading-relaxed">
                    <p>
                      As a dedicated MERN stack developer, I specialize in creating full-stack web applications 
                      that combine powerful backend functionality with stunning frontend experiences. My passion 
                      lies in writing clean, efficient code and staying up-to-date with the latest technologies.
                    </p>
                    <p>
                      I believe in the power of technology to solve real-world problems and create meaningful 
                      digital experiences that make a difference in people's lives.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {[
                  { number: "2+", label: "Years Experience" },
                  { number: "20+", label: "Projects Completed" },
                  { number: "100%", label: "Client Satisfaction" },
                  { number: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/30 p-4 sm:p-6 rounded-xl text-center border border-gray-700"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-xl sm:text-2xl font-bold gradient-text element-spacing-sm">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Services */}
            <motion.div variants={itemVariants} className="content-spacing">
              <h3 className="text-xl sm:text-2xl font-bold text-center lg:text-left element-spacing-md">
                What I <span className="gradient-text">Do</span>
              </h3>
              
              <div className="content-spacing">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/30 p-4 sm:p-6 rounded-xl border border-gray-700 card-hover"
                    whileHover={{ 
                      borderColor: "rgba(99, 102, 241, 0.5)",
                      backgroundColor: "rgba(17, 24, 39, 0.8)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <motion.div
                        className="p-2 sm:p-3 bg-indigo-600/20 rounded-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <service.icon className="text-indigo-400" size={20} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-semibold element-spacing-sm text-white">
                          {service.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
