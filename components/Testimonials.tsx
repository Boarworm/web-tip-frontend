import { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials"
import mockData from "@/data/mock-data.json"

export default function Testimonials() {
  return <AnimatedTestimonials testimonials={mockData.testimonials}/>
}
