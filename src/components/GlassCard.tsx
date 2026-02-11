export function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-3xl p-5"
      style={{
        background: "var(--fy-card)",
        border: "1px solid var(--fy-border)",
        boxShadow: "var(--fy-shadow)",
        backdropFilter: "blur(12px)",
      }}
    >
      {children}
    </div>
  );
}
