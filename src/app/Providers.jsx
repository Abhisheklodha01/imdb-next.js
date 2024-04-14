"use client";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div
        className="text-gray-800 dark:text-gray-300 dark:bg-gray-800 min-h-screen
       select-none transition-colors duration-300"
      >
        {children}
      </div>
    </ThemeProvider>
  );
}

