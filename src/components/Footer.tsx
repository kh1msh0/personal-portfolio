'use client'

import { motion } from 'motion/react'
import { ArrowUp, Heart, Code } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import logoImage from 'figma:asset/61d7ce139691ce341e8cc52d64bababa08d07799.png'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-accent/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #ffc93c 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={logoImage} 
                  alt="KHIMSHO Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Passionate full-stack developer creating exceptional digital experiences. 
                Let's build something amazing together.
              </p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>and</span>
                <Code className="w-4 h-4 text-accent" />
                <span>by KHIMSHO</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-accent transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Web Development</li>
                <li>Mobile Applications</li>
                <li>UI/UX Design</li>
                <li>API Development</li>
                <li>Consulting</li>
                <li>Code Review</li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-accent/20" />

        {/* Bottom Section */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} KHIMSHO. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <button 
                onClick={() => scrollToSection('#contact')} 
                className="hover:text-accent transition-colors"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button 
                onClick={() => scrollToSection('#contact')} 
                className="hover:text-accent transition-colors"
              >
                Terms of Service
              </button>
            </div>

            <Button
              size="sm"
              variant="outline"
              onClick={scrollToTop}
              className="border-accent/20 text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <ArrowUp size={16} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}