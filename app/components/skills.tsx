"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const skillCategories = [
    {
      title: "Deep Learning Frameworks",
      skills: ["PyTorch", "TensorFlow", "Keras"],
      icon: "🧠"
    },
    {
      title: "Libraries",
      skills: ["NumPy", "pandas", "Matplotlib", "scikit-learn", "cuDNN"],
      icon: "📚"
    },
    {
      title: "High-Performance Computing",
      skills: ["GPU Computing (CUDA)", "Parallel Processing", "HPC Clusters"],
      icon: "⚡"
    },
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript"],
      icon: "💻"
    },
    {
      title: "Web Technologies",
      skills: ["React", "Node.js", "HTML/CSS"],
      icon: "🌐"
    },
    {
      title: "Cloud and DevOps",
      skills: ["AWS (EC2, ECS, EFS, S3, CloudWatch, VPC)", "Git", "Docker"],
      icon: "☁️"
    }
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-background">
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
          Technical Skills
        </motion.h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
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
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-4 sm:p-6">
                  <motion.div 
                    className="flex items-center mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xl sm:text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </motion.div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li 
                        key={skillIndex} 
                        className="text-muted-foreground text-xs sm:text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (index * 0.1) + (skillIndex * 0.05)
                        }}
                        viewport={{ once: true }}
                      >
                        • {skill}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
