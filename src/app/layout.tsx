import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentr — AI accountability for solopreneurs",
  description: "Set goals, get an AI-powered plan, and have an AI manager hold you accountable every day. Stop drifting. Start achieving.",
  keywords: ["accountability", "life coach", "AI", "solopreneur", "goals", "productivity"],
  openGraph: {
    title: "Mentr — AI accountability for solopreneurs",
    description: "Your AI manager. Your goals. No more excuses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#f0f0f5]">
        {children}
      </body>
    </html>
  );
}
