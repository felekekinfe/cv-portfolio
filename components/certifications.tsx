"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "Coursera",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Certifications
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 shadow-glow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="bg-cyan-950/50 p-2 rounded-lg text-cyan-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                  <p className="text-cyan-400">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
