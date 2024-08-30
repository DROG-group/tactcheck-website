import Link from "next/link"
import React from "react"

function Tiles() {
  return (
    <div
      className="flex flex-col w-screen border-b border-t border-primary mt-32"
      id="learn"
    >
      <div className="flex flex-col lg:flex-row w-full">
        <section id="about" className="py-32 px-7 bg-primary w-full lg:w-1/2">
          <div className="prose mx-auto">
            <h1 className="font-serif text-primary-content">
              The Growing Threat of Digital Deception
            </h1>
            <p className="text-primary-content prose-lg">
              Propaganda, hoaxes, and disinformation are proliferating at an
              alarming rate. These tactics are not just misleading—they are
              actively distorting reality and manipulating public perception.
              The digital battlefield is real, with far-reaching consequences
              that threaten the integrity of our society and the stability of
              our global community. As these deceptive practices evolve, the
              urgency to recognize and combat them becomes more critical than
              ever.
            </p>
          </div>
        </section>

        <section id="impact" className="py-32 px-7 w-full lg:w-1/2">
          <div className="prose mx-auto">
            <h1 className="font-serif">The Impact of Disinformation</h1>
            <p className="prose-lg">
              Disinformation is far more than just a digital annoyance; it has
              the power to sway elections, ignite conflicts, and erode public
              trust. The consequences of false information are profound,
              threatening the very foundations of democracy and social
              stability. As the stakes continue to rise, it is essential to
              grasp the real-world implications of disinformation and intensify
              our efforts to combat it. Understanding and addressing this threat
              is critical to preserving truth and integrity in our increasingly
              interconnected world.
            </p>
          </div>
        </section>
      </div>

      <div className="flex flex-col lg:flex-row w-full">
        <section
          id="features"
          className="py-32 px-7 w-full lg:w-1/2 bg-primary lg:bg-base-100"
        >
          <div className="prose mx-auto">
            <h1 className="font-serif text-primary-content lg:text-base-content">
              Introducing TactCheck
            </h1>
            <p className="prose-lg text-primary-content lg:text-base-content">
              TactCheck stands at the forefront of the fight against digital
              deception. Created by the{" "}
              <Link
                href="https://drog.group"
                className="link link-hover text-primary-content lg:text-base-content"
                target="_blank"
              >
                DROG Group
              </Link>
              , TactCheck simulates the widespread impact of propaganda and
              disinformation on social media platforms. By replicating these
              threats in a controlled and safe environment, TactCheck provides
              crucial insights into how these tactics manipulate public opinion
              and offers strategies to counteract them. This innovative tool is
              essential in our collective effort to understand and mitigate the
              dangers posed by online disinformation.
            </p>
          </div>
        </section>

        <section
          id="how-it-works"
          className="py-32 px-7 w-full lg:w-1/2 lg:bg-primary lg:text-primary-content"
        >
          <div className="prose mx-auto">
            <h1 className="font-serif lg:text-primary-content">
              How TactCheck Works
            </h1>
            <p className="prose-lg lg:text-primary-content">
              TactCheck utilizes Mastodon to create a controlled and safe
              environment for investigating the spread and societal impact of
              false information. Through these simulations, TactCheck reveals
              the underlying mechanics of disinformation campaigns, offering
              crucial insights that help in understanding and combating these
              threats more effectively. By examining how disinformation
              propagates, TactCheck equips us with the knowledge needed to
              safeguard truth in the digital landscape.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Tiles
