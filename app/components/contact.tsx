"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas/contact"

export default function Contact() {
  const [serverFeedback, setServerFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: ContactFormValues) {
    try {
      setIsSubmitting(true)
      setServerFeedback(null)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || "Unable to send your message. Please try again.")
      }

      setServerFeedback({
        type: "success",
        message: "Thanks for reaching out! I will get back to you soon.",
      })
      form.reset()
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again."
      setServerFeedback({
        type: "error",
        message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-secondary/30 py-20">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
          <p className="mb-8 text-gray-400">
            Interested in collaborating on research, discussing AI innovations, or exploring exciting opportunities? Let's connect!
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:abhinaybelde@gmail.com" className="text-white hover:text-blue-400">
                      abhinaybelde@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+12605154640" className="text-white hover:text-blue-400">
                      (260) 515-4640
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/abhinay-belde-3a384a1a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/08Abhinay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:abhinaybelde@gmail.com"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project or collaboration idea..." 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {serverFeedback && (
                  <p
                    className={`text-sm ${serverFeedback.type === "success" ? "text-green-400" : "text-red-400"}`}
                    role="status"
                    aria-live="polite"
                  >
                    {serverFeedback.message}
                  </p>
                )}
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
