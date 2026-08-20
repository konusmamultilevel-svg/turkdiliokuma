"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import OkumaLayout from "@/components/OkumaLayout";
import QuestionRenderer from "@/components/QuestionRenderer";
import DragDropEngine from "@/components/DragDropEngine";
import { test1 } from "@/data/okuma/test1";

const STORAGE_KEY = "okuma_test_1_answers";

export default function BolumPage() {
  const params = useParams();
  const router = useRouter();

  const bolumId = Number(params.bolumId);

  const bolum = test1.bolumler.find(
    (item) => item.bolumId === bolumId
  );

  const [answers, setAnswers] = useState<Record<string, string>>(
    {}
  );

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    try {
      setAnswers(JSON.parse(saved));
    } catch {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((previous) => {
      const updated = {
        ...previous,
        [questionId]: value,
      };

      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  const answeredCount = useMemo(() => {
    return Object.keys(answers).length;
  }, [answers]);

  if (!bolum) {
    return (
      <OkumaLayout>
        <div className="rounded-2xl bg-white p-10 text-center">
          <h1 className="text-3xl font-black">
            BÖLÜM BULUNAMADI
          </h1>
        </div>
      </OkumaLayout>
    );
  }

  const isLast = bolumId === 5;
  const isFirst = bolumId === 1;

  const next = () => {
    if (isLast) {
      router.push("/okuma/1/sonuc");
      return;
    }

    router.push(`/okuma/1/bolum/${bolumId + 1}`);
  };

  const previous = () => {
    if (!isFirst) {
      router.push(`/okuma/1/bolum/${bolumId - 1}`);
    }
  };

  return (
    <OkumaLayout>
      {/* TOP */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-black tracking-widest text-[#a61b1b]">
            OKUMA SINAVI 1
          </div>

          <h1 className="mt-1 text-3xl font-black">
            {bolum.title}
          </h1>
        </div>

        <div className="rounded-2xl border border-[#e2dbd4] bg-white px-5 py-3 shadow-sm">
          <div className="text-xs font-bold text-gray-500">
            BÖLÜM
          </div>

          <div className="text-xl font-black text-[#a61b1b]">
            {bolumId} / 5
          </div>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="mb-6 rounded-2xl border border-[#e2dbd4] bg-white p-4">
        <div className="mb-2 flex justify-between text-xs font-bold text-gray-500">
          <span>CEVAPLANAN</span>
          <span>{answeredCount} / 35</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-[#a61b1b] transition-all"
            style={{
              width: `${Math.min(
                100,
                (answeredCount / 35) * 100
              )}%`,
            }}
          />
        </div>
      </div>

      {/* INSTRUCTION */}
      {bolum.instruction && (
        <div className="mb-6 rounded-2xl border-l-4 border-[#a61b1b] bg-white p-5 shadow-sm">
          <div className="text-sm font-black text-[#a61b1b]">
            TALİMAT
          </div>

          <p className="mt-2 leading-7 text-gray-700">
            {bolum.instruction}
          </p>
        </div>
      )}

      {/* SECTION 1 */}
      {bolum.dragDropContext && (
        <DragDropEngine
          context={bolum.dragDropContext}
          questions={bolum.questions}
          answers={answers}
          handleAnswer={handleAnswer}
        />
      )}

      {/* READING TEXT */}
      {bolum.readingText && (
        <div className="mb-8 rounded-2xl border border-[#e1dbd4] bg-white p-6 shadow-sm md:p-8">
          <div className="whitespace-pre-line font-serif text-[17px] leading-9 text-gray-800">
            {bolum.readingText}
          </div>
        </div>
      )}

      {/* QUESTIONS */}
      <div className="space-y-5">
        {bolum.questions.map((question) => (
          <QuestionRenderer
            key={question.id}
            question={question}
            value={answers[question.id] || ""}
            onChange={(value) =>
              handleAnswer(question.id, value)
            }
          />
        ))}
      </div>

      {/* NAVIGATION */}
      <div className="mt-8 flex items-center justify-between border-t border-[#ddd5cd] pt-6">
        {isFirst ? (
          <button
            onClick={() => router.push("/okuma/1")}
            className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-bold text-gray-600 hover:bg-gray-50"
          >
            ← TEST BİLGİLERİ
          </button>
        ) : (
          <button
            onClick={previous}
            className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-bold text-gray-600 hover:bg-gray-50"
          >
            ← ÖNCEKİ
          </button>
        )}

        <button
          onClick={next}
          className="rounded-xl bg-[#a61b1b] px-7 py-3 font-black text-white shadow-md hover:bg-[#8f1717]"
        >
          {isLast ? "SINAVI BİTİR" : "SONRAKİ BÖLÜM →"}
        </button>
      </div>
    </OkumaLayout>
  );
}