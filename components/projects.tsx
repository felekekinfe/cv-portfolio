"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Coffee, FileText, Heart, Car } from "lucide-react"
import ProjectCard from "./project-card"

const projects = [
  {
    title: "Coffee Disease Prediction via Computer Vision",
    description: "Built a system to detect coffee plant diseases using deep learning, achieving 90% accuracy.",
    technologies: ["CNNs", "Image Analysis", "Python"],
    icon: <Coffee className="w-6 h-6" />,
    github: "https://github.com/felekekinfe",
    image: "/placeholder.svg?height=400&width=800",
    alt: "Coffee leaf with disease detection overlay showing AI analysis",
  },
  {
    title: "Amharic Handwritten Recognition System",
    description: "Developed a CNN-based system for recognizing handwritten Amharic script with 95% accuracy.",
    technologies: ["Deep Learning", "CNNs", "Dataset Augmentation"],
    icon: <FileText className="w-6 h-6" />,
    github: "https://github.com/felekekinfe",
    image: "/placeholder.svg?height=400&width=800",
    alt: "Amharic handwritten characters with digital recognition visualization",
  },
  {
    title: "Heart Disease Prediction Using Logistic Regression",
    description: "Created a predictive model for heart disease with 97% accuracy.",
    technologies: ["Logistic Regression", "Python", "Feature Selection"],
    icon: <Heart className="w-6 h-6" />,
    github: "https://github.com/felekekinfe",
    image: "/placeholder.svg?height=400&width=800",
    alt: "Heart visualization with predictive analytics overlay",
  },
  {
    title: "Automatic License Plate Recognition and Car Tracking System",
    description: "Designed an ALPR system with real-time vehicle tracking using custom OCR and DeepSort.",
    technologies: ["Computer Vision", "DeepSort", "OCR", "Python"],
    icon: <Car className="w-6 h-6" />,
    github: "https://github.com/felekekinfe",
    image: "/placeholder.svg?height=400&width=800",
    alt: "Car with license plate being detected and tracked by AI system",
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Projects
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>

              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
