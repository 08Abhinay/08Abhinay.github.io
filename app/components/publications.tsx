"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Code } from 'lucide-react'

export default function Publications() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const publications = [
    {
      title: "Overcoming Black-box Attack Inefficiency with Hybrid and Dynamic N-nary Algorithms",
      venue: "ACL 2024 (Submitted)",
      description: "Novel approach to improve model robustness using score-based feedback for adversarial perturbations in NLP models.",
      status: "Under Review",
      tags: ["NLP", "Adversarial Attacks", "Model Robustness"],
      sourceCode: "https://github.com/08Abhinay",
      paper: "#"
    },
    {
      title: "Addressing Data Scarcity in Medical Imaging: A Hybrid IJEPA + Stable Diffusion + GAN Approach",
      venue: "Master's Thesis (In Progress)",
      description: "Hybrid pipeline combining IJEPA, Stable Diffusion, and GANs for realistic synthetic medical image generation to address data scarcity.",
      status: "In Progress",
      tags: ["Computer Vision", "Medical Imaging", "GANs", "Diffusion Models"],
      sourceCode: "https://github.com/08Abhinay",
      paper: "#"
    },
    {
      title: "Hard-labeled Adversarial Attacks for Text Classification",
      venue: "Research Project (Ongoing)",
      description: "Developing novel algorithms for adversarial attacks in scenarios where model confidence scores are unavailable.",
      status: "Ongoing",
      tags: ["NLP", "Adversarial ML", "Text Classification"],
      sourceCode: "https://github.com/08Abhinay",
      paper: "#"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Review":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "In Progress":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Ongoing":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <section id="publications" className="py-16 sm:py-20 lg:py-24 bg-black">
      <motion.div 
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y }}
      >
        <motion.h2
          className="mb-12 text-center text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Publications & Research
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                        {pub.title}
                      </h3>
                      <p className="text-blue-400 text-sm font-medium mb-2">{pub.venue}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(pub.status)}`}>
                      {pub.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {pub.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pub.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-zinc-800 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        onClick={() => window.open(pub.sourceCode, '_blank')}
                      >
                        <Code size={16} />
                        Source Code
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        onClick={() => window.open(pub.paper, '_blank')}
                      >
                        <FileText size={16} />
                        Paper
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
