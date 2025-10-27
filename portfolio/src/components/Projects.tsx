'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Smartphone, ArrowUpRight, Calendar, Star, Zap } from 'lucide-react';

export default function Projects() {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, shopping cart, payment integration, and admin dashboard. Built with MERN stack and featuring real-time notifications.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Socket.io"],
      liveLink: "#",
      githubLink: "#",
      category: "Full Stack",
      icon: Smartphone,
      status: "Featured",
      year: "2024",
      complexity: "Advanced"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
      category: "Web App",
      icon: Code,
      status: "Live",
      year: "2024",
      complexity: "Intermediate"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, post scheduling, engagement metrics, and multi-platform integration.",
      technologies: ["React", "Chart.js", "Node.js", "Express", "MongoDB", "JWT"],
      liveLink: "#",
      githubLink: "#",
      category: "Analytics",
      icon: Database,
      status: "Live",
      year: "2023",
      complexity: "Advanced"
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat application with real-time messaging, file sharing, group chats, message encryption, and responsive design for all devices.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary"],
      liveLink: "#",
      githubLink: "#",
      category: "Real-time",
      icon: Zap,
      status: "Live",
      year: "2024",
      complexity: "Advanced"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management, video streaming, progress tracking, quizzes, and certification system for online learning.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Stripe"],
      liveLink: "#",
      githubLink: "#",
      category: "Education",
      icon: Code,
      status: "Development",
      year: "2024",
      complexity: "Advanced"
    },
    {
      title: "Restaurant Management System",
      description: "Complete restaurant solution with online ordering, table reservations, inventory management, staff scheduling, and customer feedback system.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Payment Gateway"],
      liveLink: "#",
      githubLink: "#",
      category: "Business",
      icon: Database,
      status: "Live",
      year: "2023",
      complexity: "Intermediate"
    }
  ];

  return (
    <section className="portfolio-section ">
      <div className="portfolio-container ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="section-header flex flex-col items-center justify-center mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-center text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Showcasing my latest work in full-stack web development
            </p>
          </motion.div>

          {/* Shadcn-Inspired Professional Card Layout */}
          <div className="space-y-8 mb-10">
            {/* Projects Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="w-full h-full rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Card Container */}
                  <div className="w-full h-full rounded-lg border border-gray-200/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/8 hover:border-gray-200/20 hover:shadow-lg hover:shadow-indigo-500/10 p-5">
                    
                    {/* Card Header with Icon and Status */}
                    <div className="flex h-14 items-center justify-between px-6 pt-6 bg-red-400">
                      <div className="flex items-center justify-center px-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                          <project.icon className="h-5 w-5 text-indigo-400" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                            {project.category}
                          </p>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === 'Featured' 
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                          : project.status === 'Live'
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                      }`}>
                        {project.status === 'Featured' && <Star className="w-3 h-3 mr-1" />}
                        {project.status}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 py-4 space-y-4">
                      {/* Title */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Metadata */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className={`px-2 py-1 rounded-full ${
                            project.complexity === 'Advanced' 
                              ? 'bg-red-500/20 text-red-300' 
                              : 'bg-blue-500/20 text-blue-300'
                          }`}>
                            {project.complexity}
                          </span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-800/60 text-gray-300 border border-gray-700/50 hover:border-indigo-500/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200/10">
                      <div className="flex space-x-2">
                        <motion.a
                          href={project.liveLink}
                          className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors group/btn"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-3 h-3 mr-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          Demo
                        </motion.a>
                        <motion.a
                          href={project.githubLink}
                          className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-300 bg-gray-800/60 border border-gray-700/50 rounded-md hover:bg-gray-700/60 hover:border-gray-600/50 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </motion.a>
                      </div>
                      
                      {/* View Details Arrow */}
                      <motion.button
                        className="inline-flex items-center text-xs font-medium text-gray-400 hover:text-indigo-400 transition-colors group/details"
                        whileHover={{ x: 2 }}
                      >
                        View Details
                        <ArrowUpRight className="w-3 h-3 ml-1 group-hover/details:translate-x-0.5 group-hover/details:-translate-y-0.5 transition-transform" />
                      </motion.button>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              className="relative px-10 py-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-2 border-indigo-500/50 text-indigo-300 hover:text-white rounded-2xl font-semibold transition-all duration-500 overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.5 }}
              />
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                View All Projects
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
