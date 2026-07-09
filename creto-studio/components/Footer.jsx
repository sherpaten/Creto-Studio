import { Linkedin, Mail, MapPin, Phone, Clock, ArrowUp, ArrowRight } from "lucide-react";

// Lucide deprecated brand/logo icons (Facebook, Twitter, Instagram, etc.)
// so we use a lightweight inline SVG instead.
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 9H15V6.5h-1.5C11.6 6.5 10 8.1 10 10v2H8v3h2v6.5h3V15h2.1l.4-3H13v-1.7c0-.7.2-1.3 1-1.3z" />
    </svg>
  );
}

const socials = [
  { icon: FacebookIcon, href: "https://www.facebook.com/share/1HAz84hXhZ/" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/109663468/admin/dashboard/" },
  // Instagram hidden for now
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-white/10">
      {/* Newsletter strip */}
      <div className="bg-[#305CDE]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Creto Studio" className="h-12 w-auto" />
            <div className="h-10 w-px bg-white/30 hidden sm:block" />
            <p className="text-white/90 text-sm">
              We design. We build. We elevate
              <br />
              brands in the digital world.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div className="hidden md:block">
              <p className="text-white font-semibold text-sm">Subscribe to our newsletter</p>
              <p className="text-white/70 text-xs">Stay updated with our latest news</p>
            </div>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 placeholder-white/60 text-white text-sm rounded-lg px-4 py-2.5 w-48 sm:w-64 outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-[#0B1120] hover:bg-[#0B1120]/80 transition-colors rounded-lg p-2.5"
              >
                <ArrowRight className="h-5 w-5 text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Logo + description + socials */}
        <div>
          <img src="/logo.png" alt="Creto Studio" className="h-14 w-auto mb-4" />
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            Creto Studio is a digital creative agency specializing in branding, web design, and digital experiences that drive real results.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[#6E8CF0] font-semibold text-sm mb-1">Company</h4>
          <div className="h-0.5 w-6 bg-[#6E8CF0] mb-4" />
          <ul className="space-y-3">
            {["About Us", "Our Work", "Contact Us"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm flex items-center gap-1.5 transition-colors"
                >
                  <span className="text-[#6E8CF0]">›</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#6E8CF0] font-semibold text-sm mb-1">Contact Us</h4>
          <div className="h-0.5 w-6 bg-[#6E8CF0] mb-4" />
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#6E8CF0]" />
              Boudha, Kathmandu, Nepal
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-[#6E8CF0]" />
              info@cretostudio.com
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-[#6E8CF0]" />
              +977 9747457986
              +977 9818778998
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-[#6E8CF0]" />
              Sun - Fri: 9:00 AM - 6:00 PM
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/50">
            &copy; {new Date().getFullYear()} Creto Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-xs text-white/50 flex items-center gap-1.5">
              Made with <span className="text-[#305CDE]">♥</span> in Nepal
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="h-9 w-9 rounded-lg bg-[#305CDE] hover:bg-[#305CDE]/80 transition-colors flex items-center justify-center"
            >
              <ArrowUp className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}