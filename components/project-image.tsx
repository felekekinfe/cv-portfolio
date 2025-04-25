"use client"

import { useState } from "react"
import Image from "next/image"

interface ProjectImageProps {
  src: string
  alt: string
  className?: string
}

export default function ProjectImage({ src, alt, className = "" }: ProjectImageProps) {
  const [error, setError] = useState(false)

  // If there's an error loading the image, use a placeholder
  const imageSrc = error ? "/placeholder.svg?height=400&width=800" : src

  return (
    <div className={`relative ${className}`}>
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        width={800}
        height={400}
        className="object-cover w-full h-full"
        onError={() => setError(true)}
        priority
      />

      {/* Sci-fi overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
      <div className="absolute inset-0 border border-cyan-500/30"></div>
      <div className="absolute top-0 left-0 w-20 h-1 bg-cyan-400"></div>
      <div className="absolute top-0 right-0 w-1 h-20 bg-cyan-400"></div>
      <div className="absolute bottom-0 right-0 w-20 h-1 bg-cyan-400"></div>
      <div className="absolute bottom-0 left-0 w-1 h-20 bg-cyan-400"></div>
    </div>
  )
}
