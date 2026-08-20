"use client";

import React, { useState } from "react";
import type {
  DragDropContext,
  Question,
} from "@/data/okuma/test1";

type Props = {
  context: DragDropContext;
  questions: Question[];
  answers: Record<string, string>;
  handleAnswer: (questionId: string, value: string) => void;
};

export default function DragDropEngine({
  context,
  questions,
  answers,
  handleAnswer,
}: Props) {
  const [draggedWord, setDraggedWord] = useState<string | null>(null);

  const getQuestion = (number: number) =>
    questions.find((q) => q.number === number);

  const getWord = (id: string) =>
    context.words.find((word) => word.id === id);

  const handleDrop = (questionNumber: number) => {
    if (!draggedWord) return;

    const question = getQuestion(questionNumber);

    if (question) {
      handleAnswer(question.id, draggedWord);
    }

    setDraggedWord(null);
  };

  const parts = context.textWithBlanks.split(/(\[S\d+\])/g);

  return (
    <div className="space-y-7">
      {/* WORD BANK */}
      <div className="rounded-2xl border border-[#dfd6cd] bg-[#fbf9f7] p-5">
        <div className="mb-4">
          <h3 className="text-lg font-black text-[#8f1717]">
            SÖZCÜKLER
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Sözcüğü sürükleyerek metindeki uygun boşluğa bırakınız.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {context.words.map((word) => {
            const isUsed = Object.values(answers).includes(word.id);

            return (
              <div
                key={word.id}
                draggable
                onDragStart={() => setDraggedWord(word.id)}
                onDragEnd={() => setDraggedWord(null)}
                className={`cursor-grab rounded-xl border bg-white p-3 text-center font-bold shadow-sm transition hover:-translate-y-0.5 hover:border-[#a61b1b] active:cursor-grabbing ${
                  isUsed
                    ? "border-green-300 bg-green-50"
                    : "border-[#d8d0c8]"
                }`}
              >
                <span className="mr-1 text-[#a61b1b]">
                  {word.id})
                </span>
                {word.word}

                {isUsed && (
                  <div className="mt-1 text-[10px] font-bold text-green-600">
                    KULLANILDI
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* READING */}
      <div className="rounded-2xl border border-[#e1dbd4] bg-white p-6 shadow-sm md:p-8">
        <div className="prose max-w-none whitespace-pre-line font-serif text-[17px] leading-9 text-gray-800">
          {parts.map((part, index) => {
            const match = part.match(/^\[S(\d+)\]$/);

            if (!match) {
              return <span key={`text-${index}`}>{part}</span>;
            }

            const number = Number(match[1]);
            const question = getQuestion(number);

            if (!question) {
              return null;
            }

            const answerId = answers[question.id];
            const answerWord = answerId
              ? getWord(answerId)
              : undefined;

            return (
              <span
                key={`blank-${number}`}
                onDragOver={(event) => event.preventDefault()}
                onDrop={() => handleDrop(number)}
                className={`mx-1 inline-flex min-w-[125px] translate-y-1 items-center justify-center rounded-lg border-2 border-dashed px-3 py-1 font-sans text-sm font-black transition ${
                  answerWord
                    ? "border-[#a61b1b] bg-[#a61b1b] text-white"
                    : "border-[#a61b1b] bg-[#fff8f6] text-[#a61b1b]"
                }`}
              >
                {answerWord ? answerWord.word : "BURAYA BIRAK"}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}