"use client";

import { Target, Brain, Calendar, MessageSquare, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Target,
    number: "01",
    title: "Set your big goal",
    description: "Tell Mentr what you want to achieve — launch a startup, lose 20lbs, write a book. Be specific or vague, the AI adapts.",
    color: "#6c63ff",
  },
  {
    icon: Brain,
    number: "02",
    title: "AI builds your plan",
    description: "Claude breaks your goal into a week-by-week roadmap with daily milestones. No fluff — just the exact steps that move the needle.",
    color: "#a78bfa",
  },
  {
    icon: Calendar,
    number: "03",
    title: "Calendar gets blocked",
    description: "Your Google Calendar fills with focused work sessions automatically. Your time is protected before distractions can steal it.",
    color: "#60a5fa",
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "Daily check-ins",
    description: "Every morning, your AI manager checks in. Every evening, it reviews your day. Miss a task? It asks why — and pushes back.",
    color: "#34d399",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Watch the progress stack up",
    description: "See your streak, your completion rate, and your trajectory toward the goal. The data shows you're closer than you think.",
    color: "#f59e0b",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#6c63ff] font-semibold text-sm uppercase tracking-widest mb-3">The system</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#f0f0f5] mb-4">
            How Mentr works
          </h2>
          <p className="text-[#a0a0b0] text-lg max-w-2xl mx-auto">
            Five steps that turn vague ambition into locked-in accountability
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-[#6c63ff] via-[#60a5fa] to-[#34d399] hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 md:pl-0 items-start group">
                <div className="relative flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${step.color}20`, border: `1px solid ${step.color}40` }}
                  >
                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-black text-[#6b6b80]">
                    {step.number}
                  </span>
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-[#f0f0f5] mb-2">{step.title}</h3>
                  <p className="text-[#a0a0b0] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
