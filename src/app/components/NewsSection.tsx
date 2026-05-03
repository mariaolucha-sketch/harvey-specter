// Image assets expire after 7 days — replace with permanently hosted assets
const IMG_POST_1 = "https://www.figma.com/api/mcp/asset/63ebd0ee-cc00-4663-8610-9527c6f064c3";
const IMG_POST_2 = "https://www.figma.com/api/mcp/asset/a575e82e-bbc4-4c39-84f0-f652358ac1b3";
const IMG_POST_3 = "https://www.figma.com/api/mcp/asset/69dd0fb9-32e3-4160-937b-3a89c1d0e904";

const EXCERPT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function ArrowUpRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <path d="M4.5 13.5L13.5 4.5" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M7 4.5H13.5V11" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PostCard({ image, excerpt }: { image: string; excerpt: string }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-[353/469] overflow-hidden">
        <img src={image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <p className="text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">{excerpt}</p>
      <div className="flex items-center gap-2.5 border-b border-black pb-1 self-start">
        <span className="text-sm font-medium text-black tracking-[-0.04em]">Read more</span>
        <ArrowUpRight />
      </div>
    </div>
  );
}

export default function NewsSection() {
  return (
    <section className="bg-[#f3f3f3]">

      {/*
        ── Mobile ─────────────────────────────────────────────────────────────
        Heading above, then horizontal-scroll row. Scrollbar hidden via
        ::-webkit-scrollbar (webkit) and scrollbar-width (Firefox).
      */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <h2 className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.86]">
          Keep up with my latest news &amp; achievements
        </h2>
        <div className="overflow-x-auto flex gap-4 -mr-4 pr-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          <div className="shrink-0 w-[77vw]">
            <PostCard image={IMG_POST_1} excerpt={EXCERPT} />
          </div>
          <div className="shrink-0 w-[77vw]">
            <PostCard image={IMG_POST_2} excerpt={EXCERPT} />
          </div>
          <div className="shrink-0 w-[77vw]">
            <PostCard image={IMG_POST_3} excerpt={EXCERPT} />
          </div>
        </div>
      </div>

      {/*
        ── Desktop ─────────────────────────────────────────────────────────────
        overflow-hidden on the wrapper clips the intentionally overflowing
        third card at the section boundary (no horizontal scrollbar).

        Heading column: 7.639vw wide (110px/1440) × 49.028vw tall (706px/1440),
        centered content rotated -90deg.

        Gap between heading and articles: 17.083vw (246px/1440) — derived from
        Figma position: first card at x=388px, heading right edge at 142px.

        Cards: fixed 24.514vw (353px/1440) each. Three cards + two 1px dividers
        + four gaps total ~109vw → third card bleeds off the right edge as
        designed. Left padding only (pl-[2.222vw]) so cards can overflow right.

        Card 2 staggered down pt-[8.333vw] (120px/1440).
        Dividers: 1px, color #cccccc.
      */}
      <div className="hidden md:block overflow-hidden">
        <div className="flex items-end gap-[17.083vw] pl-[2.222vw] py-[8.333vw]">

          {/* Rotated heading */}
          <div
            className="shrink-0 flex items-center justify-center"
            style={{ width: "7.639vw", height: "49.028vw" }}
          >
            <p className="font-light text-[4.444vw] text-black uppercase tracking-[-0.08em] leading-[0.86] whitespace-nowrap -rotate-90">
              Keep up with my latest<br />news &amp; achievements
            </p>
          </div>

          {/* Articles row — shrink-0 so cards keep their fixed widths */}
          <div className="flex shrink-0 items-start gap-[2.153vw]">
            <div className="w-[24.514vw]">
              <PostCard image={IMG_POST_1} excerpt={EXCERPT} />
            </div>
            <div className="w-px self-stretch bg-[#cccccc]" />
            <div className="w-[24.514vw] pt-[8.333vw]">
              <PostCard image={IMG_POST_2} excerpt={EXCERPT} />
            </div>
            <div className="w-px self-stretch bg-[#cccccc]" />
            <div className="w-[24.514vw]">
              <PostCard image={IMG_POST_3} excerpt={EXCERPT} />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
