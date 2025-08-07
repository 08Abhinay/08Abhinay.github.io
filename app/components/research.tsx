"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Research() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="research" className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <motion.div 
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y }}
      >
        <motion.h2
          className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Current Research
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, scale: 1.01 }}
          >
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Master's Thesis</h3>
                <p className="text-gray-300 mb-4">
                  <strong>Addressing Data Scarcity in Medical Imaging:</strong> A Hybrid Approach Combining IJEPA, Stable Diffusion, and GANs for Realistic Synthetic Data Generation <em>(In Progress → Thesis)</em>.
                </p>
                <p className="text-gray-400">
                  Building on IJEPA to provide latent embeddings that condition the generator in a Stable Diffusion + GAN pipeline. Aims to enhance noise modeling and produce high-fidelity synthetic images, improving overall representation learning.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, scale: 1.01 }}
          >
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Natural Language Processing (NLP)</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-300 mb-2">
                      <em className="text-yellow-400">Submitted to ACL 2024:</em> Overcoming Black-box Attack Inefficiency with Hybrid and Dynamic N-nary Algorithms to improve model robustness—uses score-based feedback for adversarial perturbations.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300">
                      <em className="text-green-400">Ongoing:</em> Developing novel algorithms for hard-labeled adversarial attacks where model confidence scores are unavailable, focusing on robust text classification.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
