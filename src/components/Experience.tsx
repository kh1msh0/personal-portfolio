'use client'

import { motion } from 'motion/react'
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'

export function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of enterprise-scale web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on multiple projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Architected microservices infrastructure serving 100K+ users'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
      companyUrl: 'https://techinnovations.com'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Digital Creative Agency',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed responsive web applications and interactive user interfaces for various clients. Collaborated with design teams to create pixel-perfect implementations.',
      achievements: [
        'Delivered 25+ client projects with 100% satisfaction rate',
        'Reduced code bundle size by 35% through optimization',
        'Implemented accessibility standards achieving AAA compliance',
        'Created reusable component library used across 15+ projects'
      ],
      technologies: ['React', 'Vue.js', 'TypeScript', 'SCSS', 'Webpack'],
      companyUrl: 'https://digitalcreative.com'
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'StartupTech Solutions',
      location: 'Austin, TX',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Built and maintained web applications using modern JavaScript frameworks. Gained experience in full-stack development and agile methodologies.',
      achievements: [
        'Contributed to 10+ successful product launches',
        'Improved website loading speed by 50%',
        'Implemented responsive design patterns',
        'Collaborated in cross-functional agile teams'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
      companyUrl: 'https://startuptech.com'
    },
    {
      id: 4,
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2018 - 2019',
      type: 'Freelance',
      description: 'Provided web development services to small businesses and startups. Specialized in creating custom websites and web applications tailored to client needs.',
      achievements: [
        'Completed 30+ freelance projects',
        'Maintained 5-star rating across all platforms',
        'Generated $150K+ in revenue',
        'Built long-term relationships with 15+ clients'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'WordPress', 'PHP', 'MySQL'],
      companyUrl: null
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      location: 'California',
      period: '2014 - 2018',
      achievements: [
        'Graduated Summa Cum Laude (GPA: 3.9/4.0)',
        'President of Computer Science Society',
        'Dean\'s List for 6 consecutive semesters',
        'Winner of Annual Hackathon Competition'
      ]
    }
  ]

  const certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Google Cloud Professional Developer', issuer: 'Google Cloud', year: '2022' },
    { name: 'Certified Scrum Master', issuer: 'Scrum Alliance', year: '2021' },
    { name: 'React Developer Certification', issuer: 'Meta', year: '2020' }
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffc93c' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Professional <span className="text-accent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through the tech industry and the experiences that shaped my expertise
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-12 bg-accent/30 hidden lg:block" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background hidden lg:block" />

              <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl mb-1">{experience.title}</h3>
                          <div className="flex items-center text-accent mb-2">
                            <span className="mr-2">{experience.company}</span>
                            {experience.companyUrl && (
                              <a 
                                href={experience.companyUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-accent/80 transition-colors"
                              >
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar size={16} className="mr-1" />
                              {experience.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin size={16} className="mr-1" />
                              {experience.location}
                            </div>
                          </div>
                        </div>
                        <Badge 
                          variant={experience.type === 'Full-time' ? 'default' : 'secondary'}
                          className={experience.type === 'Full-time' ? 'bg-accent text-accent-foreground' : ''}
                        >
                          {experience.type}
                        </Badge>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="flex items-center text-sm">
                          <Award size={16} className="mr-2 text-accent" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-accent/20 text-accent text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="lg:w-1/2" /> {/* Spacer for timeline layout */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300">
              <h3 className="text-xl mb-4 flex items-center">
                <Award className="mr-2 text-accent" />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="space-y-3">
                  <div>
                    <h4 className="text-lg">{edu.degree}</h4>
                    <p className="text-accent">{edu.institution}</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                      <span className="mx-2">•</span>
                      <MapPin size={14} className="mr-1" />
                      {edu.location}
                    </div>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300">
              <h3 className="text-xl mb-4 flex items-center">
                <Award className="mr-2 text-accent" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                    <div>
                      <h4 className="text-base">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <Badge variant="outline" className="border-accent/20 text-accent">
                      {cert.year}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}