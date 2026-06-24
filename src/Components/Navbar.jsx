import { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import { Menu, X, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Our Process",    href: "#process" },
  { label: "The Comparison", href: "#comparison" },
  { label: "Packages",       href: "#pricing" },
  { label: "Free Resource",  href: "#lead-capture" },
];

export default function Navbar({ onOpenModal }) {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <header className={`navbar ${scrolled ? "shadow-lg" : ""}`}>
      <nav className="container-xl h-16 flex items-center justify-between gap-8">

        {/* ── Logo ── */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img
            src={logo}
            alt="Finscale Growth Logo"
            title="Finscale Growth - Credit Repair Marketing Agency Logo"
            loading="eager"
            width="54"
            height="54"
            style={{ height: "54px", width: "54px", objectFit: "contain", display: "block" }}
          />
        </a>

        {/* ── Desktop links ── */}
        <ul className="hidden lg:flex items-center gap-8" style={{ listStyle: "none", flex: 1, justifyContent: "center" }}>
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                style={{ fontFamily: "Inter", fontSize: "0.875rem", fontWeight: 500, color: "#9CA3AF", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.target.style.color = "#9CA3AF")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:flex items-center gap-3" style={{ flexShrink: 0 }}>
          <button onClick={onOpenModal} className="btn-primary" style={{ padding: "10px 20px", fontSize: "0.83rem", border: "none", cursor: "pointer" }}>
            Book Funnel Audit <ChevronRight size={14} />
          </button>
        </div>

        {/* ── Hamburger ── */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", color: "#FFFFFF", cursor: "pointer", padding: "6px" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div style={{ background: "rgba(10,15,29,0.98)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <ul className="container-xl py-4 flex flex-col gap-2" style={{ listStyle: "none" }}>
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={close}
                  style={{ display: "block", padding: "10px 0", fontFamily: "Inter", fontSize: "0.95rem", fontWeight: 500, color: "#9CA3AF", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li style={{ paddingTop: "8px" }}>
              <button
                onClick={() => {
                  close();
                  onOpenModal();
                }}
                className="btn-primary"
                style={{ justifyContent: "center", width: "100%", border: "none", cursor: "pointer" }}
              >
                Book Funnel Audit
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
