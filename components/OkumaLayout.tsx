"use client";

import React from "react";

const colors = {
  redLight: "#F8DADA",
  redSoft: "#E7A0A0",
  red: "#C62828",
  redMedium: "#A91F1F",
  redDark: "#7F1D1D",
};

export default function OkumaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="min-h-screen text-[#202124]"
      style={{
        backgroundColor: "#FFFDFD",
        backgroundImage: `
          radial-gradient(
            circle at 8% 18%,
            rgba(198,40,40,0.055) 0,
            rgba(198,40,40,0.055) 2px,
            transparent 2.5px
          ),

          radial-gradient(
            circle at 92% 55%,
            rgba(127,29,29,0.045) 0,
            rgba(127,29,29,0.045) 2px,
            transparent 2.5px
          ),

          linear-gradient(
            180deg,
            #FFF8F8 0%,
            #FFFDFD 35%,
            #FFFFFF 100%
          )
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="sticky top-0 z-40 border-b border-[#E8DCDC] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8f1717] text-xs font-black text-white shadow-sm">
              T
            </div>

            <div>
              <div className="text-[10px] font-bold tracking-wider text-[#8f1717]">
                TÜRK DİLİ
              </div>

              <div className="text-sm font-black leading-4">
                OKUMA SINAVI
              </div>
            </div>
          </div>

          <div className="rounded-md border border-[#efd8d8] bg-[#fff5f5] px-3 py-1.5 text-xs font-black text-[#8f1717]">
            CEFR
          </div>
        </div>
      </header>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-3 py-4 sm:px-5 sm:py-6">
        {children}
      </div>

      {/* =====================================================
          GLOBAL FOOTER
      ====================================================== */}

      <footer
        className="relative z-10 overflow-hidden border-t bg-white px-6 py-10"
        style={{
          borderColor: colors.redLight,
        }}
      >
        {/* TOP RIGHT CIRCLE */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border-[18px] opacity-10"
          style={{
            borderColor: colors.red,
          }}
        />

        {/* BOTTOM LEFT CIRCLE */}
        <div
          className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full border-[18px] opacity-10"
          style={{
            borderColor: colors.redSoft,
          }}
        />

        {/* RIGHT DIAMOND */}
        <div className="pointer-events-none absolute bottom-8 right-44 hidden lg:block">
          <div
            className="h-14 w-14 rotate-45 border-[7px] opacity-10"
            style={{
              borderColor: colors.redMedium,
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* BRAND + CEFR */}
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            {/* BRAND */}
            <div>
              <div
                className="font-black"
                style={{
                  color: colors.redDark,
                }}
              >
                Türk Dili Multilevel
              </div>

              <div className="mt-1 text-sm text-slate-500">
                Türkçe CEFR sınav hazırlık platformu
              </div>

              <div className="mt-2 text-xs text-slate-400">
                Yazar: Dilnoza Sabirova
              </div>
            </div>

            {/* CEFR */}
            <div className="flex flex-col items-center gap-2 sm:items-end">
              <div
                className="text-sm font-black"
                style={{
                  color: colors.red,
                }}
              >
                B1 • B2 • C1 • CEFR
              </div>

              <div className="text-xs text-slate-400">
                OKUMA • TÜRK DİLİ MULTILEVEL
              </div>
            </div>
          </div>

          {/* CONTACTS */}
          <div
            className="mt-6 border-t pt-5"
            style={{
              borderColor: "#F0E4E4",
            }}
          >
            <div className="mb-4 text-center text-[11px] font-black tracking-[0.2em] text-slate-400">
              BİZİMLE İLETİŞİME GEÇİN
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* PHONE */}
              <a
                href="tel:+998940885524"
                className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: "#E8DADA",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#7F1D1D]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>

                <span>+998 94 088 55 24</span>
              </a>

              {/* TELEGRAM */}
              <a
                href="https://t.me/turkdili_multilevel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: "#E8DADA",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#229ED9]"
                >
                  <path d="M21.9 3.4 18.7 20c-.24 1.17-.87 1.46-1.77.91l-4.88-3.6-2.36 2.27c-.26.26-.48.48-.98.48l.35-4.99 9.1-8.22c.4-.35-.09-.55-.62-.2L6.28 13.7l-4.78-1.5c-1.04-.33-1.06-1.04.22-1.54L20.39 3.2c.88-.32 1.65.2 1.51.2z" />
                </svg>

                <span>Telegram</span>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/turkdilimultilevelkitaplari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: "#E8DADA",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#E4405F]"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                    ry="5"
                  />

                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

                  <line
                    x1="17.5"
                    x2="17.51"
                    y1="6.5"
                    y2="6.5"
                  />
                </svg>

                <span>Instagram</span>
              </a>

              {/* YOUTUBE */}
              <a
                href="https://www.youtube.com/@Konu%C5%9FmaMultilevel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: "#E8DADA",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#FF0000]"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.8 31.8 0 0 0 0 12a31.8 31.8 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.8 31.8 0 0 0 24 12a31.8 31.8 0 0 0-.5-5.8zM9.6 15.5v-7L15.8 12l-6.2 3.5z" />
                </svg>

                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}