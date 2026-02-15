import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "TactCheck — Check Tactics, Not Just Facts",
  description:
    "A Mastodon-based simulation environment for researchers to study disinformation tactics at scale. By DROG.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full min-h-screen px-7 lg:px-24">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
