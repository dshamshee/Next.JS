'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ShoppingCart, BookOpen, StickyNote, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'eCommerce Platform',
    description: 'Full-featured eCommerce platform with user authentication, product management, shopping cart, payment integration, and admin dashboard.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    icon: <ShoppingCart className="w-8 h-8" />,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Blog Application',
    description: 'Modern blog platform with rich text editor, user comments, categories, tags, search functionality, and responsive design.',
    technologies: ['React', 'Next.js', 'MongoDB', 'Express', 'Node.js'],
    icon: <BookOpen className="w-8 h-8" />,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Note Taking App',
    description: 'Feature-rich note-taking application with markdown support, categories, tags, search, and cloud synchronization.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    icon: <StickyNote className="w-8 h-8" />,
    gradient: 'from-green-500 to-emerald-500',
  },
]

export default function Projects() {
  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my best work and full-stack development capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl card-hover group relative overflow-hidden"
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 bg-gradient-to-r ${project.gradient} rounded-lg mb-4 text-white`}>
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white/5 rounded-full text-gray-400 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Projects
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}



