"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
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
  X,
} from "lucide-react";
import Link from "next/link";

const goalCategories = [
  { icon: Rocket, label: "Launch a startup" },
  { icon: DollarSign, label: "Grow my income" },
  { icon: Dumbbell, label: "Get fit / lose weight" },
  { icon: Code, label: "Build a project" },
  { icon: BookOpen, label: "Write / create content" },
  { icon: Heart, label: "Something else" },
];

const timeframes = [
  { label: "30 days", sub: "Sprint mode" },
  { label: "90 days", sub: "Quarter push" },
  { label: "6 months", sub: "Deep transformation" },
  { label: "1 year", sub: "Full commitment" },
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
  const [selected, setSelected] = useState({ category: "", goal: "", timeframe: "", intensity: "" });

  const handleGenerate = async () => {
    setStep("generating");
    await new Promise((r) => setTimeout(r, 2800));
    router.push("/dashboard");
  };

  const steps: Step[] = ["category", "goal", "timeframe", "intensity"];
  const stepIndex = steps.indexOf(step as Step);
  const progress = step === "generating" ? 100 : ((stepIndex + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="border-b border-[#DDDDDD] px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <svg width="24" height="26" viewBox="0 0 30 32" fill="none">
            <path d="M15 2C15 2 6 12 6 19C6 23.4 10.1 27 15 27C19.9 27 24 23.4 24 19C24 12 15 2 15 2Z" fill="#FF385C" />
          </svg>
          <span className="font-bold text-[#FF385C]">mentr</span>
        </Link>
        <Link href="/" className="text-[#717171] hover:text-[#222222] transition-colors">
          <X className="w-5 h-5" />
        </Link>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-[#EBEBEB]">
        <div className="h-full bg-[#FF385C] transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="flex-1 flex items-start justify-center px-6 py-12">
        <div className="w-full max-w-lg">

          {step === "category" && (
            <div>
              <p className="text-xs text-[#717171] mb-2">Step 1 of 4</p>
              <h1 className="text-2xl font-extrabold text-[#222222] mb-2">What do you want to achieve?</h1>
              <p className="text-[#717171] mb-8">Pick the category that fits best.</p>
              <div className="grid grid-cols-2 gap-3">
                {goalCategories.map((cat) => (
                  <button
                    key={cat.label}
                    onClick={() => { setSelected({ ...selected, category: cat.label }); setStep("goal"); }}
                    className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-150 group ${
                      selected.category === cat.label
                        ? "border-[#222222] bg-white shadow-sm"
                        : "border-[#DDDDDD] bg-white hover:border-[#222222]"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      selected.category === cat.label ? "bg-[#FFF0F2]" : "bg-[#f7f7f7] group-hover:bg-[#FFF0F2]"
                    }`}>
                      <cat.icon className={`w-4 h-4 transition-colors ${
                        selected.category === cat.label ? "text-[#FF385C]" : "text-[#717171] group-hover:text-[#FF385C]"
                      }`} />
                    </div>
                    <span className="text-sm font-medium text-[#222222]">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === "goal" && (
            <div>
              <p className="text-xs text-[#717171] mb-2">Step 2 of 4</p>
              <h1 className="text-2xl font-extrabold text-[#222222] mb-2">Describe your goal</h1>
              <p className="text-[#717171] mb-8">The more specific, the better your plan will be.</p>
              <textarea
                className="w-full h-36 bg-white border border-[#DDDDDD] rounded-xl p-4 text-[#222222] placeholder:text-[#b0b0b0] text-sm resize-none focus:outline-none focus:border-[#222222] transition-colors"
                placeholder={`e.g. "Launch my productivity SaaS to $5K MRR"\nor "Lose 20 pounds and run a 5K"\nor "Publish my first book"`}
                value={selected.goal}
                onChange={(e) => setSelected({ ...selected, goal: e.target.value })}
              />
              <div className="flex gap-3 mt-4">
                <Button variant="outline" onClick={() => setStep("category")} className="rounded-lg">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button className="flex-1 rounded-lg" disabled={!selected.goal.trim()} onClick={() => setStep("timeframe")}>
                  Continue <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {step === "timeframe" && (
            <div>
              <p className="text-xs text-[#717171] mb-2">Step 3 of 4</p>
              <h1 className="text-2xl font-extrabold text-[#222222] mb-2">What's your timeline?</h1>
              <p className="text-[#717171] mb-8">Shorter means more pressure. Longer means more depth.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {timeframes.map((t) => (
                  <button
                    key={t.label}
                    onClick={() => setSelected({ ...selected, timeframe: t.label })}
                    className={`p-5 rounded-xl border text-left transition-all duration-150 ${
                      selected.timeframe === t.label
                        ? "border-[#222222] bg-white shadow-sm"
                        : "border-[#DDDDDD] bg-white hover:border-[#222222]"
                    }`}
                  >
                    <p className="font-bold text-[#222222] text-lg">{t.label}</p>
                    <p className="text-xs text-[#717171] mt-1">{t.sub}</p>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("goal")} className="rounded-lg">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button className="flex-1 rounded-lg" disabled={!selected.timeframe} onClick={() => setStep("intensity")}>
                  Continue <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {step === "intensity" && (
            <div>
              <p className="text-xs text-[#717171] mb-2">Step 4 of 4</p>
              <h1 className="text-2xl font-extrabold text-[#222222] mb-2">How hard do you want to be pushed?</h1>
              <p className="text-[#717171] mb-8">Your AI manager will match this energy. Adjust any time.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {intensities.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setSelected({ ...selected, intensity: item.label })}
                    className={`p-5 rounded-xl border text-left transition-all duration-150 ${
                      selected.intensity === item.label
                        ? "border-[#222222] bg-white shadow-sm"
                        : "border-[#DDDDDD] bg-white hover:border-[#222222]"
                    }`}
                  >
                    <span className="text-2xl">{item.emoji}</span>
                    <p className="font-bold text-[#222222] mt-2">{item.label}</p>
                    <p className="text-xs text-[#717171]">{item.desc}</p>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("timeframe")} className="rounded-lg">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button className="flex-1 rounded-lg" disabled={!selected.intensity} onClick={handleGenerate}>
                  Generate my plan <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {step === "generating" && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#FFF0F2] border border-[#FFD0D8] flex items-center justify-center mx-auto mb-6">
                <Loader2 className="w-7 h-7 text-[#FF385C] animate-spin" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#222222] mb-2">Building your plan…</h2>
              <p className="text-[#717171] mb-10">Your AI manager is creating a personalized roadmap.</p>
              <div className="space-y-3 text-left max-w-xs mx-auto">
                {[
                  "Breaking goal into weekly milestones",
                  "Scheduling daily work blocks",
                  "Setting up check-in cadence",
                  "Calibrating accountability level",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#484848]">
                    <div className="w-5 h-5 rounded-full bg-[#FFF0F2] flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF385C]" />
                    </div>
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
