import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'
import { urlFor } from '@/sanity/lib/image'
import type { SanityImageSource } from '@sanity/image-url'

const FEATURED_PORTFOLIO_QUERY = defineQuery(
  `*[_type == "portfolioItem" && featured == true] | order(order asc) {
    _id,
    title,
    tags,
    coverImage,
    url,
  }`
)

function Arrow() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
      <path d="M9 23L23 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 9H23V19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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
  image: SanityImageSource | null
  tags: string[]
  title: string
  desktopHeight: string
  mobileHeight?: string
  url?: string | null
}

function ProjectCard({ image, tags, title, desktopHeight, mobileHeight = "h-[390px]", url }: ProjectCardProps) {
  const imgUrl = image ? urlFor(image).width(1200).auto('format').url() : null

  const inner = (
    <div className="flex flex-col gap-2.5">
      <div className={`relative ${mobileHeight} ${desktopHeight} overflow-hidden flex flex-col justify-end pb-4 pl-4 bg-[#e8e8e8]`}>
        {imgUrl && (
          <img src={imgUrl} alt={title} className="absolute inset-0 w-full h-full object-cover select-none" />
        )}
        <div className="relative flex gap-3 items-center flex-wrap">
          {tags.map((tag) => <Tag key={tag} label={tag} />)}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-black text-[24px] md:text-[36px] text-black tracking-[-0.04em] uppercase leading-[1.1]">
          {title}
        </p>
        <Arrow />
      </div>
    </div>
  )

  if (url) {
    return <a href={url} target="_blank" rel="noopener noreferrer">{inner}</a>
  }
  return inner
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

// Desktop heights alternate: left col tall→short, right col short→tall
const LEFT_HEIGHTS  = ['md:h-[51.667vw]', 'md:h-[48.542vw]', 'md:h-[51.667vw]', 'md:h-[48.542vw]']
const RIGHT_HEIGHTS = ['md:h-[48.542vw]', 'md:h-[51.667vw]', 'md:h-[48.542vw]', 'md:h-[51.667vw]']

export default async function PortfolioSection() {
  const { data: items } = await sanityFetch({ query: FEATURED_PORTFOLIO_QUERY })

  const leftItems  = items.filter((_item, i) => i % 2 === 0)
  const rightItems = items.filter((_item, i) => i % 2 === 1)

  return (
    <section className="bg-white px-4 md:px-[2.222vw] py-12 md:py-[5.556vw]">

      {/* Mobile header */}
      <div className="md:hidden flex flex-col gap-4 mb-8 uppercase">
        <p className="font-mono text-sm text-[#1f1f1f]">[ portfolio ]</p>
        <div className="flex items-start justify-between">
          <div className="font-light text-[32px] text-black tracking-[-0.08em] leading-[0.86]">
            <p>Selected</p>
            <p>Work</p>
          </div>
          <p className="font-mono text-sm text-[#1f1f1f]">{String(items.length).padStart(3, '0')}</p>
        </div>
      </div>

      {/* Desktop header */}
      <div className="hidden md:flex items-center justify-between mb-[4.236vw]">
        <div className="flex gap-2.5 items-start uppercase">
          <div className="font-light text-[6.667vw] text-black tracking-[-0.08em] leading-[0.86]">
            <p>Selected</p>
            <p>Work</p>
          </div>
          <p className="font-mono text-sm text-[#1f1f1f] mt-1">{String(items.length).padStart(3, '0')}</p>
        </div>
        <div className="flex items-center justify-center h-[110px] w-[15px]">
          <p className="font-mono text-sm text-[#1f1f1f] uppercase whitespace-nowrap -rotate-90">
            [ portfolio ]
          </p>
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="md:hidden flex flex-col gap-6">
        {items.map((item) => (
          <ProjectCard
            key={item._id}
            image={item.coverImage ?? null}
            tags={item.tags ?? []}
            title={item.title ?? ''}
            desktopHeight=""
            mobileHeight="h-[390px]"
            url={item.url}
          />
        ))}
        <CtaBox />
      </div>

      {/* Desktop: staggered two-column */}
      <div className="hidden md:flex gap-[1.667vw] items-end">
        <div className="flex-1 flex flex-col gap-[8.125vw]">
          {leftItems.map((item, i) => (
            <ProjectCard
              key={item._id}
              image={item.coverImage ?? null}
              tags={item.tags ?? []}
              title={item.title ?? ''}
              desktopHeight={LEFT_HEIGHTS[i] ?? 'md:h-[51.667vw]'}
              mobileHeight=""
              url={item.url}
            />
          ))}
          <CtaBox />
        </div>

        <div className="flex-1 flex flex-col gap-[8.125vw] pt-[16.667vw]">
          {rightItems.map((item, i) => (
            <ProjectCard
              key={item._id}
              image={item.coverImage ?? null}
              tags={item.tags ?? []}
              title={item.title ?? ''}
              desktopHeight={RIGHT_HEIGHTS[i] ?? 'md:h-[48.542vw]'}
              mobileHeight=""
              url={item.url}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
