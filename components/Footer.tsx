import { cn } from "@/lib/utils"
import Container from '@/components/Container'
import Copyright from '@/components/Copyright'
import { Mail, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import mockData from "@/data/mock-data.json"
import Logo from '@/components/Logo'
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

interface Props {
  className?: string
}

export default function Footer({ className }: Props) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Spotlight/>
      <div className="bg-black/[0.96]">
        <Container className="py-10 grid gap-10 grid-cols-1 md:grid-cols-3">
          <div className="">
            <Logo
              className=""
              color="light"
              logoSrc="/logo-light.svg"
              title=""
              showText={true}
            />
            <div className="prose mt-4 text-white">
              <p>Web Developer Notes: Insights, projects, and tips from a experienced web developer.</p>
            </div>
          </div>
          <div className="">
            <div className="text-xl uppercase font-italic font-secondary text-white mb-4 md:mb-8 md:text-3xl">Contact</div>
            <div className="">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-white mr-3 mt-0.5 shrink-0 self-start xl:mr-6"/>
                <a href="mailto:info@web-tip.top" className="transition text-white hover:text-brand-primary-500 truncate ">info@web-tip.top</a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-xl uppercase font-italic font-secondary text-white mb-4 md:mb-8 md:text-3xl">Quick links</div>
            <ul className="flex flex-col items-start">

              {mockData.navigation.map((item) => (
                <li key={item.id} className="mb-3">
                  <Link href={item.url} className="mb-2 last:mb-0 text-white transition hover:text-brand-primary-500 md:mb-0 flex items-center">
                    <ChevronRight className="w-3 h-3 text-white mr-2 shrink-0"/>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
      <div className="bg-brand-base-950">
        <Container className="py-6">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <Copyright startYear={2020} companyName="Web developer notes" className="text-white text-center"/>
          </div>
        </Container>
      </div>
    </div>
  )
}
