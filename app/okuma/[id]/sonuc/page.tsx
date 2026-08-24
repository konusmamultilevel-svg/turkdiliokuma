"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import OkumaLayout from "@/components/OkumaLayout";
import { test1 } from "@/data/okuma/test1";

const STORAGE_KEY = "okuma_test_1_answers";

const SCORE_TABLE: Record<number, number> = {
  0: 0,
  1: 20,
  2: 24,
  3: 27,
  4: 29,
  5: 32,
  6: 34,
  7: 36,
  8: 38,
  9: 39,
  10: 41,
  11: 42,
  12: 44,
  13: 45,
  14: 46,
  15: 48,
  16: 49,
  17: 51,
  18: 52,
  19: 54,
  20: 55,
  21: 57,
  22: 58,
  23: 60,
  24: 61,
  25: 63,
  26: 65,
  27: 66,
  28: 68,
  29: 70,
  30: 71,
  31: 73,
  32: 75,
  33: 75,
  34: 75,
  35: 75,
};

function getLevel(score: number) {
  if (score >= 65) {
    return {
      level: "C1",
      message: "C1 seviyesindesiniz.",
    };
  }

  if (score >= 51) {
    return {
      level: "B2",
      message: "B2 seviyesindesiniz.",
    };
  }

  if (score >= 38) {
    return {
      level: "B1",
      message: "B1 seviyesindesiniz.",
    };
  }

  return {
    level: "—",
    message: "Sertifika için yeterli puan alınamadı.",
  };
}

function normalizeAnswer(value: string | undefined) {
  return String(value ?? "")
    .trim()
    .toUpperCase();
}

export default function SonucPage() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);

  const [mounted, setMounted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>(
    {}
  );

  useEffect(() => {
    setMounted(true);

    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);

      if (!saved) {
        setAnswers({});
        return;
      }

      const parsed = JSON.parse(saved);

      if (
        parsed &&
        typeof parsed === "object" &&
        !Array.isArray(parsed)
      ) {
        setAnswers(parsed);
      } else {
        setAnswers({});
      }
    } catch {
      setAnswers({});
    }
  }, []);

  if (id !== 1) {
    return (
      <OkumaLayout>
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#e4ddd6] bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-black text-[#8f1717]">
            TEST BULUNAMADI
          </h1>
        </div>
      </OkumaLayout>
    );
  }

  const allQuestions = test1.bolumler.flatMap(
    (bolum) => bolum.questions
  );

  const correctCount = allQuestions.filter((question) => {
    const userAnswer = normalizeAnswer(
      answers[question.id]
    );

    const correctAnswer = normalizeAnswer(
      question.correctAnswer
    );

    return (
      userAnswer !== "" &&
      userAnswer === correctAnswer
    );
  }).length;

  const answeredCount = allQuestions.filter(
    (question) =>
      normalizeAnswer(answers[question.id]) !== ""
  ).length;

  const wrongQuestions = allQuestions.filter((question) => {
    const userAnswer = normalizeAnswer(
      answers[question.id]
    );

    const correctAnswer = normalizeAnswer(
      question.correctAnswer
    );

    return (
      userAnswer !== "" &&
      userAnswer !== correctAnswer
    );
  });

  const wrongCount = wrongQuestions.length;

  const emptyQuestions = allQuestions.filter(
    (question) =>
      normalizeAnswer(answers[question.id]) === ""
  );

  const emptyCount = emptyQuestions.length;

  const score = mounted
    ? SCORE_TABLE[Math.min(correctCount, 35)] ?? 0
    : 0;

  const result = getLevel(score);

  const passed = score >= 38;

  const restart = () => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Storage ishlamasa ham davom etadi.
    }

    router.push("/okuma/1/bolum/1");
  };

  return (
    <OkumaLayout>
      {/* =====================================================
          MAIN RESULT
      ====================================================== */}

      <main className="mx-auto max-w-4xl">
        {/* HEADER */}
        <section className="rounded-2xl border border-[#e4ddd6] bg-white px-5 py-5 shadow-sm">
          <div className="text-xs font-black tracking-[0.2em] text-[#a61b1b]">
            OKUMA TESTİ 1
          </div>

          <h1 className="mt-1 text-2xl font-black text-gray-900">
            Sınav Sonucu
          </h1>
        </section>

        {/* SCORE */}
        <section className="mt-5 rounded-2xl bg-[#8f1717] px-5 py-7 text-center text-white shadow-lg">
          <div className="text-xs font-bold tracking-widest text-white/70">
            TOPLAM PUAN
          </div>

          <div className="mt-1 text-6xl font-black leading-none">
            {score}
          </div>

          <div className="mt-2 text-sm font-bold text-white/70">
            / 75
          </div>

          <div className="mt-5 inline-flex rounded-xl bg-white px-6 py-2 text-2xl font-black text-[#8f1717]">
            {result.level}
          </div>

          <p className="mt-3 text-sm font-semibold text-white/85">
            {result.message}
          </p>

          {!passed && (
            <div className="mx-auto mt-4 max-w-md rounded-xl bg-white/10 px-4 py-3 text-sm font-bold">
              38 balldan kam ball to‘plagan talabgorlarga
              sertifikat berilmaydi.
            </div>
          )}
        </section>

        {/* STATISTICS */}
        <section className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
          <Stat
            value={correctCount}
            label="To‘g‘ri"
          />

          <Stat
            value={wrongCount}
            label="Noto‘g‘ri"
          />

          <Stat
            value={emptyCount}
            label="Bo‘sh"
          />

          <div className="col-span-3 sm:col-span-1">
            <Stat
              value={allQuestions.length}
              label="Jami"
            />
          </div>
        </section>

        {/* LEVEL INFORMATION */}
        <section className="mt-5 rounded-2xl border border-[#e4ddd6] bg-white p-5 shadow-sm">
          <div className="mb-3 text-sm font-black text-[#a61b1b]">
            CEFR NATIJASI
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
            <div
              className={`rounded-xl p-3 ${
                result.level === "B1"
                  ? "bg-[#a61b1b] text-white"
                  : "bg-[#f8f5f2] text-gray-500"
              }`}
            >
              <div className="text-lg font-black">
                B1
              </div>

              <div>38–50</div>
            </div>

            <div
              className={`rounded-xl p-3 ${
                result.level === "B2"
                  ? "bg-[#a61b1b] text-white"
                  : "bg-[#f8f5f2] text-gray-500"
              }`}
            >
              <div className="text-lg font-black">
                B2
              </div>

              <div>51–64</div>
            </div>

            <div
              className={`rounded-xl p-3 ${
                result.level === "C1"
                  ? "bg-[#a61b1b] text-white"
                  : "bg-[#f8f5f2] text-gray-500"
              }`}
            >
              <div className="text-lg font-black">
                C1
              </div>

              <div>65–75</div>
            </div>
          </div>
        </section>

        {/* WRONG ANSWERS */}
        {mounted && wrongQuestions.length > 0 && (
          <section className="mt-5 rounded-2xl border border-[#e4ddd6] bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-black text-gray-900">
                Xato javoblar
              </h2>

              <span className="rounded-full bg-[#a61b1b]/10 px-3 py-1 text-xs font-black text-[#a61b1b]">
                {wrongQuestions.length} ta
              </span>
            </div>

            <div className="space-y-3">
              {wrongQuestions.map((question) => (
                <div
                  key={question.id}
                  className="rounded-xl border border-gray-200 bg-[#f8f5f2] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-black">
                      SAVOL {question.number}
                    </span>

                    <span className="rounded-lg bg-red-100 px-2.5 py-1 text-xs font-black text-red-700">
                      XATO
                    </span>
                  </div>

                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-lg bg-white p-3">
                      <div className="text-[10px] font-black uppercase text-gray-400">
                        Sizning javobingiz
                      </div>

                      <div className="mt-1 font-black text-red-600">
                        {answers[question.id] || "—"}
                      </div>
                    </div>

                    <div className="rounded-lg bg-white p-3">
                      <div className="text-[10px] font-black uppercase text-gray-400">
                        To‘g‘ri javob
                      </div>

                      <div className="mt-1 font-black text-green-600">
                        {question.correctAnswer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EMPTY ANSWERS */}
        {mounted && emptyQuestions.length > 0 && (
          <section className="mt-5 rounded-2xl border border-[#e4ddd6] bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-black">
                Javob berilmagan savollar
              </h2>

              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-black text-gray-500">
                {emptyQuestions.length} ta
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {emptyQuestions.map((question) => (
                <span
                  key={question.id}
                  className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-black text-gray-600"
                >
                  {question.number}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* PERFECT RESULT */}
        {mounted &&
          wrongQuestions.length === 0 &&
          emptyQuestions.length === 0 && (
            <section className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-5 text-center">
              <div className="text-lg font-black text-green-700">
                🎉 Barcha savollarga to‘g‘ri javob berdingiz!
              </div>

              <p className="mt-1 text-sm font-semibold text-green-600">
                Natijangiz: {score} ball — {result.level}
              </p>
            </section>
          )}

        {/* BUTTONS */}
        <section className="mt-5 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => router.push("/okuma")}
            className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-black text-gray-700 transition hover:bg-gray-50"
          >
            ← TESTLARGA QAYTISH
          </button>

          <button
            type="button"
            onClick={restart}
            className="rounded-xl bg-[#a61b1b] px-5 py-3 font-black text-white shadow-md transition hover:bg-[#8f1717]"
          >
            TESTNI QAYTA ISHLASH
          </button>
        </section>
      </main>

     
    </OkumaLayout>
  );
}

function Stat({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-[#e4ddd6] bg-white p-4 text-center shadow-sm">
      <div className="text-2xl font-black text-[#a61b1b]">
        {value}
      </div>

      <div className="mt-1 text-xs font-bold text-gray-500">
        {label}
      </div>
    </div>
  );
}