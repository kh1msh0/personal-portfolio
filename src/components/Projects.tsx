'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ExternalLink, Github, Eye, Filter } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, full-stack e-commerce solution with real-time inventory management and secure payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/khimsho/ecommerce-project',
      liveUrl: 'https://ecommerce-demo.khimsho.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration, and advanced filtering.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Socket.io'],
      githubUrl: 'https://github.com/khimsho/task-manager',
      liveUrl: 'https://tasks.khimsho.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Analytics Dashboard',
      description: 'Interactive weather analytics platform with beautiful visualizations and predictive insights.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      category: 'Frontend',
      technologies: ['Vue.js', 'D3.js', 'Weather API', 'Chart.js'],
      githubUrl: 'https://github.com/khimsho/weather-dashboard',
      liveUrl: 'https://weather.khimsho.com',
      featured: false
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      description: 'Comprehensive real estate platform with advanced search, virtual tours, and property management.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      category: 'Full Stack',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3'],
      githubUrl: 'https://github.com/khimsho/real-estate',
      liveUrl: 'https://realestate.khimsho.com',
      featured: true
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with automated reporting and engagement insights.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      category: 'Backend',
      technologies: ['Python', 'Django', 'Redis', 'Celery'],
      githubUrl: 'https://github.com/khimsho/social-dashboard',
      liveUrl: 'https://social.khimsho.com',
      featured: false
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Mobile-first fitness application with workout planning, progress tracking, and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      category: 'Mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      githubUrl: 'https://github.com/khimsho/fitness-app',
      liveUrl: 'https://fitness.khimsho.com',
      featured: false
    }
  ]

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/50 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
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
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing various technologies and problem-solving approaches
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className={`
                transition-all duration-300 
                ${activeFilter === category 
                  ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                  : 'border-accent/20 text-foreground hover:border-accent/40 hover:text-accent'
                }
              `}
            >
              <Filter size={16} className="mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Eye size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                    {project.featured && (
                      <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-accent/10 text-accent border-accent/20 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <Badge variant="outline" className="border-accent/20 text-accent">
                        {project.category}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                          </a>
                        </Button>
                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            onClick={() => {
              const contactSection = document.querySelector('#contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Let's Work Together
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}