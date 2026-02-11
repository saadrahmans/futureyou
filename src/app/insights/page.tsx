"use client";

import React from "react";
import { AppShell } from "@/components/AppShell";
import { GlassCard } from "@/components/GlassCard";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { FYButton } from "@/components/FYButton";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Brain,
  Moon,
  Sparkles,
  Utensils,
  ShieldCheck,
  Info,
} from "lucide-react";

export default function InsightsPage() {
  const [open, setOpen] = React.useState(false);

  return (
    <AppShell>
      <PageTransition>
        <div className="space-y-6">
          {/* Header */}
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-black/5 px-3 py-1 text-sm text-black/70">
                  <Sparkles size={14} />
                  Insights
                </div>

                <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                  Patterns, gently revealed.
                </h1>

                <p className="mt-2 text-black/60 max-w-2xl">
                  FutureYou connects lifestyle signals into understandable loops — then suggests one
                  small move that breaks the cycle. Backend will power real detection later.
                </p>

                <div className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-black/5 border border-black/5 px-3 py-2 text-sm text-black/70">
                  <ShieldCheck size={16} />
                  Demo UI — calm, non-judgmental
                </div>
              </div>

              <div className="flex gap-2">
                <FYButton variant="secondary">Weekly report</FYButton>
                <FYButton>Start experiment</FYButton>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Main insight */}
            <div className="md:col-span-2 space-y-4">
              <Reveal>
                <GlassCard>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-black/5 grid place-items-center">
                        <AlertTriangle size={18} />
                      </div>

                      <div className="min-w-0">
                        <div className="text-sm text-black/55">
                          Compounding pattern detected
                        </div>

                        <div className="mt-1 text-xl font-semibold">
                          Poor sleep → Stress → Comfort eating → Worse sleep
                        </div>

                        <p className="mt-2 text-sm text-black/60">
                          The loop amplifies itself. Fixing one high-leverage point can flip it into a
                          positive cycle.
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 rounded-2xl bg-white/70 border border-black/5 px-3 py-2 text-sm text-black/70">
                      <Info size={16} />
                      Backend pending
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <Chip icon={<Moon size={16} />} title="Sleep" note="Inconsistent" />
                    <Chip icon={<Brain size={16} />} title="Stress" note="Often high" />
                    <Chip icon={<Utensils size={16} />} title="Meals" note="Comfort eating" />
                  </div>

                  <div className="mt-6 rounded-3xl bg-white/60 border border-black/5 p-4 overflow-hidden">
                    <LoopViz />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <FYButton onClick={() => setOpen((v) => !v)}>
                      {open ? "Hide what to do" : "See what to do"}{" "}
                      <ArrowRight size={16} />
                    </FYButton>
                    <FYButton variant="secondary">Start sleep experiment</FYButton>
                    <FYButton variant="ghost">Why this happens</FYButton>
                  </div>

                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-5 rounded-3xl bg-black/5 border border-black/5 p-5"
                    >
                      <div className="text-sm text-black/55">Highest-impact move</div>
                      <div className="mt-2 text-lg font-semibold">Fix sleep first</div>
                      <p className="mt-2 text-sm text-black/60">
                        More consistent sleep lowers stress the next day and reduces cravings — creating
                        a positive feedback loop.
                      </p>

                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        <Outcome label="Expected effect" value="Stress ↓" />
                        <Outcome label="Knock-on" value="Cravings ↓" />
                        <Outcome label="Compounding" value="Sleep ↑" />
                      </div>
                    </motion.div>
                  )}
                </GlassCard>
              </Reveal>

              {/* Empty state card */}
              <Reveal delay={0.06}>
                <GlassCard>
                  <div className="text-sm text-black/55">Before data exists</div>
                  <div className="mt-2 text-sm text-black/60">
                    If the user has no logs yet, we show a calm prompt instead of alarms.
                  </div>

                  <div className="mt-4 rounded-2xl bg-white/70 border border-black/5 p-4 text-sm text-black/70">
                    “Log a few days to unlock gentle insights. No pressure.”
                  </div>
                </GlassCard>
              </Reveal>
            </div>

            {/* Side panel */}
            <div className="space-y-4">
              <Reveal delay={0.03}>
                <GlassCard>
                  <div className="text-sm text-black/55">This week</div>
                  <div className="mt-2 text-lg font-semibold">Awaiting analysis</div>
                  <p className="mt-2 text-sm text-black/60">
                    Weekly trends and recommended experiments will appear here after backend integration.
                  </p>

                  <div className="mt-5 space-y-2">
                    <MiniRow label="Stress triggers" value="—" />
                    <MiniRow label="Best sleep days" value="—" />
                    <MiniRow label="Consistency score" value="—" />
                  </div>

                  <div className="mt-5">
                    <FYButton variant="secondary" className="w-full">
                      Connect backend later
                    </FYButton>
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.08}>
                <GlassCard>
                  <div className="text-sm text-black/55">Hackathon note</div>
                  <p className="mt-2 text-sm text-black/60">
                    Judges should see: problem → loop → leverage point → experiment.
                  </p>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </PageTransition>
    </AppShell>
  );
}

function Chip({
  icon,
  title,
  note,
}: {
  icon: React.ReactNode;
  title: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl bg-white/55 border border-black/5 p-3">
      <div className="flex items-center justify-between">
        <div className="h-9 w-9 rounded-2xl bg-black/5 grid place-items-center">
          {icon}
        </div>
        <span className="text-xs text-black/50">•</span>
      </div>
      <div className="mt-2 text-sm font-medium">{title}</div>
      <div className="text-sm text-black/60">{note}</div>
    </div>
  );
}

function MiniRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/55 border border-black/5 px-3 py-2">
      <div className="text-sm text-black/60">{label}</div>
      <div className="text-sm font-semibold">{value}</div>
    </div>
  );
}

function Outcome({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/60 border border-black/5 p-3">
      <div className="text-xs text-black/55">{label}</div>
      <div className="mt-1 text-sm font-medium">{value}</div>
    </div>
  );
}

function LoopViz() {
  return (
    <div className="relative h-48">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute -left-24 inset-y-0 w-40 bg-white/40 blur-xl"
          animate={{ x: [0, 900] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0.5,
          }}
        />
      </motion.div>

      <div className="relative grid h-full grid-cols-2 gap-3">
        <LoopNode title="Poor sleep" desc="less than you need" />
        <LoopNode title="Higher stress" desc="lower resilience" />
        <LoopNode title="Comfort eating" desc="quick relief" />
        <LoopNode title="Worse sleep" desc="repeats the cycle" />
      </div>
    </div>
  );
}

function LoopNode({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl bg-white/70 border border-black/5 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-black/60">{desc}</div>
      <div className="mt-3 h-1.5 w-14 rounded-full bg-black/10" />
    </div>
  );
}
