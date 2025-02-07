import { motion } from "framer-motion"

const FeaturedProviders = () => {
  return (
    <motion.div className="mt-20 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Leading Organizations</h3>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YsNFMnXcoAjgSTSx5ERt0Rfe6ETUUF.png"
          alt="Pakistan Army"
          className="h-16 w-auto"
        />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ClP6ShjXdyJdbenl9LzNi2YkUuSmI7.png"
          alt="HBL"
          className="h-12 w-auto"
        />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HSnoCOHsIn5eoavA2BCQ7Gwn9FZmd2.png"
          alt="Allied Bank"
          className="h-12 w-auto"
        />
      </div>
    </motion.div>
  )
}

export default FeaturedProviders

