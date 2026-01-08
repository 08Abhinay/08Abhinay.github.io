"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <motion.div 
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          style={{ y }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 sm:mb-12 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter text-center"
          >
            About Me
          </motion.h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
            {[
              "Hi, I’m Abhinay. I’m a researcher at Purdue interested in computer vision, graphics, and NLP.",
              "Right now, I spend most of my time on generative models and representation learning. I care about outputs that are not just high-quality, but also structured, controllable, and consistent. I’m especially drawn to problems where models must respect objects, boundaries, and geometry instead of treating everything as one texture.",
              "My master’s thesis was in medical imaging generation. I built a hybrid pipeline that combined self-supervised representations with diffusion and GAN-based synthesis to work in low-data settings. That experience made me care a lot about practical constraints like limited data, noisy signals, and the gap between something that looks good and something you can trust.",
              "Currently, I’m exploring segmentation-aware conditioning for generation, using signals from models like SAM and Mask2Former to build per-instance conditioning that improves local structure and boundaries. In parallel, I work on adversarial robustness for NLP, focusing on query-efficient black-box attacks and evaluation tools for real deployed classifiers.",
              "I enjoy collaborating with people who run careful experiments, move fast, and stay honest about what works and what doesn’t. If you’re working on generative modeling, robust NLP, or anything adjacent, feel free to reach out."
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={index === 0 || index === 4 ? "font-medium text-foreground" : ""}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>


        </motion.div>
      </motion.div>
    </section>
  )
}
