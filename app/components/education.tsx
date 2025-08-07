"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from 'lucide-react'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "Purdue University Fort Wayne",
      period: "August 2023 – Present",
      location: "Fort Wayne, Indiana",
      focus: "Deep Learning, High-Performance Computing, AI Research"
    },
    {
      degree: "Bachelor of Science in Mechanical Engineering",
      institution: "Amrita Vishwa Vidyapeetham University",
      period: "July 2017 – May 2021",
      location: "Bangalore, India",
      focus: "Engineering Fundamentals, Problem Solving"
    }
  ]

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="scroll-anim"
            >
              <Card className="bg-black border-zinc-800 hover:border-blue-500 transition-colors hover:scale-105 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <GraduationCap size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                          <p className="text-blue-400 font-medium">{edu.institution}</p>
                        </div>
                        <span className="text-gray-400 text-sm mt-2 md:mt-0">{edu.period}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                      {edu.focus && (
                        <p className="text-gray-300 text-sm">
                          <strong>Focus:</strong> {edu.focus}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
