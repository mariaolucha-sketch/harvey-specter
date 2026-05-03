"use client";

import { useState } from "react";

// Image URLs expire after 7 days — replace with permanently hosted assets
const DESKTOP_IMAGE =
  "https://www.figma.com/api/mcp/asset/eb4f9cf9-1fb4-4779-8ec6-0e8d5ae59999";
const MOBILE_IMAGE =
  "https://www.figma.com/api/mcp/asset/0dc85b9f-f28a-4403-bea5-b3fece031980";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"] as const;

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden h-[635px] md:h-[847px] flex flex-col px-4 pb-6 md:px-8 md:pb-[152px]">

        {/* Desktop background — exact Figma pixel dimensions and position */}
        <div
          className="hidden md:block absolute pointer-events-none"
          style={{
            width: "2441.925px",
            height: "1434.671px",
            aspectRatio: "80 / 47",
            left: "-500.963px",
            bottom: "-382.671px",
          }}
        >
          <img
            src={DESKTOP_IMAGE}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-bottom select-none"
            style={{ maxWidth: "none" }}
          />
        </div>

        {/*
          Mobile background — matches Figma mobile frame positioning:
          - left: 0, right: -39.47% (extends 148px beyond the right edge)
          - fixed height 847px (same as Figma element)
          - center at 50% of the 635px section → top = -106px
        */}
        <div
          className="md:hidden absolute -translate-y-1/2 pointer-events-none"
          style={{
            height: "847px",
            left: "0",
            right: "-39.47%",
            top: "50%",
          }}
        >
          <img
            src={MOBILE_IMAGE}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover select-none"
            style={{ maxWidth: "none" }}
          />
        </div>

        {/* Blur overlay — gradient mask so it fades in from transparent at top */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 45%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 45%)",
          }}
        />

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between py-6 shrink-0">
          <span className="font-semibold text-base tracking-[-0.04em] capitalize text-black">
            H.Studio
          </span>

          {/* Desktop: full nav links */}
          <ul className="hidden md:flex gap-14 font-semibold text-base tracking-[-0.04em] capitalize text-black list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:opacity-60 transition-opacity"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop: CTA */}
          <button className="hidden md:flex items-center bg-black text-white text-sm tracking-[-0.04em] px-4 py-3 rounded-3xl font-medium cursor-pointer hover:opacity-80 transition-opacity">
            Let&apos;s talk
          </button>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden cursor-pointer"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="2" y1="6"  x2="22" y2="6"  stroke="black" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="2" y1="12" x2="22" y2="12" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="2" y1="18" x2="22" y2="18" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </nav>

        {/* Hero content — relative (no z-index) so mix-blend-overlay blends with the photo */}
        <div className="relative flex-1 flex flex-col justify-end">
          <div className="flex flex-col gap-6 md:gap-0">

            {/* Headline */}
            <div>
              <p className="font-mono text-sm text-white mix-blend-overlay uppercase leading-[1.1] text-center md:text-left md:px-[18px]">
                [ Hello i&apos;m ]
              </p>
              {/*
                Mobile: text wraps naturally — "Harvey" on line 1, "Specter" on line 2
                Desktop: single line with non-breaking spaces between words
              */}
              <h1 className="font-medium text-[25.6vw] md:text-[13.75vw] text-white mix-blend-overlay capitalize tracking-[-0.07em] leading-[0.8] md:leading-[1.05] text-center md:-mt-[0.05em]">
                Harvey
                <span className="hidden md:inline">&nbsp;&nbsp;&nbsp;</span>
                <br className="md:hidden" />
                Specter
              </h1>
            </div>

            {/* Bottom section — centered on mobile, right-aligned on desktop */}
            <div className="flex justify-center md:justify-end">
              <div className="flex flex-col gap-[17px] w-[293px] md:w-[294px]">
                <p className="font-bold italic text-sm tracking-[-0.04em] uppercase text-[#1f1f1f] leading-[1.1]">
                  H.Studio is a{" "}
                  <span className="font-normal not-italic">full-service</span>{" "}
                  creative studio creating beautiful digital experiences and
                  products. We are an{" "}
                  <span className="font-normal not-italic">award winning</span>{" "}
                  design and art group specializing in branding, web design and
                  engineering.
                </p>
                <button className="self-start bg-black text-white text-sm tracking-[-0.04em] px-4 py-3 rounded-3xl font-medium cursor-pointer hover:opacity-80 transition-opacity">
                  Let&apos;s talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col px-4 py-6">
          <div className="flex items-center justify-between shrink-0">
            <span className="font-semibold text-base tracking-[-0.04em] capitalize text-white">
              H.Studio
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="4" x2="4"  y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-4xl tracking-[-0.04em] capitalize text-white hover:opacity-60 transition-opacity"
              >
                {link}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setMenuOpen(false)}
            className="shrink-0 self-start bg-white text-black text-sm tracking-[-0.04em] px-4 py-3 rounded-3xl font-medium cursor-pointer"
          >
            Let&apos;s talk
          </button>
        </div>
      )}
    </>
  );
}
