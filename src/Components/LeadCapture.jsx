import { ShieldCheck, CheckCircle2, FileText, AlertTriangle, Globe } from "lucide-react";

const BULLETS = [
  "17-Point CROA Section 405 compliance review",
  "TSR cold-calling do-not-call checklist",
  "Banned ad copy phrases & compliant alternatives",
  "Platform policy risk map (Meta, Google, YouTube)",
];

export default function LeadCapture({ onOpenModal }) {
  return (
    <section id="lead-capture" className="bg-grid-dark" style={{ padding: "6rem 0" }}>
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div>
            <div className="pill-green" style={{ marginBottom: "1.25rem" }}>
              <ShieldCheck size={12} /> Free Resource
            </div>
            <h2 className="headline" style={{ fontSize: "clamp(1.9rem,3.2vw,2.6rem)", marginBottom: "1.25rem" }}>
              Protect Your Business{" "}
              <span className="accent-blue">Before Your Next Campaign</span>
            </h2>
            <p className="subtext" style={{ fontSize: "1rem", marginBottom: "2rem" }}>
              Download the 2026 CROA Ad Compliance Checklist — the exact framework we run through
              before launching any campaign for a credit repair firm.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "2.5rem" }}>
              {BULLETS.map(b => (
                <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <CheckCircle2 size={16} color="#10B981" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontFamily: "Inter", fontSize: "0.9rem", color: "#D1D5DB" }}>{b}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {[
                { Icon: FileText,      l: "17-Point Framework" },
                { Icon: AlertTriangle, l: "Zero Legal Risk"    },
                { Icon: Globe,         l: "All Platforms"      },
              ].map(({ Icon, l }) => (
                <div key={l} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <Icon size={13} color="#C89B3C" />
                  <span style={{ fontFamily: "Inter", fontSize: "0.78rem", fontWeight: 600, color: "#9CA3AF" }}>{l}</span>
                </div>
              ))}
            </div>
          </div>


          {/* ── Right: CTA Card to trigger Pop-up Form ── */}
          <div
            style={{
              background: "#111827",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "18px",
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle glow effect */}
            <div
              style={{
                position: "absolute",
                top: "-20%",
                left: "-20%",
                width: "140%",
                height: "140%",
                background: "radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />

            {/* Document/File Icon Graphic */}
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "12px",
                background: "rgba(37,99,235,0.1)",
                border: "1px solid rgba(37,99,235,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                color: "#3B82F6",
                boxShadow: "0 8px 24px rgba(37,99,235,0.1)",
              }}
            >
              <FileText size={28} />
            </div>

            <h3 style={{ fontFamily: "Inter", fontSize: "1.25rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.5rem" }}>
              Secure the 2026 CROA Checklist
            </h3>
            <p className="subtext" style={{ fontSize: "0.85rem", maxWidth: "340px", marginBottom: "2rem", lineHeight: 1.6 }}>
              Get instant access to the compliance check-sheet we run before launching any campaign.
            </p>

            <button
              onClick={onOpenModal}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "13px 24px",
                fontSize: "0.9rem",
                fontWeight: 600,
                justifyContent: "center",
                boxShadow: "0 4px 15px rgba(37,99,235,0.2)",
              }}
            >
              Download Free PDF Now
            </button>

            <p style={{ fontFamily: "Inter", fontSize: "0.68rem", color: "rgba(156,163,175,0.45)", marginTop: "1.25rem" }}>
              Instant Delivery to your Email • Researched & Vetted
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}
