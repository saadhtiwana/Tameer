"use client"

import { useState } from "react"
import { Search, MapPin, DollarSign, Star } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const categories = [
  { value: "plumber", label: "Plumber" },
  { value: "electrician", label: "Electrician" },
  { value: "carpenter", label: "Carpenter" },
  { value: "painter", label: "Painter" },
  { value: "ac-repair", label: "AC Repair" },
]

const cities = [
  { value: "karachi", label: "Karachi" },
  { value: "lahore", label: "Lahore" },
  { value: "islamabad", label: "Islamabad" },
  { value: "rawalpindi", label: "Rawalpindi" },
  { value: "peshawar", label: "Peshawar" },
]

export default function SearchBar() {
  const [category, setCategory] = useState("")
  const [city, setCity] = useState("")
  const [budget, setBudget] = useState("")
  const [rating, setRating] = useState("")

  const handleSearch = () => {
    console.log({ category, city, budget, rating })
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="bg-transparent border-white/20 text-white">
            <Search className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Service Type" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={city} onValueChange={setCity}>
          <SelectTrigger className="bg-transparent border-white/20 text-white">
            <MapPin className="w-4 h-4 mr-2" />
            <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city.value} value={city.value}>
                {city.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={budget} onValueChange={setBudget}>
          <SelectTrigger className="bg-transparent border-white/20 text-white">
            <DollarSign className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Budget" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Under 5,000 PKR</SelectItem>
            <SelectItem value="medium">5,000 - 15,000 PKR</SelectItem>
            <SelectItem value="high">Above 15,000 PKR</SelectItem>
          </SelectContent>
        </Select>

        <Select value={rating} onValueChange={setRating}>
          <SelectTrigger className="bg-transparent border-white/20 text-white">
            <Star className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="4plus">4+ Stars</SelectItem>
            <SelectItem value="3plus">3+ Stars</SelectItem>
            <SelectItem value="all">All Ratings</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 flex justify-center">
        <Button
          onClick={handleSearch}
          className="bg-tameer-blue hover:bg-tameer-blue-light text-white px-8 py-2 rounded-full transition-all duration-300 animate-pulse-glow"
        >
          Find an Expert Now
        </Button>
      </div>
    </div>
  )
}

