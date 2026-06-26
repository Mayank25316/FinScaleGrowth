import { Mail, Shield, Lock } from "lucide-react";
import logo from "../assets/logo.webp";

const NAV1 = [
  { label:"Our Process",    href:"#process"     },
  { label:"The Comparison", href:"#comparison"  },
  { label:"Packages",       href:"#pricing"     },
  { label:"Why Us",         href:"#why-us"      },
  { label:"About",          href:"#about"       },
];
const NAV2 = [
  { label:"FAQs",           href:"#faqs"        },
  { label:"Book Audit",     href:"#booking"     },
  { label:"Free Checklist", href:"#lead-capture"},
  { label:"Privacy Policy", href:"#"            },
  { label:"Terms of Service",href:"#"           },
];

const linkStyle = { fontFamily:"Inter", fontSize:"0.88rem", color:"#6B7280", textDecoration:"none", transition:"color 0.2s" };

export default function Footer() {
  return (
    <footer style={{ background:"#080d1a", borderTop:"1px solid rgba(255,255,255,0.05)", color:"#FFFFFF", paddingTop:"4rem", paddingBottom:"2rem" }}>
      <div className="container-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" style={{ textDecoration: "none", display: "block", marginBottom: "1rem" }}>
              <img
                src={logo}
                alt="Finscale Growth Logo"
                title="Finscale Growth - Credit Repair Marketing Agency Logo"
                loading="lazy"
                width="68"
                height="68"
                style={{ height: "68px", width: "68px", objectFit: "contain", display: "block" }}
              />
            </a>
            <p style={{ fontFamily:"Inter", fontSize:"0.84rem", color:"#4B5563", lineHeight:1.7, marginBottom:"1.25rem" }}>
              Performance marketing systems built exclusively for US credit repair firms. CROA/TSR compliant. First-party leads. Zero locked contracts.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
              <div className="trust-badge"><Shield size={12} color="#C89B3C" /> CROA Compliance Aligned</div>
              <div className="trust-badge"><Lock size={12} color="#C89B3C" /> Data Security Guaranteed</div>
            </div>
          </div>

          {/* Nav 1 */}
          <div>
            <h4 style={{ fontFamily:"Inter", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"#4B5563", marginBottom:"1rem" }}>Navigation</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"10px" }}>
              {NAV1.map(l => (
                <li key={l.label}>
                  <a href={l.href} style={linkStyle} onMouseEnter={e=>(e.target.style.color="#FFFFFF")} onMouseLeave={e=>(e.target.style.color="#6B7280")}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav 2 */}
          <div>
            <h4 style={{ fontFamily:"Inter", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"#4B5563", marginBottom:"1rem" }}>Legal & Resources</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"10px" }}>
              {NAV2.map(l => (
                <li key={l.label}>
                  <a href={l.href} style={linkStyle} onMouseEnter={e=>(e.target.style.color="#FFFFFF")} onMouseLeave={e=>(e.target.style.color="#6B7280")}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily:"Inter", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"#4B5563", marginBottom:"1rem" }}>Contact</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
              <a href="mailto:abhi@abhimaddiya.com" style={{ ...linkStyle, display:"flex", alignItems:"center", gap:"10px" }} onMouseEnter={e=>(e.currentTarget.style.color="#FFFFFF")} onMouseLeave={e=>(e.currentTarget.style.color="#6B7280")}>
                <Mail size={14} color="#3B82F6" style={{ flexShrink:0 }} /> contact@finscalegrowth.com
              </a>
              {/* <div style={{ display:"flex", alignItems:"flex-start", gap:"10px", fontFamily:"Inter", fontSize:"0.88rem", color:"#6B7280" }}>
                <MapPin size={14} color="#3B82F6" style={{ flexShrink:0, marginTop:"2px" }} /> Serving US Credit Repair Firms Nationwide
              </div> */}
              <a
                href="https://www.linkedin.com/in/abhimaddiya"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...linkStyle, display:"flex", alignItems:"center", gap:"10px" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#FFFFFF")}
                onMouseLeave={e=>(e.currentTarget.style.color="#6B7280")}
              >
                {/* Inline LinkedIn SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#3B82F6" style={{ flexShrink:0 }}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.05)", paddingTop:"1.5rem", display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"1rem", alignItems:"center" }}>
          <p style={{ fontFamily:"Inter", fontSize:"0.76rem", color:"#374151" }}>
            © {new Date().getFullYear()} Abhi Maddiya. All rights reserved. &nbsp;|&nbsp;
            <span style={{ color:"#374151" }}>Not affiliated with the FTC, CFPB, or any government entity.</span>
          </p>
          <p style={{ fontFamily:"Inter", fontSize:"0.72rem", color:"#374151" }}>
            Results may vary. Past performance does not guarantee future results.
          </p>
        </div>
      </div>

      {/* WhatsApp float */}
      <a href="https://wa.me/918360083360?text=Hi%20Abhi%20Maddiya%2C%20I%20want%20to%20set%20up%20pay-after-booking%20ads%20for%20my%20CRA.%20Let%27s%20chat." target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
}
