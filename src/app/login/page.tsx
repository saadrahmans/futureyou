"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { FYButton } from "@/components/FYButton";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import {
  Sparkles,
  HeartPulse,
  Brain,
  ShieldCheck,
  Focus,
  LineChart,
  CheckCircle2,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const handleDemoLogin = () => {
    localStorage.setItem("fy_demo_logged_in", "true");
    router.push("/app");
  };

  return (
    <PageTransition>
      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white/60 backdrop-blur border border-black/5 shadow-sm grid place-items-center">
              <span className="text-sm font-semibold">FY</span>
            </div>
            <div className="leading-tight">
              <div className="text-lg font-semibold">FutureYou</div>
              <div className="text-sm text-black/55">
                Calm clarity for your future.
              </div>
            </div>
          </Link>

          <div className="hidden sm:flex items-center gap-2">
            <Link href="/">
              <FYButton variant="ghost">Back</FYButton>
            </Link>
            <FYButton variant="secondary" onClick={handleDemoLogin}>
              Continue Demo
            </FYButton>
          </div>
        </header>

        {/* Page header */}
        <section className="mt-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-black/5 px-3 py-1 text-sm text-black/70">
              <Sparkles size={14} />
              Demo Login • No real account needed
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              A calmer mind starts with clarity — not pressure.
            </h1>

            <p className="mt-4 text-black/60 text-lg max-w-3xl">
              Many people don’t need “more advice.” They need a calm space that
              helps them slow down, notice patterns, and choose one small action
              that improves today.
            </p>
          </Reveal>
        </section>

        {/* Content grid */}
        <section className="mt-8 grid gap-4 md:grid-cols-3 items-start">
          {/* Left insights */}
          <div className="space-y-4">
            <Reveal>
              <GlassCard>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-black/5 grid place-items-center">
                    <HeartPulse size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      Life gets heavy quietly
                    </div>
                    <div className="mt-1 text-sm text-black/60">
                      Stress builds up through small daily loops — sleep, food,
                      focus, overwhelm — and people blame themselves instead of
                      the pattern.
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.06}>
              <GlassCard>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-black/5 grid place-items-center">
                    <Brain size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      Our brains want certainty
                    </div>
                    <div className="mt-1 text-sm text-black/60">
                      When anxiety rises, the mind jumps to future outcomes.
                      FutureYou brings attention back to the present — what’s
                      happening, what’s driving it, what to do next.
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.12}>
              <GlassCard>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-black/5 grid place-items-center">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      No judgment. No guilt.
                    </div>
                    <div className="mt-1 text-sm text-black/60">
                      The app is designed to feel safe and gentle. You’re not
                      “failing” — you’re learning your pattern.
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          {/* Center login block */}
          <div className="space-y-4">
            <Reveal delay={0.03}>
              <div
                style={{
                  background: "var(--fy-primary-soft)",
                  border: "1px solid rgba(43,176,166,0.25)",
                  boxShadow: "0 20px 40px rgba(43,176,166,0.15)",
                  borderRadius: "24px",
                }}
              >
                <GlassCard>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-black/5 px-3 py-1 text-sm text-black/70 mb-2">
                    Demo entry
                  </div>

                  <div className="text-sm text-black/55">Log in</div>
                  <div className="mt-2 text-2xl font-semibold">
                    Enter the demo
                  </div>

                  <p className="mt-2 text-sm text-black/60">
                    This is a hackathon demo — no real account required. Click
                    continue to explore the app.
                  </p>

                  <div className="mt-5 rounded-2xl bg-black/5 border border-black/5 p-4 text-sm text-black/70">
                    <div className="font-semibold">What you’ll see inside</div>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="mt-0.5" />
                        <span>Clear patterns (sleep → stress → eating → sleep)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="mt-0.5" />
                        <span>One best action to regain calm & control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="mt-0.5" />
                        <span>
                          Action Lab: tiny experiments with before/after results
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-5 grid gap-2">
                    <FYButton onClick={handleDemoLogin} style={{ width: "100%" }}>
                      Continue (Demo Login)
                    </FYButton>

                    <Link href="/" className="block">
                      <FYButton variant="secondary" style={{ width: "100%" }}>
                        Back to landing
                      </FYButton>
                    </Link>
                  </div>

                  <div className="mt-4 text-xs text-black/50">
                    Prototype • Not medical advice • Designed for calm clarity
                  </div>
                </GlassCard>
              </div>
            </Reveal>

            <Reveal delay={0.09}>
              <GlassCard>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-black/5 grid place-items-center">
                    <Focus size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      Helps you relax and refocus
                    </div>
                    <div className="mt-1 text-sm text-black/60">
                      Instead of overwhelming you with tasks, FutureYou helps you
                      identify the one small move that makes everything else feel
                      easier.
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          {/* Right insights */}
          <div className="space-y-4">
            <Reveal delay={0.06}>
              <GlassCard>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-black/5 grid place-items-center">
                    <LineChart size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Tiny habits compound</div>
                    <div className="mt-1 text-sm text-black/60">
                      FutureYou shows how your daily choices build momentum — and
                      how small improvements create bigger long-term outcomes.
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.12}>
              <GlassCard>
                <div className="text-sm text-black/55">The promise</div>
                <div className="mt-2 text-sm text-black/70">
                  A calmer day doesn’t require a perfect life.
                </div>
                <div className="mt-3 text-sm text-black/60">
                  It requires clarity about what’s driving your stress — and the
                  confidence to take one simple step today.
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.18}>
              <GlassCard>
                <div className="text-sm text-black/55">Demo flow (for judges)</div>
                <div className="mt-2 text-sm text-black/60">
                  Dashboard → Simulator → Insights → Action Lab
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </section>

        <footer className="mt-10 text-sm text-black/50">
          Prototype • Not medical advice
        </footer>
      </main>
    </PageTransition>
  );
}
