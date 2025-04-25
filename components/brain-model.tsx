"use client"

import { useEffect, useRef, useState } from "react"
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
    const lineCount = 80 // Increased for more density
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

    // Add particles for more sci-fi effect
    const particleCount = 200
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      const angle = Math.random() * Math.PI * 2
      const radius = 2 + Math.random() * 3
      particlePositions[i] = Math.cos(angle) * radius
      particlePositions[i + 1] = (Math.random() - 0.5) * 5
      particlePositions[i + 2] = Math.sin(angle) * radius
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

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

      // Rotate particles
      particles.rotation.y += 0.001

      // Pulse effect
      const time = Date.now() * 0.001
      const scale = 1 + Math.sin(time) * 0.05
      scene.scale.set(scale, scale, scale)

      // Pulse particle opacity
      particleMaterial.opacity = 0.5 + Math.sin(time * 2) * 0.3

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

      // Dispose resources
      particleGeometry.dispose()
      particleMaterial.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {/* The image container is now fully transparent */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        {/* Removed the border and background, keeping only a subtle glow effect */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-glow-lg">
          {/* The image itself is transparent - you can add your image here when ready */}
          {/* <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Feleke Kinfe"
            fill
            className="object-cover opacity-0"
            priority
          /> */}
        </div>
      </div>
    </div>
  )
}
