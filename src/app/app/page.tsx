import { AppShell } from "@/components/AppShell";
import { GlassCard } from "@/components/GlassCard";
import { PageTransition } from "@/components/PageTransition";
import { FYButton } from "@/components/FYButton";
import { ArrowRight, Plus } from "lucide-react";

export default function AppHome() {
  return (
    <AppShell>
      <PageTransition>
        <GlassCard>
          <div className="space-y-4">
            <div className="text-sm text-black/55">Dashboard</div>

            <h1 className="text-2xl font-semibold tracking-tight">
              FutureYou is ready.
            </h1>

            <p className="text-black/60">
              Next step: connect backend to unlock predictions, insights, and timeline parsing.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <FYButton>
                Open Simulator <ArrowRight size={16} />
              </FYButton>

              <FYButton variant="secondary">
                <Plus size={16} /> Log Today
              </FYButton>

              <FYButton variant="ghost">Learn more</FYButton>
            </div>
          </div>
        </GlassCard>
      </PageTransition>
    </AppShell>
  );
}
