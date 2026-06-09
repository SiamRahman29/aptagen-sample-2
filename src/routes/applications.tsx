import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MolecularBg } from "@/components/site/MolecularBg";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications — Aptamers in Action | Aptagen" },
      { name: "description", content: "Proven aptamer applications across diagnostics, therapeutics, drug delivery, biosensors, and research tools." },
      { property: "og:title", content: "Aptamers in Action: Real-World Applications" },
      { property: "og:description", content: "Use cases across diagnostics, therapeutics, drug delivery and research." },
    ],
  }),
  component: Applications,
});

const tabs = ["Diagnostics", "Therapeutics", "Drug Delivery", "Biosensors", "Research Tools"] as const;
type Tab = typeof tabs[number];

const items: Array<{ t: string; cat: Tab; desc: string; metric: string }> = [
  { t: "Circulating tumor DNA panel", cat: "Diagnostics", desc: "Single-droplet detection of ctDNA fragments for early-stage oncology.", metric: "Sub-pg sensitivity" },
  { t: "HER2 imaging conjugate", cat: "Therapeutics", desc: "Aptamer–fluorophore for surgical margin visualization in breast cancer.", metric: "Kd = 0.4 nM" },
  { t: "Targeted siRNA delivery", cat: "Drug Delivery", desc: "AptaBody–siRNA chimera silences oncogene in prostate cancer model.", metric: "92% knockdown" },
  { t: "Cardiac troponin biosensor", cat: "Biosensors", desc: "Point-of-care chip with Apta-Beacon for myocardial infarction triage.", metric: "8-minute readout" },
  { t: "Cell-surface flow probe", cat: "Research Tools", desc: "Multiplex aptamer panel for high-content flow cytometry profiling.", metric: "12-plex" },
  { t: "Water-borne toxin sensor", cat: "Biosensors", desc: "Field-deployable aptamer strip for microcystin and PFAS detection.", metric: "ppt-level" },
  { t: "GLP-1R agonist scaffold", cat: "Therapeutics", desc: "Long-acting aptamer agonist with extended dosing window.", metric: "14-day half-life" },
  { t: "BBB-crossing nanoparticle", cat: "Drug Delivery", desc: "Aptamer-coated lipid nanoparticle for CNS payload delivery.", metric: "11× brain uptake" },
  { t: "Viral antigen capture array", cat: "Diagnostics", desc: "Pan-coronavirus aptamer panel for surveillance.", metric: "98% specificity" },
];

const featured = [
  {
    title: "Cancer Biomarker Detection",
    challenge: "Detecting low-abundance ctDNA fragments in early-stage cancer plasma.",
    solution: "Engineered Apta-Beacon multiplex panel coupled to droplet microfluidics.",
    result: "Identified Stage I markers at sub-picogram concentrations with 99.2% specificity.",
    color: "oklch(0.85 0.18 195)",
  },
  {
    title: "Targeted Oncology Delivery",
    challenge: "Standard chemotherapeutics damage healthy tissue and limit dosing.",
    solution: "AptaBody–doxorubicin conjugate that internalizes via HER2 receptor binding.",
    result: "12× tumor uptake vs free drug, with 8× reduction in off-target toxicity.",
    color: "oklch(0.70 0.20 290)",
  },
];

function Applications() {
  const [tab, setTab] = useState<Tab | "All">("All");
  const filtered = tab === "All" ? items : items.filter((x) => x.cat === tab);
  return (
    <SiteLayout>
      <section className="relative -mt-20 flex min-h-[60vh] items-center overflow-hidden bg-hero">
        <MolecularBg intensity={0.7} />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Applications</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl">
            <span className="bg-clip-text text-transparent bg-cyan-gradient text-glow">Aptamers in action.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Proven across diagnostics, therapeutics, drug delivery, biosensors, and research tools.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2">
            {(["All", ...tabs] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-4 py-2 text-sm transition border ${
                  tab === t
                    ? "bg-cyan-gradient text-primary-foreground border-transparent shadow-glow-sm"
                    : "border-border bg-surface/50 text-foreground hover:border-primary/40 hover:text-accent"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((it, i) => (
              <Reveal key={it.t} delay={i * 50}>
                <article className="surface-card rounded-2xl p-6 h-full transition hover:-translate-y-1 hover:shadow-glow-sm">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-primary">{it.cat}</div>
                  <h3 className="mt-2 font-display text-lg font-semibold">{it.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-mono text-xs text-primary text-glow">{it.metric}</span>
                    <Link to="/contact" className="text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1">
                      Adapt to research <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="relative py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 space-y-20">
          {featured.map((f, i) => (
            <Reveal key={f.title}>
              <div className={`grid gap-10 lg:grid-cols-2 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="surface-card rounded-2xl p-6 aspect-[4/3] relative overflow-hidden" style={{ background: `radial-gradient(circle at 30% 30%, ${f.color}, transparent 60%), oklch(0.18 0.04 240)` }}>
                  <svg viewBox="0 0 300 220" className="absolute inset-0 h-full w-full">
                    {Array.from({ length: 30 }).map((_, k) => (
                      <circle key={k} cx={20 + (k * 17) % 280} cy={20 + ((k * 23) % 180)} r={1 + (k % 3)} fill="white" opacity="0.4" />
                    ))}
                    <path d="M30 180 Q 100 30 200 110 T 290 60" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-semibold">{f.title}</h3>
                  <dl className="mt-6 space-y-4 text-sm">
                    <div><dt className="text-primary font-mono uppercase text-xs tracking-wider">Challenge</dt><dd className="mt-1 text-muted-foreground">{f.challenge}</dd></div>
                    <div><dt className="text-primary font-mono uppercase text-xs tracking-wider">Solution</dt><dd className="mt-1 text-muted-foreground">{f.solution}</dd></div>
                    <div><dt className="text-primary font-mono uppercase text-xs tracking-wider">Result</dt><dd className="mt-1 text-foreground font-medium">{f.result}</dd></div>
                  </dl>
                  <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-sm text-primary hover:bg-primary/10">
                    Adapt this application <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="surface-card rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            <h2 className="relative font-display text-4xl font-semibold">Bring an application to life.</h2>
            <Link to="/contact" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-gradient px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow">
              Discuss your use case <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
