"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Indie hacker",
    goal: "Launched SaaS to $5K MRR",
    quote: "I'd been 'about to launch' my SaaS for 8 months. Mentr gave me a 90-day plan and checked in every morning. I launched 6 weeks later. The AI literally called me out when I was procrastinating.",
    avatar: "AC",
    avatarColor: "#FF385C",
    days: 42,
  },
  {
    name: "Priya Sharma",
    role: "Freelance designer",
    goal: "Lost 18 pounds",
    quote: "What's different is the check-ins feel like talking to a real boss who cares. When I missed a workout it didn't just log it — it asked why and helped me plan around it.",
    avatar: "PS",
    avatarColor: "#00A699",
    days: 90,
  },
  {
    name: "Marcus Williams",
    role: "Solopreneur",
    goal: "Published first book",
    quote: "3,000 words a day sounds impossible until someone blocks the time on your calendar and checks if you did it. Mentr made writing feel like a job — in the best way. Shipped in 11 weeks.",
    avatar: "MW",
    avatarColor: "#FC642D",
    days: 77,
  },
  {
    name: "Sarah Kim",
    role: "Content creator",
    goal: "Grew to 100K followers",
    quote: "The calendar blocking was the unlock. I'd post 'when I felt like it.' Now I have daily content blocks and a schedule. Hit 100K faster than I ever thought possible.",
    avatar: "SK",
    avatarColor: "#FFB400",
    days: 120,
  },
  {
    name: "Jordan Blake",
    role: "Developer",
    goal: "Shipped open-source project",
    quote: "I had a half-finished repo sitting for a year. Mentr broke it into 2-hour daily sessions. The streak pressure is real — I didn't want to break it. Shipped in 5 weeks.",
    avatar: "JB",
    avatarColor: "#FF385C",
    days: 35,
  },
  {
    name: "Fatima Al-Hassan",
    role: "Consultant",
    goal: "Landed 3 enterprise clients",
    quote: "My AI manager set daily outreach targets, tracked my pipeline, and kept me from hiding behind email. Closed $180K in 60 days.",
    avatar: "FA",
    avatarColor: "#00A699",
    days: 60,
  },
];

export default function Testimonials() {
  return (
    <section id="stories" className="py-24 px-6 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#FF385C] uppercase tracking-widest mb-3">Success stories</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#222222] mb-4">
            People who stopped waiting
          </h2>
          <p className="text-[#717171] text-lg max-w-xl mx-auto">
            Real goals. Real timelines. Real accountability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#EBEBEB] p-6 hover:shadow-md hover:border-[#DDDDDD] transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-[#FF385C] text-[#FF385C]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[#484848] leading-relaxed mb-5">"{t.quote}"</p>

              {/* Goal tag */}
              <div className="bg-[#FFF0F2] text-[#FF385C] text-xs font-medium px-3 py-1.5 rounded-full inline-flex items-center gap-1 mb-5 border border-[#FFD0D8]">
                🎯 {t.goal} · {t.days} days
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#EBEBEB]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#222222]">{t.name}</p>
                  <p className="text-xs text-[#717171]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
