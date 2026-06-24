import { User, Cpu, Scale } from "lucide-react";
import operatorPhoto from "../assets/photo.webp";

export default function About({ onOpenModal }) {
  return (
    <section id="about" className="bg-grid-dark" style={{ padding:"6rem 0" }}>
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Photo placeholder */}
          <div style={{ position:"relative" }}>
            <div style={{ width:"100%", aspectRatio:"4/5", maxHeight:"520px", background:"linear-gradient(135deg, #0f1e38 0%, #1a2f60 60%, #0B6B4B 100%)", borderRadius:"18px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden", border:"1px solid rgba(200,155,60,0.2)" }}>
              {/* Grid pattern */}
              <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize:"24px 24px" }} />
              <div style={{ width:"90px", height:"90px", borderRadius:"50%", border:"2px solid rgba(200,155,60,0.35)", marginBottom:"1rem", position:"relative", zIndex:1, overflow:"hidden" }}>
                <img 
                  src={operatorPhoto} 
                  alt="Abhi Maddiya" 
                  title="Abhi Maddiya - Performance Marketing Operator" 
                  loading="lazy" 
                  width="90" 
                  height="90" 
                  style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 12%" }} 
                />
              </div>
              <div style={{ fontFamily:"Inter", fontSize:"1.1rem", fontWeight:700, color:"#FFFFFF", position:"relative", zIndex:1 }}>Abhi Maddiya</div>
              <div style={{ fontFamily:"Inter", fontSize:"0.75rem", color:"#C89B3C", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", position:"relative", zIndex:1, marginTop:"4px" }}>Performance Marketing Operator</div>
              {/* Corner badge */}
              <div style={{ position:"absolute", bottom:"24px", right:"24px", background:"rgba(200,155,60,0.12)", border:"1px solid rgba(200,155,60,0.3)", borderRadius:"10px", padding:"10px 16px", textAlign:"center" }}>
                <div style={{ fontFamily:"Inter", fontSize:"1.3rem", fontWeight:800, color:"#C89B3C" }}>5+</div>
                <div style={{ fontFamily:"Inter", fontSize:"0.62rem", color:"#9CA3AF", textTransform:"uppercase", letterSpacing:"0.08em" }}>Years Exp.</div>
              </div>
            </div>
            {/* Floating credential */}
            <div style={{ position:"absolute", top:"24px", left:"-18px", background:"#111827", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"12px", padding:"12px 16px", boxShadow:"0 12px 40px rgba(0,0,0,0.4)", display:"flex", alignItems:"center", gap:"10px", maxWidth:"190px" }}>
              <div style={{ width:"34px", height:"34px", borderRadius:"8px", background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <Cpu size={16} color="#3B82F6" />
              </div>
              <div>
                <div style={{ fontFamily:"Inter", fontSize:"0.78rem", fontWeight:700, color:"#FFFFFF" }}>Performance</div>
                <div style={{ fontFamily:"Inter", fontSize:"0.67rem", color:"#9CA3AF" }}>Marketing Expert</div>
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div>
            <div className="pill" style={{ marginBottom:"1.25rem" }}>Meet Your Operator</div>
            <h2 className="headline" style={{ fontSize:"clamp(1.7rem,3vw,2.4rem)", marginBottom:"1rem" }}>
              Meet Abhi Maddiya —{" "}
              <span className="accent-blue">The Operator, Not a Salesman</span>
            </h2>
            <div className="divider-gold" />
            <p className="subtext" style={{ fontSize:"0.93rem", marginBottom:"1.1rem" }}>
              I&apos;m a Performance Marketing Operator focused exclusively on CRA Marketing and the US financial services sector — helping credit repair firms navigate the complex intersection of FTC compliance, consumer intent data, and scalable acquisition systems.
            </p>
            <p className="subtext" style={{ fontSize:"0.93rem", marginBottom:"1.1rem" }}>
              My work sits at the hard infrastructure layer: performance marketing pipelines, search-intent signal mapping, first-party data architecture, and legal compliance review — not just ad creative and vanity metrics.
            </p>
            <p className="subtext" style={{ fontSize:"0.93rem", marginBottom:"2rem" }}>
              I don&apos;t sell dashboards. I build systems that generate qualified appointments for your sales floor, consistently, without putting your business at regulatory risk.
            </p>
            {/* Chips */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:"10px", marginBottom:"2rem" }}>
              {[{Icon:Scale,l:"CROA/TSR Compliant"},{Icon:Cpu,l:"Performance Infrastructure"},{Icon:User,l:"US Financial Sector"}].map(({Icon,l}) => (
                <div key={l} style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"6px", padding:"8px 14px" }}>
                  <Icon size={13} color="#3B82F6" />
                  <span style={{ fontFamily:"Inter", fontSize:"0.79rem", fontWeight:600, color:"#D1D5DB" }}>{l}</span>
                </div>
              ))}
            </div>
            <button onClick={onOpenModal} className="btn-primary" style={{ border: "none", cursor: "pointer" }}>Book a Free Strategy Call</button>
          </div>
        </div>
      </div>
    </section>
  );
}
