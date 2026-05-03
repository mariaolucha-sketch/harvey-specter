// Image URLs expire after 7 days — replace with permanently hosted assets
const PHOTO_IMAGE =
  "https://www.figma.com/api/mcp/asset/018b545c-e646-41b5-9294-9f754fd4c650";

export default function PhotoBreak() {
  return (
    <section className="w-full overflow-hidden">

      {/* Mobile — portrait crop replicating Figma's left:-36.41%, w:213.34% offset */}
      <div className="md:hidden relative w-full aspect-[390/620] overflow-hidden">
        <img
          src={PHOTO_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute h-full max-w-none select-none"
          style={{ left: "-36.41%", width: "213.34%", top: "-0.04%" }}
        />
      </div>

      {/* Desktop — full-width landscape, standard object-cover */}
      <div className="hidden md:block relative w-full h-[600px]">
        <img
          src={PHOTO_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
          style={{ maxWidth: "none" }}
        />
      </div>

    </section>
  );
}
