import CTA from "@/components/CTA"
import Header from "@/components/Header"
import Quote from "@/components/Quote"
import Tiles from "@/components/Tiles"
import React from "react"

function page() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Quote />
      <Tiles />
      <CTA />
    </main>
  )
}

export default page
