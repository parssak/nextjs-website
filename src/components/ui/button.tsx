import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex active:scale-95 ease-spring select-none  items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-tight transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "[&::selection]:bg-transparent [&::selection]:text-lime-900 bg-gradient-to-t mx-px from-lime-300 via-lime-400 to-lime-200 hover:brightness-125 border border-lime-300 ring-[0.75px] ring-lime-600 text-black/95 focus-visible:ring-lime-300",
        lime: "[&::selection]:bg-transparent [&::selection]:text-lime-900 bg-gradient-to-t mx-px from-lime-300 via-lime-400 to-lime-200 hover:brightness-125 border border-lime-300 ring-[0.75px] ring-lime-600 text-black/95 focus-visible:ring-lime-300 relative after:absolute after:inset-x-2 after:top-[6%] after:rounded-full after:bg-gradient-to-t after:from-transparent after:to-white/40 after:h-1.5",
        orange:
          "[&::selection]:bg-transparent [&::selection]:text-orange-900 bg-gradient-to-t mx-px from-orange-300 via-orange-400 to-orange-200 hover:brightness-125 border border-orange-300 ring-[0.75px] ring-orange-600 text-black/95 focus-visible:ring-orange-300 relative after:absolute after:inset-x-2 after:top-[6%] after:rounded-full after:bg-gradient-to-t after:from-transparent after:to-white/40 after:h-1.5",
        pink: "[&::selection]:bg-transparent [&::selection]:text-pink-900 bg-gradient-to-t mx-px from-pink-300 via-pink-400/80 to-pink-200 hover:brightness-125 border border-pink-300 ring-[0.75px] ring-pink-600 text-black/95 focus-visible:ring-pink-300 relative after:absolute after:inset-x-2 after:top-[6%] after:rounded-full after:bg-gradient-to-t after:from-transparent after:to-white/40 after:h-1.5",
        sky: "[&::selection]:bg-transparent [&::selection]:text-sky-900 bg-gradient-to-t mx-px from-sky-300 via-sky-300 to-sky-200 hover:brightness-125 border border-sky-300 ring-[0.75px] ring-sky-600 text-black/95 focus-visible:ring-sky-300 relative after:absolute after:inset-x-2 after:top-[6%] after:rounded-full after:bg-gradient-to-t after:from-transparent after:to-white/40 after:h-1.5",
        yellow:
          "[&::selection]:bg-transparent [&::selection]:text-yellow-900 bg-gradient-to-t mx-px from-yellow-300 via-yellow-400 to-yellow-200 hover:brightness-125 border border-yellow-300 ring-[0.75px] ring-yellow-600 text-black/95 focus-visible:ring-yellow-300 relative after:absolute after:inset-x-2 after:top-[6%] after:rounded-full after:bg-gradient-to-t after:from-transparent after:to-white/40 after:h-1.5",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-7 pb-px rounded-full gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
