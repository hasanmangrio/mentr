"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Target, ArrowLeft, Send, Zap, Loader2 } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

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
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) throw new Error("API error");

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Connection issue. Let's continue — tell me what's on your plate today and I'll help you prioritize.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
      {/* Header */}
      <div className="border-b border-[#2a2a3e] px-6 py-4 flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Button>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#6c63ff]/20 border border-[#6c63ff]/30 flex items-center justify-center pulse-glow">
            <Zap className="w-4 h-4 text-[#6c63ff]" />
          </div>
          <div>
            <p className="font-semibold text-[#f0f0f5] text-sm">Your AI Manager</p>
            <p className="text-xs text-[#34d399] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] inline-block" />
              Active · Monday morning check-in
            </p>
          </div>
        </div>
        <div className="ml-auto">
          <div className="flex items-center gap-2 text-xs text-[#6b6b80]">
            <Target className="w-3 h-3" />
            Launch SaaS to $5K MRR · Week 3 of 12
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto px-4 py-6 max-w-3xl mx-auto w-full">
        <div className="space-y-6">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-[#6c63ff]/20 border border-[#6c63ff]/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-3.5 h-3.5 text-[#6c63ff]" />
                </div>
              )}
              <div
                className={`max-w-lg rounded-2xl px-5 py-4 text-sm leading-relaxed ${
                  msg.role === "assistant"
                    ? "bg-[#111118] border border-[#2a2a3e] text-[#f0f0f5] rounded-tl-sm"
                    : "bg-[#6c63ff]/20 border border-[#6c63ff]/20 text-[#f0f0f5] rounded-tr-sm"
                }`}
              >
                {msg.content.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < msg.content.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-[#6c63ff]/20 border border-[#6c63ff]/30 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-[#6c63ff]" />
              </div>
              <div className="bg-[#111118] border border-[#2a2a3e] rounded-2xl rounded-tl-sm px-5 py-4 flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-[#6c63ff] animate-spin" />
                <span className="text-sm text-[#6b6b80]">Thinking...</span>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-[#2a2a3e] p-4">
        <div className="max-w-3xl mx-auto flex gap-3">
          <textarea
            className="flex-1 bg-[#111118] border border-[#2a2a3e] rounded-xl px-4 py-3 text-sm text-[#f0f0f5] placeholder:text-[#6b6b80] resize-none focus:outline-none focus:border-[#6c63ff] transition-colors min-h-[52px] max-h-32"
            placeholder="Reply to your AI manager..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
          <Button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            size="icon"
            className="h-[52px] w-[52px] rounded-xl shrink-0"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-center text-xs text-[#2a2a3e] mt-2">Press Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  );
}
