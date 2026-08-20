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
  if (question.type === "drag-drop") {
    return null;
  }

  return (
    <div className="rounded-2xl border border-[#e1dbd4] bg-white p-5 shadow-sm">
      <div className="flex gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#a61b1b] text-sm font-black text-white">
          {question.number}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="mb-5 text-base font-bold leading-7 text-gray-900">
            {question.text}
          </h3>

          {/* MULTIPLE CHOICE */}
          {question.type === "multiple-choice" &&
            question.options && (
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const letter = String.fromCharCode(65 + index);
                  const selected = value === letter;

                  return (
                    <button
                      type="button"
                      key={`${question.id}-${letter}`}
                      onClick={() => onChange(letter)}
                      className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition ${
                        selected
                          ? "border-[#a61b1b] bg-[#f8eeeb] ring-1 ring-[#a61b1b]"
                          : "border-gray-200 bg-white hover:border-[#c68b8b] hover:bg-[#fcfaf9]"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                          selected
                            ? "bg-[#a61b1b] text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {letter}
                      </span>

                      <span className="pt-0.5 text-sm font-medium text-gray-700">
                        {option.replace(/^[A-D]\)\s*/, "")}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

          {/* TRUE / FALSE / UNKNOWN */}
          {question.type === "true-false-unknown" &&
            question.options && (
              <div className="grid gap-3 sm:grid-cols-3">
                {question.options.map((option) => {
                  const selected = value === option;

                  return (
                    <button
                      type="button"
                      key={`${question.id}-${option}`}
                      onClick={() => onChange(option)}
                      className={`rounded-xl border p-4 text-center text-sm font-black transition ${
                        selected
                          ? "border-[#a61b1b] bg-[#a61b1b] text-white"
                          : "border-gray-200 bg-white text-gray-700 hover:border-[#a61b1b]"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            )}

          {/* MATCHING */}
          {question.type === "matching" &&
            question.options && (
              <div>
                <select
                  value={value}
                  onChange={(event) => onChange(event.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 font-bold outline-none transition focus:border-[#a61b1b]"
                >
                  <option value="">Seçiniz...</option>

                  {question.options.map((option, index) => (
                    <option
                      key={`${question.id}-option-${index}`}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}