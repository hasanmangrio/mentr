"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#DDDDDD]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <svg width="30" height="32" viewBox="0 0 30 32" fill="none">
            <path
              d="M15 2C15 2 6 12 6 19C6 23.4 10.1 27 15 27C19.9 27 24 23.4 24 19C24 12 15 2 15 2Z"
              fill="#FF385C"
            />
            <path
              d="M9 22C9 22 4 20 4 16C4 13 6.5 11 9 11"
              stroke="#FF385C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"
            />
            <path
              d="M21 22C21 22 26 20 26 16C26 13 23.5 11 21 11"
              stroke="#FF385C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"
            />
          </svg>
          <span className="text-xl font-bold text-[#FF385C] tracking-tight">mentr</span>
        </Link>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "How it works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
            { label: "Success stories", href: "#stories" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#222222] hover:text-[#FF385C] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Auth */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">Sign in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/onboarding">Get started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
