"use client";

import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider> {children}</TooltipProvider>
    </NextThemesProvider>
  );
}
