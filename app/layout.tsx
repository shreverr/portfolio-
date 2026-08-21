import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Shreshth Verma — Full-Stack & AI Engineer",
  description:
    "Portfolio of Shreshth Verma, Full-Stack & AI Engineer and Co-Founder of Olange. AI systems, browser automation, and scalable backend infrastructure.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}>
      <Analytics/>
      <body>{children}</body>
    </html>
  )
}
