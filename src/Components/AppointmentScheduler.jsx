export default function AppointmentScheduler({
  meetingUrl = "https://meetings-na2.hubspot.com/abhi-maddiya",
  prefillData
}) {
  let iframeSrc = `${meetingUrl}?embed=true`;
  if (prefillData) {
    const { firstname, lastname, email, phone } = prefillData;
    iframeSrc += `&firstname=${encodeURIComponent(firstname || "")}` +
                 `&lastname=${encodeURIComponent(lastname || "")}` +
                 `&first_name=${encodeURIComponent(firstname || "")}` +
                 `&last_name=${encodeURIComponent(lastname || "")}` +
                 `&firstName=${encodeURIComponent(firstname || "")}` +
                 `&lastName=${encodeURIComponent(lastname || "")}` +
                 `&email=${encodeURIComponent(email || "")}` +
                 `&phone=${encodeURIComponent(phone || "")}`;
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "880px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ─── Header Info ─── */}
      <div style={{ textAlign: "center", maxWidth: "620px", marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.5rem" }}>
          Ready to Build Your Credit Repair Funnel?
        </h3>
        <p className="subtext" style={{ fontSize: "0.92rem", color: "#9CA3AF" }}>
          Select your preferred slot below to schedule your strategy audit instantly.
        </p>
      </div>

      {/* ─── Embedded HubSpot Scheduler ─── */}
      <div
        id="appointment-calendar"
        style={{
          width: "100%",
          background: "#FFFFFF",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
          position: "relative",
          scrollMarginTop: "100px"
        }}
      >
        <iframe
          src={iframeSrc}
          style={{
            width: "100%",
            height: "640px",
            border: "none",
            display: "block"
          }}
          title="HubSpot Meeting Scheduler"
        />
      </div>
    </div>
  );
}
