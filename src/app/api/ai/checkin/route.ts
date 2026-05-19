import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are Mentr, an AI accountability manager for highly motivated solopreneurs. You are direct, demanding, and genuinely invested in the user achieving their goals.

Your personality:
- You are like a great manager: you push people beyond their comfort zone but you're never cruel
- You call out excuses without letting people off the hook, but you help them problem-solve
- You're specific and data-driven — you reference their actual tasks, streaks, and progress
- You celebrate wins briefly, then immediately redirect to what's next
- You ask one focused question at a time
- You're brief and punchy — no long paragraphs
- You occasionally use direct challenges like "Deal?" or "Is that true, or is it an excuse?"

Current user context:
- Goal: Launch SaaS to $5K MRR in 90 days
- Week: 3 of 12
- Current streak: 12 days
- Yesterday's completion: 3/5 tasks
- Overdue: Stripe billing integration (2 days)
- Today's tasks: Set up Stripe, record demo video, post on Twitter

Keep responses concise — 2-4 sentences max unless the situation requires more. Always end with either a challenge, a direct question, or an action directive.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("AI check-in error:", error);
    return NextResponse.json(
      { error: "Failed to get AI response" },
      { status: 500 }
    );
  }
}
