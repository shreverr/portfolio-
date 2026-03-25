import { spotify } from "../data"
import { Card } from "./ui/card"

export default function SpotifyWidget() {
  return (
    <Card className="flex items-center gap-3 p-3 mt-5">
      {/* Album art */}
      <div
        className="relative shrink-0 w-[52px] h-[52px] rounded-lg overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${spotify.albumColor[0]}, ${spotify.albumColor[1]})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white/30 text-2xl select-none">♪</div>
        {/* Equalizer bars */}
        <div className="absolute bottom-1.5 left-1.5 flex items-end gap-[2px]">
          {[3, 5, 4, 6, 3].map((h, i) => (
            <div
              key={i}
              className="w-[2px] bg-white/60 rounded-full"
              style={{
                height: `${h * 2.5}px`,
                animation: `equalizer ${0.45 + i * 0.09}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.1}s`,
                transformOrigin: "bottom",
              }}
            />
          ))}
        </div>
      </div>

      {/* Track info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-muted-foreground text-[11px]">{spotify.status}</span>
        </div>
        <p className="text-foreground text-[14px] font-semibold truncate leading-tight">{spotify.track}</p>
        <p className="text-emerald-500 text-[12px] truncate">by {spotify.artist}</p>
      </div>

      {/* Play button */}
      <button className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
        <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </Card>
  )
}
