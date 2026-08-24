"use client";

import React from "react";
import type { Question } from "@/data/okumaData";

type Props = {
  question: Question;
  value?: string;
  onChange: (value: string) => void;
};

const colors = {
  redLight: "#F8DADA",
  redSoft: "#E7A0A0",
  red: "#C62828",
  redMedium: "#A91F1F",
  redDark: "#7F1D1D",
};

/* =========================================================
   OPTION YORDAMCHI FUNKSIYA
========================================================= */

function parseOption(option: string, index: number) {
  const trimmed = option.trim();

  // Faqat "A", "B", "C", "D" bo'lsa
  if (/^[A-Z]$/.test(trimmed)) {
    return {
      letter: trimmed,
      text: "",
    };
  }

  // "A) Matn", "A. Matn", "A Matn"
  const match = trimmed.match(
    /^([A-Z])(?:[.)]\s*|\s+)(.*)$/
  );

  if (match) {
    return {
      letter: match[1],
      text: match[2],
    };
  }

  // Oddiy matn bo'lsa
  return {
    letter: String.fromCharCode(65 + index),
    text: trimmed,
  };
}

export default function QuestionRenderer({
  question,
  value = "",
  onChange,
}: Props) {
  /* =====================================================
     QUESTION WRAPPER
  ====================================================== */

  const QuestionWrapper = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <div
        className="relative overflow-hidden rounded-[1.5rem] border bg-white p-5 shadow-sm transition duration-200 hover:shadow-md sm:p-6"
        style={{
          borderColor: "#E1E1E1",
        }}
      >
        {/* Decorative circle */}
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full border-[11px]"
          style={{
            borderColor: colors.redSoft,
            opacity: 0.07,
          }}
        />

        {/* Decorative diamond */}
        <div
          className="pointer-events-none absolute -bottom-8 -left-8 h-20 w-20 rotate-45 border-[8px]"
          style={{
            borderColor: colors.red,
            opacity: 0.04,
          }}
        />

        <div className="relative">
          {children}
        </div>
      </div>
    );
  };

  /* =====================================================
     QUESTION TITLE
  ====================================================== */

  const QuestionText = () => {
    if (!question.text) return null;

    return (
      <div className="mb-5 flex items-start gap-3">
        {/* Number */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white"
          style={{
            backgroundColor: colors.redDark,
          }}
        >
          {question.number}
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <div
            className="text-[10px] font-black tracking-[0.2em]"
            style={{
              color: colors.red,
            }}
          >
            SORU {question.number}
          </div>

          <div className="mt-1 text-base font-bold leading-7 text-slate-800 sm:text-lg">
            {question.text}
          </div>
        </div>
      </div>
    );
  };

  /* =====================================================
   MULTIPLE CHOICE
===================================================== */

if (question.type === "multiple-choice") {
  const options = question.options ?? [];

  return (
    <div
      style={{
        background: "yellow",
        padding: "30px",
        border: "10px solid red",
      }}
    >
      <div
        style={{
          fontSize: "50px",
          fontWeight: "900",
          color: "red",
          marginBottom: "30px",
        }}
      >
        TEST MULTIPLE CHOICE
      </div>

      {options.map((option, index) => (
        <button
          key={`${option}-${index}`}
          type="button"
          onClick={() => onChange(option)}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "20px",
            padding: "25px",
            fontSize: "40px",
            fontWeight: "900",
            textAlign: "left",
            border: "5px solid red",
            background: "white",
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

/* =====================================================
   TRUE / FALSE / UNKNOWN
===================================================== */

if (question.type === "true-false-unknown") {
  const options = question.options ?? [
    "DOĞRU",
    "YANLIŞ",
    "VERİLMEMİŞ",
  ];

  const letters = ["A", "B", "C"];

  return (
    <QuestionWrapper>
      <QuestionText />

      <div className="grid gap-3">
        {options.map((option: string, index: number) => {
          const selected = value === option;

          return (
            <button
              key={`${option}-${index}`}
              type="button"
              onClick={() => onChange(option)}
              className="flex w-full items-center gap-4 rounded-2xl border-2 px-5 py-4 text-left transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: selected
                  ? colors.red
                  : "#E3DDD8",
                backgroundColor: selected
                  ? "#FFF6F6"
                  : "#FFFFFF",
                boxShadow: selected
                  ? "0 6px 16px rgba(127,29,29,0.08)"
                  : "none",
              }}
            >
              {/* A / B / C */}
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-base font-black"
                style={{
                  backgroundColor: selected
                    ? colors.red
                    : "#F3F0ED",
                  color: selected
                    ? "#FFFFFF"
                    : colors.redDark,
                }}
              >
                {letters[index]}
              </span>

              {/* JAVOB */}
              <span
                className="flex-1 font-bold text-xl leading-7"
                style={{
                  color: selected
                    ? colors.redDark
                    : "#333333",
                }}
              >
                {option}
              </span>

              {/* RADIO */}
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2"
                style={{
                  borderColor: selected
                    ? colors.red
                    : "#C9C3BD",
                }}
              >
                {selected && (
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: colors.red,
                    }}
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </QuestionWrapper>
  );
}

  /* =====================================================
     DRAG DROP
  ====================================================== */

  if (question.type === "drag-drop") {
    return (
      <QuestionWrapper>
        <QuestionText />

        <div
          className="rounded-xl border p-4"
          style={{
            borderColor: colors.redSoft,
            backgroundColor: "#FFF9F9",
          }}
        >
          <div
            className="mb-3 text-[10px] font-black tracking-[0.2em]"
            style={{
              color: colors.red,
            }}
          >
            CEVAP
          </div>

          <input
            type="text"
            value={value}
            onChange={(event) =>
              onChange(event.target.value)
            }
            className="w-full rounded-xl border-2 bg-white p-4 font-semibold text-slate-700 outline-none"
            style={{
              borderColor: "#E1E1E1",
            }}
            placeholder="Cevabınızı giriniz..."
          />
        </div>
      </QuestionWrapper>
    );
  }

  /* =====================================================
     MATCHING
  ====================================================== */

  if (question.type === "matching") {
    const options = question.options ?? [];
    const pairs = question.pairs ?? [];

    /* -----------------------------------------------------
       SIMPLE MATCHING
    ----------------------------------------------------- */

    if (pairs.length === 0) {
      return (
        <QuestionWrapper>
          <QuestionText />

          <div className="grid gap-3 sm:grid-cols-2">
            {options.map(
              (option: string, index: number) => {
                const selected = value === option;

                return (
                  <button
                    key={`${option}-${index}`}
                    type="button"
                    onClick={() =>
                      onChange(option)
                    }
                    className="flex items-center gap-3 rounded-xl border-2 p-4 text-left font-semibold transition duration-200 hover:-translate-y-[1px]"
                    style={{
                      borderColor: selected
                        ? colors.red
                        : "#E4E4E4",

                      backgroundColor: selected
                        ? "#FFF5F5"
                        : "#FFFFFF",

                      color: selected
                        ? colors.redDark
                        : "#334155",

                      boxShadow: selected
                        ? "0 5px 15px rgba(198,40,40,0.08)"
                        : "none",
                    }}
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black"
                      style={{
                        backgroundColor: selected
                          ? colors.red
                          : "#F3F4F6",

                        color: selected
                          ? "#FFFFFF"
                          : colors.redDark,
                      }}
                    >
                      {option}
                    </span>

                    <span className="text-sm sm:text-base">
                      {option}
                    </span>
                  </button>
                );
              }
            )}
          </div>
        </QuestionWrapper>
      );
    }

    /* -----------------------------------------------------
       PAIR MATCHING
    ----------------------------------------------------- */

    return (
      <QuestionWrapper>
        <QuestionText />

        <div className="space-y-4">
          {pairs.map((pair, index: number) => {
            const pairObject = pair as {
              left?: string;
              right?: string;
              question?: string;
              answer?: string;
              id?: string;
            };

            const pairId =
              pairObject.id ??
              String(index);

            const currentAnswer =
              value
                .split("|")
                .find((item) =>
                  item.startsWith(
                    `${pairId}:`
                  )
                )
                ?.split(":")
                .slice(1)
                .join(":") ?? "";

            return (
              <div
                key={pairId}
                className="rounded-xl border bg-[#FFFDFD] p-4 sm:p-5"
                style={{
                  borderColor: "#E5E5E5",
                }}
              >
                {/* Pair header */}

                <div className="flex gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black text-white"
                    style={{
                      backgroundColor:
                        colors.redDark,
                    }}
                  >
                    {index + 1}
                  </div>

                  <div className="pt-1 text-sm font-bold leading-6 text-slate-700 sm:text-base">
                    {pairObject.left ??
                      pairObject.question ??
                      ""}
                  </div>
                </div>

                {/* Select */}

                <div className="relative mt-4">
                  <select
                    value={currentAnswer}
                    onChange={(event) => {
                      const items = value
                        ? value
                            .split("|")
                            .filter(Boolean)
                        : [];

                      const prefix =
                        `${pairId}:`;

                      const existingIndex =
                        items.findIndex(
                          (item) =>
                            item.startsWith(
                              prefix
                            )
                        );

                      const newItem =
                        `${prefix}${event.target.value}`;

                      if (
                        existingIndex === -1
                      ) {
                        items.push(newItem);
                      } else {
                        items[
                          existingIndex
                        ] = newItem;
                      }

                      onChange(
                        items.join("|")
                      );
                    }}
                    className="w-full appearance-none rounded-xl border-2 bg-white px-4 py-3.5 pr-10 text-sm font-bold text-slate-700 outline-none"
                    style={{
                      borderColor: currentAnswer
                        ? colors.red
                        : "#E1E1E1",
                    }}
                  >
                    <option value="">
                      Seçiniz
                    </option>

                    {options.map(
                      (
                        option: string,
                        optionIndex: number
                      ) => (
                        <option
                          key={`${option}-${optionIndex}`}
                          value={option}
                        >
                          {option}
                        </option>
                      )
                    )}
                  </select>

                  <div
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-black"
                    style={{
                      color: colors.red,
                    }}
                  >
                    ▼
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </QuestionWrapper>
    );
  }

  /* =====================================================
     ORDERING
  ====================================================== */

  if (question.type === "ordering") {
    const options = question.options ?? [];

    return (
      <QuestionWrapper>
        <QuestionText />

        <div className="space-y-2">
          {options.map(
            (
              option: string,
              index: number
            ) => (
              <div
                key={`${option}-${index}`}
                className="flex items-center gap-3 rounded-xl border bg-white p-4"
                style={{
                  borderColor: "#E4E4E4",
                }}
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black text-white"
                  style={{
                    backgroundColor:
                      colors.redDark,
                  }}
                >
                  {index + 1}
                </div>

                <div className="text-sm font-semibold text-slate-700 sm:text-base">
                  {option}
                </div>
              </div>
            )
          )}
        </div>

        <input
          type="text"
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          className="mt-4 w-full rounded-xl border-2 bg-white p-4 font-semibold text-slate-700 outline-none"
          style={{
            borderColor: "#E1E1E1",
          }}
          placeholder="Sıralamayı giriniz..."
        />
      </QuestionWrapper>
    );
  }

  /* =====================================================
     FALLBACK
  ====================================================== */

  return (
    <div
      className="relative overflow-hidden rounded-xl border p-5"
      style={{
        borderColor: "#F2B8B8",
        backgroundColor: "#FFF5F5",
      }}
    >
      <div
        className="text-sm font-black"
        style={{
          color: colors.redDark,
        }}
      >
        Bu soru tipi desteklenmiyor.
      </div>

      <div className="mt-1 text-sm text-slate-500">
        Soru tipi: {question.type}
      </div>
    </div>
  );
}