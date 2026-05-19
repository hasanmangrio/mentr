"use client";

import { Bell, CalendarCheck, BarChart3, Shield, Smartphone, Flame, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Push-back accountability",
    description: "Miss a task and your AI manager asks why — then adjusts the plan or cranks up the pressure.",
  },
  {
    icon: CalendarCheck,
    title: "Google Calendar sync",
    description: "Every work block and milestone auto-scheduled. Never decide when to work — it's already decided.",
  },
  {
    icon: BarChart3,
    title: "Progress analytics",
    description: "Completion rates, streak tracking, velocity trends. Know exactly how fast you're moving.",
  },
  {
    icon: Flame,
    title: "Streak system",
    description: "Daily streaks that make you genuinely not want to break the chain. Simple and effective.",
  },
  {
    icon: Clock,
    title: "Daily stand-ups",
    description: "5-minute morning check-ins and evening reviews — structured like a real manager runs them.",
  },
  {
    icon: Users,
    title: "Mentor matching (soon)",
    description: "Get matched with a human expert in your field for monthly 1:1 sessions.",
  },
  {
    icon: Shield,
    title: "Privacy first",
    description: "Your goals are yours. We never sell data. Everything is encrypted end-to-end.",
  },
  {
    icon: Smartphone,
    title: "Mobile app (soon)",
    description: "Check-ins, nudges, and progress on the go. Accountability doesn't stop at your desk.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#FF385C] uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#222222] mb-4">
            Everything you need to execute
          </h2>
          <p className="text-[#717171] text-lg max-w-xl mx-auto">
            Built for the solopreneur who's serious — not the one who just thinks about being serious
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-[#EBEBEB] hover:border-[#DDDDDD] hover:shadow-md transition-all duration-200 bg-white"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FFF0F2] flex items-center justify-center mb-4 group-hover:bg-[#FF385C] transition-colors">
                <feature.icon className="w-5 h-5 text-[#FF385C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-[#222222] mb-2 text-sm">{feature.title}</h3>
              <p className="text-xs text-[#717171] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
