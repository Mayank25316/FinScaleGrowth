import { useEffect, useState } from "react";
import { X } from "lucide-react";
import HubSpotForm from "./HubSpotForm";

export default function LeadModal({ isOpen, type, onClose, onLeadCaptured }) {
  const [isFormReady, setIsFormReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  /* ── Prevent background scroll when modal is open ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* ── Fallback timer to prevent loader hanging due to adblockers or 403 blocks ── */
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsFormReady(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const formId = type === "checklist" 
    ? "ba236a3d-b1ba-4da3-919b-7dfdc82d9ffc" 
    : "574c935b-01eb-4fea-8395-fab07d82dc73";

  return (
    <>
      {/* ── Overlay ── */}
      <div
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        role="dialog"
        aria-modal="true"
        className="modal-overlay"
        style={{ overflowY: "auto" }}
      >
        {/* ── Modal box ── */}
        <div 
          className="modal-box no-scrollbar"
          style={{
            background: "#F9FAFB",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "18px",
            padding: "2rem",
            width: "100%",
            maxWidth: "480px",
            maxHeight: "calc(100vh - 40px)",
            overflowY: "auto",
            position: "relative",
            boxShadow: "0 24px 60px rgba(0,0,0,0.15)",
          }}
        >

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute", top: "16px", right: "16px",
              width: "32px", height: "32px",
              background: "rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "8px",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#4B5563", transition: "all 0.2s",
              zIndex: 10
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#EF4444"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0.04)"; e.currentTarget.style.color = "#4B5563"; }}
          >
            <X size={15} strokeWidth={2.5} />
          </button>

          {hasError ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "260px", textAlign: "center", padding: "1rem" }}>
              <p style={{ fontSize: "1.05rem", color: "#EF4444", fontFamily: "Inter", fontWeight: 700, marginBottom: "10px" }}>Form Blocked</p>
              <p style={{ fontSize: "0.85rem", color: "#4B5563", fontFamily: "Inter", lineHeight: 1.6 }}>
                It looks like your browser or adblocker is blocking HubSpot forms.
              </p>
              <p style={{ fontSize: "0.85rem", color: "#4B5563", fontFamily: "Inter", marginTop: "8px", lineHeight: 1.6, fontWeight: 500 }}>
                Please disable tracking protection/adblockers for this site and try again.
              </p>
            </div>
          ) : (
            <>
              {!isFormReady && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "260px" }}>
                  <div style={{
                    width: "32px",
                    height: "32px",
                    border: "3px solid rgba(59,130,246,0.1)",
                    borderTopColor: "#3B82F6",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite"
                  }} />
                  <p style={{ marginTop: "12px", fontSize: "0.82rem", color: "#6B7280", fontFamily: "Inter", fontWeight: 500 }}>Loading form...</p>
                </div>
              )}

              {/* HubSpot Form container */}
              <div style={{ display: isFormReady ? "block" : "none" }}>
                <HubSpotForm
                  instanceId="modal"
                  formId={formId}
                  theme="light"
                  onSuccessType={type === "checklist" ? "checklist" : "meetings"}
                  onReady={() => setIsFormReady(true)}
                  onError={() => setHasError(true)}
                  onSuccess={onLeadCaptured}
                />
              </div>

              {isFormReady && (
                <p style={{ fontFamily: "Inter", fontSize: "0.7rem", color: "#6B7280", textAlign: "center", lineHeight: 1.5, marginTop: "0.75rem" }}>
                  We respect your privacy. No spam, ever.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
