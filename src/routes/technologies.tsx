import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MolecularBg } from "@/components/site/MolecularBg";
import { Reveal } from "@/components/site/Reveal";
import { Activity, Crosshair, Layers, ArrowRight, Zap } from "lucide-react";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Apta-Beacons, AptaBodies, Peptimers | Aptagen" },
      { name: "description", content: "Engineered aptamer technologies for precision applications: real-time detection, targeted therapeutics, and hybrid peptide–aptamer platforms." },
      { property: "og:title", content: "Engineered Aptamer Technologies" },
      { property: "og:description", content: "Apta-Beacons, AptaBodies, and Peptimers — proprietary platforms for detection and therapeutics." },
    ],
  }),
  component: Technologies,
});

const techs = [
  { id: "beacons", name: "Apta-Beacons™", tag: "Real-time detection", icon: Activity, kpi: "Kd < 1 nM", color: "oklch(0.85 0.18 195)" },
  { id: "bodies", name: "AptaBodies™", tag: "Targeted therapeutics", icon: Crosshair, kpi: "12× tumor uptake", color: "oklch(0.70 0.20 290)" },
  { id: "peptimers", name: "Peptimers™", tag: "Hybrid platforms", icon: Layers, kpi: "8× half-life", color: "oklch(0.65 0.20 230)" },
];

function Technologies() {
  const [target, setTarget] = useState("Thrombin");
  const [bound, setBound] = useState(false);
  return (
    <SiteLayout>
      <section className="relative -mt-20 flex min-h-[70vh] items-center overflow-hidden bg-hero">
        <MolecularBg />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Platforms</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl">
            Engineered <span className="bg-clip-text text-transparent bg-cyan-gradient text-glow">aptamer technologies</span> for precision applications.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From real-time detection to targeted therapeutics — our proprietary platforms deliver unmatched performance.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-cyan-gradient px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow">
            Request technology consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* OVERVIEW HUB */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-3">
          {techs.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <a href={`#${t.id}`} className="group block surface-card rounded-2xl p-7 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-foreground group-hover:text-accent transition-colors" style={{ background: `${t.color.replace(")", " / 0.18)")}` }}>
                  <t.icon className="h-6 w-6" />
                </div>
                <div className="mt-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{t.tag}</div>
                <h3 className="mt-1 font-display text-2xl font-semibold">{t.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Click to explore the platform, performance benchmarks, and interactive demo.
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-primary/10 text-foreground group-hover:text-accent transition-colors">{t.kpi}</span>
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APTA-BEACONS */}
      <section id="beacons" className="relative py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Apta-Beacons™</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">Light up when your target arrives.</h2>
            <p className="mt-4 text-muted-foreground">
              Apta-Beacons are aptamer–fluorophore conjugates that emit signal upon target binding. No washes, no
              secondary reagents — single-step, real-time readouts in solution or on chip.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Kd < 1 nM", "Sub-60s readout", "Multiplex up to 8 targets", "Reusable surface"].map((k) => (
                <span key={k} className="rounded-full bg-primary/10 text-foreground hover:text-accent text-xs px-3 py-1.5 transition-colors">{k}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="surface-card rounded-2xl p-6">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Interactive simulator</div>
              <div className="mt-3 flex items-center gap-2">
                <select value={target} onChange={(e) => { setTarget(e.target.value); setBound(false); }} className="bg-background border border-border rounded-md px-3 py-2 text-sm">
                  {["Thrombin", "VEGF", "PSA", "SARS-CoV-2 spike"].map((t) => <option key={t}>{t}</option>)}
                </select>
                <button onClick={() => setBound((v) => !v)} className="inline-flex items-center gap-1.5 rounded-md bg-cyan-gradient px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow-sm">
                  <Zap className="h-3.5 w-3.5" /> {bound ? "Reset" : "Bind target"}
                </button>
              </div>
              <div className="mt-6 relative aspect-[4/3] rounded-xl bg-background border border-border overflow-hidden">
                <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
                  {/* signal curve */}
                  <polyline
                    fill="none"
                    stroke="oklch(0.85 0.18 195)"
                    strokeWidth="2"
                    points={Array.from({ length: 60 }).map((_, i) => {
                      const x = (i / 59) * 380 + 10;
                      const base = 240;
                      const peak = bound ? Math.max(40, base - 180 * Math.tanh((i - 20) / 6)) : base;
                      return `${x},${peak}`;
                    }).join(" ")}
                    style={{ filter: bound ? "drop-shadow(0 0 8px oklch(0.85 0.18 195))" : "none" }}
                  />
                  <text x="10" y="20" fill="oklch(0.70 0.02 230)" fontSize="10" fontFamily="monospace">Fluorescence signal · {target}</text>
                </svg>
                {bound && (
                  <div className="absolute right-4 bottom-4 text-xs font-mono text-primary text-glow">SIGNAL +840%</div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APTABODIES */}
      <section id="bodies" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="surface-card rounded-2xl p-6 aspect-square relative overflow-hidden">
              <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
                <defs>
                  <radialGradient id="cell">
                    <stop offset="0%" stopColor="oklch(0.40 0.15 290)" />
                    <stop offset="100%" stopColor="oklch(0.18 0.04 240)" />
                  </radialGradient>
                </defs>
                <circle cx="180" cy="180" r="100" fill="url(#cell)" />
                <circle cx="180" cy="180" r="100" fill="none" stroke="oklch(0.70 0.20 290 / 0.4)" strokeWidth="1" />
                {Array.from({ length: 14 }).map((_, k) => {
                  const a = (k / 14) * Math.PI * 2;
                  const x = 180 + Math.cos(a) * 100;
                  const y = 180 + Math.sin(a) * 100;
                  return <circle key={k} cx={x} cy={y} r="4" fill="oklch(0.70 0.20 290)" />;
                })}
                {/* aptamers docking */}
                {Array.from({ length: 6 }).map((_, k) => {
                  const a = (k / 6) * Math.PI * 2;
                  const r1 = 140;
                  const x1 = 180 + Math.cos(a) * r1;
                  const y1 = 180 + Math.sin(a) * r1;
                  return (
                    <g key={k}>
                      <line x1={x1} y1={y1} x2={180 + Math.cos(a) * 105} y2={180 + Math.sin(a) * 105} stroke="oklch(0.85 0.18 195)" strokeWidth="2" />
                      <circle cx={x1} cy={y1} r="5" fill="oklch(0.85 0.18 195)">
                        <animate attributeName="r" values="5;7;5" dur={`${2 + k * 0.2}s`} repeatCount="indefinite" />
                      </circle>
                    </g>
                  );
                })}
              </svg>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">AptaBodies™</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">Antibody specificity. Aptamer scale.</h2>
            <p className="mt-4 text-muted-foreground">
              AptaBodies are multi-valent aptamer scaffolds engineered for cell-surface receptor targeting,
              internalization, and payload conjugation. Compared to mAbs they offer 10–100× faster manufacturing
              and minimal immunogenicity.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[["Modality", "Multi-valent"], ["Avidity gain", "~30×"], ["Stability", "> 95°C"], ["Manufacturing", "Synthetic"]].map(([k, v]) => (
                <div key={k} className="surface-card rounded-xl p-4">
                  <div className="text-xs text-muted-foreground font-mono uppercase">{k}</div>
                  <div className="mt-1 font-display text-lg text-primary">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PEPTIMERS */}
      <section id="peptimers" className="relative py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Peptimers™</p>
            <h2 className="mt-3 font-display text-4xl font-semibold max-w-2xl">Hybrid peptide–aptamer platforms for the hardest targets.</h2>
          </Reveal>
          <div className="mt-12 grid gap-3 md:grid-cols-5">
            {[
              ["Peptide design", "Bioinformatic motif selection"],
              ["Aptamer arm", "SELEX-optimized binder"],
              ["Conjugation", "Site-specific click chemistry"],
              ["Validation", "Orthogonal binding + cell assays"],
              ["Delivery", "GMP-ready manufacture"],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="surface-card rounded-xl p-5 h-full relative">
                  <div className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-2 font-display font-semibold">{t}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="surface-card rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            <h2 className="relative font-display text-4xl font-semibold">Build with our platforms.</h2>
            <p className="relative mt-3 text-muted-foreground">Tell us your target. We'll recommend the right technology stack.</p>
            <Link to="/contact" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-gradient px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow">
              Apply this technology <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
