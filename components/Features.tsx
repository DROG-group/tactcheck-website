import React from "react"

const features = [
  {
    title: "Load Scenarios",
    description:
      "Set up controlled experiments with pre-built or custom scenarios. Study specific disinformation tactics in isolation or combination.",
  },
  {
    title: "Import Twitter Archives",
    description:
      "Bring in correctly dated Twitter/X datasets and replay real-world events in a safe, sandboxed social media environment.",
  },
  {
    title: "Simulate a VLOP",
    description:
      "Mimic the dynamics of a Very Large Online Platform. See how content spreads, algorithms amplify, and narratives take hold at scale.",
  },
  {
    title: "Mothbook",
    description:
      "A Facebook-like simulation layer. Study platform-specific dynamics — groups, shares, reactions — in a controlled research setting.",
  },
  {
    title: "AI Bots & Adaptive Cards",
    description:
      "Deploy AI-driven bot accounts with world-building adaptive cards. Model coordinated inauthentic behaviour and test detection strategies.",
  },
  {
    title: "Built on Mastodon",
    description:
      "A federated, open-source foundation you can inspect, extend, and trust. Full control over the environment, no black boxes.",
  },
]

function Features() {
  return (
    <section id="features" className="py-24 w-full max-w-5xl mx-auto">
      <div className="prose mx-auto text-center mb-12">
        <h2 className="font-serif text-3xl lg:text-4xl">
          A Research-Grade Simulation Platform
        </h2>
        <p className="prose-lg">
          Everything you need to study disinformation tactics in a safe,
          controllable environment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="border border-dashed border-primary p-6 flex flex-col"
          >
            <h3 className="font-serif text-xl mb-3">{feature.title}</h3>
            <p className="opacity-70 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
