// Image URLs expire after 7 days — replace with permanently hosted assets
const IMG_SURFERS  = "https://www.figma.com/api/mcp/asset/7a49a19f-ba89-46a3-894a-8571530aca3b";
const IMG_CYBERPUNK = "https://www.figma.com/api/mcp/asset/4ae00883-c981-47e2-a566-782984f23638";
const IMG_AGENCY   = "https://www.figma.com/api/mcp/asset/e560459e-e4d7-4277-b051-2079db71419b";
const IMG_MINIMAL  = "https://www.figma.com/api/mcp/asset/42b6622e-61cf-4262-acb3-048f9f7eb046";

// Diagonal arrow ↗ (replaces expiring fi_10486523 icon)
function Arrow() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
      <path d="M9 23L23 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 9H23V19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Corner bracket via CSS borders (no expiring image)
function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const borders: Record<string, string> = {
    tl: "border-t border-l", tr: "border-t border-r",
    bl: "border-b border-l", br: "border-b border-r",
  };
  return <div className={`shrink-0 w-4 h-4 border-[#1f1f1f] ${borders[pos]}`} />;
}

function Tag({ label }: { label: string }) {
  return (
    <span className="backdrop-blur-[10px] bg-white/30 text-[#111] text-sm font-medium tracking-[-0.04em] px-2 py-1 rounded-full whitespace-nowrap">
      {label}
    </span>
  );
}

interface ProjectCardProps {
  image: string;
  tags: string[];
  title: string;
  desktopHeight: string;
  mobileHeight?: string;
}

function ProjectCard({ image, tags, title, desktopHeight, mobileHeight = "h-[390px]" }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-2.5">
      {/* Image with tags overlay */}
      <div className={`relative ${mobileHeight} ${desktopHeight} overflow-hidden flex flex-col justify-end pb-4 pl-4`}>
        <img src={image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover select-none" />
        <div className="relative flex gap-3 items-center flex-wrap">
          {tags.map((tag) => <Tag key={tag} label={tag} />)}
        </div>
      </div>
      {/* Title + arrow */}
      <div className="flex items-center justify-between">
        <p className="font-black text-[24px] md:text-[36px] text-black tracking-[-0.04em] uppercase leading-[1.1]">
          {title}
        </p>
        <Arrow />
      </div>
    </div>
  );
}

function CtaBox() {
  return (
    <div className="flex items-stretch gap-3">
      <div className="flex flex-col justify-between shrink-0 w-6">
        <Corner pos="tl" /><Corner pos="bl" />
      </div>
      <div className="flex-1 flex flex-col gap-2.5 py-3">
        <p className="text-sm italic text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <button className="self-start bg-black text-white text-sm tracking-[-0.04em] px-4 py-3 rounded-3xl font-medium cursor-pointer hover:opacity-80 transition-opacity">
          Let&apos;s talk
        </button>
      </div>
      <div className="flex flex-col justify-between shrink-0 w-6">
        <Corner pos="tr" /><Corner pos="br" />
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="bg-white px-4 md:px-[2.222vw] py-12 md:py-[5.556vw]">

      {/* ── Header ── */}
      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-4 mb-8 uppercase">
        <p className="font-mono text-sm text-[#1f1f1f]">[ portfolio ]</p>
        <div className="flex items-start justify-between">
          <div className="font-light text-[32px] text-black tracking-[-0.08em] leading-[0.86]">
            <p>Selected</p>
            <p>Work</p>
          </div>
          <p className="font-mono text-sm text-[#1f1f1f]">004</p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between mb-[4.236vw]">
        <div className="flex gap-2.5 items-start uppercase">
          <div className="font-light text-[6.667vw] text-black tracking-[-0.08em] leading-[0.86]">
            <p>Selected</p>
            <p>Work</p>
          </div>
          <p className="font-mono text-sm text-[#1f1f1f] mt-1">004</p>
        </div>
        {/* Rotated [ portfolio ] label */}
        <div className="flex items-center justify-center h-[110px] w-[15px]">
          <p className="font-mono text-sm text-[#1f1f1f] uppercase whitespace-nowrap -rotate-90">
            [ portfolio ]
          </p>
        </div>
      </div>

      {/* ── Mobile: single column ── */}
      <div className="md:hidden flex flex-col gap-6">
        <ProjectCard image={IMG_SURFERS}  tags={["Social Media", "Photography"]} title="Surfers paradise"    desktopHeight="" mobileHeight="h-[390px]" />
        <ProjectCard image={IMG_CYBERPUNK} tags={["Social Media", "Photography"]} title="Cyberpunk caffe"     desktopHeight="" mobileHeight="h-[390px]" />
        <ProjectCard image={IMG_AGENCY}   tags={["Social Media", "Photography"]} title="Agency 976"          desktopHeight="" mobileHeight="h-[390px]" />
        <ProjectCard image={IMG_MINIMAL}  tags={["Social Media", "Photography"]} title="Minimal Playground"  desktopHeight="" mobileHeight="h-[390px]" />
        <CtaBox />
      </div>

      {/* ── Desktop: staggered two-column masonry ── */}
      {/*
        Left column starts at the top.
        Right column is offset 240px → 16.667vw down to create the stagger.
        Both columns bottom-align (items-end on the row).
      */}
      <div className="hidden md:flex gap-[1.667vw] items-end">

        {/* Left column — gap-[117px] → 8.125vw between cards */}
        <div className="flex-1 flex flex-col gap-[8.125vw]">
          <ProjectCard image={IMG_SURFERS}   tags={["Social Media", "Photography"]} title="Surfers paradise"   desktopHeight="md:h-[51.667vw]" mobileHeight="" />
          <ProjectCard image={IMG_CYBERPUNK} tags={["Social Media", "Photography"]} title="Cyberpunk caffe"    desktopHeight="md:h-[48.542vw]" mobileHeight="" />
          <CtaBox />
        </div>

        {/* Right column — staggered down 16.667vw, same gap between cards */}
        <div className="flex-1 flex flex-col gap-[8.125vw] pt-[16.667vw]">
          <ProjectCard image={IMG_AGENCY}  tags={["Social Media", "Photography"]} title="Agency 976"         desktopHeight="md:h-[48.542vw]" mobileHeight="" />
          <ProjectCard image={IMG_MINIMAL} tags={["Social Media", "Photography"]} title="Minimal Playground" desktopHeight="md:h-[51.667vw]" mobileHeight="" />
        </div>

      </div>

    </section>
  );
}
