export default function Footer() {
  return (
    <footer className="bg-black overflow-hidden">

      {/*
        ── Mobile ────────────────────────────────────────────────────────────
        flex-col, gap-12 (48px) between top section and bottom section.
      */}
      <div className="md:hidden px-4 pt-12 flex flex-col gap-12">

        {/* Top: CTA + social links + divider */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {/* CTA */}
            <div className="flex flex-col gap-3">
              <p className="font-light italic text-2xl text-white tracking-[-0.04em] uppercase leading-[1.1]">
                Have a <span className="font-black not-italic">project</span> in mind?
              </p>
              <button className="self-start border border-white text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-[24px] cursor-pointer">
                Let&apos;s talk
              </button>
            </div>
            {/* All 4 social links stacked */}
            <div className="flex flex-col gap-1">
              {["Facebook", "Instagram", "X.COM", "Linkedin"].map((s) => (
                <p key={s} className="text-[18px] text-white tracking-[-0.04em] uppercase leading-[1.1]">{s}</p>
              ))}
            </div>
          </div>
          <div className="w-full border-t border-white/20" />
        </div>

        {/* Bottom: legal + [ Coded By Claude ] + H.Studio */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-[34px] text-xs text-white uppercase tracking-[-0.04em]">
            <span className="underline">Licences</span>
            <span className="underline">Privacy policy</span>
          </div>
          <div className="overflow-hidden">
            <p className="font-mono text-[10px] text-white uppercase mb-3">[ Coded By Claude ]</p>
            <p className="font-semibold text-[23.4vw] text-white capitalize leading-[0.8] tracking-[-0.06em] whitespace-nowrap">
              H.Studio
            </p>
          </div>
        </div>

      </div>

      {/*
        ── Desktop ───────────────────────────────────────────────────────────
        flex-col, gap-[8.333vw] (120px/1440) between top and bottom sections.
        px-[2.222vw] (32px/1440), pt-[3.333vw] (48px/1440).
      */}
      <div className="hidden md:flex flex-col gap-[8.333vw] px-[2.222vw] pt-[3.333vw]">

        {/* Top: three-column row + divider */}
        <div className="flex flex-col gap-[3.333vw]">
          <div className="flex items-start justify-between">

            {/* Left: CTA + button */}
            <div className="flex flex-col gap-3 w-[20.694vw]">
              <p className="font-light italic text-2xl text-white tracking-[-0.04em] uppercase leading-[1.1]">
                Have a <span className="font-black not-italic">project</span> in mind?
              </p>
              <button className="self-start border border-white text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-[24px] cursor-pointer hover:bg-white hover:text-black transition-colors">
                Let&apos;s talk
              </button>
            </div>

            {/* Center: Facebook + Instagram */}
            <div className="flex flex-col text-center w-[20.694vw]">
              <p className="text-[18px] text-white tracking-[-0.04em] uppercase leading-[1.1]">Facebook</p>
              <p className="text-[18px] text-white tracking-[-0.04em] uppercase leading-[1.1]">Instagram</p>
            </div>

            {/* Right: X.com + LinkedIn */}
            <div className="flex flex-col text-right w-[20.694vw]">
              <p className="text-[18px] text-white tracking-[-0.04em] uppercase leading-[1.1]">x.com</p>
              <p className="text-[18px] text-white tracking-[-0.04em] uppercase leading-[1.1]">Linkedin</p>
            </div>

          </div>
          <div className="w-full border-t border-white/20" />
        </div>

        {/*
          Bottom: H.Studio (overflows right) + legal links (bottom-right).

          H.Studio container: 75.903vw × 15.208vw (1093px × 219px at 1440px).
          Text at 20.139vw (290px) bleeds past the right edge — overflow-hidden
          clips it. "[ Coded By Claude ]" rotated -90deg at the left edge.

          items-end aligns H.Studio container and legal links at their bottoms.
        */}
        <div className="flex items-end justify-between">

          {/* H.Studio container */}
          <div
            className="relative overflow-hidden shrink-0"
            style={{ width: "75.903vw", height: "15.208vw" }}
          >
            {/* [ Coded By Claude ] — rotated label, left edge, vertically centered */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center"
              style={{ width: "15px", height: "11.111vw" }}
            >
              <p className="-rotate-90 font-mono text-[10px] text-white uppercase whitespace-nowrap">
                [ Coded By Claude ]
              </p>
            </div>
            {/* H.Studio — vertically centered, bleeds right */}
            <p
              className="absolute top-1/2 -translate-y-1/2 left-0 font-semibold text-[20.139vw] text-white capitalize leading-[0.8] tracking-[-0.06em] whitespace-nowrap"
            >
              H.Studio
            </p>
          </div>

          {/* Legal links — bottom-right corner */}
          <div className="flex items-center gap-[2.361vw] pb-[2.222vw] text-xs text-white uppercase tracking-[-0.04em] whitespace-nowrap shrink-0">
            <span className="underline">Licences</span>
            <span className="underline">Privacy policy</span>
          </div>

        </div>

      </div>

    </footer>
  );
}
