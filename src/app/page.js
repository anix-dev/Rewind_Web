"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "./footer";

// ===== Next.js page (app/page.tsx compatible) =====
export default function Page() {
  return <RewindLanding />;
}

// ===== Helpers & design tokens =====
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { show: { transition: { staggerChildren: 0.06 } } };

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-md">
    {children}
  </span>
);

function Feature({ title, emoji, desc }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-transform hover:-translate-y-1"
    >
      {/* Only border glow effect on hover, no background fill */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none">
        <div className="h-full w-full rounded-3xl border border-white/10 transition duration-500 group-hover:border-transparent group-hover:shadow-[0_0_25px_rgba(165,91,211,0.6)]"></div>
      </div>
      <div className="relative z-10 flex items-center gap-3">
        <div className="text-2xl">{emoji}</div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="relative z-10 mt-3 text-sm leading-relaxed text-white/80">
        {desc}
      </p>
    </motion.div>
  );
}

// ===== Modal: 30s Demo =====
function DemoModal({ open, onClose, src }) {
  const backdropRef = useRef(null);
  const onBackdrop = (e) => {
    if (e.target === backdropRef.current) onClose();
  };
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div ref={backdropRef} onClick={onBackdrop} className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-[92vw] max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-[#0b0a1a] shadow-2xl">
        <button onClick={onClose} className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/15">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2"/></svg>
        </button>
        <div className="aspect-video bg-black">
          <video src={src} controls autoPlay muted loop playsInline className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}

function RewindLanding() {
  const ICON_SRC = "/images/flower.png";
  const DEMO_SRC = "/demo.mp4";
  // Screens from your public/images folder
  const APP_SCREENS = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg"
  ];
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0b0a1a] text-white">
      {/* Background gradients */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 800px at 10% -10%, #100B2E 10%, transparent 60%), radial-gradient(1000px 800px at 90% 110%, #301255 10%, transparent 60%), radial-gradient(800px 600px at 60% 30%, rgba(165,91,211,.2), transparent 70%)",
        }}
      />

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-28">
        <motion.div variants={stagger} initial="hidden" animate="show" className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Badge><span className="h-2 w-2 rounded-full bg-emerald-300" /> New • Private by design</Badge>
            <motion.h1 variants={fadeUp} className="mt-5 flex items-center gap-4 text-6xl font-extrabold leading-tight tracking-tight md:text-8xl">
              <motion.div className="grid h-14 w-14 place-items-center rounded-full bg-white/5" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: [1,1.1,1], opacity:1 }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                <img src={ICON_SRC} alt="Rewind flower" className="h-9 w-9 drop-shadow-[0_0_20px_rgba(165,91,211,.5)]" />
              </motion.div>
              <motion.span initial={{ scale: 0.9, opacity: 0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:1, ease:"easeOut" }} className="bg-gradient-to-r from-purple-200 via-pink-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(165,91,211,.6)]">REWIND</motion.span>
            </motion.h1>

            <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.3,duration:0.8 }} className="mt-5 flex flex-wrap gap-4 text-2xl md:text-3xl">
              <span className="rounded-full border border-purple-400/30 bg-purple-900/40 px-5 py-2 font-semibold shadow-lg transition hover:scale-105">🪞 Reflect</span>
              <span className="rounded-full border border-pink-400/30 bg-pink-900/40 px-5 py-2 font-semibold shadow-lg transition hover:scale-105">🕰️ Revisit</span>
              <span className="rounded-full border border-yellow-400/30 bg-yellow-900/40 px-5 py-2 font-semibold shadow-lg transition hover:scale-105">💫 Relive</span>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-10 max-w-xl leading-relaxed text-white/90 md:text-xl">
              <span className="font-semibold text-white">Your personal memory vault.</span> Private, soulful and always with you.<br/><br/>Talk to REWIND about your heart and feelings — AI listens and gently reminds you of <span className="italic">that spontaneous leg trip with friends</span>, <span className="italic">cooking classes with your mom</span>, or <span className="italic">your first concert night</span>.<br/><br/>With <span className="font-semibold">Antaratma</span>, your confidential assistant of the soul, memories don’t stay in the past — they come alive again in your present.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#app-store" className="group inline-flex items-center gap-3 rounded-xl bg-black px-4 py-3 text-white shadow ring-1 ring-white/10 transition hover:scale-[1.02] hover:ring-white/20">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M16.365 1.43c0 1.14-.466 2.227-1.234 3.03-.79.823-2.08 1.463-3.19 1.37-.14-1.08.448-2.24 1.22-3.07.79-.84 2.19-1.47 3.2-1.33zM20.5 17.13c-.61 1.42-.9 2.07-1.69 3.34-1.1 1.7-2.64 3.82-4.56 3.84-1.07.02-1.8-.7-3.12-.7-1.33 0-2.1.68-3.14.72-1.9.07-3.36-1.85-4.46-3.53-2.43-3.7-2.69-8.05-1.19-10.37 1.08-1.7 2.77-2.7 4.68-2.73 1.09-.02 2.12.75 3.12.75 1 0 2.18-.93 3.68-.79.63.03 2.41.26 3.55 2.03-3.03 1.65-2.54 5.98.51 7.14z"/></svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-white/70">Download on the</div>
                  <div className="-mt-0.5 text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#google-play" className="group inline-flex items-center gap-3 rounded-xl bg-[#121212] px-4 py-3 text-white shadow ring-1 ring-white/10 transition hover:scale-[1.02] hover:ring-white/20">
                <svg viewBox="0 0 512 512" className="h-5 w-5" aria-hidden>
                  <path fill="#00A0FF" d="M325.3 234.3 83.5 5.7C76.2-.9 64 4.3 64 14.5v483c0 10.2 12.2 15.4 19.5 8.8l241.8-228.6c9.6-9.1 9.6-24.7 0-33.4z"/>
                  <path fill="#FFE000" d="m359.8 199.3-55.1 50.1 55.1 50.1 87.4 48.2c10.3 5.7 22.8-1.9 22.8-13.6V164.7c0-11.7-12.5-19.3-22.8-13.6l-87.4 48.2z"/>
                  <path fill="#FF3A44" d="M304.7 249.4 83.5 471.5c-7.3 6.6-19.5 1.4-19.5-8.8V49.3c0-10.2 12.2-15.4 19.5-8.8l221.2 222.1z"/>
                  <path fill="#32A071" d="M359.8 299.5 249.6 218l110.2-81.5 87.4-48.2c10.3-5.7 22.8 1.9 22.8 13.6v169.5c0 11.7-12.5-19.3-22.8-13.6l-87.4 48.5z"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-white/70">GET IT ON</div>
                  <div className="-mt-0.5 text-sm font-semibold">Google Play</div>
                </div>
              </a>
              <motion.button whileHover={{ scale:1.03 }} onClick={() => setOpenDemo(true)} className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#6A2AB5] via-[#A55BD3] to-[#F2C94C] px-4 py-3 text-white shadow">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                <span>Watch 30s Demo</span>
              </motion.button>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="relative">
            <div className="absolute inset-0 -z-10 blur-3xl" style={{ background:"radial-gradient(40% 40% at 50% 40%, rgba(165,91,211,.35), transparent 60%), radial-gradient(40% 40% at 60% 70%, rgba(242,201,76,.2), transparent 60%)" }} />
            <div className="mx-auto mt-4 w-72 rounded-[2.5rem] border border-white/20 bg-gradient-to-b from-white/10 to-white/5 p-2 shadow-2xl">
              <div className="rounded-[2rem] bg-[#0f0d20] p-3">
                <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-2xl">
                  <div className="flex h-full w-full animate-scrollScreens">
                    {APP_SCREENS.map((src, i) => (
                      <img key={i} src={src} alt={`App screen ${i+1}`} className="h-full w-full object-cover flex-shrink-0" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Reflect / Revisit / Relive Section */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          <Feature
            title="Reflect"
            emoji="🪞"
            desc="Pause and connect with your true self. Capture your emotions, thoughts and life lessons in a safe, private journal."
          />
          <Feature
            title="Revisit"
            emoji="🕰️"
            desc="Travel back through time. Explore how your moods, voice notes and reflections have evolved across months and years."
          />
          <Feature
            title="Relive"
            emoji="💫"
            desc="Bring moments alive again. Let Antaratma replay your cherished memories so you can feel their magic once more."
          />
        </motion.div>
      </section>

      {/* Antaratma Voice – Open Your Heart */}
      <section className="relative mx-auto max-w-7xl px-6 pb-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid place-items-center gap-10 text-center"
        >
          {/* Title + short summary (centered) */}
          <motion.div variants={fadeUp} className="max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Open Your Heart to <span className="bg-gradient-to-r from-purple-200 via-pink-300 to-yellow-200 bg-clip-text text-transparent">Antaratma</span>
            </h2>
            <p className="mt-4 text-white/85 md:text-lg">
              Speak freely and let Antaratma listen with compassion. Your words flow into text instantly, then come back as
              gentle reflections and tiny, human next‑steps. No judgment. Just presence.
            </p>

            {/* Mobile fallback: stack the points as chat chips */}
            <div className="mt-6 space-y-3 md:hidden">
              {[
                "Tap & Speak voice journaling",
                "Real‑time speech → text with smart punctuation",
                "Emotion‑aware summary & mood tagging",
                "Hindi, English & Hinglish friendly",
                "Private by design — offline first, encrypted sync",
              ].map((t, i) => (
                <div key={i} className="relative w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 backdrop-blur-md">
                  <span className="absolute -left-1.5 top-4 h-3 w-3 rotate-45 border-l border-t border-white/10 bg-white/5" />
                  {t}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Centered Phone with callouts around it */}
          <motion.div variants={fadeUp} className="relative mx-auto w-72 md:w-80">
            {/* glow */}
            <div className="absolute inset-0 -z-10 blur-3xl" style={{ background:"radial-gradient(40% 40% at 50% 40%, rgba(165,91,211,.35), transparent 60%), radial-gradient(40% 40% at 60% 70%, rgba(242,201,76,.2), transparent 60%)" }} />

            {/* Multicolor hover border wrapper */}
            <div className="group mx-auto w-72 md:w-80 rounded-[2.7rem] p-[2px] bg-gradient-to-r from-[#6A2AB5] via-[#A55BD3] to-[#F2C94C] [background-size:200%_200%] transition-all duration-700 hover:[background-position:100%_0%] shadow-[0_0_40px_-12px_rgba(165,91,211,0.45)]">
              <div className="rounded-[2.5rem] border border-white/20 bg-gradient-to-b from-white/10 to-white/5 p-2 shadow-2xl">
                <div className="rounded-[2rem] bg-[#0f0d20] p-3">
                  <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-2xl">
                    <img src={APP_SCREENS[0]} alt="Speak to Antaratma" className="h-full w-full object-cover" />

                    {/* Mic pulse */}
                    <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
                      <div className="relative h-12 w-12">
                        <span className="absolute inset-0 animate-ping rounded-full bg-fuchsia-500/30 blur-xl" />
                        <span className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl" />
                        <div className="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-r from-[#6A2AB5] via-[#A55BD3] to-[#F2C94C] p-[2px]">
                          <div className="grid h-full w-full place-items-center rounded-full bg-black/60">
                            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor"><path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0h-2z"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Transcribed text pill */}
                    <div className="absolute inset-x-4 bottom-20 rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
                      <div className="relative h-9 overflow-hidden rounded-xl">
                        <div className="absolute inset-0 animate-waveGradient" style={{background:"linear-gradient(90deg, rgba(165,91,211,.25) 0%, rgba(242,201,76,.25) 50%, rgba(165,91,211,.25) 100%)"}} />
                        <p className="relative z-10 px-3 text-xs leading-9 text-white/85">“Speaking… I felt overwhelmed today but proud I finished my work.”</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop callouts placed around the centered phone */}
            <div className="hidden md:block">
              {/* TL */}
              <div className="absolute -left-56 top-2 w-56 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 backdrop-blur-md shadow">
                <span className="absolute -right-1.5 top-4 h-3 w-3 rotate-45 border-r border-b border-white/10 bg-white/5" />
                🎙️ Tap & Speak voice journaling
              </div>
              {/* TR */}
              <div className="absolute -right-60 top-6 w-64 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 backdrop-blur-md shadow">
                <span className="absolute -left-1.5 top-4 h-3 w-3 rotate-45 border-l border-t border-white/10 bg-white/5" />
                ✍️ Real‑time speech → text with smart punctuation
              </div>
              {/* ML */}
              <div className="absolute -left-64 top-36 w-64 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 backdrop-blur-md shadow">
                <span className="absolute -right-1.5 top-4 h-3 w-3 rotate-45 border-r border-b border-white/10 bg-white/5" />
                😊 Emotion‑aware summary & mood tagging
              </div>
              {/* MR */}
              <div className="absolute -right-64 top-40 w-64 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 backdrop-blur-md shadow">
                <span className="absolute -left-1.5 top-4 h-3 w-3 rotate-45 border-l border-t border-white/10 bg-white/5" />
                🌐 Hindi, English & Hinglish friendly
              </div>
              {/* BR */}
              <div className="absolute -right-56 bottom-2 w-56 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 backdrop-blur-md shadow">
                <span className="absolute -left-1.5 top-4 h-3 w-3 rotate-45 border-l border-t border-white/10 bg-white/5" />
                🔒 Private by design — offline first, encrypted sync
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative mx-auto max-w-7xl px-6 pb-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} className="text-center text-4xl font-extrabold tracking-tight md:text-5xl">
            How it works
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-center text-white/85 md:text-lg">
            Three gentle steps to keep your memories alive — <span className="font-semibold">Reflect</span>, <span className="font-semibold">Revisit</span>, and <span className="font-semibold">Relive</span>.
          </motion.p>

          <div className="relative mt-12">
            {/* subtle connector line on desktop */}
            <div className="pointer-events-none absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:block" />

            <div className="grid gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <motion.div variants={fadeUp} className="relative flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold ring-1 ring-white/15">1</div>
                <div className="group mb-4 w-40 rounded-[1.6rem] bg-gradient-to-r from-[#6A2AB5] via-[#A55BD3] to-[#F2C94C] p-[2px] [background-size:200%_200%] transition-all duration-700 hover:[background-position:100%_0%]">
                  <div className="rounded-[1.2rem] border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-2">
                    <div className="aspect-[9/19.5] w-full overflow-hidden rounded-xl">
                      <img src={APP_SCREENS[1]} alt="Reflect snapshot" className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold">Reflect</h3>
                <p className="mt-2 text-sm text-white/80">Speak or write your thoughts. Tag your mood in seconds.</p>
              </motion.div>

              {/* Step 2 */}
              <motion.div variants={fadeUp} className="relative flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold ring-1 ring-white/15">2</div>
                <div className="group mb-4 w-40 rounded-[1.6rem] bg-gradient-to-r from-[#6A2AB5] via-[#A55BD3] to-[#F2C94C] p-[2px] [background-size:200%_200%] transition-all duration-700 hover:[background-position:100%_0%]">
                  <div className="rounded-[1.2rem] border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-2">
                    <div className="aspect-[9/19.5] w-full overflow-hidden rounded-xl">
                      <img src={APP_SCREENS[2]} alt="Revisit snapshot" className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold">Revisit</h3>
                <p className="mt-2 text-sm text-white/80">See timelines, highlights, and trends when you need them.</p>
              </motion.div>

              {/* Step 3 */}
              <motion.div variants={fadeUp} className="relative flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold ring-1 ring-white/15">3</div>
                <div className="group mb-4 w-40 rounded-[1.6rem] bg-gradient-to-r from-[#6A2AB5] via-[#A55BD3] to-[#F2C94C] p-[2px] [background-size:200%_200%] transition-all duration-700 hover:[background-position:100%_0%]">
                  <div className="rounded-[1.2rem] border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-2">
                    <div className="aspect-[9/19.5] w-full overflow-hidden rounded-xl">
                      <img src={APP_SCREENS[0]} alt="Relive snapshot" className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold">Relive</h3>
                <p className="mt-2 text-sm text-white/80">Get gentle prompts to bring back special moments — and act on them.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Privacy & Trust */}
      <section id="privacy" className="relative mx-auto max-w-7xl px-6 pb-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          {/* Left: promise + highlights */}
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Your memories. <span className="bg-gradient-to-r from-fuchsia-300 via-amber-200 to-pink-300 bg-clip-text text-transparent">Your rules.</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/85 md:text-lg">
              REWIND is built privacy‑first. You decide what to keep, sync, export, or delete — and Antaratma always
              respects your space.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                { emoji: "🛡️", title: "Private by design", desc: "Local‑first with encrypted sync options." },
                { emoji: "🔐", title: "Lock your journal", desc: "Passcode / biometric app lock support." },
                { emoji: "🌙", title: "Offline ready", desc: "Capture thoughts anywhere — sync later." },
                { emoji: "📤", title: "Export anytime", desc: "Own your data. Take it with you in one tap." },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-xl leading-none">{f.emoji}</div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{f.title}</h3>
                      <p className="mt-1 text-sm text-white/80">{f.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: privacy control mock card */}
          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-fuchsia-500/30 blur-3xl" />
            <div className="absolute -right-8 -bottom-10 h-28 w-28 rounded-full bg-amber-400/20 blur-3xl" />

            <div className="mx-auto w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_40px_-12px_rgba(217,70,239,0.25)] backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  {/* shield */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="currentColor"><path d="M12 2l7 4v6c0 4.97-3.05 9.23-7 10-3.95-.77-7-5.03-7-10V6l7-4z"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Privacy Controls</h3>
                  <p className="text-xs text-white/70">Fine‑tune how your memories are kept.</p>
                </div>
              </div>

              {[
                { label: "Encrypted Sync", on: true },
                { label: "Passcode Lock", on: true },
                { label: "Backup over Wi‑Fi only", on: false },
              ].map((row) => (
                <div key={row.label} className="mb-3 flex items-center justify-between text-sm">
                  <span className="text-white/85">{row.label}</span>
                  <span className={"inline-flex h-6 w-11 items-center rounded-full p-0.5 " + (row.on ? "bg-gradient-to-r from-[#6A2AB5] via-[#A55BD3] to-[#F2C94C]" : "bg-white/10") }>
                    <span className={"h-5 w-5 rounded-full bg-black/60 transition " + (row.on ? "ml-auto" : "ml-0")} />
                  </span>
                </div>
              ))}

              <div className="mt-5 grid grid-cols-2 gap-3">
                <a href="#" className="rounded-xl border border-white/15 px-4 py-2 text-center text-sm text-white/90 hover:border-white/25">Export Data</a>
                <a href="#" className="rounded-xl bg-white px-4 py-2 text-center text-sm font-semibold text-black hover:bg-white/90">Delete Selected</a>
              </div>

              <p className="mt-3 text-center text-[11px] text-white/60">You stay in control. Change these anytime.</p>
            </div>
            
          </motion.div>
        </motion.div>
        
      </section>

      <DemoModal open={openDemo} onClose={() => setOpenDemo(false)} src={DEMO_SRC} />
      <Footer iconSrc="/images/flower.png" />

      {/* Local keyframes for demo (optional if you already have in Tailwind config) */}
      <style>{`
        @keyframes scrollScreens { from { transform: translateX(0); } to { transform: translateX(-100%); } }
        .animate-scrollScreens { animation: scrollScreens 18s linear infinite; }
        @keyframes waveGradient { 0% { transform: translateX(-35%);} 100% { transform: translateX(35%);} }
        .animate-waveGradient { animation: waveGradient 3.5s ease-in-out infinite alternate; }
      `}</style>
    </div>
  );
}
