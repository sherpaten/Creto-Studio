"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles, ArrowUpRight, Loader2 } from "lucide-react";

const starters = [
  "What services do you offer?",
  "I need a website for my business",
  "Can you build a mobile app?",
  "How do I get a project quote?",
];

const welcome = {
  role: "assistant",
  content: "Hi! Welcome to Creto Studio. I'm the Creto AI assistant. I can help you explore our services, discuss your project, and find the right next step. What are you looking to build?",
};

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([welcome]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isLoading]);

  async function sendMessage(value = input) {
    const text = value.trim();
    if (!text || isLoading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsLoading(true);

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
    } catch (err) {
      setError(err.message || "Please try again in a moment.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {isOpen && (
        <section
          aria-label="Creto Studio AI chat"
          className="flex h-[min(620px,calc(100dvh-110px))] max-h-[calc(100dvh-110px)] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#06183b] shadow-[0_24px_90px_rgba(0,0,0,0.45)]"
        >
          <header className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#004ACA] to-[#0185FA] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="font-semibold">Creto AI Assistant</p>
                <p className="text-xs text-white/80">Here to help you build what's next</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="rounded-full p-2 transition hover:bg-white/15">
              <X size={20} />
            </button>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5" aria-live="polite">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "rounded-br-md bg-[#0878ee] text-white" : "rounded-bl-md border border-white/10 bg-white/[0.07] text-slate-100"}`}>
                  {message.content}
                </div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {starters.map((starter) => (
                  <button key={starter} onClick={() => sendMessage(starter)} className="rounded-full border border-[#79ABCF]/30 bg-[#0a2a5b] px-3 py-2 text-left text-xs text-slate-200 transition hover:border-[#0185FA] hover:bg-[#103b78]">
                    {starter}
                  </button>
                ))}
              </div>
            )}
            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Loader2 size={15} className="animate-spin" /> Creto AI is thinking…
              </div>
            )}
            {error && <p role="alert" className="rounded-xl border border-amber-300/20 bg-amber-300/10 px-3 py-2 text-xs text-amber-100">{error}</p>}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(event) => { event.preventDefault(); sendMessage(); }}
            className="border-t border-white/10 bg-[#04132f] p-3"
          >
            <div className="flex items-end gap-2 rounded-2xl border border-white/15 bg-white/[0.06] p-2 focus-within:border-[#0185FA]">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
                rows={1}
                maxLength={1200}
                placeholder="Ask us anything…"
                aria-label="Message the Creto AI assistant"
                className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-slate-400"
              />
              <button type="submit" disabled={!input.trim() || isLoading} aria-label="Send message" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0878ee] text-white transition hover:bg-[#1592ff] disabled:cursor-not-allowed disabled:opacity-40">
                <Send size={17} />
              </button>
            </div>
            <div className="flex items-center justify-between px-1 pt-2 text-[10px] text-slate-400">
              <span>AI responses may occasionally be inaccurate.</span>
              <a href="https://wa.me/9779747457986" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sky-300 hover:text-white">
                WhatsApp us <ArrowUpRight size={11} />
              </a>
            </div>
          </form>
        </section>
      )}

      <button
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close Creto AI chat" : "Chat with Creto AI"}
        aria-expanded={isOpen}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0878ee] to-[#004ACA] text-white shadow-[0_10px_35px_rgba(1,100,220,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_42px_rgba(1,133,250,0.55)] focus:outline-none focus:ring-4 focus:ring-sky-300/40"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={25} />}
        {!isOpen && <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-[#011032] bg-emerald-400" />}
      </button>
    </div>
  );
}
