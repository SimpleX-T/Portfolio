"use client";

import { ThemeProvider } from "@/contexts/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
