"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════════════
 *  GitHubActivity — Fetches real commit data from GitHub Events API
 *  and renders a contribution heatmap grid + recent commit feed.
 * ═══════════════════════════════════════════════════════════════════ */

interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: {
    commits?: { message: string; sha: string }[];
    ref?: string;
    action?: string;
  };
}

interface DayData {
  date: string;
  count: number;
  level: number; // 0-4 intensity
}

// Generate the last 20 weeks (140 days) of date buckets
function generateDateGrid(events: GitHubEvent[]): DayData[] {
  const days: DayData[] = [];
  const now = new Date();
  const commitCounts: Record<string, number> = {};

  // Count push events per day
  events.forEach((event) => {
    if (event.type === "PushEvent") {
      const date = event.created_at.slice(0, 10); // YYYY-MM-DD
      const numCommits = event.payload.commits?.length || 1;
      commitCounts[date] = (commitCounts[date] || 0) + numCommits;
    }
  });

  // Build 140 day grid (20 weeks)
  for (let i = 139; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const count = commitCounts[key] || 0;

    let level = 0;
    if (count >= 8) level = 4;
    else if (count >= 5) level = 3;
    else if (count >= 2) level = 2;
    else if (count >= 1) level = 1;

    days.push({ date: key, count, level });
  }

  return days;
}

// Extract recent meaningful events for the feed
function getRecentActivity(events: GitHubEvent[]): { message: string; repo: string; date: string; type: string }[] {
  const activity: { message: string; repo: string; date: string; type: string }[] = [];

  for (const event of events) {
    if (activity.length >= 8) break;

    if (event.type === "PushEvent" && event.payload.commits?.length) {
      const commit = event.payload.commits[0];
      activity.push({
        message: commit.message.split("\n")[0].slice(0, 72),
        repo: event.repo.name.split("/").pop() || event.repo.name,
        date: event.created_at,
        type: "push",
      });
    } else if (event.type === "CreateEvent") {
      activity.push({
        message: `Created ${event.payload.ref || "repository"}`,
        repo: event.repo.name.split("/").pop() || event.repo.name,
        date: event.created_at,
        type: "create",
      });
    }
  }

  return activity;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return `${Math.floor(days / 7)}w ago`;
}

const LEVEL_COLORS = [
  "bg-[#0d1a0d]",                          // level 0 — no activity (very dark green)
  "bg-[#39ff14]/[0.15]",                    // level 1 — light
  "bg-[#39ff14]/[0.35]",                    // level 2 — medium
  "bg-[#39ff14]/[0.60]",                    // level 3 — high
  "bg-[#39ff14]/[0.90]",                    // level 4 — very high
];

export default function GitHubActivity() {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedDay, setSelectedDay] = useState<DayData | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/Dhyan5/events/public?per_page=100",
          { next: { revalidate: 3600 } }
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data: GitHubEvent[] = await res.json();
        setEvents(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const grid = generateDateGrid(events);
  const recentActivity = getRecentActivity(events);

  const weeks: DayData[][] = [];
  for (let i = 0; i < grid.length; i += 7) {
    weeks.push(grid.slice(i, i + 7));
  }

  const totalCommits = grid.reduce((sum, d) => sum + d.count, 0);

  return (
    <section id="github" className="w-full py-28 relative border-t border-border-color">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-accent mb-2 block">
            // OPEN SOURCE & ACTIVITY
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            GitHub Commit History
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            Live contribution data from{" "}
            <a
              href="https://github.com/Dhyan5"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-hover text-foreground font-semibold underline underline-offset-4 decoration-white/30 hover:decoration-white"
            >
              github.com/Dhyan5
            </a>
          </p>
        </motion.div>

        {loading ? (
          <div className="glass-card rounded-2xl p-12 text-center">
            <div className="inline-block w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            <p className="text-foreground-secondary mt-4 font-mono-tech text-sm">
              Fetching GitHub activity...
            </p>
          </div>
        ) : error ? (
          <div className="glass-card rounded-2xl p-12 text-center">
            <p className="text-foreground-secondary font-mono-tech text-sm">
              Unable to load GitHub activity. Visit{" "}
              <a href="https://github.com/Dhyan5" target="_blank" rel="noopener noreferrer" className="text-foreground underline">
                github.com/Dhyan5
              </a>{" "}
              directly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contribution Heatmap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3 glass-card rounded-2xl p-8 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">
                    Contribution Graph
                  </h3>
                  <span className="font-mono-tech text-sm text-foreground-secondary">
                    <span className="text-foreground font-bold">{totalCommits}</span> contributions
                  </span>
                </div>

                {/* Mobile Tap Tooltip Info Bar */}
                {selectedDay ? (
                  <div className="mb-4 px-3.5 py-2 rounded-lg bg-accent/15 border border-accent/40 font-mono-tech text-xs text-accent flex items-center justify-between shadow-[0_0_15px_rgba(57,255,20,0.15)] animate-fadeIn">
                    <span>
                      <strong className="text-foreground">{selectedDay.date}</strong>: {selectedDay.count} contribution{selectedDay.count !== 1 ? "s" : ""}
                    </span>
                    <button
                      onClick={() => setSelectedDay(null)}
                      className="text-xs text-foreground-secondary hover:text-accent font-bold px-1.5"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <p className="text-[11px] font-mono-tech text-foreground-secondary/70 mb-4">
                    Swipe horizontally & tap any square to inspect activity
                  </p>
                )}

                {/* Heatmap Grid */}
                <div className="flex gap-[3px] overflow-x-auto pb-4 touch-pan-x no-scrollbar">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[3px] shrink-0">
                      {week.map((day, dIdx) => (
                        <button
                          key={dIdx}
                          onClick={() => setSelectedDay(day)}
                          title={`${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                          className={`w-[14px] h-[14px] rounded-[3px] transition-all duration-200 active:scale-125 hover:ring-1 hover:ring-white/40 ${
                            selectedDay?.date === day.date
                              ? "ring-2 ring-accent scale-125 z-10 shadow-[0_0_10px_#39ff14]"
                              : ""
                          } ${LEVEL_COLORS[day.level]}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-end gap-2 mt-4 text-xs font-mono-tech text-foreground-secondary">
                <span>Less</span>
                {LEVEL_COLORS.map((color, i) => (
                  <div key={i} className={`w-[12px] h-[12px] rounded-[2px] ${color}`} />
                ))}
                <span>More</span>
              </div>
            </motion.div>

            {/* Recent Commit Feed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-2 glass-card rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-lg font-bold text-foreground mb-6">
                Recent Activity
              </h3>

              {recentActivity.length === 0 ? (
                <p className="text-foreground-secondary font-mono-tech text-sm">
                  No recent public activity.
                </p>
              ) : (
                <div className="space-y-4">
                  {recentActivity.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 pb-4 border-b border-white/5 last:border-b-0 last:pb-0"
                    >
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-white/40 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-foreground text-sm font-medium leading-snug truncate">
                          {item.message}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-xs font-mono-tech text-foreground-secondary">
                          <span className="text-foreground/70">{item.repo}</span>
                          <span>•</span>
                          <span>{timeAgo(item.date)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <a
                href="https://github.com/Dhyan5"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-hover mt-6 inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-foreground-secondary hover:text-foreground transition-colors"
              >
                View Full Profile →
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
