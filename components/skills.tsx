"use client"

import { motion } from "framer-motion"
import { Brain, Network, Calculator, Code, Trophy, MessageSquare } from "lucide-react"

const skills = [
  {
    category: "Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    items: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"],
  },
  {
    category: "Deep Learning",
    icon: <Network className="w-6 h-6" />,
    items: ["Convolutional Neural Networks", "Computer Vision"],
  },
  {
    category: "Mathematics",
    icon: <Calculator className="w-6 h-6" />,
    items: ["Calculus", "Linear Algebra", "Probability and Statistics"],
  },
  {
    category: "Python",
    icon: <Code className="w-6 h-6" />,
    items: ["Core Python", "Object-Oriented Programming"],
  },
  {
    category: "Competitive Programming",
    icon: <Trophy className="w-6 h-6" />,
    items: ["Analytical and algorithmic proficiency"],
  },
  {
    category: "Professional Skills",
    icon: <MessageSquare className="w-6 h-6" />,
    items: ["Problem Solving", "Communication", "Time Management"],
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Skills
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:shadow-glow-sm transition-all duration-300"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-cyan-950/50 p-2 rounded-lg text-cyan-400">{skill.icon}</div>
                <h3 className="text-xl font-bold text-white">{skill.category}</h3>
              </div>

              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
