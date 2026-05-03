// Image URLs expire after 7 days — replace with permanently hosted assets
const IMG_BRAND       = "https://www.figma.com/api/mcp/asset/e90aa187-be11-452c-a569-5ff900d497cc";
const IMG_WEB         = "https://www.figma.com/api/mcp/asset/6477eb34-e808-40d8-b985-e93aa3f4f83f";
const IMG_MARKETING   = "https://www.figma.com/api/mcp/asset/636aa115-ceb9-467b-81fb-790038fed9bb";
const IMG_PHOTOGRAPHY = "https://www.figma.com/api/mcp/asset/5265c5f9-cd53-4270-81dd-a24eee65c92a";

const SERVICES = [
  { num: "[ 1 ]", title: "Brand Discovery",    image: IMG_BRAND },
  { num: "[ 2 ]", title: "Web design & Dev",   image: IMG_WEB },
  { num: "[ 3 ]", title: "Marketing",          image: IMG_MARKETING },
  { num: "[ 4 ]", title: "Photography",        image: IMG_PHOTOGRAPHY },
] as const;

const DESC =
  "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.";

export default function ServicesSection() {
  return (
    <section className="bg-black px-4 md:px-[2.222vw] py-12 md:py-[5.556vw] flex flex-col gap-8 md:gap-[3.333vw]">

      {/* Label */}
      <p className="font-mono text-sm text-white uppercase">[ services ]</p>

      {/* [4]  Deliverables — scales with viewport on desktop */}
      <div className="flex items-center justify-between text-white font-light uppercase tracking-[-0.08em] text-[32px] md:text-[6.667vw] leading-none whitespace-nowrap">
        <span>[4]</span>
        <span>Deliverables</span>
      </div>

      {/* Service list */}
      <div className="flex flex-col gap-12 md:gap-[3.333vw]">
        {SERVICES.map((svc) => (
          <div key={svc.num} className="flex flex-col gap-2">

            {/* Number + divider */}
            <p className="font-mono text-sm text-white uppercase">{svc.num}</p>
            <div className="border-t border-white w-full" />

            {/*
              Desktop: title (left) | description + image (right, flex-row)
              Mobile:  title → description → image (all stacked)
            */}
            <div className="mt-2 flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-0">
              <p className="font-bold italic text-[36px] text-white tracking-[-0.04em] uppercase leading-[1.1] md:whitespace-nowrap">
                {svc.title}
              </p>
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <p className="text-sm text-white leading-[1.3] tracking-[-0.04em] md:w-[27.292vw]">
                  {DESC}
                </p>
                <div className="size-[151px] shrink-0 overflow-hidden">
                  <img src={svc.image} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
