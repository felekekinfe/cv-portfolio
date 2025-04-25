import type React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import ProjectImage from "./project-image"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    technologies: string[]
    icon: React.ReactNode
    github: string
    image: string
    alt: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="border-cyan-500/20 bg-black/40 backdrop-blur-sm overflow-hidden relative h-full">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

      {/* Project Image with Sci-Fi Overlay */}
      <div className="relative w-full h-48 overflow-hidden">
        <ProjectImage src={project.image} alt={project.alt} />

        {/* Project title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-3">
            <div className="bg-cyan-950/80 p-2 rounded-lg text-cyan-400">{project.icon}</div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
      </div>

      <CardContent className="p-6 pt-4">
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="text-xs font-medium bg-cyan-950/50 text-cyan-400 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="sm" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
