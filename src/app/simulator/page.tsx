"use client";

import { AppShell } from "@/components/AppShell";
import { GlassCard } from "@/components/GlassCard";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { FYButton } from "@/components/FYButton";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Moon,
  Dumbbell,
  Utensils,
  Brain,
  Info,
  Sparkles,
} from "lucide-react";
import React from "react";

export default function SimulatorPage() {
  const [sleep, setSleep] = React.useState(6);
  const [stress, setStress] = React.useState(3);
  const [movement, setMovement] = React.useState(2);
  const [meals, setMeals] = React.useState(3);

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
                  Future Simulator
                </div>
                <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                  Play with tomorrow.
                </h1>
                <p className="mt-2 text-black/60 max-w-2xl">
                  Adjust your lifestyle inputs to preview how changes might compound over time.
                  Projections will appear once the backend is connected.
                </p>

                <div className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-black/5 border border-black/5 px-3 py-2 text-sm text-black/70">
                  <Info size={16} />
                  Backend pending — UI ready for integration
                </div>
              </div>

              <div className="flex gap-2">
                <FYButton variant="secondary">See Insights</FYButton>
                <FYButton>
                  Open Demo Tour <ArrowRight size={16} />
                </FYButton>
              </div>
            </div>
          </Reveal>

          {/* Main grid */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Chart + scores */}
            <div className="md:col-span-2 space-y-4">
              <Reveal>
                <GlassCard>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-black/55">Projection</div>
                      <div className="mt-1 text-lg font-semibold">
                        Awaiting analysis
                      </div>
                      <div className="mt-1 text-sm text-black/60">
                        Connect backend to render 5/10/20 year curves and confidence.
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/60 border border-black/5 px-3 py-2 text-sm text-black/70">
                      5y • 10y • 20y
                    </div>
                  </div>

                  <div className="mt-6 rounded-3xl bg-white/60 border border-black/5 p-4 overflow-hidden">
                    <ChartPlaceholder />
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <ScoreTile title="Physical Health" icon={<Dumbbell size={16} />} />
                    <ScoreTile title="Mental Resilience" icon={<Brain size={16} />} />
                    <ScoreTile title="Energy" icon={<Sparkles size={16} />} />
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.06}>
                <GlassCard>
                  <div className="text-sm text-black/55">What the backend will return</div>
                  <div className="mt-2 text-sm text-black/60">
                    When connected, this page will request:
                  </div>

                  <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-black/70">
                    <Li>Score set: Physical / Mental / Energy / Risk</Li>
                    <Li>Time-series projections (5–20 years)</Li>
                    <Li>Confidence + explanation text (plain language)</Li>
                    <Li>Highest-leverage recommendation (one move)</Li>
                  </ul>

                  <div className="mt-5 rounded-2xl bg-black/5 border border-black/5 p-4 text-sm text-black/70">
                    Tip: Keep frontend “dumb.” Backend owns meaning and reasoning.
                  </div>
                </GlassCard>
              </Reveal>
            </div>

            {/* Controls */}
            <div className="space-y-4">
              <Reveal delay={0.03}>
                <GlassCard>
                  <div className="text-sm text-black/55">Inputs</div>
                  <div className="mt-1 text-lg font-semibold">Your baseline</div>
                  <div className="mt-1 text-sm text-black/60">
                    These controls update UI only. Backend will compute projections later.
                  </div>

                  <div className="mt-5 space-y-5">
                    <Control
                      icon={<Moon size={16} />}
                      label="Sleep (hours)"
                      valueLabel={`${sleep}h`}
                      value={sleep}
                      min={4}
                      max={9}
                      onChange={setSleep}
                    />

                    <Control
                      icon={<Brain size={16} />}
                      label="Stress (1–5)"
                      valueLabel={`${stress}/5`}
                      value={stress}
                      min={1}
                      max={5}
                      onChange={setStress}
                    />

                    <Control
                      icon={<Dumbbell size={16} />}
                      label="Movement (days/week)"
                      valueLabel={`${movement}x`}
                      value={movement}
                      min={0}
                      max={6}
                      onChange={setMovement}
                    />

                    <Control
                      icon={<Utensils size={16} />}
                      label="Meal quality (1–5)"
                      valueLabel={`${meals}/5`}
                      value={meals}
                      min={1}
                      max={5}
                      onChange={setMeals}
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <FYButton>Apply</FYButton>
                    <FYButton variant="secondary">Reset</FYButton>
                    <FYButton variant="ghost">What is this?</FYButton>
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.08}>
                <GlassCard>
                  <div className="text-sm text-black/55">Design rule</div>
                  <div className="mt-2 text-sm text-black/70">
                    This page should feel like a calm “control panel,” not a medical form.
                  </div>
                  <div className="mt-3 text-sm text-black/60">
                    No guilt. No scary warnings. Just curiosity.
                  </div>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </PageTransition>
    </AppShell>
  );
}

function ScoreTile({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white/55 border border-black/5 p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">{title}</div>
        <div className="h-9 w-9 rounded-2xl bg-black/5 grid place-items-center">
          {icon}
        </div>
      </div>
      <div className="mt-3 text-3xl font-semibold">—</div>
      <div className="mt-1 text-sm text-black/55">Awaiting analysis</div>
    </div>
  );
}

function Control({
  icon,
  label,
  valueLabel,
  value,
  min,
  max,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  valueLabel: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-black/5 grid place-items-center">
            {icon}
          </div>
          <div>
            <div className="text-sm font-medium">{label}</div>
            <div className="text-xs text-black/55">Adjust to explore</div>
          </div>
        </div>

        <div className="text-sm font-semibold text-black/80">{valueLabel}</div>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-black"
      />
    </div>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-2xl bg-white/55 border border-black/5 p-3">
      <div className="flex items-center justify-between">
        <span>{children}</span>
        <span className="text-black/40">→</span>
      </div>
    </li>
  );
}

function ChartPlaceholder() {
  return (
    <div className="relative h-56 w-full">
      {/* soft grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-px opacity-60">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="bg-black/5" />
        ))}
      </div>

      {/* animated line */}
      <motion.div
        className="absolute inset-x-0 top-0 bottom-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <svg
          viewBox="0 0 600 220"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,160 C80,120 140,180 220,140 C300,100 360,120 430,90 C510,60 540,85 600,55"
            fill="none"
            stroke="rgba(0,0,0,0.35)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.path
            d="M0,170 C90,140 150,195 230,160 C310,125 370,140 440,120 C515,95 550,110 600,90"
            fill="none"
            stroke="rgba(0,0,0,0.18)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.35, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
      </motion.div>

      {/* subtle shimmer */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="absolute inset-y-0 -left-24 w-40 bg-white/40 blur-xl"
          animate={{ x: [0, 900] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear", repeatDelay: 0.4 }}
        />
      </motion.div>

      <div className="absolute bottom-3 left-3 rounded-2xl bg-white/70 border border-black/5 px-3 py-2 text-sm text-black/70">
        Projections appear here after backend connection
      </div>
    </div>
  );
}
