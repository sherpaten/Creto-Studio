"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, MapPin, Phone, Clock, ChevronRight } from 'lucide-react';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const sectionMap = {
  "Web Design": "services",
  "Branding": "services",
  "UI/UX Design": "services",
  "Digital Marketing": "services",
  "SEO Optimization": "services",
  "Content Creation": "services",
  "About Us": "about",
  "Our Work": "projects",
  "Careers": null,
  "Blog": null,
  "Pricing": null,
  "Contact Us": "contact",
  "Case Studies": "projects",
  "Help Center": null,
  "Privacy Policy": null,
  "Terms of Service": null,
  "FAQ": null,
  "Support": "contact",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-[#0b0e14] text-gray-400"
    >
      <div className="w-full bg-[#305CDE] px-8 py-10 mb-0">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <img src="/logo.png" alt="Creto Studio" className="h-12 w-auto" />
            <div>
              <h3 className="text-white font-bold text-lg">We design. We build. We elevate</h3>
              <p className="text-white/80 text-sm">brands in the digital world.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white/10 p-2 w-full md:w-auto">
            <Mail className="text-white ml-2" size={20} />
            <div className="flex flex-col">
              <span className="text-white text-xs font-semibold">Subscribe to our newsletter</span>
              <span className="text-white/70 text-[10px]">Stay updated with our latest news</span>
            </div>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-none outline-none text-white placeholder:text-white/50 text-sm w-full md:w-48"
            />
            <button className="bg-black p-2 hover:bg-black/80 transition-colors">
              <ArrowRight className="text-white" size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src="/logo.png" alt="Creto Studio" className="h-10 mb-6" />
            <p className="text-sm leading-relaxed mb-6">
              Creto Studio is a digital creative agency specializing in branding, web design, and digital experiences that drive real results.
            </p>
            <div className="flex gap-3">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <div key={social} className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-[#305CDE] cursor-pointer transition-colors">
                  <span className="text-sm uppercase font-bold">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>

          {[
            { title: "Services", links: ["Web Design", "Branding", "UI/UX Design", "Digital Marketing", "SEO Optimization", "Content Creation"] },
            { title: "Company", links: ["About Us", "Our Work", "Careers", "Blog", "Pricing", "Contact Us"] },
            { title: "Resources", links: ["Case Studies", "Help Center", "Privacy Policy", "Terms of Service", "FAQ", "Support"] }
          ].map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li
                    key={link}
                    onClick={() => sectionMap[link] && scrollToSection(sectionMap[link])}
                    className={`flex items-center gap-2 hover:text-white transition-colors text-sm ${sectionMap[link] ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    <ChevronRight size={14} /> {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin size={18} /> Kathmandu, Nepal</li>
              <li className="flex items-center gap-3"><Mail size={18} /> info@cretostudio.com</li>
              <li className="flex items-center gap-3"><Phone size={18} /> +977 980-1234567</li>
              <li className="flex items-center gap-3"><Clock size={18} /> Sun - Fri: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {currentYear} Creto Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Made with ❤️ in Nepal</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#305CDE] p-2 text-white ml-2 hover:bg-[#254ab5] transition-colors"
            >
              <ArrowRight className="rotate-[-90deg]" size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}