import { profile, socials, achievements } from "./data"
import CoverHero from "./components/CoverHero"
import ExperienceSection from "./components/ExperienceSection"
import ProjectsSection from "./components/ProjectsSection"
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar"
import { Button } from "./components/ui/button"

function AchievementsSection() {
  return (
    <section className="mt-10">
      <p className="text-muted-foreground text-[11px] font-medium uppercase tracking-widest mb-4">
        Achievements
      </p>
      <div className="flex flex-col gap-2">
        {achievements.map((a, i) => (
          <div key={i} className="flex items-center gap-3 py-3 border-b border-border/60 last:border-0">
            <span className="text-yellow-400 text-lg shrink-0">🏆</span>
            <p className="text-foreground/80 text-[13.5px]">{a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SocialIcon({ icon, href, label }: { icon: string; href: string; label: string }) {
  const icons: Record<string, React.ReactNode> = {
    gh: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    x: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    li: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    at: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
      </svg>
    ),
  }

  return (
    <a
      href={href}
      title={label}
      className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-150"
    >
      {icons[icon]}
    </a>
  )
}

export default function Home() {
  const initials = profile.name.split(" ").map((n) => n[0]).join("")

  return (
    <main className="min-h-screen py-10 px-4">
      <div className="max-w-[480px] md:max-w-[620px] lg:max-w-[720px] mx-auto">

        {/* Cover */}
        <CoverHero />

        {/* Profile */}
        <div className="mt-4">
          {/* Avatar + socials row */}
          <div className="flex items-end justify-between mb-3">
            <Avatar className="w-[68px] h-[68px] border-[3px] border-background -mt-10 relative z-10 shadow-lg">
              <AvatarImage src="/pfp.png" alt={profile.name} />
              <AvatarFallback
                className="text-[18px] font-bold"
                style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
              >
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="flex items-center gap-1.5">
              {socials.map((s) => (
                <SocialIcon key={s.name} icon={s.icon} href={s.href} label={s.name} />
              ))}
            </div>
          </div>

          {/* Name */}
          <h1
            className="text-foreground text-[26px] italic leading-tight mb-0.5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {profile.name}
          </h1>

          {/* Role tagline — dots separated */}
          <p className="text-muted-foreground text-[12px] mb-4 tracking-wide">
            {profile.tagline}
          </p>

          {/* Bio */}
          <p className="text-foreground/80 text-[14px] leading-[1.75]">
            <span className="font-semibold text-foreground">I build from zero.</span>{" "}
            {profile.bio.replace("I build from zero. ", "")}
          </p>

        </div>

        {/* Experience */}
        <ExperienceSection />

        {/* Projects */}
        <ProjectsSection />

        {/* Achievements */}
        <AchievementsSection />

        {/* CTA footer */}
        <section className="mt-12 mb-6 text-center">
          <p className="text-muted-foreground text-[13px] mb-4">
            Have something in mind? Let&apos;s build it.
          </p>
          <Button
            asChild
            className="rounded-full px-6 text-[13px] font-semibold"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #6366f1)" }}
          >
            <a href="mailto:verma2007s@gmail.com">Get in touch ↗</a>
          </Button>
        </section>

        <p className="text-center text-muted-foreground/40 text-[11px] pb-6">
          Built with Next.js &amp; shadcn/ui
        </p>
      </div>
    </main>
  )
}
