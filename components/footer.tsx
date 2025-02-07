import { Noto_Nastaliq_Urdu } from "next/font/google"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import type React from "react"

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({ subsets: ["arabic"] })

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-pakistan-green-dark to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4 group">
              <div className="relative w-10 h-10 mr-2 transform group-hover:scale-110 transition-transform">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FJ4Ek7JNqtBNJknwUe1MFJJyyq1sU3.png"
                  alt="Tameer Logo"
                  width={40}
                  height={40}
                  className="brightness-0 invert"
                />
              </div>
              <span className="text-2xl font-bold">Tameer</span>
            </Link>
            <p className={`${notoNastaliqUrdu.className} text-lg mb-4 text-pakistan-gold`}>
              پاکستان کا بھروسہ مند سروس پلیٹ فارم
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={Facebook} label="Facebook" />
              <SocialLink href="#" icon={Twitter} label="Twitter" />
              <SocialLink href="#" icon={Instagram} label="Instagram" />
              <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-pakistan-gold">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Our Services</FooterLink>
              <FooterLink href="/providers">Service Providers</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-pakistan-gold">Popular Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services/plumbing">Plumbing</FooterLink>
              <FooterLink href="/services/electrical">Electrical</FooterLink>
              <FooterLink href="/services/carpentry">Carpentry</FooterLink>
              <FooterLink href="/services/painting">Painting</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-pakistan-gold">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
                <span>123 Main Street, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
                <span>+92 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
                <span>info@tameer.pk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Tameer. All rights reserved. Building Pakistan's Future Together.
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a
      href={href}
      className="hover:text-pakistan-gold transition-colors duration-300 transform hover:scale-110"
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-300 hover:text-pakistan-gold transition-colors duration-300 block transform hover:translate-x-2"
      >
        {children}
      </Link>
    </li>
  )
}

