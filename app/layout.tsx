import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "TactCheck by DROG",
  description: "Together, we can help protect the truth in the digital age.",
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
