"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send, Zap, Loader2, Target } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Good morning. It's Monday, Week 3. You're on a 12-day streak — don't lose it today.\n\nYesterday you completed 3 of 5 tasks. The Stripe integration is now 2 days overdue. Before we plan today, I need to understand: what specifically stopped you from finishing it?",
  },
];

export default function CheckinPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });
      if (!response.ok) throw new Error();
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Connection issue. Tell me what's on your plate today and I'll help you prioritize." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="border-b border-[#DDDDDD] px-6 py-4 flex items-center gap-4 bg-white">
        <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 border border-[#DDDDDD]" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FFF0F2] border border-[#FFD0D8] flex items-center justify-center">
            <Zap className="w-4 h-4 text-[#FF385C]" />
          </div>
          <div>
            <p className="font-semibold text-[#222222] text-sm">Your AI Manager</p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              <span className="text-xs text-[#717171]">Active · Monday morning check-in</span>
            </div>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2 text-xs text-[#717171] bg-[#f7f7f7] border border-[#EBEBEB] rounded-full px-3 py-1.5">
          <Target className="w-3 h-3 text-[#FF385C]" />
          Launch SaaS to $5K MRR · Week 3/12
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto bg-[#f7f7f7]">
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-[#FFF0F2] border border-[#FFD0D8] flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-3.5 h-3.5 text-[#FF385C]" />
                </div>
              )}
              <div
                className={`max-w-lg rounded-2xl px-4 py-3.5 text-sm leading-relaxed ${
                  msg.role === "assistant"
                    ? "bg-white border border-[#DDDDDD] text-[#222222] rounded-tl-sm shadow-sm"
                    : "bg-[#222222] text-white rounded-tr-sm"
                }`}
              >
                {msg.content.split("\n").map((line, j, arr) => (
                  <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                ))}
                <p className={`text-xs mt-2 ${msg.role === "assistant" ? "text-[#b0b0b0]" : "text-white/40"}`}>
                  {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-[#FFF0F2] border border-[#FFD0D8] flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-[#FF385C]" />
              </div>
              <div className="bg-white border border-[#DDDDDD] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2 shadow-sm">
                <Loader2 className="w-3.5 h-3.5 text-[#FF385C] animate-spin" />
                <span className="text-sm text-[#717171]">Thinking…</span>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-[#DDDDDD] bg-white px-4 py-4">
        <div className="max-w-2xl mx-auto flex gap-3">
          <textarea
            className="flex-1 bg-[#f7f7f7] border border-[#DDDDDD] rounded-xl px-4 py-3 text-sm text-[#222222] placeholder:text-[#b0b0b0] resize-none focus:outline-none focus:border-[#222222] transition-colors min-h-[52px] max-h-32"
            placeholder="Reply to your AI manager…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className="w-[52px] h-[52px] rounded-xl bg-[#FF385C] hover:bg-[#E31C5F] text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-center text-xs text-[#b0b0b0] mt-2">Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  );
}
