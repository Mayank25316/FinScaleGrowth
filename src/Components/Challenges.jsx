import { AlertTriangle, Filter, DollarSign } from "lucide-react";

const CARDS = [
  {
    num: "01",
    icon: AlertTriangle,
    iconColor: "#EF4444",
    iconBg:    "rgba(239,68,68,0.1)",
    title: "The Compliance Nightmare",
    sub:   "CROA / TSR Bans",
    body:  `A single unvetted word in ad copy gets assets permanently banned. Most agencies don't understand CROA Section 405 or TSR cold-calling restrictions — leaving your firm legally exposed and financially liable.`,
  },
  {
    num: "02",
    icon: Filter,
    iconColor: "#F59E0B",
    iconBg:    "rgba(245,158,11,0.1)",
    title: "The Junk Lead Trap",
    sub:   "",
    body:  "Cheap leads equal disconnected calls. Borrowers without money for setup fees. No verified intent. You're paying per lead, not per qualified conversation — a critical and silent financial drain.",
  },
  {
    num: "03",
    icon: DollarSign,
    iconColor: "#3B82F6",
    iconBg:    "rgba(59,130,246,0.1)",
    title: "The Locked Retainer Drain",
    sub:   "",
    body:  "Paying $2,000/month for 'brand awareness' while the sales pipeline is bone dry. Locked contracts with zero performance accountability and zero qualified borrowers showing up.",
  },
];

export default function Challenges() {
  return (
    <section id="challenges" className="bg-grid-surface" style={{ padding: "6rem 0" }}>
      <div className="container-xl">

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 4rem" }}>
          <div className="pill" style={{ marginBottom: "1.25rem" }}>The Real Problem</div>
          <h2 className="headline" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", marginBottom: "1rem" }}>
            The Hidden Drains in{" "}
            <span className="accent-blue">Traditional CRA Marketing</span>
          </h2>
          <p className="subtext" style={{ fontSize: "1rem" }}>
            Before we fix it, let&apos;s name what&apos;s quietly bleeding your firm.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="card-dark"
                style={{ padding: "2rem", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                {/* Big background number */}
                <div style={{ position: "absolute", top: "-20px", right: "-10px", fontFamily: "Inter", fontSize: "8rem", fontWeight: 900, color: "#FFFFFF", opacity: 0.03, lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
                  {card.num}
                </div>

                {/* Icon */}
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: card.iconBg, border: `1px solid ${card.iconColor}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                  <Icon size={22} color={card.iconColor} strokeWidth={2} />
                </div>

                {/* Number label */}
                <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3B82F6", marginBottom: "8px" }}>
                  {card.num}
                </div>

                <h3 className="headline-sm" style={{ fontSize: "1.1rem", marginBottom: card.sub ? "3px" : "12px" }}>
                  {card.title}
                </h3>

                {card.sub && (
                  <div style={{ fontSize: "0.78rem", fontWeight: 500, color: "#6B7280", marginBottom: "12px" }}>
                    ({card.sub})
                  </div>
                )}

                <p className="subtext" style={{ fontSize: "0.88rem", position: "relative", zIndex: 1, marginTop: "auto" }}>
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
