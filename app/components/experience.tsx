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
        "NLP Research: Transitioning from score-based adversarial attacks (ACL submission) to hard-labeled black-box scenarios, developing novel N-nary attack algorithms without model feedback.",
        "Hands-on experience with High-Performance Computing (HPC), training deep learning models on multi-node clusters."
      ]
    },
    {
      title: "Software Engineer",
      company: "Infosys Limited, Bangalore, India",
      period: "Sept 2021 – Aug 2023",
      responsibilities: [
        "Led the development of UI menus and new features for the LMS VAM module, using Angular-based FINUX tool, Java, and JavaScript. Utilized UNIX for managing all project code in a cloud-based environment.",
        "Engineered custom REST APIs using Java, focusing on code reusability and Finacle Scripting. Managed source code with Git.",
        "Consistently leveraged AWS services (CloudWatch, EC2, ECS, EFS, S3, VPC) in an Agile environment.",
        "Containerized and deployed application updates by building and pushing Docker images to backend servers after each sprint.",
        "Automated deployment workflows using Docker, improving efficiency in pushing updates to cloud-based environments."
      ]
    },
    {
      title: "Career Advisor Intern (Part-Time)",
      company: "The People's Corp, Bangalore, India",
      period: "Jan 2021 – Jul 2021",
      responsibilities: [
        "Provided personalized career counseling (resume building, interview prep, career planning), tailored to client aspirations."
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
