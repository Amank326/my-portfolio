'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShape1() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Box ref={meshRef} args={[1, 1, 1]} position={[-3, 2, 0]}>
        <MeshDistortMaterial
          color="#4f46e5"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
        />
      </Box>
    </Float>
  )
}

function FloatingShape2() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.25
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
      <Torus ref={meshRef} args={[1, 0.3, 16, 32]} position={[3, -1, 0]}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.4}
          speed={2.5}
          roughness={0.3}
        />
      </Torus>
    </Float>
  )
}

function FloatingShape3() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={2.5}>
      <Sphere ref={meshRef} args={[0.8, 32, 32]} position={[0, 1, -2]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  )
}

export default function FloatingShapes3D() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4f46e5" />
        <FloatingShape1 />
        <FloatingShape2 />
        <FloatingShape3 />
      </Canvas>
    </div>
  )
}
