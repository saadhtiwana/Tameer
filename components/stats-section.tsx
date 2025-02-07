"use client"

import { motion } from "framer-motion"
import { Users, CheckCircle, Award, Clock } from "lucide-react"
import { Noto_Nastaliq_Urdu } from "next/font/google"

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({ subsets: ["arabic"] })

const stats = [
  {
    icon: Users,
    value: "200,000+",
    label: "Satisfied Customers",
    urduLabel: "مطمئن صارفین",
    description: "Across Pakistan",
  },
  {
    icon: CheckCircle,
    value: "150,000+",
    label: "Jobs Completed",
    urduLabel: "مکمل کردہ کام",
    description: "With excellence",
  },
  {
    icon: Award,
    value: "10,000+",
    label: "Verified Experts",
    urduLabel: "تصدیق شدہ ماہرین",
    description: "Background checked",
  },
  {
    icon: Clock,
    value: "30 min",
    label: "Average Response",
    urduLabel: "اوسط رسپانس",
    description: "Quick service",
  },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-pakistan-green relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-5" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Pakistan's Most Trusted Service Platform
            <span className={`${notoNastaliqUrdu.className} block text-3xl text-pakistan-gold mt-2`}>
              پاکستان کا سب سے بھروسہ مند سروس پلیٹ فارم
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center"
            >
              <div className="bg-pakistan-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-pakistan-gold" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/90 mb-1">{stat.label}</p>
              <p className={`${notoNastaliqUrdu.className} text-pakistan-gold`}>{stat.urduLabel}</p>
              <p className="text-white/70 text-sm mt-2">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 flex items-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/NADRA_Logo.svg/2560px-NADRA_Logo.svg.png"
              alt="NADRA Verified"
              className="h-8 w-auto mr-3"
            />
            <span className="text-white font-semibold">NADRA Verified</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 flex items-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/SECP_Logo.svg/1200px-SECP_Logo.svg.png"
              alt="SECP Registered"
              className="h-8 w-auto mr-3"
            />
            <span className="text-white font-semibold">SECP Registered</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

