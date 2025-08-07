"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const particles: Particle[] = []
    const particleCount = window.innerWidth < 768 ? 50 : 80

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        const isDark = !document.documentElement.classList.contains('light')
        ctx.fillStyle = isDark 
          ? `rgba(59, 130, 246, ${this.opacity})` 
          : `rgba(37, 99, 235, ${this.opacity * 0.7})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section id="about" ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-background" />
      <motion.div 
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
          >
            Abhinay Shankar <span className="text-primary">Belde</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mb-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground"
          >
            Computer Scientist & AI Researcher
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-3xl mx-auto text-sm sm:text-base text-muted-foreground/80"
          >
            Master's in Computer Science at Purdue University Fort Wayne | Deep Learning, HPC & AI Research
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 sm:space-x-6"
          >
            {[
              { href: "mailto:abhinaybelde@gmail.com", icon: Mail, label: "Email" },
              { href: "https://www.linkedin.com/in/abhinay-belde-3a384a1a0/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/08Abhinay", icon: Github, label: "GitHub" }
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary hover:bg-primary/90 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} className="text-primary-foreground" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
