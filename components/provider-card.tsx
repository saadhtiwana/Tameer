"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Shield, Award, ThumbsUp, MessageCircle } from "lucide-react"
import { Noto_Nastaliq_Urdu } from "next/font/google"

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({ subsets: ["arabic"] })

interface ProviderCardProps {
  name: string
  urduName: string
  image: string
  service: string
  urduService: string
  rating: number
  reviews: number
  completedJobs: number
  experience: number
  isVerified: boolean
  isFeatured: boolean
}

export default function ProviderCard({
  name,
  urduName,
  image,
  service,
  urduService,
  rating,
  reviews,
  completedJobs,
  experience,
  isVerified,
  isFeatured,
}: ProviderCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg">
      {isFeatured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-pakistan-gold text-pakistan-green-dark text-sm font-bold px-4 py-1 rounded-full">
            Featured
          </div>
        </div>
      )}

      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Verification Badge */}
        {isVerified && (
          <div className="absolute bottom-4 left-4 flex items-center bg-white/90 rounded-full px-3 py-1">
            <Shield className="w-4 h-4 text-pakistan-green mr-1" />
            <span className="text-xs font-semibold text-pakistan-green-dark">Verified Expert</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className={`${notoNastaliqUrdu.className} text-lg text-gray-600`}>{urduName}</p>
          </div>
          <div className="flex items-center bg-pakistan-green/10 rounded-full px-3 py-1">
            <Star className="w-4 h-4 text-pakistan-green fill-current mr-1" />
            <span className="font-bold text-pakistan-green">{rating}</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-700">{service}</p>
          <p className={`${notoNastaliqUrdu.className} text-gray-600`}>{urduService}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <ThumbsUp className="w-5 h-5 text-pakistan-green mx-auto mb-1" />
            <p className="text-sm text-gray-600">Completed Jobs</p>
            <p className="font-bold text-gray-900">{completedJobs}+</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <Award className="w-5 h-5 text-pakistan-green mx-auto mb-1" />
            <p className="text-sm text-gray-600">Experience</p>
            <p className="font-bold text-gray-900">{experience} Years</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-pakistan-green text-white py-2 rounded-xl hover:bg-pakistan-green-dark transition-colors duration-300">
            Book Now
          </button>
          <button className="flex items-center justify-center w-12 h-10 bg-pakistan-green/10 text-pakistan-green rounded-xl hover:bg-pakistan-green/20 transition-colors duration-300">
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

