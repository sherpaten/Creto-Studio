"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
} from "lucide-react";

const scrollToSection = (id) => {
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const sectionMap = {
  "Web Development": "services",
  "Mobile App Development": "services",
  "E-Commerce Solutions": "services",
  "UI/UX Design": "services",
  "AI & Software Solutions": "services",
  "Brand Identity": "services",
  "SEO & Digital Marketing": "services",
  "Social Media Management": "services",

  "About Us": "about",
  "Our Work": "projects",
  Careers: null,
  Blog: null,
  Pricing: null,
  "Contact Us": "contact",

  "Case Studies": "projects",
  "Help Center": null,
  "Privacy Policy": null,
  "Terms of Service": null,
  FAQ: null,
  Support: "contact",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="w-full bg-[#0b0e14] text-gray-400"
    >
      {/* =====================================================
          TOP BLUE SECTION
      ====================================================== */}

      <div className="w-full bg-[#305CDE] px-8 py-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand Message */}
          <div className="flex items-center gap-6">

            <img
              src="/logo.png"
              alt="Creto Studio"
              className="h-12 w-auto"
            />

            <div>
              <h3 className="text-white font-bold text-lg">
                We design. We build. We elevate
              </h3>

              <p className="text-white/80 text-sm">
                brands in the digital world.
              </p>
            </div>

          </div>

          {/* Newsletter */}
          <div className="flex items-center gap-4 bg-white/10 p-2 w-full md:w-auto">

            <Mail
              className="text-white ml-2 shrink-0"
              size={20}
              aria-hidden="true"
            />

            <div className="flex flex-col shrink-0">
              <span className="text-white text-xs font-semibold">
                Subscribe to our newsletter
              </span>

              <span className="text-white/70 text-[10px]">
                Stay updated with our latest news
              </span>
            </div>

            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="bg-transparent border-none outline-none text-white placeholder:text-white/50 text-sm w-full md:w-48"
            />

            <button
              type="button"
              aria-label="Subscribe to newsletter"
              className="bg-black p-2 hover:bg-black/80 transition-colors shrink-0"
            >
              <ArrowRight
                className="text-white"
                size={18}
                aria-hidden="true"
              />
            </button>

          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="w-full border-t border-white/5">

        <div className="max-w-[1400px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* =================================================
              BRAND COLUMN
          ================================================== */}

          <div className="lg:col-span-1">

            <img
              src="/logo.png"
              alt="Creto Studio"
              className="h-10 w-auto mb-6"
            />

            <p className="text-sm leading-relaxed mb-6">
              Creto Studio is a digital creative agency specializing in
              branding, web design, and digital experiences that drive real
              results.
            </p>

            {/* =================================================
                SOCIAL MEDIA
                AMERICAN SHERPA STYLE
                INLINE SVG — NO IMAGE FILES
            ================================================== */}

            <div className="flex items-center gap-3">

              {/* ==============================
                  FACEBOOK
              =============================== */}

              <a
                href="https://www.facebook.com/profile.php?id=61596185979278"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Creto Studio on Facebook"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  text-white/75
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-white/25
                  hover:bg-[#305CDE]
                  hover:text-white
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#305CDE]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                >
                  <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* ==============================
                  X / TWITTER
              =============================== */}

              <a
                href="https://x.com/Cretostudi5iy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Creto Studio on X"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  text-white/75
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-white/25
                  hover:bg-[#305CDE]
                  hover:text-white
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#305CDE]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.964 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </a>

              {/* ==============================
                  LINKEDIN
              =============================== */}

              <a
                href="https://www.linkedin.com/company/creto-studio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Creto Studio on LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  text-white/75
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-white/25
                  hover:bg-[#305CDE]
                  hover:text-white
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#305CDE]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V8.999h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.559 20.452h3.557V8.999H3.559v11.453Z" />
                </svg>
              </a>

              {/* ==============================
                  INSTAGRAM
              =============================== */}

              <a
                href="https://www.instagram.com/creto421"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Creto Studio on Instagram"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  text-white/75
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-white/25
                  hover:bg-[#305CDE]
                  hover:text-white
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#305CDE]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-[19px] w-[19px]"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

            </div>
          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div>

            <h4 className="text-white font-bold mb-6">
              Services
            </h4>

            <ul className="space-y-4">

              {[
                "Web Development",
                "Mobile App Development",
                "E-Commerce Solutions",
                "UI/UX Design",
                "AI & Software Solutions",
                "Brand Identity",
                "SEO & Digital Marketing",
                "Social Media Management",
              ].map((link) => (
                <li
                  key={link}
                  onClick={() =>
                    sectionMap[link] &&
                    scrollToSection(sectionMap[link])
                  }
                  className="flex items-center gap-2 text-sm cursor-pointer hover:text-white transition-colors"
                >
                  <ChevronRight
                    size={14}
                    aria-hidden="true"
                  />

                  {link}
                </li>
              ))}

            </ul>
          </div>

          {/* =================================================
              COMPANY
          ================================================== */}

          <div>

            <h4 className="text-white font-bold mb-6">
              Company
            </h4>

            <ul className="space-y-4">

              {[
                "About Us",
                "Our Work",
                "Careers",
                "Blog",
                "Pricing",
                "Contact Us",
              ].map((link) => (
                <li
                  key={link}
                  onClick={() =>
                    sectionMap[link] &&
                    scrollToSection(sectionMap[link])
                  }
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    sectionMap[link]
                      ? "cursor-pointer hover:text-white"
                      : "cursor-default"
                  }`}
                >
                  <ChevronRight
                    size={14}
                    aria-hidden="true"
                  />

                  {link}
                </li>
              ))}

            </ul>
          </div>

          {/* =================================================
              RESOURCES
          ================================================== */}

          <div>

            <h4 className="text-white font-bold mb-6">
              Resources
            </h4>

            <ul className="space-y-4">

              {[
                "Case Studies",
                "Help Center",
                "Privacy Policy",
                "Terms of Service",
                "FAQ",
                "Support",
              ].map((link) => (
                <li
                  key={link}
                  onClick={() =>
                    sectionMap[link] &&
                    scrollToSection(sectionMap[link])
                  }
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    sectionMap[link]
                      ? "cursor-pointer hover:text-white"
                      : "cursor-default"
                  }`}
                >
                  <ChevronRight
                    size={14}
                    aria-hidden="true"
                  />

                  {link}
                </li>
              ))}

            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>

            <h4 className="text-white font-bold mb-6">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm">

              {/* Location */}
              <li className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                />

                <span>
                  Kathmandu, Nepal
                </span>

              </li>

              {/* Email */}
              <li className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="shrink-0"
                  aria-hidden="true"
                />

                <a
                  href="mailto:info@cretostudio.com"
                  className="hover:text-white transition-colors"
                >
                  info@cretostudio.com
                </a>

              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">

                <Phone
                  size={18}
                  className="shrink-0"
                  aria-hidden="true"
                />

                <a
                  href="tel:+9779801234567"
                  className="hover:text-white transition-colors"
                >
                  +977 980-1234567
                </a>

              </li>

              {/* Hours */}
              <li className="flex items-center gap-3">

                <Clock
                  size={18}
                  className="shrink-0"
                  aria-hidden="true"
                />

                <span>
                  Sun - Fri: 9:00 AM - 6:00 PM
                </span>

              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* =====================================================
          BOTTOM FOOTER BAR
      ====================================================== */}

      <div className="w-full border-t border-white/5">

        <div className="max-w-[1400px] mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">

          {/* Copyright */}
          <p>
            &copy; {currentYear} Creto Studio. All rights reserved.
          </p>

          {/* Legal */}
          <div className="flex gap-6">

            <button
              type="button"
              onClick={() => {
                if (sectionMap["Privacy Policy"]) {
                  scrollToSection(
                    sectionMap["Privacy Policy"]
                  );
                }
              }}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={() => {
                if (sectionMap["Terms of Service"]) {
                  scrollToSection(
                    sectionMap["Terms of Service"]
                  );
                }
              }}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Terms of Service
            </button>

          </div>

          {/* Made in Nepal + Back to Top */}
          <div className="flex items-center gap-2">

            <span>
              Made with ❤️ in Nepal
            </span>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              aria-label="Back to top"
              className="
                bg-[#305CDE]
                p-2
                text-white
                ml-2
                hover:bg-[#254ab5]
                transition-colors
              "
            >
              <ArrowRight
                className="rotate-[-90deg]"
                size={16}
                aria-hidden="true"
              />
            </button>

          </div>

        </div>
      </div>

    </motion.footer>
  );
}