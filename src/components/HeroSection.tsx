"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Shield, Zap, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-[#FFF0F2] text-[#FF385C] text-xs font-semibold px-4 py-2 rounded-full mb-8 border border-[#FFD0D8]">
          <Zap className="w-3 h-3" />
          AI-powered accountability for solopreneurs
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#222222] tracking-tight leading-[1.1] mb-6">
          The AI manager that keeps
          <br />
          <span className="text-[#FF385C]">you on track, every day.</span>
        </h1>

        <p className="text-xl text-[#717171] max-w-2xl mx-auto mb-10 leading-relaxed">
          Set your goal. Get a personalized plan. Let Mentr check in on you daily, block your calendar, and hold you accountable — like a real boss would.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <Button size="lg" className="rounded-full px-8 shadow-md hover:shadow-lg" asChild>
            <Link href="/onboarding">
              Start for free <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
            <Link href="#how-it-works">See how it works</Link>
          </Button>
        </div>

        {/* Trust row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-[#717171]">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["#FF385C", "#00A699", "#FC642D", "#FFB400"].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: color }}
                >
                  {["A", "B", "C", "D"][i]}
                </div>
              ))}
            </div>
            <span>2,400+ goals achieved</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FF385C] text-[#FF385C]" />
              ))}
            </div>
            <span>4.9 · 800+ reviews</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[#717171]" />
            <span>Free to start, no card required</span>
          </div>
        </div>
      </div>

      {/* Hero visual — Airbnb-style card mockup */}
      <div className="max-w-4xl mx-auto mt-16 px-4">
        <div className="rounded-2xl border border-[#DDDDDD] bg-white shadow-[0_6px_24px_rgba(0,0,0,0.10)] overflow-hidden">
          {/* Mock dashboard header */}
          <div className="bg-[#f7f7f7] border-b border-[#EBEBEB] px-6 py-4 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white rounded-md px-4 py-1 text-xs text-[#717171] border border-[#DDDDDD]">
                app.mentr.co/dashboard
              </div>
            </div>
          </div>

          {/* Mock content */}
          <div className="p-6 grid grid-cols-3 gap-4">
            <div className="col-span-3 flex items-center justify-between mb-2">
              <div>
                <p className="text-base font-semibold text-[#222222]">Today's mission</p>
                <p className="text-xs text-[#717171]">Monday · Week 3 of 12 · 12-day streak 🔥</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-[#F0FFF4] text-[#276749] text-xs font-semibold px-3 py-1 rounded-full border border-[#C6F6D5]">On track</span>
                <button className="bg-[#FF385C] text-white text-xs font-semibold px-4 py-2 rounded-lg">Check in with AI</button>
              </div>
            </div>
            {[
              { label: "Tasks today", value: "2/5", color: "#FF385C" },
              { label: "Streak", value: "12 days", color: "#FC642D" },
              { label: "Weekly pace", value: "81%", color: "#00A699" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-[#EBEBEB] p-4">
                <p className="text-xs text-[#717171] mb-1">{s.label}</p>
                <p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
              </div>
            ))}
            {["Set up Stripe billing", "Record 60s demo video", "Post on Twitter about progress"].map((task, i) => (
              <div key={i} className="col-span-1 flex items-center gap-2 rounded-lg border border-[#EBEBEB] px-3 py-2.5">
                <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${i === 0 ? "border-[#FF385C] bg-[#FF385C]" : "border-[#DDDDDD]"}`} />
                <span className={`text-xs ${i === 0 ? "line-through text-[#b0b0b0]" : "text-[#222222]"}`}>{task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
