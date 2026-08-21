import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const fontDir = join(process.cwd(), 'public/fonts')
const playfairItalic = readFileSync(join(fontDir, 'playfair-italic-static.ttf'))
const interRegular = readFileSync(join(fontDir, 'inter-regular-static.ttf'))
const interBold = readFileSync(join(fontDir, 'inter-bold-static.ttf'))

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const name = searchParams.get('name')?.slice(0, 40) ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 12px)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 88px',
          fontFamily: 'Inter',
          position: 'relative',
        }}
      >
        {/* Glow accent — top-right */}
        <div
          style={{
            position: 'absolute',
            top: -160,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(139,92,246,0.20) 0%, transparent 65%)',
          }}
        />

        {/* HOOK headline — Inter bold w/ italic name, the click bait */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            fontSize: 76,
            fontWeight: 600,
            color: '#f5f5f5',
            letterSpacing: '-2px',
            lineHeight: 1.05,
            marginBottom: 36,
            maxWidth: 1020,
          }}
        >
          {name ? (
            <>
              <span>{name}, want an AI engineer who ships?</span>
            </>
          ) : (
            <span>Full-stack &amp; AI engineer who ships.</span>
          )}
        </div>

        {/* Big stats row */}
        <div
          style={{
            display: 'flex',
            gap: 14,
            alignItems: 'baseline',
            marginBottom: 44,
            fontSize: 32,
            color: '#c4c4c4',
            fontWeight: 600,
          }}
        >
          <span style={{ color: '#a78bfa' }}>600K+</span>
          <span style={{ color: '#7a7a7a' }}>jobs/month</span>
          <span style={{ color: '#3a3a3a', margin: '0 12px' }}>·</span>
          <span style={{ color: '#a78bfa' }}>500+</span>
          <span style={{ color: '#7a7a7a' }}>users</span>
          <span style={{ color: '#3a3a3a', margin: '0 12px' }}>·</span>
          <span style={{ color: '#a78bfa' }}>&lt;500ms</span>
          <span style={{ color: '#7a7a7a' }}>voice AI</span>
        </div>

        {/* Attribution row — italic name + CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'Playfair',
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 44,
                color: '#f5f5f5',
                letterSpacing: '-1px',
                lineHeight: 1,
              }}
            >
              Shreshth Verma
            </span>
            <span style={{ fontSize: 20, color: '#7a7a7a', marginTop: 10 }}>
              Co-Founder @ Olange · Full-Stack &amp; AI
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 24px',
              borderRadius: 999,
              background: 'rgba(139,92,246,0.15)',
              border: '1px solid rgba(139,92,246,0.4)',
              fontSize: 22,
              color: '#c4b5fd',
              fontWeight: 600,
            }}
          >
            See Portfolio →
          </div>
        </div>

        {/* Watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            left: 88,
            fontSize: 16,
            color: '#3a3a3a',
            letterSpacing: '1px',
          }}
        >
          shrever.tech
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: interRegular, style: 'normal', weight: 400 },
        { name: 'Inter', data: interBold, style: 'normal', weight: 700 },
        { name: 'Playfair', data: playfairItalic, style: 'italic', weight: 500 },
      ],
    }
  )
}
