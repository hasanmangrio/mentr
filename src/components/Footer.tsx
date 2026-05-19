import Link from "next/link";
import { Target } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a3e] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#6c63ff] flex items-center justify-center">
                <Target className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-[#f0f0f5]">Mentr</span>
            </Link>
            <p className="text-sm text-[#6b6b80] leading-relaxed">
              The AI accountability system for people who are serious about their goals.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#f0f0f5] uppercase tracking-widest mb-4">Product</p>
            <ul className="space-y-3 text-sm text-[#6b6b80]">
              <li><Link href="#how-it-works" className="hover:text-[#f0f0f5] transition-colors">How it works</Link></li>
              <li><Link href="#pricing" className="hover:text-[#f0f0f5] transition-colors">Pricing</Link></li>
              <li><Link href="/onboarding" className="hover:text-[#f0f0f5] transition-colors">Get started</Link></li>
              <li><Link href="/dashboard" className="hover:text-[#f0f0f5] transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#f0f0f5] uppercase tracking-widest mb-4">Company</p>
            <ul className="space-y-3 text-sm text-[#6b6b80]">
              <li><Link href="#stories" className="hover:text-[#f0f0f5] transition-colors">Success stories</Link></li>
              <li><a href="mailto:hello@mentr.app" className="hover:text-[#f0f0f5] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#f0f0f5] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#f0f0f5] transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#f0f0f5] uppercase tracking-widest mb-4">Legal</p>
            <ul className="space-y-3 text-sm text-[#6b6b80]">
              <li><a href="#" className="hover:text-[#f0f0f5] transition-colors">Privacy policy</a></li>
              <li><a href="#" className="hover:text-[#f0f0f5] transition-colors">Terms of service</a></li>
              <li><a href="#" className="hover:text-[#f0f0f5] transition-colors">Cookie policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a2a3e] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b6b80]">© 2025 Mentr. All rights reserved.</p>
          <p className="text-xs text-[#6b6b80]">Built for the relentlessly ambitious.</p>
        </div>
      </div>
    </footer>
  );
}
