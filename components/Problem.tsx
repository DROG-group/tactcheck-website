import React from "react"

function Problem() {
  return (
    <section className="-ml-7 lg:-ml-24 w-screen px-7 lg:px-24 bg-primary text-primary-content py-24">
      <div className="max-w-3xl mx-auto prose text-primary-content">
        <h2 className="font-serif text-3xl lg:text-4xl text-primary-content">
          Why Fact-Checking Falls Short
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 not-prose">
          <div>
            <h3 className="font-serif text-xl mb-2">Too Slow</h3>
            <p className="opacity-80">
              A correction reaches a fraction of the audience the original lie
              did. By the time you debunk it, the damage is done.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2">Whack-a-Mole</h3>
            <p className="opacity-80">
              Every false claim checked spawns three more. You can&rsquo;t fact-check
              your way out of an industrial-scale disinformation operation.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2">Misses the Point</h3>
            <p className="opacity-80">
              Disinformation works through <em>tactics</em>: emotional
              manipulation, coordinated amplification, narrative seeding. The
              individual claim is just the surface.
            </p>
          </div>
        </div>
        <p className="text-lg mt-8 opacity-90">
          TactCheck flips the approach: instead of chasing claims, we give
          researchers a controlled social media environment to study the tactics
          themselves.
        </p>
      </div>
    </section>
  )
}

export default Problem
