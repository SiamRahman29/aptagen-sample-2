import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MolecularBg } from "@/components/site/MolecularBg";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Check, Shield, Lock, Award, Clock } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "R&D Contract Services — Aptagen" },
      { name: "description", content: "Partner with Aptagen for custom aptamer R&D. From discovery to GMP-scale manufacturing — milestone-driven contracts." },
      { property: "og:title", content: "R&D Contract Services" },
      { property: "og:description", content: "Custom aptamer R&D — discovery through GMP-scale manufacturing." },
    ],
  }),
  component: Services,
});

const stages = [
  { t: "Target identification", d: "Define your target, format, and success criteria." },
  { t: "SELEX", d: "8–12 rounds of in-house SELEX with ML-guided enrichment." },
  { t: "Optimization", d: "Sequence truncation, modification, and affinity maturation." },
  { t: "Validation", d: "Orthogonal binding and in-application performance assays." },
  { t: "Scale-up", d: "Process development from mg to gram quantities." },
  { t: "GMP delivery", d: "GMP-grade manufacturing with documentation." },
];

const tiers = [
  { name: "Discovery", price: "$25k+", bullets: ["Feasibility study", "SELEX with 3 candidates", "Binding characterization", "8–10 weeks"], featured: false },
  { name: "Full Development", price: "$120k+", bullets: ["Full SELEX program", "Lead optimization", "Custom modifications", "Scale-up to 100 mg", "16–22 weeks"], featured: true },
  { name: "Custom Manufacturing", price: "Custom", bullets: ["GMP-ready production", "Process validation", "Long-term supply", "Regulatory support"], featured: false },
];

const guarantees = [
  { i: Lock, t: "IP protection", d: "All sequences and data assigned to you." },
  { i: Shield, t: "Performance milestones", d: "Pay per achieved milestone — never upfront in full." },
  { i: Clock, t: "On-time delivery", d: "98% of projects delivered on or before milestone." },
  { i: Award, t: "Confidentiality", d: "NDA before any disclosure. SOC 2-aligned controls." },
];

function Services() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ target: "", app: "Diagnostics", timeline: "3-6 months", details: "", name: "", email: "", budget: 50 });
  const estimate = Math.round(20 + form.budget * 1.4);

  return (
    <SiteLayout>
      <section className="relative -mt-20 pt-32 pb-16 overflow-hidden bg-hero">
        <MolecularBg intensity={0.5} />
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">R&D Services</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl font-semibold max-w-3xl tracking-tight">
            Partner with Aptagen for <span className="bg-clip-text text-transparent bg-cyan-gradient text-glow">custom aptamer R&D</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            From discovery to GMP-scale manufacturing — fully customized, milestone-driven contracts.
          </p>
          <a href="#quote" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-gradient px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow">
            Start your project quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold">Our process.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6 relative">
            {stages.map((s, i) => (
              <Reveal key={s.t} delay={i * 60}>
                <div className="surface-card rounded-xl p-5 h-full">
                  <div className="flex items-center gap-2 text-primary font-mono text-xs">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-gradient text-primary-foreground">{i + 1}</span>
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-sm">{s.t}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="relative py-20 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-4xl font-semibold">Service tiers.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.name} className={`surface-card rounded-2xl p-7 ${t.featured ? "border-primary/50 shadow-glow-sm relative" : ""}`}>
                {t.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-gradient px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-primary-foreground">Most popular</div>}
                <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                <div className="mt-3 font-display text-3xl text-primary">{t.price}</div>
                <ul className="mt-6 space-y-2 text-sm">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /><span className="text-muted-foreground">{b}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((g) => (
              <div key={g.t} className="surface-card rounded-xl p-5">
                <g.i className="h-5 w-5 text-primary" />
                <h4 className="mt-3 font-display font-semibold">{g.t}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6 grid gap-8 lg:grid-cols-[1fr_300px]">
          <div className="surface-card rounded-2xl p-8">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <span>Step {step + 1} of 3</span>
              <span>{Math.round(((step + 1) / 3) * 100)}% complete</span>
            </div>
            <div className="mt-2 h-1 bg-border rounded-full overflow-hidden">
              <div className="h-full bg-cyan-gradient transition-all" style={{ width: `${((step + 1) / 3) * 100}%` }} />
            </div>

            {step === 0 && (
              <div className="mt-8 space-y-5 animate-fade-up">
                <h2 className="font-display text-2xl font-semibold">Project details</h2>
                <Field label="Target name or description">
                  <input value={form.target} onChange={(e) => setForm({ ...form, target: e.target.value })} placeholder="e.g. HER2 receptor, microcystin-LR" className="input" />
                </Field>
                <Field label="Application">
                  <select value={form.app} onChange={(e) => setForm({ ...form, app: e.target.value })} className="input">
                    {["Diagnostics", "Therapeutics", "Drug delivery", "Biosensor", "Research tool"].map((x) => <option key={x}>{x}</option>)}
                  </select>
                </Field>
                <Field label="Desired timeline">
                  <select value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} className="input">
                    {["1-3 months", "3-6 months", "6-12 months", "Flexible"].map((x) => <option key={x}>{x}</option>)}
                  </select>
                </Field>
              </div>
            )}

            {step === 1 && (
              <div className="mt-8 space-y-5 animate-fade-up">
                <h2 className="font-display text-2xl font-semibold">Technical requirements</h2>
                <Field label="Additional details / requirements">
                  <textarea rows={5} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder="Modifications, target affinity, prior data..." className="input" />
                </Field>
                <Field label="Upload sequences or references (optional)">
                  <div className="rounded-xl border border-dashed border-border bg-background p-6 text-center text-sm text-muted-foreground hover:border-primary/40 transition cursor-pointer">
                    Drag &amp; drop or click to upload
                  </div>
                </Field>
              </div>
            )}

            {step === 2 && (
              <div className="mt-8 space-y-5 animate-fade-up">
                <h2 className="font-display text-2xl font-semibold">Contact &amp; budget</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name"><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" /></Field>
                  <Field label="Email"><input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="input" /></Field>
                </div>
                <Field label={`Budget range: $${form.budget}k`}>
                  <input type="range" min={10} max={500} step={5} value={form.budget} onChange={(e) => setForm({ ...form, budget: parseInt(e.target.value) })} className="w-full accent-[oklch(0.82_0.16_200)]" />
                </Field>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between gap-4">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="text-sm text-muted-foreground disabled:opacity-30">← Back</button>
              {step < 2 ? (
                <button onClick={() => setStep((s) => s + 1)} className="inline-flex items-center gap-2 rounded-full bg-cyan-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm">
                  Next <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm">
                  Submit project <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>

          {/* Estimator */}
          <aside className="surface-card rounded-2xl p-6 h-fit sticky top-24">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Live estimate</div>
            <div className="mt-3 font-display text-3xl text-primary text-glow">${estimate}k – ${estimate * 3}k</div>
            <p className="mt-2 text-xs text-muted-foreground">Estimate updates as you fill the form. Final quote provided after review.</p>
            <div className="mt-6 space-y-2 text-xs text-muted-foreground">
              <div className="flex justify-between"><span>Application</span><span className="text-foreground">{form.app}</span></div>
              <div className="flex justify-between"><span>Timeline</span><span className="text-foreground">{form.timeline}</span></div>
              <div className="flex justify-between"><span>Target</span><span className="text-foreground truncate max-w-[140px]">{form.target || "—"}</span></div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
      <style>{`
        .input { width: 100%; background: var(--background); border: 1px solid var(--border); border-radius: 12px; padding: 12px 14px; font-size: 14px; color: var(--foreground); outline: none; transition: all .2s; }
        .input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px oklch(0.82 0.16 200 / 0.2); }
      `}</style>
    </label>
  );
}
