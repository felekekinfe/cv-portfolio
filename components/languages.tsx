"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"

const languages = [
  {
    name: "English",
    level: "Full Professional Proficiency",
    percentage: 90,
  },
  {
    name: "Amharic",
    level: "Native Proficiency",
    percentage: 100,
  },
]

export default function Languages() {
  return (
    <section id="languages" className="py-20">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Languages
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 shadow-glow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-cyan-950/50 p-2 rounded-lg text-cyan-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{lang.name}</h3>
                  <p className="text-gray-300">{lang.level}</p>
                </div>
              </div>

              <div className="w-full bg-gray-700/30 rounded-full h-2.5">
                <motion.div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
