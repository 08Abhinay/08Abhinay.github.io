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
              "Hi, I'm Abhinay, a researcher at Purdue interested in Computer vision, graphics and NLP. ",
              "My thesis explored computer vision for medical imaging, where I developed a hybrid I-JEPA + Diffusion + GAN pipeline to address data scarcity and improve generation quality. As a Graduate Researcher, I also investigate adversarial attacks in NLP to strengthen model robustness, advancing AI security and efficiency. ",
              "Previously, I worked as a Software Engineer at Infosys, where I built full-stack applications, developed REST APIs, and worked with cloud platforms such as AWS and Docker. My experience bridges deep learning, scalable cloud solutions, and HPC, shaping both my problem-solving approach and technical expertise. ",
              "I am passionate about building and optimizing AI models, solving challenging research problems, and applying cutting-edge methods to real-world applications. I thrive in environments that foster collaboration, innovation, and continuous learning.  ",
              "If you’d like to collaborate on research, discuss AI innovations, or explore opportunities, feel free to connect!"
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
