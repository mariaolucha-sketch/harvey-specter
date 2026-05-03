"use client";

import { useState, useRef, useEffect } from "react";

// Logo image assets expire after 7 days — replace with permanently hosted assets
const LOGO_STOJKOVIC = "https://www.figma.com/api/mcp/asset/d05ec7f5-9be3-4d2f-a637-18f26475979b";
const LOGO_WEBER     = "https://www.figma.com/api/mcp/asset/ad5af834-331e-43e4-8be5-e9436a94d30c";
const LOGO_JENKINS   = "https://www.figma.com/api/mcp/asset/6db494f6-3290-4d9e-b6f7-723b60f9a66f";
const LOGO_MARTINEZ  = "https://www.figma.com/api/mcp/asset/7af150fb-cf4a-4ffc-9840-ace0c0afe64d";

/*
  Desktop card specs (from Figma metadata, 1440px base):
    3769 Marko    – left=102px  top=142px  w=380.876  h=295.234  rotate=-6.85°
    3771 Lukas    – left=676px  top=272px  w=361.958  h=203.867  rotate=+2.9°   (BEHIND text)
    3770 Sarah    – left=305px  top=553px  w=363.132  h=280.316  rotate=+2.23°
    3772 Sofia    – left=987px  top=546px  w=366.766  h=228.169  rotate=-4.15°

  Scroll parallax factors (px at 100% section scroll through viewport):
  Positive → drifts down, negative → drifts up.
*/
const CARDS = [
  {
    id: "marko",
    logo: LOGO_STOJKOVIC,
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    author: "Marko Stojković",
    desktop: { left: "7.085vw", top: "9.861vw", w: "26.45vw", h: "20.50vw", rotate: "-6.85deg" },
    parallax: -50,
    mobileRotate: "-3.5deg",
    behindText: false,
  },
  {
    id: "lukas",
    logo: LOGO_WEBER,
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    author: "Lukas Weber",
    desktop: { left: "46.944vw", top: "18.889vw", w: "25.14vw", h: "14.16vw", rotate: "2.9deg" },
    parallax: 40,
    mobileRotate: "2deg",
    behindText: true, // Frame 3771 sits behind "Testimonials"
  },
  {
    id: "sarah",
    logo: LOGO_JENKINS,
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    author: "Sarah Jenkins",
    desktop: { left: "21.181vw", top: "38.403vw", w: "25.22vw", h: "19.47vw", rotate: "2.23deg" },
    parallax: -35,
    mobileRotate: "2.23deg",
    behindText: false,
  },
  {
    id: "sofia",
    logo: LOGO_MARTINEZ,
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    author: "Sofia Martínez",
    desktop: { left: "68.542vw", top: "37.917vw", w: "25.47vw", h: "15.84vw", rotate: "-4.15deg" },
    parallax: 55,
    mobileRotate: "-4.15deg",
    behindText: false,
  },
] as const;

function Card({ logo, quote, author }: { logo: string; quote: string; author: string }) {
  return (
    <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 w-full">
      <img src={logo} alt="" className="block w-auto max-w-[140px] max-h-9 object-contain object-left" />
      <p className="text-[#1f1f1f] text-lg leading-[1.3] tracking-[-0.04em]">{quote}</p>
      <p className="font-black text-base text-black tracking-[-0.04em] uppercase">{author}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  // ── Scroll parallax (desktop) ──────────────────────────────────────────────
  const sectionRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [parallaxProgress, setParallaxProgress] = useState(0.5);

  useEffect(() => {
    const update = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when section enters bottom of viewport, 1 when it exits the top
      const p = Math.max(0, Math.min(1, (vh - top) / (vh + height)));
      setParallaxProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── Mobile carousel ────────────────────────────────────────────────────────
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -50) setActiveIndex((i) => Math.min(i + 1, CARDS.length - 1));
    else if (delta > 50) setActiveIndex((i) => Math.max(i - 1, 0));
    touchStartX.current = null;
  };

  return (
    <section ref={sectionRef} className="bg-white">

      {/*
        ── Mobile ──────────────────────────────────────────────────────────────
        Matches Figma Image #13: first card mostly visible, second card peeking
        ~25% from right edge. Swipeable right-to-left. No dots.
        Card containers use Figma's exact widths (277px / 268px).
        Section overflow-hidden clips the peek card at the screen edge.
      */}
      <div
        className="md:hidden flex flex-col py-[16.41vw] gap-[8.21vw]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Heading — proportional vw font-size (64px at 390px viewport) */}
        <p className="px-4 font-medium text-[16.41vw] text-black tracking-[-0.07em] leading-[0.8] capitalize">
          Testimonials
        </p>

        {/*
          Carousel track.
          Each slide step = 267px (277px container − 10px overlap), so at index 0
          card 1 sits at 16px from left and card 2 peeks ~91px from right edge —
          matching the Figma layout in Image #13.
        */}
        <div className="overflow-x-hidden pt-5">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              paddingLeft: "16px",
              transform: `translateX(calc(-${activeIndex} * 267px))`,
            }}
          >
            {CARDS.map((card) => (
              <div
                key={card.id}
                className="shrink-0 flex items-center justify-center"
                style={{ width: "277px", marginRight: "-10px" }}
              >
                <div style={{ transform: `rotate(${card.mobileRotate})`, width: "260px" }}>
                  <Card logo={card.logo} quote={card.quote} author={card.author} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*
        ── Desktop ─────────────────────────────────────────────────────────────
        Section: 1440×987px → height = 68.542vw.
        "Testimonials" (218px) centered vertically via flex + py-[8.333vw]:
          120 + (747−218)/2 = 384.5px → matches Figma metadata.

        Z-order (bottom → top):
          1. Lukas Weber (3771)      — behind text (no z-index / z-0)
          2. "Testimonials" heading  — z-10
          3. Marko, Sarah, Sofia     — z-20 (above text)

        Scroll parallax: each card's container gets a translateY offset driven
        by the section's scroll progress through the viewport (Relume-style
        staggered drift). Cards move at independent speeds in opposite directions.
      */}
      <div
        className="hidden md:flex items-center justify-center relative px-[2.222vw] py-[8.333vw]"
        style={{ height: "68.542vw" }}
      >
        {CARDS.map((card) => {
          // Parallax offset: centred at progress=0.5, full range ±(factor/2)
          const drift = (parallaxProgress - 0.5) * card.parallax;

          return (
            <div
              key={card.id}
              className={`absolute flex items-center justify-center ${
                card.behindText ? "z-0" : "z-20"
              }`}
              style={{
                left: card.desktop.left,
                top: card.desktop.top,
                width: card.desktop.w,
                height: card.desktop.h,
                transform: `translateY(${drift}px)`,
                transition: "transform 0.1s linear",
              }}
            >
              <div style={{ transform: `rotate(${card.desktop.rotate})`, width: "24.51vw" }}>
                <Card logo={card.logo} quote={card.quote} author={card.author} />
              </div>
            </div>
          );
        })}

        {/* "Testimonials" — z-10 sits above Lukas (z-0) but below Marko/Sarah/Sofia (z-20) */}
        <p className="relative z-10 font-medium text-[13.75vw] text-black text-center tracking-[-0.07em] leading-[1.1] capitalize w-full">
          Testimonials
        </p>
      </div>

    </section>
  );
}
