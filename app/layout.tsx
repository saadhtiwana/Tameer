import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tameer - Pakistan's Premier Home Services Platform",
  description:
    "Connect with verified experts for all your home service needs in Pakistan. Quality service providers at your fingertips.",
  keywords: "home services, pakistan, plumbing, electrical, carpentry, construction, renovation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 flex flex-col min-h-screen antialiased`}>
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

