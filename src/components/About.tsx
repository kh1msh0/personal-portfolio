'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { User, MapPin, Calendar, Heart } from 'lucide-react'
import { Card } from './ui/card'

export function About() {
  const [imageSrc, setImageSrc] = useState('/placeholder-profile.jpg')

  const handleImageError = () => {
    setImageSrc('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face')
  }

  const stats = [
    { label: 'Years Experience', value: '5+', icon: Calendar },
    { label: 'Projects Completed', value: '50+', icon: Heart },
    { label: 'Happy Clients', value: '30+', icon: User },
    { label: 'Code Commits', value: '1000+', icon: MapPin }
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/50 rounded-full blur-3xl" />
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
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <img
                  src={imageSrc}
                  alt="KHIMSHO Profile"
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                <Heart className="w-6 h-6" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-colors">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                    <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl">
                Hi, I'm <span className="text-accent">KHIMSHO</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                innovative digital solutions. My journey began with a curiosity about how things work, 
                which led me to discover the art of coding and design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in modern web technologies and have a keen eye for user experience. 
                Whether it's building responsive websites, developing complex web applications, or 
                optimizing performance, I bring creativity and technical expertise to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or mentoring aspiring developers. I believe in the power of 
                technology to solve real-world problems and create meaningful experiences.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl text-accent">What I Do Best:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                  Full-stack web development with modern frameworks
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                  User experience design and optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                  API development and database design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                  Performance optimization and scalability
                </li>
              </ul>
            </div>

            <motion.div
              className="flex items-center space-x-4 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-accent" />
                Based in Your City
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-accent" />
                Available for Projects
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}