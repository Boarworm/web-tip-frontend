"use client"
import React from "react"
import { Spotlight } from "@/components/ui/Spotlight"
import Heading from "@/components/Heading"
import Container from "@/components/Container"
import Breadcrumbs from "@/components/Breadcrumbs"
import { cn } from "@/lib/utils"

interface Props {
  className?: string
  title: string
}

export default function HeroSecondary({ className = "", title = "", }: Props) {
  return (
    <div className={cn("pt-28 pb-16 flex bg-black/[0.96] antialiased relative overflow-hidden md:pt-40 md:pb-24", className)}>
      <Spotlight/>
      <Container>
        <div className="">
          <Heading as="h1" variant="gradient" size="h1" color="light" className="text-center">
            <div className="mb-2">{title}</div>
          </Heading>
          <div className="">
            <Breadcrumbs/>
          </div>
        </div>
      </Container>
    </div>
  )
}
