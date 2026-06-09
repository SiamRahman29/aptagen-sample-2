import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MolecularBg } from "@/components/site/MolecularBg";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, ChevronDown, Microscope, Target, Pill } from "lucide-react";

export const Route = createFileRoute("/what-are-aptamers")({
  head: () => ({
    meta: [
      { title: "What Are Aptamers? — Aptagen" },
      { name: "description", content: "Aptamers are synthetic DNA/RNA molecules that bind targets with antibody-like specificity, with superior stability, smaller size, and easier manufacturing." },
      { property: "og:title", content: "What Are Aptamers?" },
      { property: "og:description", content: "Synthetic single-stranded nucleic acids that outperform antibodies on stability, size, and manufacturability." },
    ],
  }),
  component: WhatAreAptamers,
});

const explainer = [
  {
    q: "SELEX in 90 seconds",
    a: "Systematic Evolution of Ligands by EXponential enrichment. We start with ~10¹⁵ random sequences and iteratively select those that bind your target, amplifying winners across 8–12 rounds.",
  },
  {
    q: "Why single-stranded?",
    a: "Single-stranded oligos fold into 3D shapes — loops, bulges, G-quadruplexes — that form a binding pocket complementary to your target. Sequence dictates structure dictates function.",
  },
  {
    q: "Modification chemistry",
    a: "2'-F, 2'-OMe, LNA, PEGylation, and Spiegelmer chemistries dramatically extend serum half-life and nuclease resistance for in vivo applications.",
  },
];

const subs = [
  { icon: Microscope, title: "Biomarker Detection", body: "Build biosensors that light up on target binding — from cancer markers to environmental toxins.", to: "/applications" },
  { icon: Target, title: "Cell Targeting", body: "Aptamers dock onto cell-surface receptors with picomolar specificity to direct payloads.", to: "/technologies" },
  { icon: Pill, title: "Drug Delivery", body: "Aptamer-conjugated payloads release on internalization, sparing healthy tissue.", to: "/applications" },
];

const compare = [
  { l: "Molecular weight", a: "6–25 kDa", b: "150 kDa" },
  { l: "Production", a: "Chemical synthesis", b: "Animal / cell culture" },
  { l: "Batch reproducibility", a: "Identical", b: "Variable" },
  { l: "Cost at scale", a: "Low", b: "High" },
  { l: "Time to first lot", a: "8–14 weeks", b: "4–9 months" },
  { l: "Immunogenicity", a: "Minimal", b: "Significant" },
];

function WhatAreAptamers() {
  const [open, setOpen] = useState<number | null>(0);
  const [tab, setTab] = useState<"a" | "b">("a");
  return (
    <SiteLayout>
      <section className="relative -mt-20 flex min-h-[80vh] items-center overflow-hidden bg-hero">
        <MolecularBg />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Educational hub</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl">
            What Are <span className="bg-clip-text text-transparent bg-cyan-gradient text-glow">Aptamers</span>?
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Synthetic single-stranded DNA or RNA molecules that bind targets with antibody-like specificity —
            but with superior stability, smaller size, and easier manufacturing.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#how" className="inline-flex items-center gap-2 rounded-full bg-cyan-gradient px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow">
              See how aptamers work <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-4 text-sm hover:border-primary/50">
              Request a custom aptamer
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE EXPLAINER */}
      <section id="how" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-start">
          <Reveal>
            <p className="text-sm font-mono uppercase tracking-widest text-primary">Core explanation</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">Sequence becomes structure becomes function.</h2>
            <div className="mt-8 space-y-3">
              {explainer.map((e, i) => (
                <button
                  key={e.q}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="block w-full text-left surface-card rounded-xl p-5 transition hover:border-primary/40"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display font-semibold">{e.q}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${open === i ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div className={`grid transition-all overflow-hidden ${open === i ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="min-h-0">
                      <p className="text-sm text-muted-foreground">{e.a}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="surface-card rounded-2xl p-6 lg:p-8">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className="font-display font-semibold">Aptamer–target binding</h3>
                <div className="inline-flex rounded-full border border-border bg-background p-1 text-xs">
                  <button onClick={() => setTab("a")} className={`px-3 py-1.5 rounded-full transition ${tab === "a" ? "bg-cyan-gradient text-primary-foreground" : "text-foreground/70 hover:text-accent"}`}>DNA</button>
                  <button onClick={() => setTab("b")} className={`px-3 py-1.5 rounded-full transition ${tab === "b" ? "bg-cyan-gradient text-primary-foreground" : "text-foreground/70 hover:text-accent"}`}>RNA</button>
                </div>
              </div>
              <div className="mt-6 relative aspect-square overflow-hidden rounded-xl bg-surface/60 border border-border">
                <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
                  <defs>
                    <radialGradient id="tgt">
                      <stop offset="0%" stopColor="oklch(0.70 0.20 290)" />
                      <stop offset="100%" stopColor="oklch(0.30 0.10 280)" />
                    </radialGradient>
                  </defs>
                  {/* target protein */}
                  <circle cx="150" cy="150" r="55" fill="url(#tgt)" opacity="0.8" />
                  {/* aptamer folded */}
                  <path
                    d="M 50 240 Q 80 180 110 200 T 145 150 Q 160 130 175 150 T 200 100"
                    fill="none"
                    stroke={tab === "a" ? "oklch(0.85 0.18 195)" : "oklch(0.78 0.18 130)"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{ filter: "drop-shadow(0 0 6px oklch(0.85 0.18 195 / 0.6))" }}
                  />
                  {Array.from({ length: 18 }).map((_, k) => {
                    const a = (k / 18) * Math.PI * 2;
                    return (
                      <circle
                        key={k}
                        cx={150 + Math.cos(a) * 55}
                        cy={150 + Math.sin(a) * 55}
                        r="2"
                        fill="oklch(0.85 0.18 195)"
                        opacity="0.8"
                      >
                        <animate attributeName="r" values="2;4;2" dur={`${2 + k * 0.1}s`} repeatCount="indefinite" />
                      </circle>
                    );
                  })}
                  {/* hotspot */}
                  <circle cx="200" cy="100" r="6" fill="oklch(0.85 0.18 195)">
                    <animate attributeName="r" values="6;10;6" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                </svg>
                <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  {tab === "a" ? "ssDNA · 5'→3'" : "RNA · 5'→3'"} · binding pocket highlighted
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SUB-SECTIONS */}
      <section className="relative py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold max-w-xl">Three modalities. One platform.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {subs.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Link to={s.to} className="group block surface-card rounded-2xl p-7 transition hover:-translate-y-1 hover:shadow-glow-sm">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm text-primary">Dive deeper <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="text-sm font-mono uppercase tracking-widest text-primary">Deep comparison</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">Aptamers vs antibodies, side by side.</h2>
          </Reveal>
          <div className="mt-12 surface-card rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 text-sm">
              <div className="p-4 font-mono uppercase text-xs tracking-wider text-muted-foreground">Metric</div>
              <div className="p-4 font-display text-primary">Aptamers</div>
              <div className="p-4 font-display text-muted-foreground">Antibodies</div>
              {compare.map((r) => (
                <Fragment key={r.l}>
                  <div className="border-t border-border p-4 text-muted-foreground">{r.l}</div>
                  <div className="border-t border-border p-4">{r.a}</div>
                  <div className="border-t border-border p-4 text-muted-foreground">{r.b}</div>
                </Fragment>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="surface-card rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            <h2 className="relative font-display text-4xl font-semibold">Ready to design your aptamer solution?</h2>
            <Link to="/contact" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-gradient px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
