"use client"
import { domAnimation, LazyMotion, MotionConfig } from "framer-motion"

export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion={
          process.env.NODE_ENV === "development" ? "never" : "user"
        }
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  )
}
