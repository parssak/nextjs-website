import { cn } from "@/lib/utils";

export const FancyGradient = ({
  shouldParty,
  className
}: {
  shouldParty?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn("pointer-events-none fixed inset-x-0 top-0 z-0", className)}>
      <div
        aria-hidden="true"
        className={`absolute 
        transition-all
        duration-[3000ms]
        ${shouldParty ? "animate-hue-rotate h-screen" : "h-72"}
        -inset-x-2
        -top-4
        blur
        bg-gradient-to-tr
        from-[#FFB67D0a]
        via-[#b38f630e]
        to-[#ffa3ea99]
        dark:from-[#0B1F39]
        dark:to-[#5895AE88]
        dark:via-[#a13b1022]
        saturate-200
        contrast-150
        dark:contrast-100`}
      />
      <div
        aria-hidden="true"
        className={`absolute 
        transition-all
        duration-[3000ms]
        ${shouldParty ? "animate-hue-rotate h-screen" : "h-72"}
        -inset-x-2
        -top-4
        blur
        bg-gradient-to-tl
        from-[#D58AA90e]
        via-[#ffb48140]
        to-[#8eecffa0]
        
        dark:from-[#0B1F39]
        dark:to-[#5895AE88]
        dark:via-[#EF6D3622]
        saturate-200
        contrast-150
        dark:contrast-100`}
      />

      <div
        aria-hidden="true"
        className={`
        absolute inset-x-0 top-0
        transition-all
        duration-[3000ms]
        
        ${shouldParty ? "h-screen via-background" : "h-72 dark:via-background/80"}
        
        bg-gradient-to-t from-background to-background/20`}
      />

      <div className="grain opacity-70 fixed inset-0" />
    </div>
  );
};
