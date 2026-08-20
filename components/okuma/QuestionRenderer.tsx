"use client";

import { Question } from "@/data/okumaData";
import { useState } from "react";

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
  const [matching, setMatching] = useState<Record<string, string>>(() => {
    try {
      return value ? JSON.parse(value) : {};
    } catch {
      return {};
    }
  });

  const [ordering, setOrdering] = useState<string[]>(
    question.orderingItems ?? []
  );

  if (question.type === "drag-drop") {
    return null;
  }

  const updateMatching = (left: string, right: string) => {
    const next = { ...matching, [left]: right };
    setMatching(next);
    onChange(JSON.stringify(next));
  };

  const moveOrderingItem = (index: number, direction: -1 | 1) => {
    const next = [...ordering];
    const target = index + direction;

    if (target < 0 || target >= next.length) return;

    [next[index], next[target]] = [next[target], next[index]];

    setOrdering(next);
    onChange(JSON.stringify(next));
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-[#E4DBD2] bg-white shadow-[0_8px_30px_rgba(70,45,30,0.05)]">
      <div className="border-b border-[#EEE7E0] bg-[#FCFAF8] px-5 py-4">
        <div className="flex items-start gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#A61B1B] text-sm font-black text-white">
            {question.number}
          </div>

          <p className="pt-1 text-[15px] font-semibold leading-6 text-[#322C28]">
            {question.text}
          </p>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {question.type === "multiple-choice" && question.options && (
          <div className="space-y-3">
            {question.options.map((option) => {
              const letter = option.charAt(0);
              const selected = value === letter;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => onChange(letter)}
                  className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition ${
                    selected
                      ? "border-[#A61B1B] bg-[#F7ECE9] shadow-sm"
                      : "border-[#E5DDD5] bg-white hover:border-[#C99D9D] hover:bg-[#FCF8F6]"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                      selected
                        ? "border-[#A61B1B] bg-[#A61B1B] text-white"
                        : "border-[#CFC5BC] text-[#665C55]"
                    }`}
                  >
                    {letter}
                  </span>

                  <span className="pt-0.5 text-[15px] leading-6 text-[#403934]">
                    {option.slice(2)}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {question.type === "true-false-unknown" && question.options && (
          <div className="grid gap-3 sm:grid-cols-3">
            {question.options.map((option) => {
              const selected = value === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => onChange(option)}
                  className={`min-h-14 rounded-xl border px-4 font-bold transition ${
                    selected
                      ? "border-[#A61B1B] bg-[#A61B1B] text-white"
                      : "border-[#E5DDD5] bg-white text-[#574E47] hover:border-[#A61B1B]"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        )}

        {question.type === "matching" && question.pairs && (
          <div className="space-y-4">
            {question.pairs.map((pair) => (
              <div
                key={pair.left}
                className="grid gap-3 md:grid-cols-[1fr_1fr] md:items-center"
              >
                <div className="rounded-xl bg-[#F8F5F2] p-4 font-semibold text-[#413A35]">
                  {pair.left}
                </div>

                <select
                  value={matching[pair.left] ?? ""}
                  onChange={(e) =>
                    updateMatching(pair.left, e.target.value)
                  }
                  className="min-h-12 rounded-xl border border-[#DDD3CA] bg-white px-4 outline-none focus:border-[#A61B1B]"
                >
                  <option value="">Seçiniz...</option>

                  {question.pairs.map((option) => (
                    <option
                      key={option.right}
                      value={option.right}
                    >
                      {option.right}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}

        {question.type === "ordering" && (
          <div className="space-y-3">
            {ordering.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-[#E3DAD2] bg-[#FCFAF8] p-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0E8E1] text-sm font-black text-[#7B2929]">
                  {index + 1}
                </span>

                <span className="flex-1 text-sm leading-5 text-[#403934]">
                  {item}
                </span>

                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => moveOrderingItem(index, -1)}
                    className="h-9 w-9 rounded-lg border border-[#DED4CB] bg-white font-bold hover:bg-[#F3ECE6]"
                    aria-label="Yukarı"
                  >
                    ↑
                  </button>

                  <button
                    type="button"
                    onClick={() => moveOrderingItem(index, 1)}
                    className="h-9 w-9 rounded-lg border border-[#DED4CB] bg-white font-bold hover:bg-[#F3ECE6]"
                    aria-label="Aşağı"
                  >
                    ↓
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}