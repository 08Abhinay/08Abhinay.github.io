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
              "Hi, I'm Abhinay Shankar Belde, a computer scientist and researcher pursuing my Master's in Computer Science at Purdue University Fort Wayne.",
              "My academic journey revolves around deep learning, high-performance computing (HPC), and AI research. Currently, I am working on a hybrid IJEPA + Stable Diffusion + GAN pipeline to tackle data scarcity in medical imaging. Additionally, I explore NLP adversarial attacks to enhance model robustness, constantly pushing the boundaries of AI security and efficiency.",
              "Previously, I worked as a Software Engineer at Infosys, where I developed full-stack applications, built REST APIs, and worked extensively with cloud-based tools like AWS and Docker. My experience spans deep learning, scalable cloud solutions, and HPC, shaping my problem-solving approach and technical expertise.",
              "I am passionate about building and optimizing AI models, tackling complex research problems, and applying cutting-edge AI techniques to real-world applications. I thrive in environments that encourage continuous learning, collaboration, and innovation.",
              "If you're interested in collaborating on research, discussing AI innovations, or exploring exciting opportunities, feel free to reach out!"
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
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
