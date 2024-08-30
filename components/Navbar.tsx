import Link from "next/link"
import React from "react"

function Navbar() {
  return (
    <div className="flex flex-row py-5 justify-center items-center -ml-7 lg:-ml-24 w-screen px-7 lg:px-24 border-b border-primary border-dashed">
      <Link href="/">
        <h1 className="font-serif font-bold uppercase text-3xl">TactCheck</h1>
      </Link>
      <div className="grow" />
    </div>
  )
}

export default Navbar
