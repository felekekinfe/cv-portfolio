"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import * as THREE from "three"

export default function BrainModel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup for the neural network effect around the image
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0x00ffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0xff00ff, 1)
    pointLight.position.set(-5, 5, 5)
    scene.add(pointLight)

    // Create neural connections (lines) around where the image will be
    const lineCount = 50
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.6,
    })

    for (let i = 0; i < lineCount; i++) {
      const points = []
      const startAngle = Math.random() * Math.PI * 2
      const startHeight = (Math.random() - 0.5) * 4

      const startX = Math.cos(startAngle) * 3
      const startY = startHeight
      const startZ = Math.sin(startAngle) * 3

      const endAngle = Math.random() * Math.PI * 2
      const endHeight = (Math.random() - 0.5) * 4

      const endX = Math.cos(endAngle) * 3
      const endY = endHeight
      const endZ = Math.sin(endAngle) * 3

      points.push(new THREE.Vector3(startX, startY, startZ))

      // Add intermediate points for curves
      const midX = (startX + endX) / 2 + (Math.random() - 0.5) * 1
      const midY = (startY + endY) / 2 + (Math.random() - 0.5) * 1
      const midZ = (startZ + endZ) / 2 + (Math.random() - 0.5) * 1

      points.push(new THREE.Vector3(midX, midY, midZ))
      points.push(new THREE.Vector3(endX, endY, endZ))

      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(lineGeometry, lineMaterial)
      scene.add(line)
    }

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }
    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate the scene slightly
      scene.rotation.y += 0.003
      scene.rotation.x += 0.001

      // Pulse effect
      const time = Date.now() * 0.001
      const scale = 1 + Math.sin(time) * 0.05
      scene.scale.set(scale, scale, scale)

      renderer.render(scene, camera)
    }
    animate()

    setIsLoaded(true)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {/* Your image will be placed here, centered in the neural network effect */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-glow-lg">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Feleke Kinfe"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
