"use client"
import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const Cursor = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  })
  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  })

  useEffect(() => {
    const touchDevice = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window
    setIsTouchDevice(touchDevice)
    if (touchDevice) return
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    const handleMouseDown = () => {
      setIsClicked(true)
    }
    const handleMouseUp = () => {
      setIsClicked(false)
    }
    const handleMouseOver = (e) => {
      const target = e.target
      if (target.closest("a, button, input, textarea, select, [role='button']")) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY])

  if (isTouchDevice) return null

  return (
    <motion.div
      className={`pointer-events-none fixed left-0 top-0 z-9999 flex h-8 w-8 items-center justify-center rounded-full border-2 border-violet-400/90 ${isHovering ? "border-violet-900" : ""} ${isClicked ? "border-violet-800" : ""}`}
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isClicked ? 0.8 : isHovering ? 1.6 : 1,
        opacity: isClicked ? 0.8 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      <motion.div
        className={`h-2 w-2 rounded-full bg-violet-400 ${isHovering ? "bg-violet-900" : ""} ${isClicked ? "bg-violet-800" : ""}`}
        animate={{
          scale: isClicked ? 0.8 : isHovering ? 1.6 : 1,
        }}
      />
    </motion.div>
  )
}

export default Cursor
