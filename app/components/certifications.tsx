"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award } from 'lucide-react'

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const certifications = [
    {
      title: "Build Better Generative Adversarial Networks (GANs)",
      provider: "DeepLearning.AI",
      date: "June 2024",
      url: "https://coursera.org/share/2b32d7340047d404f39d4f6be61efdc0"
    },
    {
      title: "Natural Language Processing with Classification and Vector Spaces",
      provider: "DeepLearning.AI",
      date: "July 2024",
      url: "https://coursera.org/share/e14ab6971fd0fe8d20dea360164e8ca0"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      provider: "Stanford Online",
      date: "July 2024",
      url: "https://coursera.org/share/a713aa97b68dbd3da9939eca32b3e8aa"
    },
    {
      title: "Convolutional Neural Networks",
      provider: "DeepLearning.AI",
      date: "Feb 2024",
      url: "https://www.coursera.org/account/accomplishments/verify/Q9LTVC42K8K3"
    },
    {
      title: "Neural Networks and Deep Learning",
      provider: "DeepLearning.AI",
      date: "Jan 2024",
      url: "https://www.coursera.org/account/accomplishments/records/6LDJ5UA4YHRQ"
    },
    {
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      provider: "DeepLearning.AI",
      date: "Jan 2024",
      url: "https://www.coursera.org/account/accomplishments/verify/YYVENH3P7V5B"
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Certifications
        </motion.h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="scroll-animations"
            >
              <Card className="h-full bg-zinc-900 border-zinc-800 hover:border-blue-500 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <Award size={20} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-white mb-2 leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-blue-400 text-sm font-medium mb-1">{cert.provider}</p>
                      <p className="text-gray-400 text-xs">{cert.date}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full flex items-center gap-2 border-zinc-700 hover:border-blue-500"
                    onClick={() => window.open(cert.url, '_blank')}
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
