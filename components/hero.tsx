"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Brain } from "lucide-react"
import NeuralBackground from "./neural-background"
import BrainModel from "./brain-model"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-20">
      <NeuralBackground />

      <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center justify-center p-2 bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-full mb-4">
              <Brain className="w-6 h-6 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">Junior Computer Vision Engineer</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter glitch-text">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Feleke Kinfe
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-xl">
              Engineering the Future of AI with Neural Networks and Computer Vision
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-none shadow-glow-cyan"
                size="lg"
              >
                Explore Projects
              </Button>
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30" size="lg">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="h-[300px] md:h-[400px] lg:h-[500px] w-full relative">
            <BrainModel />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>
    </section>
  )
}
