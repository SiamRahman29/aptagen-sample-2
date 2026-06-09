import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MolecularBg } from "@/components/site/MolecularBg";
import { Reveal } from "@/components/site/Reveal";
import { Search, ArrowRight, Database, Plus, X } from "lucide-react";

export const Route = createFileRoute("/apta-index")({
  head: () => ({
    meta: [
      { title: "Apta-Index™ — The Largest Curated Aptamer Database | Aptagen" },
      { name: "description", content: "Search, filter, and explore thousands of validated aptamer sequences and binding data." },
      { property: "og:title", content: "Apta-Index™" },
      { property: "og:description", content: "Curated database of validated aptamer sequences." },
    ],
  }),
  component: AptaIndex,
});

type Entry = { id: string; target: string; type: string; kd: number; len: number; status: "Validated" | "Published" | "In-house"; app: string; seq: string };

const DB: Entry[] = [
  { id: "APT-0001", target: "Thrombin", type: "Protein", kd: 0.38, len: 29, status: "Published", app: "Anticoagulant", seq: "GGTTGGTGTGGTTGG" },
  { id: "APT-0024", target: "VEGF-165", type: "Protein", kd: 0.12, len: 32, status: "Validated", app: "Oncology", seq: "CGGAAUCAGUGAAUGCUUAUACAUCCG" },
  { id: "APT-0091", target: "PSA", type: "Protein", kd: 0.84, len: 40, status: "Validated", app: "Diagnostics", seq: "TTTTTAATTAAGGTTGGTGTGGTTGGTAATAAGGT" },
  { id: "APT-0145", target: "HER2", type: "Receptor", kd: 0.41, len: 36, status: "Published", app: "Targeted Tx", seq: "AGCCGCGAGGGGAGGGAUAGGGUAGGGCGCGGCU" },
  { id: "APT-0212", target: "SARS-CoV-2 spike", type: "Viral protein", kd: 0.73, len: 45, status: "Validated", app: "Diagnostics", seq: "GCTGGTGCCTACGTCAAGACGTAGGAAGCGAA" },
  { id: "APT-0273", target: "EpCAM", type: "Receptor", kd: 0.22, len: 38, status: "Validated", app: "Cell sorting", seq: "CACTACAGAGGTTGCGTCTGTCCCACG" },
  { id: "APT-0301", target: "Microcystin-LR", type: "Small molecule", kd: 12, len: 60, status: "In-house", app: "Environmental", seq: "GGCGCCGUGCUUUAUGCGUUGCG" },
  { id: "APT-0344", target: "Aflatoxin B1", type: "Small molecule", kd: 9.7, len: 58, status: "Published", app: "Food safety", seq: "GTTGGGCACGTGTTGTCTCTCTG" },
  { id: "APT-0388", target: "Cardiac troponin I", type: "Protein", kd: 0.95, len: 41, status: "Validated", app: "Diagnostics", seq: "CGCATGCCAAACGTTGCCTCATAGTTC" },
  { id: "APT-0421", target: "Tau-441", type: "Protein", kd: 0.65, len: 47, status: "In-house", app: "Neurology", seq: "ACGTACAGTGTCTGTCATCGCTGTC" },
  { id: "APT-0489", target: "PD-L1", type: "Receptor", kd: 0.18, len: 35, status: "Validated", app: "Immuno-onc", seq: "ACGGGCCACATCAACTCATTGATAGACA" },
  { id: "APT-0512", target: "GLP-1R", type: "Receptor", kd: 0.27, len: 39, status: "In-house", app: "Metabolic", seq: "TGGTGGCTGTAGGTCGTCTAGCAGTCG" },
];

const types = ["All", "Protein", "Receptor", "Viral protein", "Small molecule"] as const;

function kdColor(kd: number) {
  if (kd < 0.5) return "oklch(0.85 0.18 195)";
  if (kd < 2) return "oklch(0.78 0.18 130)";
  return "oklch(0.75 0.18 60)";
}

function AptaIndex() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<typeof types[number]>("All");
  const [maxKd, setMaxKd] = useState(20);
  const [selected, setSelected] = useState<Entry | null>(null);
  const [saved, setSaved] = useState<string[]>([]);

  const results = useMemo(() => {
    return DB.filter((e) =>
      (type === "All" || e.type === type) &&
      e.kd <= maxKd &&
      (q === "" || (e.target + e.id + e.app).toLowerCase().includes(q.toLowerCase()))
    );
  }, [q, type, maxKd]);

  return (
    <SiteLayout>
      <section className="relative -mt-20 pt-32 pb-12 overflow-hidden bg-hero">
        <MolecularBg intensity={0.5} />
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-primary inline-flex items-center gap-2">
            <Database className="h-3 w-3" /> Apta-Index™
          </p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl font-semibold tracking-tight max-w-3xl">
            The largest curated <span className="bg-clip-text text-transparent bg-cyan-gradient text-glow">aptamer database</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Search, filter, and explore thousands of validated aptamer sequences and binding data.
          </p>
          <div className="mt-8 surface-card rounded-2xl p-2 flex items-center gap-2 max-w-3xl shadow-glow-sm">
            <Search className="h-5 w-5 text-primary ml-3" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by target, ID, or application — try 'VEGF'"
              className="flex-1 bg-transparent outline-none px-2 py-3 text-sm"
            />
            <span className="hidden md:inline text-xs font-mono text-muted-foreground pr-3">{results.length} results</span>
          </div>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* Filters */}
          <aside className="surface-card rounded-2xl p-5 h-fit sticky top-24">
            <h3 className="font-display font-semibold">Filters</h3>
            <div className="mt-5">
              <div className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Target type</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {types.map((t) => (
                  <button key={t} onClick={() => setType(t)} className={`text-xs rounded-full px-3 py-1.5 border transition ${type === t ? "bg-cyan-gradient text-primary-foreground border-transparent" : "border-border text-foreground hover:border-primary/40 hover:text-accent"}`}>{t}</button>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <div className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Max Kd (nM)</div>
              <input type="range" min={0.1} max={20} step={0.1} value={maxKd} onChange={(e) => setMaxKd(parseFloat(e.target.value))} className="mt-3 w-full accent-[oklch(0.82_0.16_200)]" />
              <div className="mt-1 text-xs text-primary font-mono">≤ {maxKd.toFixed(1)} nM</div>
            </div>
            {saved.length > 0 && (
              <div className="mt-6 border-t border-border pt-4">
                <div className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Saved ({saved.length})</div>
                <div className="mt-2 space-y-1">
                  {saved.map((s) => (
                    <div key={s} className="text-xs font-mono flex items-center justify-between">
                      <span>{s}</span>
                      <button onClick={() => setSaved((x) => x.filter((y) => y !== s))}><X className="h-3 w-3 text-muted-foreground hover:text-destructive" /></button>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline">Request custom synthesis <ArrowRight className="h-3 w-3" /></Link>
              </div>
            )}
          </aside>

          {/* Results */}
          <div>
            <div className="surface-card rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[1fr_100px_80px_120px_60px] gap-3 px-5 py-3 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border-b border-border">
                <div>Target / ID</div>
                <div>Kd (nM)</div>
                <div>Length</div>
                <div className="hidden sm:block">Status</div>
                <div></div>
              </div>
              {results.map((e) => (
                <div
                  key={e.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelected(e)}
                  onKeyDown={(ev) => { if (ev.key === "Enter") setSelected(e); }}
                  className="w-full cursor-pointer text-left grid grid-cols-[1fr_100px_80px_120px_60px] gap-3 px-5 py-4 items-center border-b border-border/50 hover:bg-primary/5 transition"
                >
                  <div>
                    <div className="font-display font-semibold">{e.target}</div>
                    <div className="text-xs text-muted-foreground font-mono">{e.id} · {e.type}</div>
                  </div>
                  <div className="font-mono text-sm" style={{ color: kdColor(e.kd) }}>{e.kd}</div>
                  <div className="font-mono text-sm text-muted-foreground">{e.len} nt</div>
                  <div className="hidden sm:block text-xs"><span className="rounded-full bg-primary/10 text-foreground px-2 py-0.5 hover:text-accent transition-colors cursor-default">{e.status}</span></div>
                  <button
                    onClick={(ev) => { ev.stopPropagation(); setSaved((s) => s.includes(e.id) ? s : [...s, e.id]); }}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border hover:border-primary/50 hover:text-primary"
                    aria-label="Save"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}

              {results.length === 0 && (
                <div className="p-12 text-center text-sm text-muted-foreground">
                  No matches. <Link to="/contact" className="text-primary">Request a custom aptamer →</Link>
                </div>
              )}
            </div>

            <div className="mt-8 surface-card rounded-2xl p-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-semibold">Can't find what you need?</h3>
                <p className="text-sm text-muted-foreground">We design custom aptamers for novel targets in 8–14 weeks.</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-gradient px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm">
                Get instant quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur" onClick={() => setSelected(null)}>
          <div className="surface-card max-w-2xl w-full rounded-2xl p-8 shadow-glow animate-fade-up" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-primary">{selected.id}</div>
                <h3 className="font-display text-2xl font-semibold mt-1">{selected.target}</h3>
                <p className="text-sm text-muted-foreground">{selected.type} · {selected.app}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-foreground/60 hover:text-primary"><X className="h-5 w-5" /></button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-surface/60 p-3"><div className="text-xs text-muted-foreground">Kd</div><div className="font-display text-lg" style={{ color: kdColor(selected.kd) }}>{selected.kd} nM</div></div>
              <div className="rounded-xl bg-surface/60 p-3"><div className="text-xs text-muted-foreground">Length</div><div className="font-display text-lg">{selected.len} nt</div></div>
              <div className="rounded-xl bg-surface/60 p-3"><div className="text-xs text-muted-foreground">Status</div><div className="font-display text-lg text-primary">{selected.status}</div></div>
            </div>
            <div className="mt-6">
              <div className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Sequence (5' → 3')</div>
              <div className="mt-2 rounded-xl bg-background border border-border p-4 font-mono text-sm break-all">{selected.seq}</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-gradient px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm">
                Request custom synthesis <ArrowRight className="h-4 w-4" />
              </Link>
              <button onClick={() => { setSaved((s) => s.includes(selected.id) ? s : [...s, selected.id]); }} className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-3 text-sm hover:border-primary/50">
                <Plus className="h-4 w-4" /> Add to project
              </button>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
