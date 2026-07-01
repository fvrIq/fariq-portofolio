"use client";



import { useState } from "react";

import { Geist, Geist_Mono } from "next/font/google";

import "@/app/globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import { HeroHeader } from "@/components/header";

import Footer from "@/components/footer";

import LoadingScreen from "@/components/motion-primitives/LoadingScreen";

import { AnimatePresence } from "motion/react";



const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });



export default function RootLayout({ children }: { children: React.ReactNode }) {

  const [loading, setLoading] = useState(true);



  return (

    <html lang="en" suppressHydrationWarning>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <AnimatePresence mode="wait">

            {loading ? (

              <LoadingScreen key="loading" onFinish={() => setLoading(false)} />

            ) : (

              <div key="content">

                <HeroHeader />

                {children}

                <Footer />

              </div>

            )}

          </AnimatePresence>

        </ThemeProvider>

      </body>

    </html>

  );

}