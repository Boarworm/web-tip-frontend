"use client"

import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard"
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  image: string
  url: string
}

export default function CardPost({ title, image, url }: Props) {
  return (
    <Link href={url} className="block">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto p-6 border cursor-pointer transition-all duration-300">
          <CardItem translateZ="100" className="w-full">
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="h-60 w-full object-cover group-hover/card:shadow-xl transition-shadow duration-300"
            />
          </CardItem>
          <CardItem translateZ="50" className="mt-4 text-xl font-bold text-neutral-600 dark:text-white">
            {title}
          </CardItem>
        </CardBody>
      </CardContainer>
    </Link>
  )
}
