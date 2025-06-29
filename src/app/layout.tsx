import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mayank Savaliya - Portfolio",
  description: "Computer Science Student, Competitive Programmer, Full-Stack Developer",
  keywords: ["Mayank Savaliya", "Portfolio", "Computer Science", "Competitive Programming", "Full-Stack Developer"],
  authors: [{ name: "Mayank Savaliya" }],
  creator: "Mayank Savaliya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mayanksavaliya.me",
    title: "Mayank Savaliya - Portfolio",
    description: "Computer Science Student, Competitive Programmer, Full-Stack Developer",
    siteName: "Mayank Savaliya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Savaliya - Portfolio",
    description: "Computer Science Student, Competitive Programmer, Full-Stack Developer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 