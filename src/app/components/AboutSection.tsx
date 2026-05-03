// Image URLs expire after 7 days — replace with permanently hosted assets
const ABOUT_IMAGE =
  "https://www.figma.com/api/mcp/asset/0c616534-df24-42b9-addd-f7579219650c";

// Corner bracket using CSS borders — no image dependency
function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const borders: Record<string, string> = {
    tl: "border-t border-l",
    tr: "border-t border-r",
    bl: "border-b border-l",
    br: "border-b border-r",
  };
  return <div className={`shrink-0 w-4 h-4 border-[#1f1f1f] ${borders[pos]}`} />;
}

const BIO_TEXT =
  "Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.";

export default function AboutSection() {
  return (
    <section className="px-4 md:px-[2.222vw] py-12 md:py-[5.556vw] bg-white">

      {/* ── Mobile layout ── */}
      <div className="md:hidden flex flex-col gap-5">
        <span className="font-mono text-sm text-[#1f1f1f] uppercase">002</span>
        <span className="font-mono text-sm text-[#1f1f1f] uppercase">[ About ]</span>

        {/* Text block with corner brackets */}
        <div className="flex items-stretch gap-3">
          <div className="flex flex-col justify-between shrink-0 w-6">
            <Corner pos="tl" />
            <Corner pos="bl" />
          </div>
          <p className="flex-1 text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.04em] py-3">
            {BIO_TEXT}
          </p>
          <div className="flex flex-col justify-between shrink-0 w-6">
            <Corner pos="tr" />
            <Corner pos="br" />
          </div>
        </div>

        {/* Full-width portrait */}
        <div className="w-full aspect-[422/594] overflow-hidden">
          <img src={ABOUT_IMAGE} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* ── Desktop layout ── */}
      {/*
        Left:  [ About ] label
        Right (68.264vw): text+brackets (flex-1) + 002/portrait column (30.278vw)
        Both sides of the right group align to the bottom (items-end)
      */}
      <div className="hidden md:flex items-start justify-between">
        <span className="font-mono text-sm text-[#1f1f1f] uppercase shrink-0">[ About ]</span>

        <div className="flex items-end gap-[2.222vw] w-[68.264vw]">

          {/* Text with corner brackets — fills remaining width */}
          <div className="flex items-stretch gap-3 flex-1 min-w-0">
            <div className="flex flex-col justify-between shrink-0 w-6">
              <Corner pos="tl" />
              <Corner pos="bl" />
            </div>
            <p className="flex-1 text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.04em] py-3">
              {BIO_TEXT}
            </p>
            <div className="flex flex-col justify-between shrink-0 w-6">
              <Corner pos="tr" />
              <Corner pos="br" />
            </div>
          </div>

          {/* 002 label + portrait — side by side, 24px → 1.667vw gap */}
          <div className="flex flex-row items-start gap-[1.667vw] shrink-0">
            <span className="font-mono text-sm text-[#1f1f1f] uppercase">002</span>
            <div className="w-[30.278vw] aspect-[436/614] overflow-hidden">
              <img src={ABOUT_IMAGE} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
