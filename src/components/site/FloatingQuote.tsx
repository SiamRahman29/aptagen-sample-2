import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export function FloatingQuote() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Link
      to="/contact"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-cyan-gradient px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Sparkles className="h-4 w-4" />
      Get Quote
    </Link>
  );
}
