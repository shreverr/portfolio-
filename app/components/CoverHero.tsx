import Image from "next/image"
import { quote, profile } from "../data"

export default function CoverHero() {
  return (
    <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "16/6" }}>
      {/* Real banner image */}
      <Image
        src="/banner.png"
        alt="Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Subtle dark overlay so quote text is readable */}
      {/* <div className="absolute inset-0 bg-black/30" /> */}

      {/* Quote overlay */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <p
          className="text-white/90 text-[13px] italic text-center px-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]"
          style={{ fontFamily: "var(--font-playfair)", letterSpacing: "0.01em" }}
        >
          {quote}
        </p>
      </div> */}

      {/* GitHub stars — top right
      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white/85 text-[12px] font-medium rounded-full px-2.5 py-1">
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        {profile.githubStars}
      </div> */}
    </div>
  )
}
