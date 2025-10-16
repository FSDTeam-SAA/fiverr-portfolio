"use client"

import { useRef, useState } from "react"
import { motion, useAnimationFrame } from "framer-motion"
import Image from "next/image"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Md Rakibul Alam",
    role: "UI/UX Designer",
    image: "https://i.ibb.co/6RXGHmf5/Abu-Sayed.jpg",
  },
  {
    id: 2,
    name: "Rahul Mallik",
    role: "Node.js Developer",
    image: "https://i.ibb.co/6RXGHmf5/Abu-Sayed.jpg",
  },
  {
    id: 3,
    name: "Sharif Mahamud",
    role: "Python Developer",
    image: "https://i.ibb.co/6RXGHmf5/Abu-Sayed.jpg",
  },
  {
    id: 4,
    name: "Sanjida Khanom",
    role: "Web Developer",
    image: "https://i.ibb.co/6RXGHmf5/Abu-Sayed.jpg",
  },
  {
    id: 5,
    name: "Rafsan Munnaf",
    role: "AI Engineer",
    image: "https://i.ibb.co/6RXGHmf5/Abu-Sayed.jpg",
  },
]

export function TeamCarousel() {
  const [position, setPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardWidth = 280 // Width of each card including gap
  const speed = 0.6 // Pixels per frame

  // Create infinite loop by duplicating items
  const infiniteMembers = [...teamMembers, ...teamMembers, ...teamMembers]

  useAnimationFrame(() => {
    setPosition((prev) => {
      const newPosition = prev - speed
      // Reset when we've scrolled through one full set
      if (Math.abs(newPosition) >= cardWidth * teamMembers.length) {
        return 0
      }
      return newPosition
    })
  })

  const getScale = (index: number) => {
    if (!containerRef.current) return 1

    const containerWidth = containerRef.current.offsetWidth
    const centerX = containerWidth / 2
    const cardCenterX = position + index * cardWidth + cardWidth / 2

    // Calculate distance from center
    const distanceFromCenter = Math.abs(centerX - cardCenterX)

    // Scale based on distance (closer to center = larger)
    const maxScale = 1.4
    const minScale = 0.85
    const scaleRange = maxScale - minScale
    const threshold = cardWidth * 1.5

    if (distanceFromCenter < threshold) {
      const scale = maxScale - (distanceFromCenter / threshold) * scaleRange
      return scale
    }

    return minScale
  }

  const getOpacity = (index: number) => {
    if (!containerRef.current) return 0.6

    const containerWidth = containerRef.current.offsetWidth
    const centerX = containerWidth / 2
    const cardCenterX = position + index * cardWidth + cardWidth / 2

    const distanceFromCenter = Math.abs(centerX - cardCenterX)
    const threshold = cardWidth * 1.5

    if (distanceFromCenter < threshold) {
      return 1 - (distanceFromCenter / threshold) * 0.4
    }

    return 0.6
  }

  const isCentered = (index: number) => {
    if (!containerRef.current) return false

    const containerWidth = containerRef.current.offsetWidth
    const centerX = containerWidth / 2
    const cardCenterX = position + index * cardWidth + cardWidth / 2

    const distanceFromCenter = Math.abs(centerX - cardCenterX)
    return distanceFromCenter < cardWidth / 3
  }

  return (
    <div className="w-full overflow-hidden bg-white py-20" ref={containerRef}>
      <div className="relative h-[400px]">
        <motion.div
          className="absolute flex gap-16 transform-gpu"
          style={{
            x: position,
            willChange: "transform",
          }}
        >
          {infiniteMembers.map((member, index) => {
            const scale = getScale(index)
            const opacity = getOpacity(index)
            const centered = isCentered(index)

            return (
              <motion.div
                key={`${member.id}-${index}`}
                className="flex flex-col items-center transform-gpu"
                style={{
                  width: "240px",
                  flexShrink: 0,
                  translateZ: 0,
                  backfaceVisibility: "hidden",
                  WebkitFontSmoothing: "antialiased",
                }}
                animate={{
                  scale,
                  opacity,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <div className="relative mb-4">
                  <div
                    className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                      centered ? "h-[240px] w-[240px] ring-4 ring-blue-500 ring-offset-4" : "h-[180px] w-[180px]"
                    }`}
                  >
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                </div>
                <h3
                  className="text-center text-xl font-semibold text-gray-900 transform-gpu"
                  style={{ WebkitFontSmoothing: "antialiased" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-center text-sm text-gray-600 transform-gpu"
                  style={{ WebkitFontSmoothing: "antialiased" }}
                >
                  {member.role}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
