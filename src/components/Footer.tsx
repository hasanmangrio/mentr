import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#DDDDDD] bg-white pt-14 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <svg width="24" height="26" viewBox="0 0 30 32" fill="none">
                <path d="M15 2C15 2 6 12 6 19C6 23.4 10.1 27 15 27C19.9 27 24 23.4 24 19C24 12 15 2 15 2Z" fill="#FF385C" />
              </svg>
              <span className="font-bold text-[#FF385C]">mentr</span>
            </div>
            <p className="text-sm text-[#717171] leading-relaxed">
              The AI accountability system for people serious about their goals.
            </p>
          </div>

          {[
            {
              title: "Product",
              links: [
                { label: "How it works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
                { label: "Get started", href: "/onboarding" },
                { label: "Dashboard", href: "/dashboard" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "Success stories", href: "#stories" },
                { label: "Contact", href: "mailto:hello@mentr.app" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy policy", href: "#" },
                { label: "Terms of service", href: "#" },
                { label: "Cookie policy", href: "#" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold text-[#222222] uppercase tracking-wider mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[#717171] hover:text-[#222222] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#EBEBEB] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#717171]">© 2025 Mentr, Inc. All rights reserved.</p>
          <p className="text-xs text-[#717171]">Built for the relentlessly ambitious.</p>
        </div>
      </div>
    </footer>
  );
}
