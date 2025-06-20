"use client";
import React from "react";
import {Spotlight} from "@/components/ui/Spotlight";
import Button from "@/components/ui/Button";

export function Hero() {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight/>
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Crafting Modern Web Experiences<br/>
                    Laravel & React
                </h1>
                <p className="mt-4 mb-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    I build modern, efficient web applications with Laravel, React, and Next.js. Passionate about clean code, seamless UX, and helping businesses grow online.
                </p>
                <div className="flex justify-center flex-wrap gap-12">
                    <Button>Portfolio</Button>
                    <Button>Services</Button>
                </div>
            </div>
        </div>

    );
}
