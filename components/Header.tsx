"use client"

import React from "react"

function Header() {
  return (
    <div className="flex flex-col w-full h-full mt-20 mb-20">
      <div className="flex flex-col prose items-center justify-center mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest opacity-60 mb-0">
          Fact-checking isn't working.
        </p>
        <h1 className="font-serif text-center text-5xl lg:text-6xl mt-2">
          Check Tactics,
          <br />
          Not Just Facts.
        </h1>
        <p className="prose-xl text-center max-w-2xl">
          TactCheck is a Mastodon-based simulation environment where researchers
          study how disinformation spreads by examining the{" "}
          <strong>tactics</strong>, not chasing individual claims. Built with{" "}
          <strong>tact</strong>.
        </p>
        <div className="flex flex-row space-x-4 mx-auto w-fit items-center mt-4">
          <button
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#features")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
            className="btn btn-primary text-primary-content"
          >
            See What It Does
          </button>
          <a
            href="https://drog.group"
            target="_blank"
            className="btn btn-outline"
          >
            Visit DROG
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
