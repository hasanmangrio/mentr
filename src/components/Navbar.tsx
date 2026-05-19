"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a3e]/50 backdrop-blur-xl bg-[#0a0a0f]/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#6c63ff] flex items-center justify-center">
            <Target className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-[#f0f0f5]">Mentr</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-sm text-[#a0a0b0] hover:text-[#f0f0f5] transition-colors">
            How it works
          </Link>
          <Link href="#pricing" className="text-sm text-[#a0a0b0] hover:text-[#f0f0f5] transition-colors">
            Pricing
          </Link>
          <Link href="#stories" className="text-sm text-[#a0a0b0] hover:text-[#f0f0f5] transition-colors">
            Success stories
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">Sign in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/onboarding">Get started free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
