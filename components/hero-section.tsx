"use client"

import { motion } from "framer-motion"
import { Noto_Nastaliq_Urdu } from "next/font/google"
import { Shield, Star, Users, CheckCircle } from "lucide-react"
import Image from "next/image"

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({ subsets: ["arabic"] })

const trustIndicators = [
  {
    icon: Shield,
    title: "Government Registered",
    urduTitle: "حکومتی رجسٹرڈ",
    description: "All service providers verified through NADRA",
  },
  {
    icon: Star,
    title: "4.8/5 Rating",
    urduTitle: "4.8/5 درجہ بندی",
    description: "Based on 50,000+ verified reviews",
  },
  {
    icon: Users,
    title: "200,000+ Users",
    urduTitle: "200,000+ صارفین",
    description: "Trusted by Pakistani families",
  },
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    urduTitle: "معیار کی ضمانت",
    description: "100% satisfaction or money back",
  },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-pakistan-green to-pakistan-green-dark overflow-hidden">
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-5" />

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-pakistan-white mb-6">
              Pakistan's Most Trusted
              <span className={`${notoNastaliqUrdu.className} block text-4xl md:text-5xl mt-4 text-pakistan-gold`}>
                گھر کی دیکھ بھال کے ماہرین
              </span>
            </h1>

            <p className="text-xl text-pakistan-white/90 mb-8">
              Connect with verified experts for all your home service needs. From plumbing to electrical work, we've got
              you covered.
            </p>

            {/* Search Component Here */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12">
              <div className="grid md:grid-cols-3 gap-4">
                <select className="w-full p-3 rounded-xl bg-white/20 text-white border border-white/30 focus:border-pakistan-gold">
                  <option value="">Select Service</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="carpentry">Carpentry</option>
                </select>
                <select className="w-full p-3 rounded-xl bg-white/20 text-white border border-white/30 focus:border-pakistan-gold">
                  <option value="">Select City</option>
                  <option value="karachi">Karachi</option>
                  <option value="lahore">Lahore</option>
                  <option value="islamabad">Islamabad</option>
                </select>
                <button className="w-full p-3 rounded-xl bg-pakistan-gold text-pakistan-green-dark font-semibold hover:bg-white transition-colors duration-300">
                  Find Experts Now
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white/10 rounded-full p-3 w-12 h-12 mx-auto mb-3">
                    <indicator.icon className="w-6 h-6 text-pakistan-gold" />
                  </div>
                  <h3 className="text-pakistan-white font-semibold mb-1">{indicator.title}</h3>
                  <p className={`${notoNastaliqUrdu.className} text-pakistan-white/70 text-sm`}>
                    {indicator.urduTitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Professional Pakistani Service Provider"
                width={2069}
                height={1379}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pakistan-green-dark/80 to-transparent" />

              {/* Floating Reviews */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-lg rounded-xl p-4 max-w-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                      alt="Customer"
                      width={774}
                      height={774}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-pakistan-gold text-pakistan-gold" />
                      ))}
                    </div>
                    <p className="text-white text-sm mb-1">"Excellent service! Very professional and timely."</p>
                    <p className="text-pakistan-white/70 text-xs">- Ahmed K., Lahore</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

