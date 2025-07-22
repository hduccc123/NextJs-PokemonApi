import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavComponent from "./components/NavComponent";
import Footer from "./components/FooterComponent";
import ThemeToggle from "./components/ChangeThemeToggle";
import { Providers } from "./Providers";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";
import ScrollToTopButton from "./components/ScrollTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokemon Library",
  description: "A comprehensive library of Pokemon information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <div className="min-h-screen bg-background text-foreground">
            <NavComponent />
            <div className="flex">
              <LeftComponent />
              <div className="flex-2">
                {children}
              </div>
              <ScrollToTopButton />
              <RightComponent />
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
