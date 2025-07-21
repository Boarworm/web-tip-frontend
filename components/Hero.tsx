"use client";

import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Container from "@/components/Container";
import ContainerTextFlip from "@/components/ContainerTextFlip";

export default function Hero() {
  return (
    <div className="pt-28 pb-16 flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden lg:h-screen">
      <Spotlight />
      <Container>
        <div className="">
          <Heading
            as="h1"
            variant="gradient"
            size="h1"
            color="light"
            className="text-center"
          >
            <div className="mb-2">Websites That Grow Your</div>
            <ContainerTextFlip />
          </Heading>
          <div className="my-10 text-neutral-300 text-center mx-auto max-w-[500px]">
            Turn ideas into scalable, user‑centric sites using Next.js +
            Laravel. Fast, modern, and built to convert.
          </div>
          <div className="grid grid-cols-1 gap-6 m-auto max-w-[200px] sm:grid-cols-2 sm:max-w-[400px]">
            <Button
              variant="gradient"
              color="light"
              size="md"
              href="/portfolio"
            >
              See my work
            </Button>
            <Button variant="default" color="light" size="md" href="/contact">
              Contact me
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
