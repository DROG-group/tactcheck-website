"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import Marquee from "react-fast-marquee"

const images = [
  // landscape
  //   "https://images.unsplash.com/photo-1591924231526-2b47e79efed4",
  //   "https://images.unsplash.com/photo-1591622180684-b96c52ef3908",
  //   "https://images.unsplash.com/photo-1617731355275-cce5d98ddfbe",
  //   "https://images.unsplash.com/photo-1591698646894-1790b414f37d",
  //   "https://images.unsplash.com/photo-1590868899517-5082ebb31efe",

  // portrait
  "https://images.unsplash.com/photo-1591126494400-059d4ca8eb71",
  "https://images.unsplash.com/photo-1591819433762-8038a931c554",
  "https://images.unsplash.com/photo-1590940343077-256fb4ef5f92",
  "https://images.unsplash.com/photo-1616164942292-f9f21a8ec3f3",
  "https://images.unsplash.com/photo-1591486086572-2e8c24ed366c",
  "https://images.unsplash.com/photo-1591924231907-7f0b8dff6c93",
  "https://images.unsplash.com/photo-1590962413399-bdd0bdb8dfbb",
  "https://images.unsplash.com/photo-1615830459766-9a6bf32d26c3",
  "https://images.unsplash.com/photo-1621207849174-ef5527eb2bf1",
  "https://images.unsplash.com/photo-1590962375046-54096fc0b60d",
  "https://images.unsplash.com/photo-1590962375585-e93dbac1a390",
  "https://images.unsplash.com/photo-1591622180903-52153d40b31f",
  "https://images.unsplash.com/photo-1591759220900-8210f29eb1f5",
  "https://images.unsplash.com/photo-1591902075486-955c784e3d1d",
  "https://images.unsplash.com/photo-1591888984085-be076a88917d",
]

function Header() {
  return (
    <div className="flex flex-col w-full h-full mt-20">
      <div className="flex flex-col prose items-center justify-center mx-auto">
        <h1 className="font-serif text-center text-5xl">
          TactCheck: Uncovering The Unseen Side of Social Media!
        </h1>
        <p className="prose-lg text-center">
          We know it might sound dramatic, but the stakes are real. Let us show
          you why this fight is more critical than ever.
        </p>
        <button
          onClick={(e) => {
            e.preventDefault()
            document.querySelector("#learn")?.scrollIntoView({
              behavior: "smooth",
            })
          }}
          className="btn btn-primary text-primary-content no-underline mt-10"
        >
          Learn More
        </button>
      </div>
      <Marquee
        speed={100}
        className="-ml-7 lg:-ml-24 !w-screen h-[50vh] overflow-hidden mt-16"
      >
        {images.map((val) => (
          <Image
            key={val}
            src={val}
            alt="Header"
            width={500}
            height={1000}
            className="grayscale overflow-hidden"
          />
        ))}
      </Marquee>
    </div>
  )
}

export default Header
