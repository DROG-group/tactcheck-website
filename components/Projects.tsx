import React from "react"

const projects = [
  {
    title: "Bad News",
    partner: "Award Winner",
    description:
      "The flagship prebunking game that started it all. Players become fake news tycoons, learning the six degrees of manipulation.",
    stat: "15M+ players",
    tags: ["Prebunking", "Inoculation", "15+ languages"],
    url: "https://www.getbadnews.com",
  },
  {
    title: "Go Viral!",
    partner: "with Cambridge University",
    description:
      "A 5-minute game protecting against COVID-19 misinformation. Inoculate yourself against viral manipulation tactics.",
    stat: "2M+ players",
    tags: ["COVID-19", "Health", "5 min"],
    url: "https://www.goviralgame.com",
  },
  {
    title: "Harmony Square",
    partner: "Political Disinformation",
    description:
      "Become Chief Disinformation Officer in this game about political manipulation, trolling, and polarization.",
    stat: "500K+ players",
    tags: ["Politics", "Trolling", "15 min"],
    url: "https://harmonysquare.game",
  },
  {
    title: "Rig It",
    partner: "with GLOBSEC & Google.org",
    description:
      "A political simulator where you build a campaign, shape opinions, and discover how emotion and AI can influence democracy.",
    stat: "New",
    tags: ["Elections", "Deepfakes", "AI"],
    url: "https://www.rigitgame.com",
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="-ml-7 lg:-ml-24 w-screen px-7 lg:px-24 border-t border-dashed border-primary py-24"
    >
      <div className="max-w-5xl mx-auto">
        <div className="prose mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl">Born at DROG</h2>
          <p className="prose-lg">
            Award-winning games that have reached millions worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 not-prose">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-dashed border-primary flex flex-col hover:bg-primary hover:text-primary-content transition-colors group"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest opacity-60">
                    {project.partner}
                  </span>
                </div>
                <h3 className="font-serif text-xl mb-2">{project.title}</h3>
                <p className="opacity-70 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-dashed border-current opacity-50 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-serif text-sm opacity-80">
                    {project.stat}
                  </span>
                  <span className="text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                    Play &rarr;
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
