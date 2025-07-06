import { cn } from '@/lib/utils'
import Link from 'next/link'
import mockData from "@/data/mock-data.json"

interface Props {
  className?: string
}

const MenuMain = ({ className = "" }: Props) => {
  return (
    <nav className={cn('flex items-baseline space-x-6', className)}>
      {mockData.navigation.map((item, index) => (
        <div key={index} className="relative group">
          <Link href={item.url} className="relative text-gray-500 hover:text-gray-300 px-0 py-2 text-base font-medium transition-all duration-300 group-hover:text-gray-900">
            {item.title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      ))}
    </nav>
  )
}

export default MenuMain
