"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Try the basics — no credit card needed.",
    features: [
      "1 active goal",
      "AI goal breakdown",
      "Daily check-ins (3/week)",
      "Progress tracking",
      "7-day streak tracking",
    ],
    cta: "Start for free",
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
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#FF385C] uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#222222] mb-4">
            Less than a coffee a day
          </h2>
          <p className="text-[#717171] text-lg max-w-xl mx-auto">
            A real life coach costs $300+/hour. Mentr costs less than your gym membership.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border p-8 transition-all duration-200 ${
                plan.highlighted
                  ? "border-[#FF385C] shadow-[0_4px_24px_rgba(255,56,92,0.15)] scale-[1.02]"
                  : "border-[#DDDDDD] bg-white hover:shadow-md"
              }`}
              style={plan.highlighted ? { background: "white" } : {}}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#FF385C] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              <p className="text-xs font-semibold text-[#717171] uppercase tracking-wider mb-2">{plan.name}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold text-[#222222]">{plan.price}</span>
                <span className="text-sm text-[#717171]">{plan.period}</span>
              </div>
              <p className="text-sm text-[#717171] mb-6 border-b border-[#EBEBEB] pb-6">{plan.description}</p>

              <Button
                className={`w-full mb-6 rounded-lg ${plan.highlighted ? "" : ""}`}
                variant={plan.highlighted ? "default" : "outline"}
                asChild
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-[#484848]">
                    <div className="w-4 h-4 rounded-full bg-[#FFF0F2] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#FF385C]" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#717171] mt-10">
          All plans include a 7-day free trial. Cancel anytime. No questions asked.
        </p>
      </div>
    </section>
  );
}
