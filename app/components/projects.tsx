"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const projects = [
    {
      title: "Personality Prediction - 2.0",
      period: "Jan 2024 - Apr 2024",
      description: "Developed a platform using Django and React.js to provide high school students with MBTI personality predictions, leveraging NLP and machine learning models.",
      technologies: ["Django", "React.js", "MongoDB", "NLP", "Machine Learning"],
      highlights: [
        "Implemented state-of-the-art transformer-based models to analyze textual data",
        "Integrated MongoDB for scalable data storage",
        "Optimized backend performance using Python and Django"
      ],
      github: "https://github.com/08Abhinay"
    },
    {
      title: "Abstractive Text Summarization",
      period: "Jan 2024 - Apr 2024",
      description: "Built an advanced text summarization system using deep learning techniques to generate concise and coherent summaries from long-form content.",
      technologies: ["TensorFlow", "Keras", "Python", "NLP", "Transformers"],
      highlights: [
        "Developed CNN-based model for text processing",
        "Leveraged TensorFlow, Keras, and scikit-learn",
        "Demonstrated expertise in deep learning for NLP"
      ],
      github: "https://github.com/08Abhinay"
    },
    {
      title: "Image Coloring",
      period: "Sept 2023 - Dec 2023",
      description: "Developed a CNN-based model using TensorFlow and Keras to predict and generate color details for grayscale images, enhancing their visual quality.",
      technologies: ["TensorFlow", "Keras", "Python", "Computer Vision", "CNN"],
      highlights: [
        "Built CNN architecture for image colorization",
        "Used deep learning for image processing",
        "Enhanced visual quality of grayscale images"
      ],
      github: "https://github.com/08Abhinay"
    },
    {
      title: "Purdue Marketplace (Telescope)",
      period: "Sept 2023 - Dec 2023",
      description: "Created Purdue e-commerce platform utilizing React, Node.js, HTML, CSS for seamless user experience with full-stack functionality.",
      technologies: ["React", "Node.js", "HTML", "CSS", "JavaScript"],
      highlights: [
        "Full-stack e-commerce platform development",
        "Managed GitHub repository for collaboration",
        "Implemented robust functionality and intuitive interface"
      ],
      github: "https://github.com/08Abhinay"
    }
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <motion.div 
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter"
        >
          Projects
        </motion.h2>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-4">
                    <motion.h3 
                      className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-primary text-xs sm:text-sm font-medium mb-3">{project.period}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-muted-foreground text-xs sm:text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: (index * 0.1) + (idx * 0.05)
                          }}
                          viewport={{ once: true }}
                        >
                          • {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} />
                      GitHub
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
