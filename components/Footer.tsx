import { cn } from "@/lib/utils"
import Container from '@/components/Container'
import Copyright from '@/components/Copyright'
import { Mail, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import navigationData from '@/data/navigation.json'

interface Props {
  className?: string
}

export default function Footer({ className }: Props) {
  return (
    <div className={cn("bg-gray-700", className)}>
      <div className="bg-primary-darker">
        <Container className="py-10 grid gap-10 grid-cols-1 md:grid-cols-3">
          <div className="">
            <div data-block="logo" className="w-[36px] lg:w-[60px]">
              <a href="/" className="flex items-center">
                <img src="https://web-tip.top/themes/main/assets/images/logo-light.svg" alt="Web developer notes" title="Web developer notes" className="w-full"/>
                <span className="relative text-white leading-none font-extralight text-3xl ml-3 lg:text-5xl">WTT</span>
              </a>
            </div>
            <div className="prose mt-4 text-white">
              <p>Web Developer Notes: Insights, projects, and tips from a experienced web developer.</p>
            </div>
          </div>
          <div className="">
            <div className="text-xl uppercase font-italic font-secondary text-white mb-4 md:mb-8 md:text-3xl">Contact</div>
            <div className="">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-white mr-3 mt-0.5 shrink-0 self-start xl:mr-6"/>
                <a href="mailto:info@web-tip.top" className="transition text-white hover:text-secondary truncate ">info@web-tip.top</a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-xl uppercase font-italic font-secondary text-white mb-4 md:mb-8 md:text-3xl">Quick links</div>
            <ul className="flex flex-col items-start">

              {navigationData.map((item) => (
                <li key={item.id} className="mb-3">
                  <Link href={item.url} className="mb-2 last:mb-0 text-white transition hover:text-secondary md:mb-0 flex items-center">
                    <ChevronRight className="w-3 h-3 text-white mr-2 shrink-0"/>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
      <div className="bg-primary-dark">
        <Container className="py-6">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <Copyright startYear={2020} companyName="Web developer notes" className="text-white text-center"/>
          </div>
        </Container>
      </div>
    </div>
  )
}
