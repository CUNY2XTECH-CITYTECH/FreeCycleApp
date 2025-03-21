import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import { frontendConfig } from './config/frontend.ts';
import { SuperTokensInit } from "./components/supertokensInit";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SuperTokensInit>
        <body className={inter.className}>{children}</body>
      </SuperTokensInit>
    </html>
  )
}