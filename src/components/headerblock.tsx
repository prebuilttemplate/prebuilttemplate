"use client"
import { AnimatePresence,  } from "framer-motion";
import { CrossIcon, PreIcon } from "./icons";
import { CanvasRevealEffect } from "./ui/card-reveal-effect";

export default function HeaderBlock() {
  return (
    <div className="py-20 flex flex-col lg:flex-row items-center justify-center  w-full gap-4 mx-auto px-8">
    <div className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-4xl w-full mx-auto p-4 relative h-[30rem]">
      <CrossIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <CrossIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <CrossIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <CrossIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        <div className="h-full w-full absolute inset-0">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </div>
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          <PreIcon />
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          you are awesome!
        </h2>
      </div>
    </div>
  </div>
  )
}


