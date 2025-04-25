"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            About Me
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
        </div>

        <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 shadow-glow-sm">
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a Computer Science student at Adama Science and Technology University, fueled by a passion for pushing
            the boundaries of AI and computer vision. With expertise in deep learning, reinforcement learning, and
            backend development, I'm dedicated to creating intelligent solutions that shape the future.
          </p>

          <div className="mt-6">
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30 group">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
