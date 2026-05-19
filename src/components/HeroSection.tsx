"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#6c63ff]/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-[#60a5fa]/8 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#a78bfa]/8 blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#6c63ff 1px, transparent 1px), linear-gradient(to right, #6c63ff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <Badge className="mb-6 mx-auto">
          <Zap className="w-3 h-3 mr-1" />
          AI accountability for solopreneurs
        </Badge>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.05]">
          Stop drifting.
          <br />
          <span className="gradient-text">Start achieving.</span>
        </h1>

        <p className="text-xl text-[#a0a0b0] max-w-2xl mx-auto mb-10 leading-relaxed">
          Mentr gives you an AI boss that builds your plan, blocks your calendar, and holds you accountable every single day — like having a direct manager, but for your own goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="pulse-glow" asChild>
            <Link href="/onboarding">
              Start for free <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#how-it-works">See how it works</Link>
          </Button>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#6b6b80]">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D"].map((letter) => (
                <div
                  key={letter}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#60a5fa] flex items-center justify-center text-xs font-bold text-white border-2 border-[#0a0a0f]"
                >
                  {letter}
                </div>
              ))}
            </div>
            <span>2,400+ goals achieved</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-1">4.9/5 from 800+ reviews</span>
          </div>
        </div>
      </div>

      {/* Floating mockup */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 pointer-events-none">
        <div className="h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>
    </section>
  );
}
