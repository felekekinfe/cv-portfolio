"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Machine Learning Engineer",
    company: "ASTU Machine Learning Club",
    period: "Present",
    description: ["Developing quadruped robots using reinforcement learning.", "Mentored by Kasahun Tamir."],
  },
  {
    title: "Backend Developer",
    company: "Backos Technology",
    period: "2023",
    description: [
      "Built backend for an e-learning platform using Django and RESTful APIs.",
      "Implemented role-based access control and authentication.",
      "Designed database with Django ORM.",
      "Collaborated with front-end developers.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Experience
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
        </div>

        <div className="relative border-l-2 border-cyan-500/50 pl-6 ml-3 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[39px] bg-black p-1.5 rounded-full border-2 border-cyan-500">
                <Briefcase className="h-4 w-4 text-cyan-400" />
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 shadow-glow-sm">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-sm font-medium text-cyan-400 bg-cyan-950/50 px-2 py-1 rounded">
                    {exp.period}
                  </span>
                </div>

                <p className="text-lg text-cyan-300 mb-4">{exp.company}</p>

                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
