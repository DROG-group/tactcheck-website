import Link from "next/link"
import React from "react"

function CTA() {
  return (
    <section id="get-involved" className="py-32 text-center prose mx-auto">
      <h1 className="font-serif">Join the Fight Against Disinformation</h1>
      <p className="prose-lg">
        Explore our documentation, contribute to the project, or reach out to
        learn more about how you can help protect the truth in the digital age.
      </p>
      <div className="flex flex-row space-x-4 mx-auto w-fit items-center">
        <Link
          href="https://docs.tactcheck.com"
          className="btn btn-primary no-underline text-primary-content"
          target="_blank"
        >
          Get Started
        </Link>
        <span>or</span>
        <Link
          href="https://glitch.tactcheck.com/public/local"
          className="btn btn-outline no-underline"
          target="_blank"
        >
          See Demo
        </Link>
      </div>
    </section>
  )
}

export default CTA
