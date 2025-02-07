"use client"

import type React from "react"

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: "outline" | "default"
  size?: "sm" | "md" | "lg"
}

export default function Button({ children, className, onClick, variant = "default", size = "md" }: ButtonProps) {
  const sizeClass = size === "sm" ? "px-2 py-1 text-sm" : size === "lg" ? "px-4 py-2 text-lg" : "px-3 py-1.5 text-base"

  const variantClass =
    variant === "outline"
      ? "border border-tameer-blue text-tameer-blue hover:bg-tameer-blue hover:text-white"
      : "bg-tameer-blue text-white hover:bg-tameer-blue-light"

  return (
    <button
      onClick={onClick}
      className={`${sizeClass} ${variantClass} rounded-full transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  )
}

export { Button }

