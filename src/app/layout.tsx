
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/context";

import { headers } from 'next/headers'

import { cookieToInitialState } from 'wagmi'

import { config } from '../components/connection/config'
import AppKitProvider from '../components/connection/connectionProvider'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body>
      <ThemeProvider>          
        <AppKitProvider initialState={initialState}>{children}</AppKitProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}