"use client";

import React from "react";

export default function OkumaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f6f3ef] text-[#252525]">
      <header className="border-b border-[#e3ddd5] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <div className="text-sm font-bold tracking-widest text-[#a61b1b]">
              TÜRK DİLİ
            </div>
            <div className="text-lg font-black">OKUMA SINAVI</div>
          </div>

          <div className="rounded-full bg-[#f5ece8] px-4 py-2 text-sm font-bold text-[#8f1717]">
            CEFR
          </div>
        </div>
      </header>

      <div className="mx-auto min-h-[calc(100vh-80px)] max-w-7xl px-4 py-8 md:px-8">
        {children}
      </div>
    </main>
  );
}