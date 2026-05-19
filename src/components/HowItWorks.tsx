"use client";

import { Target, Brain, Calendar, MessageSquare, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Target,
    number: "01",
    title: "Set your goal",
    description: "Tell Mentr what you want to achieve — launch a startup, lose 20 lbs, write a book. Be specific or start vague, the AI adapts to you.",
  },
  {
    icon: Brain,
    number: "02",
    title: "Get your plan",
    description: "AI breaks your goal into a week-by-week roadmap with daily tasks. No fluff — only the steps that actually move the needle.",
  },
  {
    icon: Calendar,
    number: "03",
    title: "Calendar gets blocked",
    description: "Your Google Calendar fills with focused work sessions automatically. Time is protected before distractions can steal it.",
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "Daily check-ins",
    description: "Every morning your AI manager checks in. Every evening it reviews your day. Miss a task? It asks why — and doesn't let you off the hook.",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Watch progress stack",
    description: "Track your streak, completion rate, and trajectory. The data shows you exactly how close you are — and keeps you honest.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#FF385C] uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#222222] mb-4">
            From idea to execution in five steps
          </h2>
          <p className="text-[#717171] text-lg max-w-xl mx-auto">
            A structured system that turns vague ambition into locked-in accountability
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(100%_-_8px)] w-4 h-px bg-[#DDDDDD] z-10" />
              )}
              <div className="bg-white rounded-2xl border border-[#EBEBEB] p-6 h-full hover:border-[#FF385C] hover:shadow-md transition-all duration-200 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF0F2] flex items-center justify-center group-hover:bg-[#FF385C] transition-colors">
                    <step.icon className="w-4 h-4 text-[#FF385C] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-bold text-[#b0b0b0]">{step.number}</span>
                </div>
                <h3 className="font-semibold text-[#222222] mb-2">{step.title}</h3>
                <p className="text-xs text-[#717171] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
