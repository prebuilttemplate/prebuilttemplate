import { CrossIcon } from "./icons"

interface BlockProps {
  showIcons?: [number, number, number, number];
  padding?: string;
}

export default function Block({ showIcons = [1, 1, 1, 1], padding = "py-20 px-8" }: BlockProps) {
  const baseClass = `flex flex-col lg:flex-row items-center justify-center  w-full gap-4 mx-auto ${padding}`;

  return (
    <div className={baseClass}>
      <div className="bg-black border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-4xl w-full mx-auto p-4 relative h-[30rem] relative">
        {showIcons[0] === 1 && <CrossIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />}
        {showIcons[1] === 1 && <CrossIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />}
        {showIcons[2] === 1 && <CrossIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />}
        {showIcons[3] === 1 && <CrossIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />}
        <div className="relative z-20">
          <div>hello</div>
        </div>
      </div>
    </div>
  )
}
