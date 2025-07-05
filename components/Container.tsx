import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={cn("w-full max-w-[1440px] mx-auto px-4 xl:px-12", className)}>
      {children}
    </div>
  )
}

export default Container
