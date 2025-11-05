"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const experiences = [
    {
      title: "Graduate Research Assistant",
      company: "Purdue University, Indiana, Fort Wayne",
      period: "Aug 2024 – Present",
      responsibilities: [
        "Master's Thesis: Investigating a hybrid IJEPA + Stable Diffusion + GAN pipeline to address data scarcity in medical imaging. Leveraging GPU-based HPC clusters for high-volume synthetic image generation.",
        "NLP Research: Transitioning from score-based adversarial attacks (EMNLP) to hard-labeled black-box scenarios, developing novel N-nary attack algorithms without model feedback.",
        "Hands-on experience with High-Performance Computing (HPC), training deep learning models on multi-node clusters."
      ]
    },
    {
      title: "Software Engineer",
      company: "Infosys Limited, Bangalore, India",
      period: "Sept 2021 – Aug 2023",
      responsibilities: [
        "Built Spring Boot REST APIs integrated with Finacle Script for LMS–VAM (menu validation, redirects, SQL CRUD).",
        "Refactored modules for modularity and reusability, separating orchestration from Finacle business rules.",
        "Containerized microservices (fnhttp-va, lm) with Docker for reproducible, versioned releases.",
        "Coordinated rollouts with infrastructure across staging and production to minimize downtime.",
        "Monitored and optimized containers on AWS ECS, EC2, EFS, S3, and CloudWatch to improve scalability and reliability.",
        "Streamlined release cycles and service reliability through standardized containers and modular API architecture."
      ]
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "The People's Corp, Bangalore, India",
      period: "Jan 2024 – Aug 2024",
      responsibilities: [
        "Architected an enterprise RAG platform using OpenAI GPT-4, LangChain, and Pinecone to enable semantic search across 100k+ documents for cross-functional knowledge management.",
        "Implemented Cohere ReRank integration to improve retrieval precision, reducing irrelevant responses by ~40% and enhancing answer quality for business-critical queries.",
        "Deployed containerized RAG services on Kubernetes with a Redis caching layer, supporting high-concurrency workloads and reducing query latency by ~60% for 500+ daily users.",
        "Collaborated with product and operations teams to build an AI-powered knowledge hub, streamlining access to internal documentation and enabling interactive querying of policies and procedures."
      ]
    },
    {
      title: "Student & Assistant Teacher Intern",
      company: "JSpiders Institute, Bangalore, India",
      period: "Feb 2021 – Aug 2021",
      responsibilities: [
        "Trained and certified in Java Full-Stack Development, Core and Advanced Java (J2EE), SQL, and PL/SQL."
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-background">
      <motion.div 
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y }}
      >
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ x: 5, scale: 1.01 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-gray-400 text-sm leading-relaxed">
                        • {responsibility}
                      </li>
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
