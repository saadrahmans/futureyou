"use client";

import { AppShell } from "@/components/AppShell";
import { GlassCard } from "@/components/GlassCard";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { FYButton } from "@/components/FYButton";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, Calendar, Search, X, Sparkles, ShieldCheck } from "lucide-react";
import React from "react";

type DemoEvent = {
  date: string;
  title: string;
  summary: string;
  why: string;
  source: { file: string; page: string; excerpt: string };
};

const DEMO_EVENTS: DemoEvent[] = [
  {
    date: "Jan 2026",
    title: "Blood Test — Vitamin D Deficiency",
    summary: "Vitamin D measured at 18 ng/mL (commonly considered low).",
    why: "Low vitamin D can affect energy and mood. Often correctable with supplements + sunlight.",
    source: { file: "Annual_Checkup_Jan2026.pdf", page: "Page 2", excerpt: "Vitamin D (25-OH): 18 ng/mL" },
  },
  {
    date: "Dec 2024",
    title: "Started medication — mild hypertension",
    summary: "A medication was prescribed for blood pressure support.",
    why: "Keeping blood pressure stable reduces long-term cardiovascular risk.",
    source: { file: "Prescription_Dec2024.pdf", page: "Page 1", excerpt: "Rx: … once daily (BP support)" },
  },
  {
    date: "Aug 2025",
    title: "X-ray — old wrist fracture",
    summary: "Imaging noted an older fracture with normal healing.",
    why: "Past injuries can explain recurring discomfort and guide exercise choices.",
    source: { file: "Xray_Aug2025.pdf", page: "Page 1", excerpt: "Findings: healed fracture noted…" },
  },
];

export default function TimelinePage() {
  const [query, setQuery] = React.useState("");
  const [openSource, setOpenSource] = React.useState<DemoEvent | null>(null);

  const filtered = DEMO_EVENTS.filter((e) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return e.title.toLowerCase().includes(q) || e.summary.toLowerCase().includes(q) || e.date.toLowerCase().includes(q);
  });

  return (
    <AppShell>
      <PageTransition>
        <div className="space-y-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-black/5 px-3 py-1 text-sm text-black/70">
                  <Sparkles size={14} />
                  Medical Timeline
                </div>
                <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Your history, organized.</h1>
                <p className="mt-2 text-black/60 max-w-2xl">
                  Upload PDFs → FutureYou extracts events, summarizes in plain language, and attaches citations to the source page.
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-black/5 border border-black/5 px-3 py-2 text-sm text-black/70">
                  <ShieldCheck size={16} />
                  Demo UI — backend will parse documents later
                </div>
              </div>

              <div className="flex gap-2">
                <FYButton variant="secondary">Export timeline</FYButton>
                <FYButton>Upload report</FYButton>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Left */}
            <div className="space-y-4">
              <Reveal delay={0.02}>
                <GlassCard>
                  <div className="text-sm text-black/55">Upload</div>
                  <div className="mt-1 text-lg font-semibold">Add a report</div>
                  <div className="mt-2 text-sm text-black/60">Drag a PDF here. Backend integration will enable real parsing.</div>

                  <div className="mt-4 rounded-3xl border border-dashed border-black/15 bg-white/60 p-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-black/5 grid place-items-center">
                        <Upload size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium">Drop your PDF here</div>
                        <div className="text-sm text-black/55">or click Upload</div>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <FYButton className="w-full">Upload PDF</FYButton>
                      <FYButton className="w-full" variant="secondary">
                        View sample
                      </FYButton>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.06}>
                <GlassCard>
                  <div className="text-sm text-black/55">Search</div>
                  <div className="mt-3 flex items-center gap-2 rounded-2xl bg-white/70 border border-black/5 px-3 py-2">
                    <Search size={16} className="text-black/50" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search events, dates, keywords…"
                      className="w-full bg-transparent outline-none text-sm"
                    />
                  </div>

                  <div className="mt-4 text-sm text-black/55">Try: “vitamin”, “blood”, “2026”</div>
                </GlassCard>
              </Reveal>
            </div>

            {/* Right */}
            <div className="md:col-span-2 space-y-4">
              <Reveal>
                <GlassCard>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-black/55">Timeline</div>
                      <div className="mt-1 text-lg font-semibold">Chronological medical events</div>
                      <div className="mt-2 text-sm text-black/60">
                        Demo entries. Backend will generate real events from uploaded PDFs.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/70 border border-black/5 px-3 py-2 text-sm text-black/70">
                      {filtered.length} items
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {filtered.map((ev, idx) => (
                      <div key={idx} className="rounded-3xl bg-white/60 border border-black/5 p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 rounded-2xl bg-black/5 grid place-items-center">
                              <FileText size={18} />
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2 text-sm text-black/55">
                                <Calendar size={14} />
                                {ev.date}
                              </div>
                              <div className="mt-1 text-lg font-semibold">{ev.title}</div>
                              <div className="mt-2 text-sm text-black/60">{ev.summary}</div>
                            </div>
                          </div>

                          <FYButton variant="secondary" onClick={() => setOpenSource(ev)}>
                            View source
                          </FYButton>
                        </div>

                        <div className="mt-4 rounded-2xl bg-black/5 border border-black/5 p-4">
                          <div className="text-sm font-medium">Why it matters</div>
                          <div className="mt-1 text-sm text-black/60">{ev.why}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.06}>
                <GlassCard>
                  <div className="text-sm text-black/55">Why this is different</div>
                  <div className="mt-2 text-sm text-black/60">
                    Most apps track habits. Few can turn scattered PDFs into a clean narrative with citations a doctor can trust.
                  </div>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {openSource && <SourceModal ev={openSource} onClose={() => setOpenSource(null)} />}
        </AnimatePresence>
      </PageTransition>
    </AppShell>
  );
}

function SourceModal({ ev, onClose }: { ev: DemoEvent; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-black/30 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-2xl rounded-3xl bg-white/80 backdrop-blur border border-black/10 shadow-xl p-6"
        initial={{ opacity: 0, y: 14, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-black/55">Source citation</div>
            <div className="mt-1 text-xl font-semibold">{ev.title}</div>
            <div className="mt-2 text-sm text-black/60">
              From: <span className="font-medium">{ev.source.file}</span> • {ev.source.page}
            </div>
          </div>

          <button onClick={onClose} className="h-10 w-10 rounded-2xl bg-black/5 hover:bg-black/10 transition grid place-items-center">
            <X size={18} />
          </button>
        </div>

        <div className="mt-6 rounded-3xl bg-white/70 border border-black/10 p-5">
          <div className="text-sm font-medium">Highlighted excerpt (demo)</div>
          <div className="mt-3 rounded-2xl bg-black/5 border border-black/10 p-4 font-mono text-sm">
            {ev.source.excerpt}
          </div>
          <div className="mt-4 text-sm text-black/55">
            In the full version, this opens the original PDF at the cited page and highlights the exact line.
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 justify-end">
          <FYButton variant="secondary" onClick={onClose}>Close</FYButton>
          <FYButton>Export as PDF</FYButton>
        </div>
      </motion.div>
    </motion.div>
  );
}
