"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Code2, Mail, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent("Portfolio Contact Form")
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`)
    window.location.href = `mailto:felekekinfe@gmail.com?subject=${subject}&body=${body}`

    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Contact
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
            <p className="text-gray-300">
              Feel free to reach out if you're looking for a junior Computer Vision Engineer, have a question, or just
              want to connect.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:felekekinfe@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                felekekinfe@gmail.com
              </a>

              <div className="flex gap-4">
                <a
                  href="https://github.com/felekekinfe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-950/50 p-2 rounded-lg text-cyan-400 hover:bg-cyan-900/50 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/felekekinfe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-950/50 p-2 rounded-lg text-cyan-400 hover:bg-cyan-900/50 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://leetcode.com/feleke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-950/50 p-2 rounded-lg text-cyan-400 hover:bg-cyan-900/50 transition-colors"
                >
                  <Code2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-black/60 border-cyan-500/30 focus:border-cyan-500 text-white"
                />
              </div>

              <div className="space-y-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black/60 border-cyan-500/30 focus:border-cyan-500 text-white"
                />
              </div>

              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-black/60 border-cyan-500/30 focus:border-cyan-500 text-white min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
