import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "b.3kx | Profile",
  description: "Official profile page of b.3kx - YouTube, Instagram, Telegram",
  keywords: ["b.3kx", "profile", "social media", "youtube", "instagram", "telegram"],
  authors: [{ name: "b.3kx" }],
  openGraph: {
    title: "b.3kx | Profile",
    description: "Official profile page of b.3kx",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "b.3kx | Profile",
    description: "Official profile page of b.3kx",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}