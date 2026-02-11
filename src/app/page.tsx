import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { PageTransition } from "@/components/PageTransition";
import { FYButton } from "@/components/FYButton";
import { Reveal } from "@/components/Reveal";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Timer,
  LineChart,
  Brain,
  FileText,
  FlaskConical,
  ChevronRight,
} from "lucide-react";

export default function LandingPage() {
  return (
    <PageTransition>
      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white/60 backdrop-blur border border-black/5 shadow-sm grid place-items-center">
              <span className="text-sm font-semibold">FY</span>
            </div>
            <div className="leading-tight">
              <div className="text-lg font-semibold">FutureYou</div>
              <div className="text-sm text-black/55">
                Calm clarity for your future.
              </div>
            </div>
          </div>

          {/* IMPORTANT: no dead buttons */}
          <div className="flex items-center gap-2">
            <Link href="/login">
              <FYButton variant="secondary">Log in</FYButton>
            </Link>
            <Link href="/login">
              <FYButton>
                Open App <ArrowRight size={16} />
              </FYButton>
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="mt-10 grid gap-6 md:grid-cols-2 items-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-black/5 px-3 py-1 text-sm text-black/70">
                <Sparkles size={14} />
                Invisible AI • No chatbot • 45 sec/day
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                See how tiny habits compound into your future mental and physical
                health.
              </h1>

              <p className="mt-4 text-black/60 text-lg max-w-xl">
                FutureYou connects sleep, stress, food, and energy into clear
                cause-and-effect loops — then shows the smallest change that
                actually matters.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/login">
                  <FYButton>
                    Try the demo <ArrowRight size={16} />
                  </FYButton>
                </Link>
                <a href="#how-it-works">
                  <FYButton variant="secondary">How it works</FYButton>
                </a>
              </div>

              <div className="mt-3 text-sm text-black/55">
                Judges tip: Demo flow → Simulator → Insights → Action Lab
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 max-w-xl">
                <MiniStat icon={<Timer size={16} />} title="45 sec/day" sub="No typing" />
                <MiniStat icon={<ShieldCheck size={16} />} title="No judgment" sub="Calm UX" />
                <MiniStat icon={<Sparkles size={16} />} title="High leverage" sub="One best move" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard>
              <div className="text-sm text-black/55">What FutureYou does</div>

              <div className="mt-4 grid gap-3">
                <FeatureRow icon={<LineChart size={16} />} title="Future Simulator">
                  Visualize 5–20 year outcomes with interactive sliders.
                </FeatureRow>
                <FeatureRow icon={<Brain size={16} />} title="Stress Zones">
                  3-tap check-ins reveal hidden patterns.
                </FeatureRow>
                <FeatureRow icon={<FileText size={16} />} title="Medical Timeline">
                  Upload PDFs → plain-language summaries + citations.
                </FeatureRow>
                <FeatureRow icon={<FlaskConical size={16} />} title="Action Lab">
                  Run tiny experiments and see real before/after results.
                </FeatureRow>
              </div>

              <div className="mt-5 rounded-2xl bg-black/5 border border-black/5 p-4">
                <div className="text-sm font-medium">A simple example</div>
                <div className="mt-1 text-sm text-black/60">
                  Poor sleep → stress → junk food → worse sleep.
                </div>
                <div className="mt-2 text-sm text-black/70">
                  FutureYou highlights the{" "}
                  <span className="font-medium">one best leverage point</span>.
                </div>
              </div>

              <div className="mt-4">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1 text-sm text-black/70 hover:text-black"
                >
                  Explore the demo <ChevronRight size={16} />
                </Link>
              </div>
            </GlassCard>
          </Reveal>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="mt-10 grid gap-4 md:grid-cols-3 scroll-mt-24"
        >
          <Reveal>
            <GlassCard>
              <div className="text-sm text-black/55">Step 1</div>
              <div className="mt-2 text-lg font-semibold">Check in quickly</div>
              <div className="mt-2 text-sm text-black/60">
                Sleep, stress, meals, movement — taps only.
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.06}>
            <GlassCard>
              <div className="text-sm text-black/55">Step 2</div>
              <div className="mt-2 text-lg font-semibold">
                See compounding loops
              </div>
              <div className="mt-2 text-sm text-black/60">
                Detect cycles that silently amplify burnout.
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.12}>
            <GlassCard>
              <div className="text-sm text-black/55">Step 3</div>
              <div className="mt-2 text-lg font-semibold">Fix one thing</div>
              <div className="mt-2 text-sm text-black/60">
                Run a micro-experiment. Your future updates.
              </div>
            </GlassCard>
          </Reveal>
        </section>

        <footer className="mt-10 text-sm text-black/50">
          Prototype • Not medical advice
        </footer>
      </main>
    </PageTransition>
  );
}

/* ---------- helpers ---------- */

function MiniStat({
  icon,
  title,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl bg-white/60 backdrop-blur border border-black/5 shadow-sm p-3">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-2xl bg-black/5 grid place-items-center">
          {icon}
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs text-black/55">{sub}</div>
        </div>
      </div>
    </div>
  );
}

function FeatureRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white/55 border border-black/5 p-3">
      <div className="h-9 w-9 rounded-2xl bg-black/5 grid place-items-center">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm text-black/60">{children}</div>
      </div>
    </div>
  );
}
