import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MolecularBg } from "@/components/site/MolecularBg";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Check, Mail, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact / Get Quote — Aptagen" },
      { name: "description", content: "Tell us about your aptamer project. Our scientists respond within 24 hours." },
      { property: "og:title", content: "Let's Engineer Your Aptamer Solution" },
      { property: "og:description", content: "Tell us about your project. Our scientists respond within 24 hours." },
    ],
  }),
  component: Contact,
});

const team = [
  { name: "Dr. Elena Vasquez", role: "Chief Scientist · SELEX", spec: "20 yrs RNA aptamer design", init: "EV" },
  { name: "Dr. Marcus Chen", role: "Director, Therapeutics", spec: "AptaBody platforms, in vivo PK", init: "MC" },
  { name: "Dr. Priya Patel", role: "Head of Manufacturing", spec: "GMP synthesis & scale-up", init: "PP" },
  { name: "Dr. Yusuf Adeyemi", role: "Diagnostics Lead", spec: "Biosensor integration & PoC", init: "YA" },
];

const faqs = [
  { q: "How long does a typical project take?", a: "Discovery: 8–10 weeks. Full development: 16–22 weeks. Scale-up varies by quantity." },
  { q: "Do you sign an NDA before discussions?", a: "Yes — we sign an NDA before any technical exchange. Templates available on request." },
  { q: "Who owns the IP?", a: "All sequences, data, and rights are assigned to you under the master services agreement." },
  { q: "Can you work with our existing aptamer?", a: "Absolutely. We optimize, modify, and scale existing aptamers as a standalone service." },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SiteLayout>
      <section className="relative -mt-20 pt-32 pb-16 overflow-hidden bg-hero">
        <MolecularBg intensity={0.5} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Get a quote</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl font-semibold tracking-tight">
            Let's engineer your <span className="bg-clip-text text-transparent bg-cyan-gradient text-glow">aptamer solution</span>.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Tell us about your project. Our scientists respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-3xl px-6">
          {submitted ? (
            <Reveal>
              <div className="surface-card rounded-3xl p-12 text-center shadow-glow">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-gradient text-primary-foreground">
                  <Check className="h-8 w-8" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-semibold">Thanks — we'll be in touch.</h2>
                <p className="mt-3 text-muted-foreground">Expect a response from our scientific team within 24 hours.</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a href="/" className="rounded-full border border-border px-5 py-3 text-sm hover:border-primary/50">Back to home</a>
                  <a href="#" className="rounded-full bg-cyan-gradient px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm">Download capabilities deck</a>
                </div>
              </div>
            </Reveal>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="surface-card rounded-3xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Your name" required>
                  <input required className="input" placeholder="Dr. Jane Doe" />
                </FormField>
                <FormField label="Work email" required>
                  <input required type="email" className="input" placeholder="jane@labs.com" />
                </FormField>
              </div>
              <FormField label="Organization">
                <input className="input" placeholder="University or company" />
              </FormField>
              <FormField label="Project type">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Diagnostics", "Therapeutics", "Delivery", "Research"].map((p) => (
                    <label key={p} className="cursor-pointer rounded-xl border border-border bg-background hover:border-primary/40 transition px-3 py-3 text-center text-sm has-[:checked]:bg-cyan-gradient has-[:checked]:text-primary-foreground has-[:checked]:border-transparent">
                      <input type="radio" name="ptype" className="sr-only" defaultChecked={p === "Diagnostics"} />
                      {p}
                    </label>
                  ))}
                </div>
              </FormField>
              <FormField label="Tell us about your target & goals" required>
                <textarea required rows={5} className="input" placeholder="Target, application, performance goals, prior work..." />
              </FormField>
              <FormField label="Attach files (optional)">
                <div className="rounded-xl border border-dashed border-border bg-background p-6 text-center text-sm text-muted-foreground hover:border-primary/40 transition cursor-pointer">
                  Drag &amp; drop sequences, papers, or briefs
                </div>
              </FormField>
              <FormField label="Ideal start date">
                <input type="date" className="input" />
              </FormField>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-cyan-gradient px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow">
                Send project brief <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-muted-foreground">Or email <a href="mailto:hello@aptagen.bio" className="text-primary inline-flex items-center gap-1"><Mail className="h-3 w-3" /> hello@aptagen.bio</a></p>
              <style>{`
                .input { width: 100%; background: var(--background); border: 1px solid var(--border); border-radius: 12px; padding: 12px 14px; font-size: 14px; color: var(--foreground); outline: none; transition: all .2s; }
                .input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px oklch(0.82 0.16 200 / 0.2); }
              `}</style>
            </form>
          )}
        </div>
      </section>

      {/* TEAM */}
      <section className="relative py-20 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">Meet your scientific team.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <div className="surface-card rounded-2xl p-5 text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-cyan-gradient flex items-center justify-center font-display text-xl text-primary-foreground shadow-glow-sm">
                    {t.init}
                  </div>
                  <h3 className="mt-4 font-display font-semibold">{t.name}</h3>
                  <p className="text-xs text-primary">{t.role}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{t.spec}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl font-semibold">Frequently asked.</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => (
              <button key={f.q} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="block w-full text-left surface-card rounded-xl p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display font-semibold">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openFaq === i ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                </div>
                {openFaq === i && <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
