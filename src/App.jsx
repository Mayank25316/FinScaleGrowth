import { useState } from "react";

import Navbar      from "./Components/Navbar";
import Hero        from "./Components/Hero";
import Challenges  from "./Components/Challenges";
import Process     from "./Components/Process";
import Comparison  from "./Components/Comparison";
import Pricing     from "./Components/Pricing";
import WhyUs       from "./Components/WhyUs";
import LeadCapture from "./Components/LeadCapture";
import About       from "./Components/About";
import FAQs        from "./Components/FAQs";
import Booking     from "./Components/Booking";
import Footer      from "./Components/Footer";
import LeadModal   from "./Components/LeadModal";

export default function App() {
  const [modalType, setModalType] = useState(null); // null | "booking" | "checklist"
  const [prefillData, setPrefillData] = useState(null);

  const openBookingModal   = () => setModalType("booking");
  const openChecklistModal = () => setModalType("checklist");
  const closeModal         = () => setModalType(null);

  const handleLeadCaptured = (data) => {
    setPrefillData(data);
    closeModal();
    // Smooth scroll to the booking section
    setTimeout(() => {
      const bookingSection = document.getElementById("appointment-calendar");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      {/* ── Global Lead-Capture Modal ── */}
      <LeadModal key={modalType || "closed"} isOpen={modalType !== null} type={modalType} onClose={closeModal} onLeadCaptured={handleLeadCaptured} />

      {/* ── Fixed Navigation ── */}
      <Navbar onOpenModal={openBookingModal} />

      <main>
        {/* 1. Hero — passes triggers for both checklist and booking modals */}
        <Hero onOpenChecklistModal={openChecklistModal} onOpenBookingModal={openBookingModal} />

        {/* 2. Core Challenges */}
        <Challenges />

        {/* 3. 5-Step Process */}
        <Process />

        {/* 4. Comparison Table */}
        <Comparison />

        {/* 5. Pricing — passes openBookingModal for the "Get Started with Ads" CTA */}
        <Pricing onOpenModal={openBookingModal} />

        {/* 6. Risk Reducer / Why Us */}
        <WhyUs />

        {/* 7. Lead Capture Section — passes openChecklistModal to download the checklist */}
        <LeadCapture onOpenModal={openChecklistModal} />

        {/* 8. About */}
        <About onOpenModal={openBookingModal} />

        {/* 9. FAQs */}
        <FAQs onOpenModal={openBookingModal} />

        {/* 10. Booking — passes openBookingModal for strategy audits and prefillData */}
        <Booking onOpenModal={openBookingModal} prefillData={prefillData} />
      </main>

      {/* 11. Footer + floating WhatsApp button */}
      <Footer />
    </>
  );
}
