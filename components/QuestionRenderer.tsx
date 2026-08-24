"use client";

import React from "react";
import type { Question } from "@/data/okuma/test1";

type Props = {
  question: Question;
  value: string;
  onChange: (value: string) => void;
};

export default function QuestionRenderer({
  question,
  value,
  onChange,
}: Props) {
  /* =====================================================
     DRAG DROP
  ====================================================== */

  if (question.type === "drag-drop") {
    return null;
  }

  /* =====================================================
     COMMON QUESTION HEADER
  ====================================================== */

  const QuestionHeader = () => {
    return (
      <div className="flex items-start gap-3">
        {/* QUESTION NUMBER */}
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#8f1717] text-sm font-black text-white">
          {question.number}
        </div>

        {/* QUESTION TEXT */}
        <div className="min-w-0 flex-1">
          <div className="text-base font-bold leading-7 text-gray-900 sm:text-[17px]">
            {question.text}
          </div>
        </div>
      </div>
    );
  };

  /* =====================================================
     COMMON QUESTION WRAPPER
  ====================================================== */

  const QuestionWrapper = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <div className="mb-6 w-full rounded-xl border border-gray-200 bg-white px-4 py-5 shadow-sm sm:px-6 sm:py-6">
        {children}
      </div>
    );
  };

  /* =====================================================
     MULTIPLE CHOICE — 21–24
  ====================================================== */

  if (
    question.type === "multiple-choice" &&
    question.options
  ) {
    return (
      <QuestionWrapper>
        <QuestionHeader />

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {question.options.map((option, index) => {
            const letter = String.fromCharCode(65 + index);
            const selected = value === letter;

            const optionText = option.replace(
              /^[A-D]\)\s*/,
              ""
            );

            return (
              <button
                key={`${question.id}-${letter}`}
                type="button"
                onClick={() => onChange(letter)}
                className="flex min-h-[64px] w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-all duration-200 hover:border-[#b88a8a] hover:bg-[#fffafa]"
                style={{
                  borderColor: selected
                    ? "#8F1717"
                    : "#E2E2E2",

                  backgroundColor: selected
                    ? "#FFF5F5"
                    : "#FFFFFF",

                  boxShadow: selected
                    ? "0 4px 12px rgba(143,23,23,0.08)"
                    : "none",
                }}
              >
                {/* LETTER */}
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-black"
                  style={{
                    backgroundColor: selected
                      ? "#8F1717"
                      : "#F2F2F2",

                    color: selected
                      ? "#FFFFFF"
                      : "#666666",
                  }}
                >
                  {letter}
                </span>

                {/* OPTION TEXT */}
                <span
                  className="min-w-0 flex-1"
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    fontWeight: selected ? 700 : 500,
                    color: selected
                      ? "#8F1717"
                      : "#374151",
                  }}
                >
                  {optionText}
                </span>

                {/* RADIO */}
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                  style={{
                    borderColor: selected
                      ? "#8F1717"
                      : "#D1D5DB",
                  }}
                >
                  {selected && (
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor: "#8F1717",
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
     TRUE / FALSE / UNKNOWN — 25–29
     DOIM GORIZONTAL
  ====================================================== */

  if (
    question.type === "true-false-unknown" &&
    question.options
  ) {
    return (
      <QuestionWrapper>
        <QuestionHeader />

        {/* DOĞRU / YANLIŞ / VERİLMEMİŞ */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {question.options.map((option, index) => {
            const selected = value === option;

            const letter = String.fromCharCode(65 + index);

            return (
              <button
                key={`${question.id}-${option}`}
                type="button"
                onClick={() => onChange(option)}
                className="flex min-h-[58px] w-full min-w-0 items-center gap-2 rounded-xl border-2 px-3 py-3 text-left transition-all duration-200 hover:border-[#b88a8a] hover:bg-[#fffafa]"
                style={{
                  borderColor: selected
                    ? "#8F1717"
                    : "#E2E2E2",

                  backgroundColor: selected
                    ? "#FFF5F5"
                    : "#FFFFFF",

                  boxShadow: selected
                    ? "0 4px 12px rgba(143,23,23,0.08)"
                    : "none",
                }}
              >
                {/* A / B / C */}
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black"
                  style={{
                    backgroundColor: selected
                      ? "#8F1717"
                      : "#F2F2F2",

                    color: selected
                      ? "#FFFFFF"
                      : "#666666",
                  }}
                >
                  {letter}
                </span>

                {/* TEXT */}
                <span
                  className="min-w-0 flex-1 truncate"
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.4",
                    fontWeight: selected ? 700 : 500,
                    color: selected
                      ? "#8F1717"
                      : "#374151",
                  }}
                >
                  {option}
                </span>

                {/* RADIO */}
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                  style={{
                    borderColor: selected
                      ? "#8F1717"
                      : "#D1D5DB",
                  }}
                >
                  {selected && (
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor: "#8F1717",
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
     MATCHING
  ====================================================== */

  if (
    question.type === "matching" &&
    question.options
  ) {
    return (
      <QuestionWrapper>
        <QuestionHeader />

        <div className="mt-5 max-w-sm">
          <select
            value={value}
            onChange={(event) =>
              onChange(event.target.value)
            }
            className="h-11 w-full rounded-xl border-2 border-gray-200 bg-white px-4 text-sm font-bold text-gray-700 outline-none transition focus:border-[#8f1717] focus:ring-2 focus:ring-[#8f1717]/10"
          >
            <option value="">
              Seçiniz...
            </option>

            {question.options.map((option) => (
              <option
                key={`${question.id}-${option}`}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      </QuestionWrapper>
    );
  }

  /* =====================================================
     FALLBACK
  ====================================================== */

  return (
    <QuestionWrapper>
      <QuestionHeader />

      <div className="mt-3 text-sm text-gray-500">
        Soru tipi: {question.type}
      </div>
    </QuestionWrapper>
  );
}