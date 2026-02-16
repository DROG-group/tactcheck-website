import CTA from "@/components/CTA"
import Header from "@/components/Header"
import Problem from "@/components/Problem"
import Features from "@/components/Features"
import Projects from "@/components/Projects"
import Audience from "@/components/Audience"
import React from "react"

function page() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Problem />
      <Features />
      <Projects />
      <Audience />
      <CTA />
    </main>
  )
}

export default page
