import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import type { Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuMobile from "@/components/MenuMobile";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "black",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased flex flex-col min-h-screen text-sm sm:text-base"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header className="top-0 fixed z-10" />
          <MenuMobile />
          <main id="main-content" className="flex-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
