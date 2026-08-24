
"use client";

import React from "react";
import type { Question, DragDropContext } from "@/types";

interface Props {
  context: DragDropContext;
  questions: Question[];
  answers: Record<string, string>;
  handleAnswer: (questionId: string, value: string) => void;
}

export default function DragDropEngine({
  context,
  questions,
  answers,
  handleAnswer,
}: Props) {
  const getQuestion = (number: number) =>
    questions.find((q) => q.number === number);

  const parts = context.textWithBlanks.split(/(\[S\d+\])/g);

  return (
    <div className="bg-white">
      <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
        <div className="text-[10px] font-black tracking-widest text-[#8f1717]">
          SORULAR 1–6
        </div>

        <h2 className="mt-1 text-lg font-black">
          Uygun sözcüğü seçiniz
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          Her boşluk için listeden bir sözcük seçebilirsiniz.
          Seçiminizi daha sonra değiştirebilirsiniz.
        </p>
      </div>

      <div className="px-4 py-5 sm:px-6">
       <div className="rounded-lg border border-gray-200 bg-[#fffdfa] p-4 sm:p-6">
  <div className="font-serif text-[15px] leading-9 text-gray-800 sm:text-base sm:leading-9">
    {parts.map((part, index) => {
      const match = part.match(/^\[S(\d+)\]$/);

              if (!match) {
                return (
                  <React.Fragment key={index}>
                    {part}
                  </React.Fragment>
                );
              }

              const number = Number(match[1]);
              const question = getQuestion(number);

              if (!question) return null;

              const selected = answers[question.id] || "";

              return (
                <select
                  key={index}
                  value={selected}
                  onChange={(e) =>
                    handleAnswer(question.id, e.target.value)
                  }
                  className="mx-1 inline-block h-9 max-w-[150px] rounded-md border border-[#c9b3b3] bg-white px-2 text-xs font-bold text-[#8f1717] outline-none focus:border-[#8f1717] focus:ring-2 focus:ring-[#8f1717]/10 sm:h-9 sm:min-w-[155px] sm:text-sm"
                >
                  <option value="">
                    S{number} seçiniz
                  </option>

                  {context.words.map((word) => (
                    <option key={word.id} value={word.id}>
                      {word.id} — {word.word}
                    </option>
                  ))}
                </select>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
