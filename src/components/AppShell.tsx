"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Activity, LineChart, Brain, FileText, FlaskConical, LogOut } from "lucide-react";

const NAV = [
  { href: "/app", label: "Dashboard", icon: Activity },
  { href: "/simulator", label: "Simulator", icon: LineChart },
  { href: "/insights", label: "Insights", icon: Brain },
  { href: "/timeline", label: "Timeline", icon: FileText },
  { href: "/lab", label: "Action Lab", icon: FlaskConical },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // ✅ Demo login gate: block app routes unless "logged in"
  useEffect(() => {
    // Allow landing + login without redirect
    if (pathname === "/" || pathname === "/login") return;

    const loggedIn = localStorage.getItem("fy_demo_logged_in");
    if (loggedIn !== "true") {
      router.push("/login");
    }
  }, [pathname, router]);

  function handleLogout() {
    localStorage.removeItem("fy_demo_logged_in");
    router.push("/login");
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <header className="mb-6 flex items-center justify-between">
        {/* Logo to dashboard */}
        <Link href="/app" className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-2xl grid place-items-center"
            style={{
              background: "var(--fy-primary-soft)",
              border: "1px solid var(--fy-border)",
              boxShadow: "var(--fy-shadow)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--fy-primary)" }}
            >
              FY
            </span>
          </div>

          <div className="leading-tight">
            <div
              className="text-lg font-semibold"
              style={{ color: "var(--fy-text)" }}
            >
              FutureYou
            </div>
            <div className="text-sm" style={{ color: "var(--fy-muted)" }}>
              Calm clarity for your future.
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          {/* Nav */}
          <nav
            className="hidden md:flex items-center gap-1 rounded-2xl p-1"
            style={{
              background: "var(--fy-card)",
              border: "1px solid var(--fy-border)",
              boxShadow: "var(--fy-shadow)",
              backdropFilter: "blur(12px)",
            }}
          >
            {NAV.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition"
                  style={{
                    color: active ? "var(--fy-text)" : "var(--fy-muted)",
                  }}
                >
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: "var(--fy-primary-soft)",
                        border: "1px solid var(--fy-border)",
                      }}
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <Icon
                      size={16}
                      style={{ color: active ? "var(--fy-primary)" : "currentColor" }}
                    />
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Optional: Logout button (hidden on /login and /) */}
          {pathname !== "/login" && pathname !== "/" && (
            <button
              onClick={handleLogout}
              className="hidden md:inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm"
              style={{
                background: "var(--fy-card)",
                border: "1px solid var(--fy-border)",
                boxShadow: "var(--fy-shadow)",
                color: "var(--fy-muted)",
              }}
              title="Log out (demo)"
            >
              <LogOut size={16} />
              Logout
            </button>
          )}
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
