import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FloatingQuote } from "./FloatingQuote";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-20">{children}</main>
      <Footer />
      <FloatingQuote />
    </div>
  );
}
