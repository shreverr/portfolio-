"use client"
import { projects } from "../data"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import AnimateIn from "./AnimateIn"

export default function ProjectsSection() {
  return (
    <section className="mt-10">
      <p className="text-muted-foreground text-[11px] font-medium uppercase tracking-widest mb-4">
        Projects / Works
      </p>

      <div className="grid grid-cols-2 gap-3">
        {projects.map((project, i) => (
          <AnimateIn key={project.id} delay={i * 80}>
            <a href={project.href} className="group block h-full">
              <Card className="overflow-hidden h-full hover:border-border transition-all duration-200 group-hover:-translate-y-0.5">
                {/* Screenshot area */}
                <div
                  className="relative h-[120px] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]}, ${project.gradient[2]})`,
                  }}
                >
                  {/* Fake browser chrome */}
                  <div className="absolute top-0 left-0 right-0 h-5 bg-black/40 backdrop-blur-sm flex items-center px-2 gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/70" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                    <div className="w-2 h-2 rounded-full bg-green-500/70" />
                    <div className="flex-1 mx-2 h-2.5 rounded bg-white/10 text-[7px] text-white/40 flex items-center px-1.5 overflow-hidden">
                      {project.name.toLowerCase()}.dev
                    </div>
                  </div>

                  {/* Fake UI lines */}
                  <div className="absolute inset-0 pt-7 px-3 pb-2 flex flex-col gap-1.5 opacity-30">
                    <div className="h-2 rounded bg-white/40 w-2/3" />
                    <div className="h-1.5 rounded bg-white/25 w-full" />
                    <div className="h-1.5 rounded bg-white/25 w-4/5" />
                    <div className="h-1.5 rounded bg-white/25 w-3/5" />
                    <div className="flex gap-2 mt-1">
                      <div className="h-5 rounded bg-white/30 w-14" />
                      <div className="h-5 rounded bg-white/15 w-10" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="absolute top-6 right-2 text-[10px] text-white/60 bg-black/40 rounded-full px-1.5 py-0.5 flex items-center gap-1">
                    ⭐ {project.stars}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <p className="text-foreground text-[13px] font-semibold mb-1 leading-tight">{project.name}</p>
                  <p className="text-muted-foreground text-[11.5px] leading-relaxed mb-2 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] px-1.5 py-0 border-border/50 text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </a>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
