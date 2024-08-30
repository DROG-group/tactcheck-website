import Image from "next/image"
import Link from "next/link"
import React from "react"

function Quote() {
  return (
    <div className="">
      <figure className="max-w-screen-md mx-auto text-center mt-32">
        <svg
          className="w-10 h-10 mx-auto mb-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p className="text-2xl italic font-medium font-serif">
            &quot;A lie can travel halfway around the world while the truth is
            still putting on its shoes,&quot;
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <div className="flex items-center prose">
            <cite className="pe-3 font-base not-italic">
              &mdash; Mark Twain.{" "}
              <span className="italic">
                {" "}
                <Link
                  href="https://covidblog.oregon.gov/what-misinformation-looks-like-and-tools-to-combat-it/"
                  target="_blank"
                  className="link link-hover"
                >
                  Or did he?
                </Link>
              </span>
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default Quote
