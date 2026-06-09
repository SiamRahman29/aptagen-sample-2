import { Link } from "@tanstack/react-router";
import { Dna, Mail, MapPin, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-gradient shadow-glow-sm">
              <Dna className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-semibold">Aptagen<span className="text-primary">.</span></span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Precision aptamer engineering for biomarkers, targeted delivery, and next-generation therapeutics.
          </p>
          <div className="mt-6 flex items-center gap-4 text-muted-foreground">
            <a aria-label="LinkedIn" href="#" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            <a aria-label="Twitter" href="#" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Platform</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/what-are-aptamers" className="hover:text-primary">What Are Aptamers</Link></li>
            <li><Link to="/technologies" className="hover:text-primary">Technologies</Link></li>
            <li><Link to="/apta-index" className="hover:text-primary">Apta-Index™</Link></li>
            <li><Link to="/applications" className="hover:text-primary">Applications</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@aptagen.bio</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Cambridge, MA</li>
            <li><Link to="/services" className="hover:text-primary">R&amp;D Services</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Request Quote</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Aptagen Biotech. All rights reserved.</p>
          <p>Engineered for precision. Built for discovery.</p>
        </div>
      </div>
    </footer>
  );
}
