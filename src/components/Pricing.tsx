"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Try the basics — no credit card needed.",
    features: [
      "1 active goal",
      "AI goal breakdown",
      "Daily check-ins (3/week)",
      "Progress tracking",
      "7-day streak tracking",
    ],
    cta: "Start free",
    href: "/onboarding",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Full accountability. No compromises.",
    features: [
      "Unlimited goals",
      "Full AI plan generation",
      "Daily check-ins (morning + evening)",
      "Google Calendar sync",
      "Streak & analytics dashboard",
      "Goal adjustment & replanning",
      "Priority AI responses",
      "Export progress reports",
    ],
    cta: "Get Pro",
    href: "/onboarding?plan=pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$79",
    period: "/month",
    description: "For founders managing a small team.",
    features: [
      "Everything in Pro",
      "Up to 5 team members",
      "Shared team goals",
      "Manager visibility dashboard",
      "Team streak leaderboard",
      "Slack integration (soon)",
      "Dedicated onboarding call",
    ],
    cta: "Contact us",
    href: "mailto:team@mentr.app",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-[#080810]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#6c63ff] font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#f0f0f5] mb-4">
            Less than a coffee per day
          </h2>
          <p className="text-[#a0a0b0] text-lg max-w-xl mx-auto">
            A real life coach costs $300+/hour. Mentr costs less than your gym membership.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 ${
                plan.highlighted
                  ? "border-[#6c63ff] glow-strong scale-105"
                  : "hover:border-[#2a2a3e] hover:glow"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#6c63ff] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Most popular
                  </span>
                </div>
              )}
              <CardContent className="p-8">
                <p className="text-[#a0a0b0] text-sm font-medium mb-1">{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-black text-[#f0f0f5]">{plan.price}</span>
                  <span className="text-[#6b6b80] text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-[#6b6b80] mb-6">{plan.description}</p>

                <Button
                  className="w-full mb-6"
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#a0a0b0]">
                      <Check className="w-4 h-4 text-[#34d399] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
