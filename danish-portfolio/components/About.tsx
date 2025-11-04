'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Code2, BookOpen } from 'lucide-react'

export default function About() {
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello! I&apos;m <span className="text-blue-400 font-semibold">Danish Shamshe</span>, a dedicated 
              MERN stack developer with a passion for creating innovative web solutions. I specialize in 
              building full-stack applications that are both functional and visually appealing.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With experience in developing multiple full-stack projects including eCommerce platforms, 
              blog applications, and note-taking apps, I bring a comprehensive understanding of modern 
              web development practices.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently pursuing my Master&apos;s in Computer Applications (MCA) while continuing to expand 
              my skill set and tackle challenging projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 rounded-xl card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                  <p className="text-gray-400">BCA Graduate • Pursuing MCA</p>
                </div>
              </div>
              <p className="text-gray-300">
                Completed Bachelor of Computer Applications and currently advancing my knowledge 
                through Master&apos;s degree in Computer Applications.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-xl card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Code2 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Expertise</h3>
                  <p className="text-gray-400">Full-Stack Development</p>
                </div>
              </div>
              <p className="text-gray-300">
                Specialized in the MERN stack with hands-on experience in building scalable, 
                performant web applications from concept to deployment.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-xl card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-pink-500/20 rounded-lg">
                  <BookOpen className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Projects</h3>
                  <p className="text-gray-400">Multiple Full-Stack Applications</p>
                </div>
              </div>
              <p className="text-gray-300">
                Built eCommerce platforms, blog applications, note-taking apps, and various 
                other projects showcasing my versatility and problem-solving skills.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
