import { experiences } from "../data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Badge } from "./ui/badge"

export default function ExperienceSection() {
  return (
    <section className="mt-10">
      <p className="text-muted-foreground text-[11px] font-medium uppercase tracking-widest mb-4">
        Professional Experience
      </p>

      <Accordion type="single" collapsible className="w-full">
        {experiences.map((exp) => (
          <AccordionItem key={exp.id} value={exp.id} className="border-border/60">
            <AccordionTrigger className="py-4 hover:no-underline group">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {/* Company icon */}
                <div
                  className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-[12px] shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${exp.iconBg[0]}, ${exp.iconBg[1]})`,
                  }}
                >
                  {exp.companyIcon}
                </div>

                {/* Company + role */}
                <div className="text-left min-w-0 flex-1">
                  <p className="text-foreground text-[14px] font-medium leading-tight truncate group-hover:text-foreground/90">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground text-[12px] truncate">{exp.role}</p>
                </div>

                {/* Period + current badge */}
                <div className="shrink-0 text-right mr-2">
                  <p className="text-muted-foreground text-[12px]">{exp.period}</p>
                  {exp.current && (
                    <span className="inline-block mt-0.5 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-1.5 py-px">
                      Current
                    </span>
                  )}
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="pl-12 space-y-4">
                <ul className="space-y-1.5">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-[13px] leading-relaxed">
                      <span className="mt-[6px] shrink-0 w-1 h-1 rounded-full bg-muted-foreground/50" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[11px] text-muted-foreground border-border/60">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
