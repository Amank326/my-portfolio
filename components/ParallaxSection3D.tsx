'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ParallaxSection3DProps {
  children: ReactNode
  className?: string
  speed?: number
  depth?: number
}

export default function ParallaxSection3D({ 
  children, 
  className = '', 
  speed = 0.5,
  depth = 50
}: ParallaxSection3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [-depth, 0, -depth])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        z,
        opacity,
        scale,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  )
}
