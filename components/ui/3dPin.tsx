"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState("rotateX(0deg)");

  const onMouseEnter = () => {
    setTransform("rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("rotateX(0deg) scale(1)");
  };

  return (
    <a
      className={cn(
        "flex relative group/pin z-50 cursor-pointer w-full mx-auto",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
      <div
        style={{
          display: "flex",
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="w-full"
      >
        <div
          style={{
            transform: transform,
          }}
          className=" p-2 sm:p-4 flex justify-start items-start rounded-xl sm:rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-neutral-900 border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden w-full"
        >
          <div className={cn("h-full relative z-50 w-full", className)}>
            {children}
          </div>
        </div>
      </div>
      <PinPerspective title={title} />
    </a>
  );
};

export const PinPerspective = ({ title }: { title?: string }) => {
  return (
    <motion.div className="pointer-events-none overflow-hidden w-full h-full absolute inset-0 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <div className="relative flex flex-col space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-2 sm:px-4 ring-1 ring-white/10">
            <span className="relative z-20 text-white text-xs sm:text-sm font-bold inline-block py-0.5 truncate">
              {title}
            </span>
            <span className="relative -bottom-0.5 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </div>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute inset-0 h-full"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 h-32 w-32 sm:h-40 sm:w-40 md:h-[11.25rem] md:w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 h-32 w-32 sm:h-40 sm:w-40 md:h-[11.25rem] md:w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 h-32 w-32 sm:h-40 sm:w-40 md:h-[11.25rem] md:w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <div className="bg-yellow-200">
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[0px] w-px h-full blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[0px] w-px h-full" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[0px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[0px] w-[2px] h-[2px] rounded-full z-40" />
        </div>
      </div>
    </motion.div>
  );
};
