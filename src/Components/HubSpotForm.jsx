import { useState, useEffect, useRef } from "react";
import { Check, Loader2, AlertCircle } from "lucide-react";

const HS_MEETINGS_URL = "https://meetings-na2.hubspot.com/abhi-maddiya";

const FINANCIAL_DRIVERS = [
  { label: "Buying a Home / Securing a Mortgage", value: "c96cmLiO6ropax-v28Xn8" },
  { label: "Purchasing an Auto / Car Loan Approval", value: "ExL-F7iFbHZQX95zpoz_V" },
  { label: "General Credit Score Restoration & Debt Relief", value: "PZ-yzI0r-_31Ph2YmkIKZ" },
  { label: "Cleaning up Reports for Personal Loans", value: "Ny0-Y_VPLoxHvXZqtLiQ8" }
];

const getHubspotUtk = () => {
  const match = document.cookie.match(/hubspotutk=([^;]+)/);
  return match ? match[1] : null;
};

export default function HubSpotForm({
  formId = "574c935b-01eb-4fea-8395-fab07d82dc73",
  theme = "light",
  onSuccessType = "meetings",
  onReady,
  onError,
  onSuccess
}) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDrivers, setSelectedDrivers] = useState([]);

  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const onReadyRef = useRef(onReady);
  const onErrorRef = useRef(onError);
  const onSuccessRef = useRef(onSuccess);

  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);

  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);

  useEffect(() => {
    onSuccessRef.current = onSuccess;
  }, [onSuccess]);

  // Signal ready immediately on mount
  useEffect(() => {
    if (onReadyRef.current) {
      onReadyRef.current();
    }
  }, []);

  const isLeadsForm = formId === "574c935b-01eb-4fea-8395-fab07d82dc73";

  const handleCheckboxChange = (val) => {
    setSelectedDrivers((prev) => {
      const updated = prev.includes(val)
        ? prev.filter((d) => d !== val)
        : [...prev, val];
      
      if (errors.drivers && updated.length > 0) {
        setErrors((errs) => ({ ...errs, drivers: null }));
      }
      return updated;
    });
  };

  const validate = () => {
    const tempErrors = {};
    if (!firstname.trim()) tempErrors.firstname = "First name is required";
    
    if (!email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else {
      const cleanPhone = phone.replace(/[^0-9]/g, "");
      if (cleanPhone.length < 8) {
        tempErrors.phone = "Please enter a valid phone number";
      }
    }

    if (isLeadsForm && selectedDrivers.length === 0) {
      tempErrors.drivers = "Please select at least one primary financial driver";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const portalId = "245639188";
    const submitUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const fields = [
      { objectTypeId: "0-1", name: "firstname", value: firstname.trim() },
      { objectTypeId: "0-1", name: "lastname", value: lastname.trim() },
      { objectTypeId: "0-1", name: "email", value: email.trim() },
      { objectTypeId: "0-1", name: "phone", value: phone.trim() }
    ];

    if (isLeadsForm) {
      fields.push({
        objectTypeId: "0-1",
        name: "what_is_the_primary_financial_driver_for_your_credit_repair_clients_right_now_",
        value: selectedDrivers.join(";")
      });
    }

    const hutk = getHubspotUtk();
    const context = {
      pageUri: window.location.href,
      pageName: document.title,
      ...(hutk && { hutk })
    };

    try {
      const response = await fetch(submitUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields, context })
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      setIsSubmitted(true);

      const payload = {
        firstname: firstname.trim(),
        lastname: lastname.trim(),
        email: email.trim(),
        phone: phone.trim()
      };

      const delay = onSuccessType === "checklist" ? 1000 : 1500;
      setTimeout(() => {
        if (onSuccessRef.current) {
          onSuccessRef.current(payload);
        } else if (onSuccessType === "checklist") {
          window.location.href = "/checklist.pdf";
        } else {
          const calendarUrl =
            HS_MEETINGS_URL +
            "?firstname=" + encodeURIComponent(payload.firstname)  +
            "&lastname="  + encodeURIComponent(payload.lastname)  +
            "&email="     + encodeURIComponent(payload.email)  +
            "&phone="     + encodeURIComponent(payload.phone);
          window.location.href = calendarUrl;
        }
      }, delay);

    } catch (err) {
      console.error("HubSpot submission error:", err);
      if (onErrorRef.current) {
        onErrorRef.current();
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDark = theme === "dark";

  const labelStyle = {
    display: "block",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.75rem",
    fontWeight: "700",
    color: isDark ? "#FFFFFF" : "#111827",
    marginBottom: "6px",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    lineHeight: "1.4"
  };

  const inputStyle = (hasError, isFocused) => ({
    width: "100%",
    padding: "12px 14px",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.875rem",
    color: isDark ? "#FFFFFF" : "#111827",
    background: isDark ? "rgba(17, 24, 39, 0.6)" : "#FFFFFF",
    border: hasError
      ? (isDark ? "1px solid rgba(239, 68, 68, 0.5)" : "1px solid rgba(220, 38, 38, 0.5)")
      : isFocused
        ? "1px solid #3B82F6"
        : isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid #D1D5DB",
    borderRadius: "8px",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.2s ease-in-out",
    boxShadow: hasError
      ? (isDark ? "0 0 0 2px rgba(239, 68, 68, 0.2)" : "0 0 0 2px rgba(220, 38, 38, 0.12)")
      : isFocused
        ? (isDark ? "0 0 0 3px rgba(59, 130, 246, 0.3)" : "0 0 0 3px rgba(59, 130, 246, 0.18)")
        : "none"
  });

  const checkboxItemStyle = (isChecked) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 12px",
    background: isChecked
      ? (isDark ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.05)")
      : (isDark ? "rgba(255, 255, 255, 0.02)" : "#FFFFFF"),
    border: isChecked
      ? "1px solid #3B82F6"
      : (isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #D1D5DB"),
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.18s ease-in-out",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.85rem",
    color: isDark ? "#E5E7EB" : "#374151"
  });

  if (isSubmitted) {
    return (
      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem 0",
          animation: "fadein 0.3s ease-out"
        }}
      >
        <div 
          style={{
            width: "60px",
            height: "60px",
            background: "rgba(16, 185, 129, 0.1)",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem",
            color: "#10B981",
            boxShadow: "0 8px 24px rgba(16, 185, 129, 0.15)"
          }}
        >
          <Check size={28} strokeWidth={3} />
        </div>
        <h3 
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.3rem",
            fontWeight: "800",
            color: isDark ? "#FFFFFF" : "#111827",
            marginBottom: "0.5rem"
          }}
        >
          Form Submitted
        </h3>
        <p 
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            color: isDark ? "#9CA3AF" : "#4B5563",
            margin: 0
          }}
        >
          Thank you, we'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {submitError && (
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.2)",
            borderRadius: "8px",
            padding: "10px 12px",
            color: "#EF4444",
            fontSize: "0.85rem",
            fontFamily: "'Inter', sans-serif"
          }}
        >
          <AlertCircle size={16} style={{ flexShrink: 0 }} />
          <span>{submitError}</span>
        </div>
      )}

      {/* Side-by-side First & Last Name */}
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 200px" }}>
          <label htmlFor="firstname" style={labelStyle}>First Name</label>
          <input
            id="firstname"
            type="text"
            placeholder="John"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
              if (errors.firstname) setErrors(prev => ({ ...prev, firstname: null }));
            }}
            onFocus={() => setFocusedField("firstname")}
            onBlur={() => setFocusedField(null)}
            style={inputStyle(errors.firstname, focusedField === "firstname")}
            disabled={isSubmitting}
          />
          {errors.firstname && (
            <span style={{ display: "block", color: "#EF4444", fontSize: "0.75rem", marginTop: "4px", fontFamily: "'Inter', sans-serif" }}>
              {errors.firstname}
            </span>
          )}
        </div>

        <div style={{ flex: "1 1 200px" }}>
          <label htmlFor="lastname" style={labelStyle}>
            Last Name <span style={{ textTransform: "lowercase", fontWeight: "normal", color: "#9CA3AF" }}>(optional)</span>
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Doe"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
              if (errors.lastname) setErrors(prev => ({ ...prev, lastname: null }));
            }}
            onFocus={() => setFocusedField("lastname")}
            onBlur={() => setFocusedField(null)}
            style={inputStyle(errors.lastname, focusedField === "lastname")}
            disabled={isSubmitting}
          />
          {errors.lastname && (
            <span style={{ display: "block", color: "#EF4444", fontSize: "0.75rem", marginTop: "4px", fontFamily: "'Inter', sans-serif" }}>
              {errors.lastname}
            </span>
          )}
        </div>
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" style={labelStyle}>Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors(prev => ({ ...prev, email: null }));
          }}
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField(null)}
          style={inputStyle(errors.email, focusedField === "email")}
          disabled={isSubmitting}
        />
        {errors.email && (
          <span style={{ display: "block", color: "#EF4444", fontSize: "0.75rem", marginTop: "4px", fontFamily: "'Inter', sans-serif" }}>
            {errors.email}
          </span>
        )}
      </div>

      {/* Phone Input */}
      <div>
        <label htmlFor="phone" style={labelStyle}>Phone Number</label>
        <input
          id="phone"
          type="tel"
          placeholder="(123) 456-7890"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (errors.phone) setErrors(prev => ({ ...prev, phone: null }));
          }}
          onFocus={() => setFocusedField("phone")}
          onBlur={() => setFocusedField(null)}
          style={inputStyle(errors.phone, focusedField === "phone")}
          disabled={isSubmitting}
        />
        {errors.phone && (
          <span style={{ display: "block", color: "#EF4444", fontSize: "0.75rem", marginTop: "4px", fontFamily: "'Inter', sans-serif" }}>
            {errors.phone}
          </span>
        )}
      </div>

      {/* Leads Form Checkbox Fields */}
      {isLeadsForm && (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={labelStyle}>
            What is the primary financial driver for your credit repair clients right now?
          </label>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {FINANCIAL_DRIVERS.map((item) => {
              const isChecked = selectedDrivers.includes(item.value);
              return (
                <div
                  key={item.value}
                  onClick={() => !isSubmitting && handleCheckboxChange(item.value)}
                  style={checkboxItemStyle(isChecked)}
                >
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      border: isChecked ? "2px solid #3B82F6" : (isDark ? "2px solid rgba(255, 255, 255, 0.25)" : "2px solid #9CA3AF"),
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isChecked ? "#3B82F6" : "transparent",
                      transition: "all 0.15s ease-in-out",
                      flexShrink: 0
                    }}
                  >
                    {isChecked && <Check size={12} color="#FFFFFF" strokeWidth={3} />}
                  </div>
                  <span style={{ select: "none", userSelect: "none" }}>{item.label}</span>
                </div>
              );
            })}
          </div>
          {errors.drivers && (
            <span style={{ display: "block", color: "#EF4444", fontSize: "0.75rem", marginTop: "4px", fontFamily: "'Inter', sans-serif" }}>
              {errors.drivers}
            </span>
          )}
        </div>
      )}

      {/* Submit Button */}
      <div style={{ marginTop: "8px" }}>
        <button
          type="submit"
          className="btn-primary"
          style={{
            width: "100%",
            justifyContent: "center",
            opacity: isSubmitting ? 0.8 : 1,
            cursor: isSubmitting ? "not-allowed" : "pointer"
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" style={{ marginRight: "8px" }} />
              Submitting...
            </>
          ) : onSuccessType === "checklist" ? (
            "Download Free PDF Now"
          ) : (
            "Book Your Free Strategy Audit"
          )}
        </button>
      </div>
    </form>
  );
}
