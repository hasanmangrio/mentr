"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Bell,
  CalendarCheck,
  BarChart3,
  Shield,
  Smartphone,
  Users,
  Flame,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Push-back accountability",
    description: "Miss a task and your AI manager asks why — then adjusts your plan or increases the pressure. No free passes.",
    color: "#6c63ff",
  },
  {
    icon: CalendarCheck,
    title: "Google Calendar sync",
    description: "Every work block, every milestone, every check-in — auto-scheduled so you never have to think about when to work.",
    color: "#60a5fa",
  },
  {
    icon: BarChart3,
    title: "Progress analytics",
    description: "Completion rates, streak tracking, velocity trends. Know exactly how fast you're moving toward your goal.",
    color: "#34d399",
  },
  {
    icon: Flame,
    title: "Streak system",
    description: "Daily streaks that make you not want to break the chain. Gamified accountability that actually works.",
    color: "#f59e0b",
  },
  {
    icon: Clock,
    title: "Daily stand-ups",
    description: "5-minute morning check-ins and evening reviews — structured like a real manager would run them.",
    color: "#a78bfa",
  },
  {
    icon: Users,
    title: "Mentor matching (soon)",
    description: "Get matched with a human expert in your field for monthly 1:1 sessions to complement your AI manager.",
    color: "#f472b6",
  },
  {
    icon: Shield,
    title: "Privacy first",
    description: "Your goals are yours. We never sell data. Everything is encrypted. Your ambitions stay between you and your AI.",
    color: "#34d399",
  },
  {
    icon: Smartphone,
    title: "Mobile app (soon)",
    description: "Check-ins, nudges, and progress on the go. Because accountability doesn't stop when you leave your desk.",
    color: "#60a5fa",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-6 bg-[#080810]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#6c63ff] font-semibold text-sm uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#f0f0f5] mb-4">
            Everything you need to execute
          </h2>
          <p className="text-[#a0a0b0] text-lg max-w-2xl mx-auto">
            Built for the solopreneur who's serious — not the one who just thinks about being serious
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:border-[#6c63ff]/40 transition-all duration-300 hover:glow cursor-default"
            >
              <CardContent className="p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}15`, border: `1px solid ${feature.color}30` }}
                >
                  <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                </div>
                <h3 className="font-bold text-[#f0f0f5] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#6b6b80] leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
