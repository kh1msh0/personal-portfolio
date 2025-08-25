'use client'

import { motion } from 'motion/react'
import { Code, Palette, Server, Smartphone, Database, Globe } from 'lucide-react'
import { Card } from './ui/card'
import { Progress } from './ui/progress'

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'text-blue-400',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 80 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'text-green-400',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'GraphQL', level: 80 },
        { name: 'REST APIs', level: 95 },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'text-purple-400',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 70 },
      ]
    },
    {
      title: 'Design & UX',
      icon: Palette,
      color: 'text-pink-400',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Prototyping', level: 80 },
        { name: 'Design Systems', level: 85 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'text-orange-400',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'PWA', level: 85 },
        { name: 'App Store', level: 75 },
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: Globe,
      color: 'text-cyan-400',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'CI/CD', level: 80 },
        { name: 'Testing', level: 85 },
        { name: 'Agile', level: 90 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #ffc93c 25%, transparent 25%), 
                           linear-gradient(-45deg, #ffc93c 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, #ffc93c 75%), 
                           linear-gradient(-45deg, transparent 75%, #ffc93c 75%)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            My <span className="text-accent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the full development stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="ml-4 text-lg font-medium">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground">{skill.name}</span>
                        <span className="text-sm text-accent">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-accent to-accent/80 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1.2, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5,
                              ease: "easeOut" 
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-accent/20">
            <h3 className="text-xl mb-6">
              Always <span className="text-accent">Learning</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'AI/ML', 'Web3', 'Rust', 'Go', 'Kubernetes', 'Microservices',
                'GraphQL', 'Jamstack', 'Serverless', 'Blockchain'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm border border-accent/20 hover:bg-accent/20 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}