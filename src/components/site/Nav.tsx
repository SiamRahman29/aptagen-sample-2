import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Dna } from "lucide-react";

const links = [
  { to: "/what-are-aptamers", label: "What Are Aptamers" },
  { to: "/technologies", label: "Technologies" },
  { to: "/services", label: "Services" },
  { to: "/applications", label: "Applications" },
  { to: "/apta-index", label: "Apta-Index" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 backdrop-blur-xl bg-background/70 border-b border-border" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-gradient shadow-glow-sm">
            <Dna className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Aptagen<span className="text-primary">.</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-cyan-gradient px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow-sm hover:scale-[1.03] transition-transform"
          >
            Get Quote
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden mx-6 mt-3 rounded-xl surface-card p-4 animate-fade-up">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-cyan-gradient px-5 py-2 text-sm font-medium text-primary-foreground"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
