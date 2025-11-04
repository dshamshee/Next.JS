'use client'

import { motion } from 'framer-motion'
import { 
  Database, 
  Server, 
  Code2, 
  Palette, 
  GitBranch, 
  Package,
  Zap,
  Shield
} from 'lucide-react'

const skills = [
  {
    category: 'Frontend',
    icon: <Code2 className="w-8 h-8" />,
    color: 'blue',
    technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: <Server className="w-8 h-8" />,
    color: 'green',
    technologies: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication'],
  },
  {
    category: 'Database',
    icon: <Database className="w-8 h-8" />,
    color: 'yellow',
    technologies: ['MongoDB', 'Mongoose', 'Database Design', 'Data Modeling'],
  },
  {
    category: 'Tools & Others',
    icon: <Package className="w-8 h-8" />,
    color: 'purple',
    technologies: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Webpack'],
  },
]

const colorClasses = {
  blue: 'from-blue-500 to-cyan-500',
  green: 'from-green-500 to-emerald-500',
  yellow: 'from-yellow-500 to-orange-500',
  purple: 'from-purple-500 to-pink-500',
}

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-8 relative bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect p-8 rounded-xl card-hover group"
            >
              <div className={`inline-flex p-4 bg-gradient-to-r ${colorClasses[skill.color as keyof typeof colorClasses]} rounded-lg mb-6 text-white group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">{skill.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skill.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-white/5 rounded-lg text-gray-300 border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* MERN Stack Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 glass-effect p-8 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-white">MERN Stack Expertise</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['MongoDB', 'Express', 'React', 'Node.js'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/30"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}



