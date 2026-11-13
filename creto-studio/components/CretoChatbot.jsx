"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, X, Send, MessageCircle, Sparkles, Loader2, ArrowUpRight } from "lucide-react";

const quickPrompts = [
  "What services do you offer?",
  "I need a website",
  "Tell me about pricing",
];

const initialMessage = {
  role: "assistant",
  content: "Hi there! 👋 I’m Creto’s AI assistant. I can help you explore our services, understand how we work, and plan your next digital project. What are you looking to build?",
};

export default function CretoChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("ready");
  const [error, setError] = useState("");
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      inputRef.current?.focus();
    }
  }, [open, messages, status]);

  async function sendMessage(text = input) {
    const trimmed = text.trim();
    if (!trimmed || status === "sending") return;

    const nextMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setStatus("sending");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.slice(-12).map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "The assistant is temporarily unavailable.");
      setMessages((current) => [...current, { role: "assistant", content: data.reply }]);
      setStatus("ready");
    } catch (err) {
      setError(err.message || "Please try again in a moment.");
      setStatus("ready");
    }
  }

  const whatsappUrl = "https://wa.me/9779747457986?text=" + encodeURIComponent("Hi Creto Studio, I'd like to discuss a project.");

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: open ? 0 : 1, y: open ? 18 : 0, scale: open ? 0.85 : 1 }}
        transition={{ duration: 0.2 }}
        aria-label="Open Creto AI assistant"
        aria-hidden={open}
        tabIndex={open ? -1 : 0}
        className="fixed bottom-6 right-6 z-[90] flex items-center gap-3 rounded-full border border-cyan-300/30 bg-[#071a3d] px-5 py-4 text-white shadow-[0_12px_45px_rgba(0,180,255,0.25)] transition hover:-translate-y-1 hover:border-cyan-200"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
        </span>
        <span className="text-sm font-semibold tracking-wide">Ask Creto AI</span>
        <MessageCircle size={19} className="text-cyan-300" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.22 }}
            role="dialog"
            aria-label="Creto Studio AI assistant"
            aria-modal="false"
            className="fixed bottom-4 right-4 z-[100] flex h-[min(680px,calc(100dvh-32px))] w-[min(410px,calc(100vw-32px))] flex-col overflow-hidden rounded-[26px] border border-cyan-300/20 bg-[#06132d] text-white shadow-[0_24px_90px_rgba(0,0,0,0.55)]"
          >
            <header className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#0b2855] to-[#092044] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-cyan-200">
                  <Bot size={23} />
                </div>
                <div>
                  <p className="font-semibold tracking-wide">Creto AI Assistant</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Here to help
                  </p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white">
                <X size={20} />
              </button>
            </header>

            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5 [scrollbar-width:thin] [scrollbar-color:#24436d_transparent]">
              <div className="mb-5 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/50">
                <Sparkles size={12} /> Creto Studio · Project concierge
              </div>
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-[13px] leading-6 ${message.role === "user" ? "rounded-br-md bg-blue-600 text-white" : "rounded-bl-md border border-white/10 bg-[#102447] text-slate-100"}`}>
                    {message.content}
                  </div>
                </div>
              ))}
              {status === "sending" && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-white/10 bg-[#102447] px-4 py-3 text-xs text-slate-300">
                    <Loader2 size={14} className="animate-spin text-cyan-300" /> Creto AI is thinking…
                  </div>
                </div>
              )}
              {error && (
                <div className="rounded-xl border border-rose-300/20 bg-rose-400/10 px-3 py-2 text-xs leading-5 text-rose-200">
                  {error} You can also reach us directly on WhatsApp below.
                </div>
              )}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {quickPrompts.map((prompt) => (
                    <button key={prompt} onClick={() => sendMessage(prompt)} className="rounded-full border border-cyan-200/20 bg-cyan-300/5 px-3 py-2 text-left text-[11px] text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/10">
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="border-t border-white/10 bg-[#081a37] p-4">
              <form onSubmit={(event) => { event.preventDefault(); sendMessage(); }} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0c2042] p-2 focus-within:border-cyan-300/40">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about your next project…"
                  aria-label="Message Creto AI"
                  maxLength={1200}
                  className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-slate-500"
                />
                <button type="submit" disabled={!input.trim() || status === "sending"} aria-label="Send message" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-[#03132e] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40">
                  <Send size={17} />
                </button>
              </form>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-emerald-300 transition hover:text-emerald-200">
                <MessageCircle size={15} /> Continue on WhatsApp <ArrowUpRight size={13} />
              </a>
              <p className="mt-2 text-center text-[10px] text-slate-500">AI can make mistakes. We’ll confirm project details with you.</p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
