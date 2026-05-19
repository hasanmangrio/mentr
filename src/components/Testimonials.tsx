"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Indie hacker",
    goal: "Launched SaaS to $5K MRR",
    quote: "I'd been 'about to launch' my SaaS for 8 months. Mentr gave me a 90-day plan and checked in every morning. I launched 6 weeks later. The AI literally called me out when I was procrastinating.",
    avatar: "AC",
    days: 42,
  },
  {
    name: "Priya Sharma",
    role: "Freelance designer",
    goal: "Lost 18 pounds",
    quote: "I tried every app. What's different here is the check-ins feel like talking to a real boss who cares. When I missed a workout, it didn't just log it — it asked why and helped me plan around it.",
    avatar: "PS",
    days: 90,
  },
  {
    name: "Marcus Williams",
    role: "Solopreneur",
    goal: "Published first book",
    quote: "3,000 words a day sounds impossible until someone blocks the time on your calendar and checks if you did it. Mentr made writing feel like a job — in the best way. Book shipped in 11 weeks.",
    avatar: "MW",
    days: 77,
  },
  {
    name: "Sarah Kim",
    role: "Content creator",
    goal: "Grew to 100K followers",
    quote: "The calendar blocking was the unlock for me. I'd post 'when I felt like it.' Now I have daily content blocks and a posting schedule. Hit 100K faster than I ever thought possible.",
    avatar: "SK",
    days: 120,
  },
  {
    name: "Jordan Blake",
    role: "Developer",
    goal: "Shipped open-source project",
    quote: "I had a half-finished repo sitting there for a year. Mentr broke it into 2-hour daily sessions. The streak pressure is real — I didn't want to break it. Shipped in 5 weeks.",
    avatar: "JB",
    days: 35,
  },
  {
    name: "Fatima Al-Hassan",
    role: "Consultant",
    goal: "Landed 3 enterprise clients",
    quote: "Outreach feels like rejection until you make it a numbers game. My AI manager set daily call targets, tracked my pipeline, and kept me from hiding behind email. Closed $180K in 60 days.",
    avatar: "FA",
    days: 60,
  },
];

export default function Testimonials() {
  return (
    <section id="stories" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#6c63ff] font-semibold text-sm uppercase tracking-widest mb-3">Success stories</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#f0f0f5] mb-4">
            People who stopped waiting
          </h2>
          <p className="text-[#a0a0b0] text-lg max-w-2xl mx-auto">
            Real goals. Real timelines. Real accountability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <Card key={index} className="hover:border-[#6c63ff]/30 transition-all duration-300 hover:glow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#60a5fa] flex items-center justify-center text-xs font-bold text-white">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-[#f0f0f5] text-sm">{t.name}</p>
                      <p className="text-xs text-[#6b6b80]">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="bg-[#6c63ff]/10 border border-[#6c63ff]/20 rounded-lg px-3 py-2 mb-4 text-xs text-[#a78bfa] font-medium">
                  Goal: {t.goal} · {t.days} days
                </div>

                <Quote className="w-4 h-4 text-[#2a2a3e] mb-2" />
                <p className="text-sm text-[#a0a0b0] leading-relaxed">{t.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
