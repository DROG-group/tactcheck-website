import Link from "next/link"
import React from "react"

function CTA() {
  return (
    <section className="py-32 text-center prose mx-auto">
      <h2 className="font-serif text-3xl lg:text-4xl">
        Ready to Check Tactics?
      </h2>
      <p className="prose-lg">
        TactCheck is developed by DROG Group. Get in touch to learn more,
        request access, or explore how TactCheck fits your research.
      </p>
      <div className="flex flex-row space-x-4 mx-auto w-fit items-center">
        <Link
          href="https://drog.group"
          className="btn btn-primary no-underline text-primary-content"
          target="_blank"
        >
          Visit DROG Group
        </Link>
      </div>
    </section>
  )
}

export default CTA
