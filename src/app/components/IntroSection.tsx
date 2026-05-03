// All desktop values derived from 1440px design width — vw keeps them proportional
// Mobile values are fixed px (exact design spec)
const LINE_CLS =
  "font-light text-[32px] md:text-[6.667vw] text-black uppercase " +
  "tracking-[-0.08em] leading-[0.84] whitespace-nowrap";

export default function IntroSection() {
  return (
    <section className="px-4 md:px-[2.222vw] py-12 md:py-[8.333vw] bg-white">
      {/* ── Header: label + divider ── */}
      <div className="flex flex-col gap-3 items-end mb-6">
        <p className="font-mono text-sm text-[#1f1f1f] uppercase text-right">
          [ 8+ years in industry ]
        </p>
        <div className="w-full border-t border-[#1f1f1f]" />
      </div>

      {/* ── Stanza ── */}
      <div className="flex flex-col gap-2">

        {/* LINE 1 — "A creative director /"
            Desktop: row, "001" label to the right
            Mobile:  column, "001" label above, centered */}
        <div className="hidden md:flex items-start gap-3">
          <p className={LINE_CLS}>A creative director&nbsp;&nbsp;&nbsp;/</p>
          <span className="font-mono text-sm text-[#1f1f1f] mt-2 shrink-0">001</span>
        </div>
        <div className="md:hidden flex flex-col items-center gap-3">
          <span className="font-mono text-sm text-[#1f1f1f]">001</span>
          <p className={`${LINE_CLS} text-center`}>A creative director&nbsp;&nbsp;&nbsp;/</p>
        </div>

        {/* LINE 2 — "Photographer"
            Desktop: indented 214px → 14.861vw
            Mobile:  centered */}
        <div className="flex justify-center md:justify-start md:pl-[14.861vw]">
          <p className={LINE_CLS}>Photographer</p>
        </div>

        {/* LINE 3 — "Born & raised"
            Desktop: indented 610px → 42.361vw
            Mobile:  centered
            The & uses Playfair Display italic for the stylistic ampersand */}
        <div className="flex justify-center md:justify-start md:pl-[42.361vw]">
          <p className={LINE_CLS}>
            Born&nbsp;
            <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontWeight: 400 }}>
              &amp;
            </span>
            &nbsp;raised
          </p>
        </div>

        {/* LINE 4 — "on the south side"
            No indent on either breakpoint */}
        <div className="flex justify-center md:justify-start">
          <p className={LINE_CLS}>on the south side</p>
        </div>

        {/* LINE 5 — "of chicago."
            Desktop: indented 606px → 42.083vw, label absolutely positioned
            Mobile:  centered, label below */}
        <div className="relative flex flex-col items-center md:items-start md:pl-[42.083vw]">
          <p className={LINE_CLS}>of chicago.</p>

          {/* Desktop label — 1079px → 74.931vw, 26px → 1.806vw */}
          <p className="hidden md:block absolute font-mono text-sm text-[#1f1f1f] uppercase whitespace-nowrap left-[74.931vw] top-[1.806vw]">
            [ creative freelancer ]
          </p>

          {/* Mobile label — below "of chicago.", centered */}
          <p className="md:hidden font-mono text-sm text-[#1f1f1f] uppercase mt-3">
            [ creative freelancer ]
          </p>
        </div>
      </div>
    </section>
  );
}
