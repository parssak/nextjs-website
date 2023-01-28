import { cx } from "utils";

export const FancyGradient = ({
  shouldParty,
  className
}: {
  shouldParty?: boolean;
  className?: string;
}) => {
  return (
    <div className={cx("pointer-events-none fixed inset-x-0 top-0 z-0", className)}>
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
        via-[#B363750e]
        to-[#C6ACCD99]
        dark:from-[#0B1F39]
        dark:to-[#5895AE88]
        dark:via-[#EF6D3622]
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
        via-[#D58AA940]
        to-[#7690BEa0]
        
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
        
        ${shouldParty ? "h-screen via-theme-pure" : "h-72 via-theme-pure/60 "}
        
        bg-gradient-to-t from-theme-pure to-theme-pure/20`}
      />

      {/* Global grain */}
    </div>
  );
};
