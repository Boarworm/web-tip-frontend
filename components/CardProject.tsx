"use client"
import React from "react"
import { PinContainer } from "@/components/ui/3dPin"
import Image from "next/image"

interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function CardProject({ title, description, image, url }: Props) {
  return (
    <PinContainer
      title={url}
      href={url}
    >
      <div className="flex flex-col h-full p-4 text-slate-100/50 tracking-tight">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
          {title}
        </h3>
        <div className="grow text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500">{description}</span>
        </div>
        <div className="flex shrink-0 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </PinContainer>
  )
}
