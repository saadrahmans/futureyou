"use client";

import React from "react";
import { AppShell } from "@/components/AppShell";
import { GlassCard } from "@/components/GlassCard";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { FYButton } from "@/components/FYButton";
import { motion } from "framer-motion";
import {
  FlaskConical,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Timer,
  Zap,
} from "lucide-react";

type Experiment = {
  title: string;
  duration: string;
  goal: string;
  why: string;
  steps: string[];
};

const EXPERIMENTS: Experiment[] = [
  {
    title: "7-Day Early Sleep",
    duration: "7 days",
    goal: "Sleep by 11pm",
    why: "More consistent sleep lowers next-day stress and reduces cravings.",
    steps: ["Reminder at 10:45pm", "Tap Yes/No each night", "Compare stress before/after"],
  },
  {
    title: "60-Second Calm Reset",
    duration: "5 days",
    goal: "1 minute breathing",
    why: "Tiny resets reduce stress spikes without long meditation sessions.",
    steps: ["Tap stress emoji", "Start 60s breathing", "Track stress trend"],
  },
  {
    title: "Sunlight + Steps",
    duration: "10 days",
    goal: "20 min walk",
    why: "Movement + sunlight supports mood and energy gently.",
    steps: ["Pick a daily time", "Log completion", "Watch energy trend"],
  },
];

export default function ActionLabPage() {
  const [active, setActive] = React.useState<Experiment>(EXPERIMENTS[0]);

  return (
    <AppShell>
      <PageTransition>
        <div className="space-y-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-black/5 px-3 py-1 text-sm text-black/70">
                  <Sparkles size={14} />
                  Action Lab
                </div>

                <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                  Small experiments. Big clarity.
                </h1>

                <p className="mt-2 text-black/60 max-w-2xl">
                  FutureYou helps you try tiny changes and measure what actually works —
                  without guilt and without over-tracking.
                </p>
              </div>

              <div className="flex gap-2">
                <FYButton variant="secondary">View results</FYButton>
                <FYButton>Start</FYButton>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Left list */}
            <div className="space-y-4">
              <Reveal delay={0.02}>
                <GlassCard>
                  <div className="text-sm text-black/55">Choose one</div>
                  <div className="mt-1 text-lg font-semibold">Recommended experiments</div>

                  <div className="mt-4 space-y-3">
                    {EXPERIMENTS.map((e) => {
                      const selected = active.title === e.title;

                      return (
                        <button
                          key={e.title}
                          onClick={() => setActive(e)}
                          className={[
                            "w-full text-left rounded-3xl border p-4 transition",
                            selected
                              ? "bg-white/80 border-black/10 shadow-sm"
                              : "bg-white/55 border-black/5 hover:bg-white/70",
                          ].join(" ")}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="text-sm font-semibold">{e.title}</div>
                              <div className="mt-1 text-sm text-black/60">{e.goal}</div>
                            </div>
                            <div className="text-xs rounded-full bg-black/5 px-2 py-1 text-black/70">
                              {e.duration}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.06}>
                <GlassCard>
                  <div className="text-sm text-black/55">Hackathon hook</div>
                  <div className="mt-2 text-sm text-black/60">
                    We detect the loop, pick the leverage point, and then prove it with before/after.
                  </div>
                </GlassCard>
              </Reveal>
            </div>

            {/* Right detail */}
            <div className="md:col-span-2 space-y-4">
              <Reveal>
                <GlassCard>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-black/5 grid place-items-center">
                        <FlaskConical size={18} />
                      </div>

                      <div>
                        <div className="text-sm text-black/55">Selected experiment</div>
                        <div className="mt-1 text-xl font-semibold">{active.title}</div>
                        <div className="mt-2 text-sm text-black/60">{active.why}</div>
                      </div>
                    </div>

                    <FYButton>Start</FYButton>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <Stat icon={<Timer size={16} />} label="Duration" value={active.duration} />
                    <Stat icon={<Zap size={16} />} label="Goal" value={active.goal} />
                    <Stat icon={<CheckCircle2 size={16} />} label="Tracking" value="Yes/No taps" />
                  </div>

                  <div className="mt-6 rounded-3xl bg-white/60 border border-black/5 p-5">
                    <div className="text-sm text-black/55">How it works</div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      {active.steps.map((s, i) => (
                        <Step key={i} n={i + 1} text={s} />
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.06}>
                <GlassCard>
                  <div className="text-sm text-black/55">Example result (demo)</div>
                  <div className="mt-2 text-lg font-semibold">Before vs After</div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <ResultCard
                      title="Before"
                      lines={["Avg stress: 😟 3.8/5", "Sleep quality: 2.5★", "Future score: 58/100"]}
                    />
                    <ResultCard
                      title="After"
                      lines={["Avg stress: 🙂 2.1/5", "Sleep quality: 3.9★", "Future score: 64/100"]}
                    />
                  </div>

                  <motion.div
                    className="mt-4 rounded-3xl bg-black/5 border border-black/5 p-5"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="text-sm text-black/55">Outcome</div>
                    <div className="mt-2 text-lg font-semibold">
                      Stress improved more than predicted
                    </div>
                    <div className="mt-2 text-sm text-black/60">
                      Prediction: 30% drop • Result: 45% drop
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <FYButton>
                        Start this experiment <ArrowRight size={16} />
                      </FYButton>
                      <FYButton variant="secondary">Pick another</FYButton>
                    </div>
                  </motion.div>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </PageTransition>
    </AppShell>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/55 border border-black/5 p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">{label}</div>
        <div className="h-9 w-9 rounded-2xl bg-black/5 grid place-items-center">
          {icon}
        </div>
      </div>
      <div className="mt-3 text-lg font-semibold">{value}</div>
    </div>
  );
}

function Step({ n, text }: { n: number; text: string }) {
  return (
    <div className="rounded-2xl bg-white/70 border border-black/5 p-4">
      <div className="text-xs text-black/55">Step {n}</div>
      <div className="mt-1 text-sm font-medium">{text}</div>
    </div>
  );
}

function ResultCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-3xl bg-white/60 border border-black/5 p-5">
      <div className="text-sm text-black/55">{title}</div>
      <div className="mt-3 space-y-2 text-sm text-black/70">
        {lines.map((l) => (
          <div key={l} className="rounded-2xl bg-black/5 border border-black/5 px-3 py-2">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
