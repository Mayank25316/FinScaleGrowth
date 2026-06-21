import { CalendarCheck2, ShieldCheck, DollarSign, Scale } from "lucide-react";
import AppointmentScheduler from "./AppointmentScheduler";

const PREREQS = [
  {
    icon: ShieldCheck,
    c: "#10B981",
    bg: "rgba(16,185,129,0.1)",
    text: "You are a registered, US-based Credit Repair Association (CRA) owner or operator.",
  },
  {
    icon: DollarSign,
    c: "#3B82F6",
    bg: "rgba(59,130,246,0.1)",
    text: "You have a dedicated monthly ad spend budget to allocate for client acquisition campaigns.",
  },
  {
    icon: Scale,
    c: "#C89B3C",
    bg: "rgba(200,155,60,0.1)",
    text: "You prioritize legal compliance and sustainable growth over shortcut tactics.",
  },
];

export default function Booking({ prefillData }) {

  return (
    <section id="booking" className="bg-grid-dark" style={{ padding: "6rem 0" }}>
      <div className="container-xl">

        {/* ── Header ── */}
        <div style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto 2.5rem" }}>
          <div className="pill" style={{ marginBottom: "1.25rem" }}>
            <CalendarCheck2 size={12} /> Schedule
          </div>
          <h2 className="headline" style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)", marginBottom: "1rem" }}>
            Secure Your Free{" "}
            <span className="accent-blue">20-Min Strategy Audit</span>
          </h2>
          <p className="subtext" style={{ fontSize: "1rem" }}>
            A focused, no-fluff session to diagnose your pipeline gaps and map out a compliant acquisition system.
          </p>
        </div>

        {/* ── Qualification box — centered, max-width ── */}
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto 2.5rem",
            width: "100%",
            background: "rgba(200,155,60,0.06)",
            border: "1px solid rgba(200,155,60,0.2)",
            borderRadius: "14px",
            padding: "1.5rem 2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "9px", background: "rgba(200,155,60,0.12)", border: "1px solid rgba(200,155,60,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <CalendarCheck2 size={18} color="#C89B3C" />
            </div>
            <div>
              <div style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "0.9rem", color: "#C89B3C" }}>Before Booking, Please Confirm:</div>
              <div style={{ fontFamily: "Inter", fontSize: "0.73rem", color: "#B45309" }}>This ensures the session is valuable for both of us.</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {PREREQS.map(({ icon: Icon, c, bg, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "7px", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                  <Icon size={14} color={c} strokeWidth={2.2} />
                </div>
                <p style={{ fontFamily: "Inter", fontSize: "0.86rem", color: "#D1D5DB", lineHeight: 1.6, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Appointment Calendar & Form Scheduler ── */}
        <AppointmentScheduler formId="ba236a3d-b1ba-4da3-919b-7dfdc82d9ffc" prefillData={prefillData} />

        {/* ── Reassurance row ── */}
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem", marginTop: "2rem" }}>
          {["✓ No sales pressure", "✓ 100% free", "✓ Reschedule anytime"].map(t => (
            <span key={t} style={{ fontFamily: "Inter", fontSize: "0.8rem", fontWeight: 600, color: "#6B7280" }}>{t}</span>
          ))}
        </div>

      </div>
    </section>
  );
}
