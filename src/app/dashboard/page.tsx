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
    <div className="min-h-screen bg-[#f7f7f7]">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-56 bg-white border-r border-[#DDDDDD] flex flex-col p-4 shrink-0">
          <Link href="/" className="flex items-center gap-1 mb-8 px-2">
            <svg width="22" height="24" viewBox="0 0 30 32" fill="none">
              <path d="M15 2C15 2 6 12 6 19C6 23.4 10.1 27 15 27C19.9 27 24 23.4 24 19C24 12 15 2 15 2Z" fill="#FF385C" />
            </svg>
            <span className="font-bold text-[#FF385C]">mentr</span>
          </Link>

          <nav className="space-y-0.5 flex-1">
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
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  item.active
                    ? "bg-[#FFF0F2] text-[#FF385C]"
                    : "text-[#717171] hover:text-[#222222] hover:bg-[#f7f7f7]"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Streak widget */}
          <div className="border border-[#EBEBEB] rounded-xl p-4 bg-[#f7f7f7]">
            <div className="flex items-center gap-2 mb-1">
              <Flame className="w-4 h-4 text-[#FC642D]" />
              <span className="text-sm font-semibold text-[#222222]">12-day streak</span>
            </div>
            <p className="text-xs text-[#717171]">Don't break the chain</p>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-auto">
          <div className="p-8 max-w-5xl">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-extrabold text-[#222222]">Today's mission</h1>
                <p className="text-sm text-[#717171] mt-0.5">Monday, May 18 · Week 3 of 12</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="success">On track</Badge>
                <Button size="sm" className="rounded-lg" asChild>
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
                { label: "Today", value: `${completedCount}/${tasks.length}`, sub: "tasks done", icon: CheckCircle2, color: "#FF385C" },
                { label: "Streak", value: "12", sub: "days", icon: Flame, color: "#FC642D" },
                { label: "This week", value: "81%", sub: "completion", icon: TrendingUp, color: "#00A699" },
                { label: "Goal pace", value: "3 wks", sub: "ahead of schedule", icon: Zap, color: "#FFB400" },
              ].map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-[#717171] font-medium uppercase tracking-wide">{stat.label}</span>
                      <div className="w-7 h-7 rounded-lg bg-[#f7f7f7] flex items-center justify-center">
                        <stat.icon className="w-3.5 h-3.5" style={{ color: stat.color }} />
                      </div>
                    </div>
                    <p className="text-2xl font-extrabold text-[#222222]">{stat.value}</p>
                    <p className="text-xs text-[#717171] mt-0.5">{stat.sub}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Task list + chat */}
              <div className="col-span-2 space-y-5">
                <Card>
                  <CardHeader className="pb-3 border-b border-[#EBEBEB]">
                    <div className="flex items-center justify-between">
                      <CardTitle>Today's tasks</CardTitle>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-[#717171]">{completedCount}/{tasks.length} done</span>
                        <div className="w-24 h-1.5 bg-[#EBEBEB] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#FF385C] rounded-full transition-all duration-500"
                            style={{ width: `${completionPct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-3 space-y-1">
                    {tasks.map((task) => (
                      <button
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition-all duration-150 group ${
                          task.done ? "opacity-50" : "hover:bg-[#f7f7f7]"
                        }`}
                      >
                        {task.done ? (
                          <CheckCircle2 className="w-5 h-5 text-[#FF385C] flex-shrink-0 mt-0.5" />
                        ) : (
                          <Circle className="w-5 h-5 text-[#DDDDDD] group-hover:text-[#FF385C] flex-shrink-0 mt-0.5 transition-colors" />
                        )}
                        <div>
                          <p className={`text-sm font-medium ${task.done ? "line-through text-[#b0b0b0]" : "text-[#222222]"}`}>
                            {task.task}
                          </p>
                          <span className="text-xs text-[#717171]">{task.category}</span>
                        </div>
                      </button>
                    ))}
                    <button className="w-full flex items-center gap-3 p-3 rounded-lg text-[#717171] hover:text-[#FF385C] hover:bg-[#f7f7f7] transition-all text-sm">
                      <Plus className="w-4 h-4" />
                      Add a task
                    </button>
                  </CardContent>
                </Card>

                {/* Check-in preview */}
                <Card>
                  <CardHeader className="pb-3 border-b border-[#EBEBEB]">
                    <div className="flex items-center justify-between">
                      <CardTitle>Morning check-in</CardTitle>
                      <Link href="/checkin" className="text-xs text-[#FF385C] hover:underline flex items-center gap-1">
                        Open full chat <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-3">
                    {recentMessages.map((msg, i) => (
                      <div key={i} className={`flex gap-2.5 ${msg.from === "user" ? "justify-end" : ""}`}>
                        {msg.from === "ai" && (
                          <div className="w-7 h-7 rounded-full bg-[#FFF0F2] border border-[#FFD0D8] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-3 h-3 text-[#FF385C]" />
                          </div>
                        )}
                        <div
                          className={`max-w-sm rounded-2xl px-4 py-3 text-sm ${
                            msg.from === "ai"
                              ? "bg-[#f7f7f7] text-[#222222] rounded-tl-sm"
                              : "bg-[#222222] text-white rounded-tr-sm"
                          }`}
                        >
                          <p className="leading-relaxed">{msg.message}</p>
                          <p className={`text-xs mt-1.5 ${msg.from === "ai" ? "text-[#b0b0b0]" : "text-white/50"}`}>{msg.time}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Right column */}
              <div className="space-y-5">
                {/* Roadmap */}
                <Card>
                  <CardHeader className="pb-3 border-b border-[#EBEBEB]">
                    <CardTitle>Roadmap</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-3 space-y-2">
                    {weekMilestones.map((m) => (
                      <div
                        key={m.week}
                        className={`flex items-start gap-3 p-2.5 rounded-lg ${m.current ? "bg-[#FFF0F2] border border-[#FFD0D8]" : ""}`}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          m.done ? "bg-[#F0FFF4]" : m.current ? "bg-[#FFF0F2]" : "bg-[#f7f7f7]"
                        }`}>
                          {m.done ? (
                            <CheckCircle2 className="w-3 h-3 text-[#276749]" />
                          ) : m.current ? (
                            <Clock className="w-3 h-3 text-[#FF385C]" />
                          ) : (
                            <Circle className="w-3 h-3 text-[#DDDDDD]" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[#b0b0b0]">Week {m.week}</p>
                          <p className={`text-xs font-medium truncate ${
                            m.current ? "text-[#FF385C]" : m.done ? "text-[#b0b0b0] line-through" : "text-[#222222]"
                          }`}>
                            {m.milestone}
                          </p>
                        </div>
                        {m.current && (
                          <span className="text-xs bg-[#FF385C] text-white px-2 py-0.5 rounded-full font-medium flex-shrink-0">Now</span>
                        )}
                      </div>
                    ))}
                    <button className="w-full flex items-center justify-between text-xs text-[#717171] hover:text-[#FF385C] transition-colors p-2 mt-1">
                      View full roadmap <ChevronRight className="w-3 h-3" />
                    </button>
                  </CardContent>
                </Card>

                {/* Next calendar block */}
                <Card>
                  <CardHeader className="pb-3 border-b border-[#EBEBEB]">
                    <CardTitle>Next block</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="bg-[#FFF0F2] border border-[#FFD0D8] rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-[#FF385C]" />
                        <span className="text-xs text-[#FF385C] font-semibold">2:00 PM – 4:00 PM</span>
                      </div>
                      <p className="text-sm font-semibold text-[#222222]">Deep work: Stripe Integration</p>
                      <p className="text-xs text-[#717171] mt-1">Blocked by Mentr · 2 hours</p>
                    </div>
                    <button className="w-full mt-3 text-xs text-[#717171] hover:text-[#FF385C] transition-colors flex items-center justify-center gap-1">
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
