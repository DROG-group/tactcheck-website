import React from "react"

const audiences = [
  {
    role: "Researchers & Academics",
    description:
      "Run controlled experiments on disinformation spread. Publish reproducible results with full environment control.",
  },
  {
    role: "Government & Policy Makers",
    description:
      "Understand platform manipulation tactics before crafting regulation. Test interventions in a safe sandbox.",
  },
  {
    role: "Journalists & Fact-Checkers",
    description:
      "Go beyond debunking individual claims. Learn to recognise the tactical patterns behind disinformation campaigns.",
  },
  {
    role: "Educators & Trainers",
    description:
      "Build media literacy programmes with hands-on simulations. Let people experience how manipulation works, first-hand.",
  },
]

function Audience() {
  return (
    <section
      id="who"
      className="-ml-7 lg:-ml-24 w-screen px-7 lg:px-24 border-t border-dashed border-primary py-24"
    >
      <div className="max-w-5xl mx-auto">
        <div className="prose mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl">Who It's For</h2>
          <p className="prose-lg">
            TactCheck serves anyone serious about understanding how
            disinformation actually works.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose max-w-3xl mx-auto">
          {audiences.map((item) => (
            <div key={item.role} className="p-6">
              <h3 className="font-serif text-xl mb-2">{item.role}</h3>
              <p className="opacity-70 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Audience
