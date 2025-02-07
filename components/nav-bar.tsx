"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import type React from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 transform group-hover:scale-110 transition-transform">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FJ4Ek7JNqtBNJknwUe1MFJJyyq1sU3.png"
                alt="Tameer Logo"
                width={32}
                height={32}
              />
            </div>
            <span className="text-2xl font-bold text-pakistan-green">Tameer</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/providers">Providers</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 text-pakistan-green border border-pakistan-green hover:bg-pakistan-green hover:text-white">
              Login
            </button>
            <button className="px-4 py-2 bg-pakistan-gold text-pakistan-green-dark rounded-full hover:bg-pakistan-green hover:text-white transition-all duration-300 transform hover:scale-105">
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-pakistan-green"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden bg-white/95 backdrop-blur-md ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink href="/services">Services</MobileNavLink>
          <MobileNavLink href="/providers">Providers</MobileNavLink>
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5 space-x-4">
            <button className="flex-1 px-4 py-2 text-base font-medium text-pakistan-green hover:text-pakistan-green-dark rounded-full border border-pakistan-green hover:bg-pakistan-green hover:text-white transition-all duration-300">
              Login
            </button>
            <button className="flex-1 px-4 py-2 text-base font-medium text-white bg-pakistan-green rounded-full hover:bg-pakistan-green-dark transition-all duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-800 hover:text-pakistan-green transition-colors duration-300 relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-pakistan-green hover:bg-gray-50 rounded-lg transition-all duration-300"
    >
      {children}
    </Link>
  )
}

