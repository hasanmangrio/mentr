"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  ArrowRight,
  ArrowLeft,
  Rocket,
  Heart,
  BookOpen,
  DollarSign,
  Dumbbell,
  Code,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const goalCategories = [
  { icon: Rocket, label: "Launch a startup", color: "#6c63ff" },
  { icon: DollarSign, label: "Grow my income", color: "#34d399" },
  { icon: Dumbbell, label: "Get fit / lose weight", color: "#f59e0b" },
  { icon: Code, label: "Build a project", color: "#60a5fa" },
  { icon: BookOpen, label: "Write / create content", color: "#a78bfa" },
  { icon: Heart, label: "Something else", color: "#f472b6" },
];

const timeframes = [
  { label: "30 days", sub: "Sprint" },
  { label: "90 days", sub: "Quarter" },
  { label: "6 months", sub: "Deep work" },
  { label: "1 year", sub: "Transformation" },
];

const intensities = [
  { label: "Light", desc: "1–2 hrs/day", emoji: "🌱" },
  { label: "Focused", desc: "2–4 hrs/day", emoji: "🔥" },
  { label: "Intense", desc: "4–6 hrs/day", emoji: "⚡" },
  { label: "All-in", desc: "6+ hrs/day", emoji: "💀" },
];

type Step = "category" | "goal" | "timeframe" | "intensity" | "generating";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("category");
  const [selected, setSelected] = useState({
    category: "",
    goal: "",
    timeframe: "",
    intensity: "",
  });

  const handleGenerate = async () => {
    setStep("generating");
    // Simulate AI plan generation
    await new Promise((r) => setTimeout(r, 2500));
    router.push("/dashboard");
  };

  const progress =
    step === "category" ? 25 :
    step === "goal" ? 50 :
    step === "timeframe" ? 75 :
    step === "intensity" ? 90 :
    100;

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
      {/* Header */}
      <div className="border-b border-[#2a2a3e] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#6c63ff] flex items-center justify-center">
            <Target className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold text-[#f0f0f5]">Mentr</span>
        </div>
        <span className="text-xs text-[#6b6b80]">Setup · {progress}% complete</span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-[#2a2a3e]">
        <div
          className="h-full bg-[#6c63ff] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-xl">

          {step === "category" && (
            <div>
              <Badge className="mb-4">Step 1 of 4</Badge>
              <h1 className="text-3xl font-black text-[#f0f0f5] mb-2">
                What do you want to achieve?
              </h1>
              <p className="text-[#a0a0b0] mb-8">Pick the category that fits best — you can get specific in the next step.</p>
              <div className="grid grid-cols-2 gap-3">
                {goalCategories.map((cat) => (
                  <button
                    key={cat.label}
                    onClick={() => {
                      setSelected({ ...selected, category: cat.label });
                      setStep("goal");
                    }}
                    className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                      selected.category === cat.label
                        ? "border-[#6c63ff] bg-[#6c63ff]/10"
                        : "border-[#2a2a3e] bg-[#111118] hover:border-[#6c63ff]/40 hover:bg-[#1a1a2e]"
                    }`}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${cat.color}20` }}
                    >
                      <cat.icon className="w-4 h-4" style={{ color: cat.color }} />
                    </div>
                    <span className="text-sm font-medium text-[#f0f0f5]">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === "goal" && (
            <div>
              <Badge className="mb-4">Step 2 of 4</Badge>
              <h1 className="text-3xl font-black text-[#f0f0f5] mb-2">
                Describe your goal
              </h1>
              <p className="text-[#a0a0b0] mb-8">
                Be as specific as you can. The more detail, the better your AI manager can plan for you.
              </p>
              <div className="space-y-4">
                <textarea
                  className="w-full h-36 bg-[#111118] border border-[#2a2a3e] rounded-xl p-4 text-[#f0f0f5] placeholder:text-[#6b6b80] text-sm resize-none focus:outline-none focus:border-[#6c63ff] transition-colors"
                  placeholder={`e.g. "Launch my productivity SaaS to $5K MRR"\nor "Lose 20 pounds and run a 5K"\nor "Publish my first programming book"`}
                  value={selected.goal}
                  onChange={(e) => setSelected({ ...selected, goal: e.target.value })}
                />
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep("category")}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                  </Button>
                  <Button
                    className="flex-1"
                    disabled={!selected.goal.trim()}
                    onClick={() => setStep("timeframe")}
                  >
                    Continue <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {step === "timeframe" && (
            <div>
              <Badge className="mb-4">Step 3 of 4</Badge>
              <h1 className="text-3xl font-black text-[#f0f0f5] mb-2">
                What's your deadline?
              </h1>
              <p className="text-[#a0a0b0] mb-8">
                Pick a timeframe. Shorter = more pressure. Longer = more depth.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {timeframes.map((t) => (
                  <button
                    key={t.label}
                    onClick={() => setSelected({ ...selected, timeframe: t.label })}
                    className={`p-5 rounded-xl border text-left transition-all duration-200 ${
                      selected.timeframe === t.label
                        ? "border-[#6c63ff] bg-[#6c63ff]/10"
                        : "border-[#2a2a3e] bg-[#111118] hover:border-[#6c63ff]/40 hover:bg-[#1a1a2e]"
                    }`}
                  >
                    <p className="font-bold text-[#f0f0f5] text-lg">{t.label}</p>
                    <p className="text-xs text-[#6b6b80] mt-1">{t.sub}</p>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("goal")}>
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button
                  className="flex-1"
                  disabled={!selected.timeframe}
                  onClick={() => setStep("intensity")}
                >
                  Continue <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {step === "intensity" && (
            <div>
              <Badge className="mb-4">Step 4 of 4</Badge>
              <h1 className="text-3xl font-black text-[#f0f0f5] mb-2">
                How hard do you want to be pushed?
              </h1>
              <p className="text-[#a0a0b0] mb-8">
                Your AI manager will match this energy. You can always adjust later.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {intensities.map((i) => (
                  <button
                    key={i.label}
                    onClick={() => setSelected({ ...selected, intensity: i.label })}
                    className={`p-5 rounded-xl border text-left transition-all duration-200 ${
                      selected.intensity === i.label
                        ? "border-[#6c63ff] bg-[#6c63ff]/10"
                        : "border-[#2a2a3e] bg-[#111118] hover:border-[#6c63ff]/40 hover:bg-[#1a1a2e]"
                    }`}
                  >
                    <span className="text-2xl">{i.emoji}</span>
                    <p className="font-bold text-[#f0f0f5] mt-2">{i.label}</p>
                    <p className="text-xs text-[#6b6b80]">{i.desc}</p>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("timeframe")}>
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button
                  className="flex-1"
                  disabled={!selected.intensity}
                  onClick={handleGenerate}
                >
                  Generate my plan <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {step === "generating" && (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-[#6c63ff]/20 border border-[#6c63ff]/30 flex items-center justify-center mx-auto mb-6 pulse-glow">
                <Loader2 className="w-8 h-8 text-[#6c63ff] animate-spin" />
              </div>
              <h2 className="text-2xl font-black text-[#f0f0f5] mb-3">Building your plan...</h2>
              <p className="text-[#a0a0b0]">Your AI manager is analyzing your goal and creating a personalized roadmap.</p>
              <div className="mt-8 space-y-2 text-left max-w-xs mx-auto">
                {[
                  "Breaking goal into milestones",
                  "Scheduling daily work blocks",
                  "Setting up check-in cadence",
                  "Calibrating accountability level",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#6b6b80]">
                    <CheckCircle2 className="w-4 h-4 text-[#34d399]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
