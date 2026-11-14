export default function PageIntro({ eyebrow, title, accent, description }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#07152B] px-6 pb-12 pt-32 text-white sm:pb-16 sm:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_15%,rgba(0,119,255,.16),transparent_42%),linear-gradient(120deg,#050B18_0%,#09182E_65%,#050B18_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[.24em] text-[#79C9FF]">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-.04em] sm:text-5xl lg:text-6xl">
          {title} <span className="bg-gradient-to-r from-[#62BFFF] via-[#20B9FF] to-[#A5E8FF] bg-clip-text text-transparent">{accent}</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
