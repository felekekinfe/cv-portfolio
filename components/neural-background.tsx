"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function NeuralBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create neural network nodes
    const nodes: THREE.Mesh[] = []
    const nodeCount = window.innerWidth < 768 ? 50 : 150
    const nodeGeometry = new THREE.SphereGeometry(0.1, 16, 16)
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x0088ff })

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
      node.position.x = (Math.random() - 0.5) * 50
      node.position.y = (Math.random() - 0.5) * 50
      node.position.z = (Math.random() - 0.5) * 50

      // Add velocity property to each node
      Object.assign(node, {
        velocity: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
      })

      nodes.push(node)
      scene.add(node)
    }

    // Create connections between nodes
    const connections: THREE.Line[] = []
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0088ff,
      transparent: true,
      opacity: 0.2,
    })

    const maxDistance = 10
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position)
        if (distance < maxDistance) {
          const geometry = new THREE.BufferGeometry().setFromPoints([nodes[i].position, nodes[j].position])
          const line = new THREE.Line(geometry, lineMaterial)
          connections.push(line)
          scene.add(line)
        }
      }
    }

    // Mouse interaction
    const mouse = new THREE.Vector2()
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Update node positions
      nodes.forEach((node: any) => {
        node.position.x += node.velocity.x
        node.position.y += node.velocity.y
        node.position.z += node.velocity.z

        // Boundary check
        if (Math.abs(node.position.x) > 25) node.velocity.x *= -1
        if (Math.abs(node.position.y) > 25) node.velocity.y *= -1
        if (Math.abs(node.position.z) > 25) node.velocity.z *= -1

        // Mouse influence
        node.position.x += mouse.x * 0.01
        node.position.y += mouse.y * 0.01
      })

      // Update connections
      connections.forEach((line, index) => {
        const positions = line.geometry.attributes.position.array
        const i = Math.floor(index / (nodes.length - 1))
        const j = (index % (nodes.length - 1)) + 1 + i

        if (i < nodes.length && j < nodes.length) {
          positions[0] = nodes[i].position.x
          positions[1] = nodes[i].position.y
          positions[2] = nodes[i].position.z
          positions[3] = nodes[j].position.x
          positions[4] = nodes[j].position.y
          positions[5] = nodes[j].position.z

          line.geometry.attributes.position.needsUpdate = true
        }
      })

      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose resources
      nodes.forEach((node) => {
        node.geometry.dispose()
        ;(node.material as THREE.Material).dispose()
      })

      connections.forEach((line) => {
        line.geometry.dispose()
        ;(line.material as THREE.Material).dispose()
      })
    }
  }, [])

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}
