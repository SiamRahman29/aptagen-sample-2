import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, Microscope, Atom, FlaskConical, Target, Check, X, Zap, Shield, Globe2, TrendingUp } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MolecularBg } from "@/components/site/MolecularBg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Fragment, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aptagen — Precision Binding. Infinite Possibilities." },
      { name: "description", content: "Custom aptamers engineered for biomarkers, targeted delivery, and next-generation therapeutics. Trusted by leading biotech and pharma." },
      { property: "og:title", content: "Aptagen — Precision Binding. Infinite Possibilities." },
      { property: "og:description", content: "Custom aptamers engineered for biomarkers, targeted delivery, and next-generation therapeutics." },
    ],
  }),
  component: Home,
});

const stats = [
  { n: 10000, suffix: "+", label: "Aptamers delivered", icon: Atom },
  { n: 240, suffix: "+", label: "Pharma & biotech partners", icon: Microscope },
  { n: 98, suffix: "%", label: "Project success rate", icon: TrendingUp },
  { n: 21, suffix: " yrs", label: "SELEX engineering", icon: FlaskConical },
];

const compare = [
  { feat: "Binding affinity (Kd)", apta: "pM – nM range", ab: "nM range" },
  { feat: "Thermal stability", apta: "Stable to 95°C", ab: "Denatures ~70°C" },
  { feat: "Production", apta: "Chemical synthesis", ab: "Animal/cell culture" },
  { feat: "Batch variability", apta: "<2%", ab: "10–30%" },
  { feat: "Size", apta: "~6–25 kDa", ab: "~150 kDa" },
  { feat: "Immunogenicity", apta: "Minimal", ab: "Significant" },
];

const cases = [
  { title: "Cancer Biomarker Detection", metric: "3× binding affinity", tag: "Diagnostics", c1: "oklch(0.85 0.18 195)", c2: "oklch(0.55 0.22 280)" },
  { title: "Targeted Oncology Delivery", metric: "12× tumor uptake", tag: "Therapeutics", c1: "oklch(0.75 0.20 220)", c2: "oklch(0.65 0.22 320)" },
  { title: "Real-time Biosensor Array", metric: "<60s detection", tag: "Apta-Beacons", c1: "oklch(0.85 0.18 195)", c2: "oklch(0.45 0.18 200)" },
  { title: "Viral Protein Capture", metric: "Kd = 280 pM", tag: "Research", c1: "oklch(0.70 0.20 290)", c2: "oklch(0.85 0.18 195)" },
  { title: "Hybrid Peptimer Scaffold", metric: "8× serum half-life", tag: "Peptimers", c1: "oklch(0.60 0.20 250)", c2: "oklch(0.85 0.18 195)" },
];

function Home() {
  const [view, setView] = useState<"detection" | "delivery">("detection");
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-20 flex min-h-screen items-center overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <MolecularBg />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary animate-fade-up">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Engineering precision since 2003
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight animate-fade-up">
              Precision Binding.{" "}
              <span className="bg-clip-text text-transparent bg-cyan-gradient text-glow">
                Infinite Possibilities.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Custom aptamers engineered for biomarkers, targeted delivery, and next-generation therapeutics.
              Trusted by leading biotech and pharma to deliver picomolar specificity at production scale.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-cyan-gradient px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
              >
                Request Custom Aptamer Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#advantage" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-4 text-sm text-foreground hover:border-primary/50">
                Explore Aptamers <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float">
          <ArrowDown className="h-5 w-5" />
        </div>
      </section>

      {/* ADVANTAGE STATS */}
      <section id="advantage" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-sm font-mono uppercase tracking-widest text-primary">The Aptagen Advantage</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl font-semibold">
              Two decades of SELEX, distilled into measurable outcomes.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="group surface-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-sm">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-6 font-display text-4xl font-semibold text-foreground">
                    <Counter to={s.n} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {/* trust logos */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6 items-center opacity-60">
            {["NOVEX", "BIOGEN", "MERIDIAN", "PFAIR-LAB", "OXFORD-RX", "NEUROGEN"].map((n) => (
              <div key={n} className="text-center font-display text-sm tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors">
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY APTAGEN */}
      <section className="relative py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-mono uppercase tracking-widest text-primary">Why Aptagen</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">From target to therapeutic, end-to-end.</h2>
            <ol className="mt-10 relative border-l border-border pl-6 space-y-8">
              {[
                ["Target intake", "Antigen, cell, small molecule — we design SELEX for your modality."],
                ["Custom SELEX", "In-house libraries with 10¹⁵ diverse sequences and ML-guided enrichment."],
                ["Optimization", "Truncation, modification, and affinity maturation to pM Kd."],
                ["Validation", "Orthogonal binding, specificity, and in-application assays."],
                ["Scale-up", "GMP-ready synthesis from milligram to gram quantities."],
              ].map(([t, d], i) => (
                <li key={t} className="relative">
                  <span className="absolute -left-[31px] top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-gradient shadow-glow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-background" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{i + 1}. {t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={100}>
            <div className="surface-card rounded-2xl p-6 lg:p-8">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h3 className="font-display text-xl font-semibold">Aptamers vs Antibodies</h3>
                <div className="inline-flex rounded-full border border-border bg-background p-1 text-xs">
                  <button onClick={() => setView("detection")} className={`px-3 py-1.5 rounded-full transition ${view === "detection" ? "bg-cyan-gradient text-primary-foreground" : "text-muted-foreground"}`}>Detection</button>
                  <button onClick={() => setView("delivery")} className={`px-3 py-1.5 rounded-full transition ${view === "delivery" ? "bg-cyan-gradient text-primary-foreground" : "text-muted-foreground"}`}>Drug Delivery</button>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-[1.4fr_1fr_1fr] gap-2 text-sm">
                <div className="font-mono uppercase text-xs tracking-wider text-muted-foreground py-2">Feature</div>
                <div className="font-display text-primary py-2">Aptagen</div>
                <div className="font-display text-muted-foreground py-2">Antibodies</div>
                {compare.map((r) => (
                  <Fragment key={r.feat}>
                    <div className="py-3 border-t border-border text-muted-foreground">{r.feat}</div>
                    <div className="py-3 border-t border-border flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{r.apta}</div>
                    <div className="py-3 border-t border-border flex items-center gap-2 text-muted-foreground"><X className="h-4 w-4 opacity-50" />{r.ab}</div>
                  </Fragment>
                ))}

              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Showing <span className="text-primary">{view === "detection" ? "biosensor detection" : "drug delivery"}</span> performance benchmarks. Full data on request.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <Reveal>
              <p className="text-sm font-mono uppercase tracking-widest text-primary">Featured Work</p>
              <h2 className="mt-3 font-display text-4xl font-semibold">Programs we've helped advance.</h2>
            </Reveal>
            <Link to="/applications" className="text-sm text-primary hover:underline">All applications →</Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <article className="group relative overflow-hidden rounded-2xl surface-card transition-all hover:-translate-y-1 hover:shadow-glow-sm">
                  <div
                    className="relative h-48 overflow-hidden"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${c.c1}, transparent 60%), radial-gradient(circle at 70% 80%, ${c.c2}, transparent 70%), oklch(0.18 0.04 240)` }}
                  >
                    <svg viewBox="0 0 200 100" className="absolute inset-0 h-full w-full opacity-50 mix-blend-screen">
                      <path d="M0 60 Q 50 10 100 60 T 200 60" fill="none" stroke="white" strokeWidth="0.5" />
                      <path d="M0 50 Q 50 100 100 50 T 200 50" fill="none" stroke="white" strokeWidth="0.5" />
                      {Array.from({ length: 14 }).map((_, k) => (
                        <circle key={k} cx={(k * 14) + 5} cy={50 + Math.sin(k) * 18} r="1.4" fill="white" />
                      ))}
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-background/70 backdrop-blur px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-primary">{c.tag}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                    <p className="mt-2 text-2xl font-display text-primary text-glow">{c.metric}</p>
                    <Link to="/applications" className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary">
                      Read case study <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL IMPACT */}
      <section className="relative py-24 bg-surface/30 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="text-sm font-mono uppercase tracking-widest text-primary">Global Impact</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">From benchtop to bedside, worldwide.</h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Aptagen partners with research labs, diagnostic developers, and clinical-stage biotechs across four continents.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[["Continents", "4"], ["Countries", "32"], ["Active programs", "180+"]].map(([l, v]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-primary">{v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[5/3] surface-card rounded-2xl p-6">
              <svg viewBox="0 0 500 300" className="h-full w-full">
                {/* simplified continents as dot grid */}
                {Array.from({ length: 380 }).map((_, i) => {
                  const x = (i % 38) * 13 + 10;
                  const y = Math.floor(i / 38) * 13 + 10;
                  // very rough land mass mask
                  const inLand =
                    (x > 60 && x < 180 && y > 70 && y < 200) || // americas
                    (x > 220 && x < 320 && y > 60 && y < 180) || // EU/AF
                    (x > 230 && x < 290 && y > 180 && y < 250) || // africa
                    (x > 330 && x < 460 && y > 70 && y < 200); // asia
                  if (!inLand) return null;
                  return <circle key={i} cx={x} cy={y} r="1.3" fill="oklch(0.40 0.04 240)" />;
                })}
                {[
                  [100, 130], [260, 110], [380, 130], [410, 170], [280, 200], [120, 180],
                ].map(([x, y], i) => (
                  <g key={i}>
                    <circle cx={x} cy={y} r="3" fill="oklch(0.85 0.18 195)" />
                    <circle cx={x} cy={y} r="3" fill="none" stroke="oklch(0.85 0.18 195)" strokeWidth="1">
                      <animate attributeName="r" from="3" to="18" dur="2.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.8" to="0" dur="2.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl surface-card p-12 text-center">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative">
                <h2 className="font-display text-4xl sm:text-5xl font-semibold">Ready to advance your research?</h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Our scientists respond within 24 hours with a tailored project plan and milestone-based quote.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-gradient px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow">
                    Start your project <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/technologies" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-4 text-sm hover:border-primary/50">
                    Explore technologies
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
