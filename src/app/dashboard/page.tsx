"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Flame,
  CheckCircle2,
  Circle,
  TrendingUp,
  Calendar,
  MessageSquare,
  ChevronRight,
  BarChart3,
  Clock,
  Plus,
  ArrowUpRight,
  Zap,
} from "lucide-react";

const todayTasks = [
  { id: 1, task: "Write 500 words of landing page copy", done: true, category: "Launch" },
  { id: 2, task: "Cold email 5 potential beta users", done: true, category: "Growth" },
  { id: 3, task: "Set up Stripe billing", done: false, category: "Build" },
  { id: 4, task: "Record 60s demo video", done: false, category: "Launch" },
  { id: 5, task: "Post on Twitter about progress", done: false, category: "Marketing" },
];

const weekMilestones = [
  { week: 1, milestone: "Landing page + waitlist", done: true },
  { week: 2, milestone: "MVP core features", done: true },
  { week: 3, milestone: "First 10 beta users", done: false, current: true },
  { week: 4, milestone: "Feedback + iteration", done: false },
  { week: 5, milestone: "Paid launch", done: false },
];

const recentMessages = [
  {
    from: "ai",
    message: "Good morning. Yesterday you completed 3/5 tasks — solid. Today's priority is the Stripe integration. It's been on your list for 2 days. Is there a blocker I should know about?",
    time: "8:02 AM",
  },
  {
    from: "user",
    message: "I keep getting distracted by the design. I know it doesn't matter yet but I can't stop.",
    time: "8:15 AM",
  },
  {
    from: "ai",
    message: "Classic trap. Here's what you're going to do: set a 90-minute Pomodoro on Stripe only. Close Figma. If you open Figma before Stripe is working, your streak resets. Deal?",
    time: "8:16 AM",
  },
];

export default function DashboardPage() {
  const [tasks, setTasks] = useState(todayTasks);
  const completedCount = tasks.filter((t) => t.done).length;
  const completionPct = Math.round((completedCount / tasks.length) * 100);

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Sidebar + main layout */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-60 border-r border-[#2a2a3e] flex flex-col p-4 shrink-0">
          <Link href="/" className="flex items-center gap-2 mb-8 px-2">
            <div className="w-7 h-7 rounded-lg bg-[#6c63ff] flex items-center justify-center">
              <Target className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-[#f0f0f5]">Mentr</span>
          </Link>

          <nav className="space-y-1 flex-1">
            {[
              { icon: BarChart3, label: "Dashboard", active: true, href: "/dashboard" },
              { icon: Target, label: "My goals", active: false, href: "/dashboard" },
              { icon: Calendar, label: "Calendar", active: false, href: "/dashboard" },
              { icon: MessageSquare, label: "Check-in", active: false, href: "/checkin" },
              { icon: TrendingUp, label: "Progress", active: false, href: "/dashboard" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  item.active
                    ? "bg-[#6c63ff]/15 text-[#a78bfa] border border-[#6c63ff]/20"
                    : "text-[#6b6b80] hover:text-[#f0f0f5] hover:bg-[#1a1a2e]"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Today's streak */}
          <div className="border border-[#2a2a3e] rounded-xl p-4 mt-4">
            <div className="flex items-center gap-2 mb-1">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-semibold text-[#f0f0f5]">12-day streak</span>
            </div>
            <p className="text-xs text-[#6b6b80]">Keep it going — don't break the chain</p>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <div className="p-8 max-w-5xl">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-black text-[#f0f0f5]">Today's mission</h1>
                <p className="text-[#6b6b80] text-sm mt-0.5">Monday, May 18 · Week 3 of 12</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="success">On track</Badge>
                <Button size="sm" asChild>
                  <Link href="/checkin">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Check-in with AI
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { label: "Today", value: `${completedCount}/${tasks.length}`, sub: "tasks done", icon: CheckCircle2, color: "#34d399" },
                { label: "Streak", value: "12", sub: "days", icon: Flame, color: "#f59e0b" },
                { label: "This week", value: "81%", sub: "completion", icon: TrendingUp, color: "#6c63ff" },
                { label: "Goal pace", value: "3 wks", sub: "ahead of schedule", icon: Zap, color: "#a78bfa" },
              ].map((stat) => (
                <Card key={stat.label} className="hover:border-[#6c63ff]/30 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-[#6b6b80] font-medium uppercase tracking-wide">{stat.label}</span>
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${stat.color}20` }}
                      >
                        <stat.icon className="w-3.5 h-3.5" style={{ color: stat.color }} />
                      </div>
                    </div>
                    <p className="text-2xl font-black text-[#f0f0f5]">{stat.value}</p>
                    <p className="text-xs text-[#6b6b80] mt-0.5">{stat.sub}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Task list */}
              <div className="col-span-2 space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Today's tasks</CardTitle>
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-[#6b6b80]">{completionPct}%</div>
                        <div className="w-24 h-1.5 bg-[#2a2a3e] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#6c63ff] rounded-full transition-all duration-500"
                            style={{ width: `${completionPct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {tasks.map((task) => (
                      <button
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all duration-200 group ${
                          task.done ? "opacity-60" : "hover:bg-[#1a1a2e]"
                        }`}
                      >
                        {task.done ? (
                          <CheckCircle2 className="w-5 h-5 text-[#34d399] flex-shrink-0 mt-0.5" />
                        ) : (
                          <Circle className="w-5 h-5 text-[#2a2a3e] group-hover:text-[#6c63ff] flex-shrink-0 mt-0.5 transition-colors" />
                        )}
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${task.done ? "line-through text-[#6b6b80]" : "text-[#f0f0f5]"}`}>
                            {task.task}
                          </p>
                          <span className="text-xs text-[#6b6b80]">{task.category}</span>
                        </div>
                      </button>
                    ))}
                    <button className="w-full flex items-center gap-3 p-3 rounded-xl text-[#6b6b80] hover:text-[#6c63ff] hover:bg-[#1a1a2e] transition-all text-sm mt-2">
                      <Plus className="w-4 h-4" />
                      Add a task
                    </button>
                  </CardContent>
                </Card>

                {/* AI check-in preview */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Morning check-in</CardTitle>
                      <Link href="/checkin" className="text-xs text-[#6c63ff] hover:text-[#a78bfa] flex items-center gap-1 transition-colors">
                        Open full chat <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recentMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex gap-3 ${msg.from === "user" ? "justify-end" : ""}`}
                      >
                        {msg.from === "ai" && (
                          <div className="w-7 h-7 rounded-full bg-[#6c63ff]/20 border border-[#6c63ff]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-3 h-3 text-[#6c63ff]" />
                          </div>
                        )}
                        <div
                          className={`max-w-sm rounded-2xl px-4 py-3 text-sm ${
                            msg.from === "ai"
                              ? "bg-[#1a1a2e] text-[#f0f0f5] rounded-tl-sm"
                              : "bg-[#6c63ff]/20 text-[#f0f0f5] rounded-tr-sm border border-[#6c63ff]/20"
                          }`}
                        >
                          <p className="leading-relaxed">{msg.message}</p>
                          <p className="text-xs text-[#6b6b80] mt-1.5">{msg.time}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Right column */}
              <div className="space-y-4">
                {/* Roadmap */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Roadmap</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {weekMilestones.map((m) => (
                      <div
                        key={m.week}
                        className={`flex items-start gap-3 p-2 rounded-lg ${m.current ? "bg-[#6c63ff]/10 border border-[#6c63ff]/20" : ""}`}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          m.done ? "bg-[#34d399]/20" : m.current ? "bg-[#6c63ff]/20" : "bg-[#2a2a3e]"
                        }`}>
                          {m.done ? (
                            <CheckCircle2 className="w-3 h-3 text-[#34d399]" />
                          ) : m.current ? (
                            <Clock className="w-3 h-3 text-[#6c63ff]" />
                          ) : (
                            <Circle className="w-3 h-3 text-[#6b6b80]" />
                          )}
                        </div>
                        <div>
                          <p className="text-xs text-[#6b6b80]">Week {m.week}</p>
                          <p className={`text-xs font-medium ${m.current ? "text-[#a78bfa]" : m.done ? "text-[#6b6b80] line-through" : "text-[#f0f0f5]"}`}>
                            {m.milestone}
                          </p>
                        </div>
                        {m.current && (
                          <Badge className="ml-auto text-xs px-2 py-0.5">Now</Badge>
                        )}
                      </div>
                    ))}
                    <button className="w-full flex items-center justify-between mt-2 text-xs text-[#6b6b80] hover:text-[#6c63ff] transition-colors p-2">
                      View full roadmap <ChevronRight className="w-3 h-3" />
                    </button>
                  </CardContent>
                </Card>

                {/* Next calendar block */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Next block</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-[#6c63ff]/10 border border-[#6c63ff]/20 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-[#6c63ff]" />
                        <span className="text-xs text-[#a78bfa] font-medium">2:00 PM – 4:00 PM</span>
                      </div>
                      <p className="text-sm font-semibold text-[#f0f0f5]">Deep work: Stripe Integration</p>
                      <p className="text-xs text-[#6b6b80] mt-1">Blocked by Mentr · 2 hours</p>
                    </div>
                    <button className="w-full mt-3 text-xs text-[#6b6b80] hover:text-[#6c63ff] transition-colors flex items-center justify-center gap-1">
                      <Calendar className="w-3 h-3" />
                      View in Google Calendar
                    </button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
