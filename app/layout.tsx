import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Moinuddin Ahamed - Software Developer",
  description:
    "An aspiring Software Developer who builds intelligent and scalable systems, combining creativity, logic, and a user-focused approach to solve real-world problems.",
  keywords: ["Software Developer", "AI/ML", "Full-Stack Development", "Moinuddin Ahamed"],
  authors: [{ name: "Moinuddin Ahamed" }],
  openGraph: {
    title: "Moinuddin Ahamed - Software Developer",
    description: "An aspiring Software Developer who builds intelligent and scalable systems",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
