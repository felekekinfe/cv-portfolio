"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Education
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 shadow-glow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-cyan-950/50 p-3 rounded-lg text-cyan-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Adama Science and Technology University</h3>
              <p className="text-cyan-400">2021 - 2026</p>
            </div>
          </div>

          <div className="pl-16">
            <p className="text-gray-300">Computer Science and Engineering</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
