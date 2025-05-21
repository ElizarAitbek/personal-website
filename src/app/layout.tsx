import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/theme-context";

export const metadata: Metadata = {
  title: "Elizar Aitbek | Frontend Developer",
  description:
    "Personal portfolio website of Elizar Aitbek, a Frontend Developer specializing in React, TypeScript, and modern web technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
