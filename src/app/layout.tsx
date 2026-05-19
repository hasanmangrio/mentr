import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentr — Your AI accountability manager",
  description: "Set goals, get a personalized plan, and have an AI manager hold you accountable every day. For solopreneurs who are serious about results.",
  keywords: ["accountability", "life coach", "AI", "solopreneur", "goals", "productivity"],
  openGraph: {
    title: "Mentr — Your AI accountability manager",
    description: "Your goals. Your plan. No more excuses.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-[#222222]">
        {children}
      </body>
    </html>
  );
}
