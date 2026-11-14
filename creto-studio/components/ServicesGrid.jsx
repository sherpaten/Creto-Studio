"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, ShoppingCart, Smartphone } from "lucide-react";
import TiltCard from "./TiltCard";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const services = [
  {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    desc: "Fast, responsive business websites and custom web applications built around your goals.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=70",
    imageAlt: "Developer workspace with a laptop and code",
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Thoughtful Android, iOS, and cross-platform experiences that keep customers connected.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=70",
    imageAlt: "Smartphone displaying a mobile application",
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "Online stores, product experiences, payments, and ordering workflows designed to convert.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=70",
    imageAlt: "Online shopping and digital commerce workspace",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#061D46] py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#0878E8]/15 blur-[100px]" />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div variants={fadeUp} className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#6DCBFF]">What we do</p>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-5xl">One partner for your next digital move.</h2>
          <p className="text-base leading-relaxed text-blue-100/70 sm:text-lg">Strategy, design, engineering, and digital growth — connected around the outcomes your business needs.</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map(({ slug, icon: Icon, title, desc, image, imageAlt }) => (
            <motion.div key={slug} variants={fadeUp} className="h-full">
              <Link href={`/services/${slug}`} aria-label={`Explore ${title}`} className="group block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20B9FF]">
                <TiltCard className="relative isolate flex min-h-[330px] h-full flex-col justify-end overflow-hidden rounded-2xl border border-white/15 p-7 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#36B9FF]/65 group-hover:shadow-[0_18px_50px_rgba(0,100,220,.25)] sm:min-h-[370px]">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={70}
                    loading="lazy"
                    className="absolute inset-0 -z-20 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#041126] via-[#061D46]/80 to-[#061D46]/20" />
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#8BD8FF]/35 bg-[#0878E8]/35 backdrop-blur-md transition group-hover:scale-110 group-hover:bg-[#0878E8]/55">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-blue-50/90">{desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#9DDEFF]">Explore service <ArrowUpRight size={16}/></span>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} className="mt-10 text-center sm:mt-12">
          <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#36B9FF]/60 hover:bg-white/[.06]">View all services <ArrowUpRight size={16}/></Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
