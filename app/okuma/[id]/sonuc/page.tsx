"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OkumaLayout from "@/components/OkumaLayout";
import { test1 } from "@/data/okuma/test1";

const SCORE_TABLE = [
  0, 20, 24, 27, 29, 32, 34, 36, 38, 39,
  41, 42, 43, 44, 46, 47, 49, 51, 52, 54,
  55, 57, 58, 60, 61, 63, 65, 66, 68, 70,
  71, 73, 75, 75, 75, 75,
];

function getCEFRLevel(score: number) {
  if (score >= 65) return "C1";
  if (score >= 51) return "B2";
  if (score >= 38) return "B1";
  return "Sertifika Yok";
}

export default function SonucPage() {
  const router = useRouter();

  const [result, setResult] = useState<{
    correct: number;
    incorrect: number;
    blank: number;
    score: number;
    cefr: string;
  } | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem(
      "okuma_test_1_answers"
    );

    const answers: Record<string, string> = saved
      ? JSON.parse(saved)
      : {};

    const questions = test1.bolumler.flatMap(
      (bolum) => bolum.questions
    );

    let correct = 0;
    let blank = 0;

    questions.forEach((question) => {
      const answer = answers[question.id];

      if (!answer) {
        blank++;
      } else if (answer === question.correctAnswer) {
        correct++;
      }
    });

    const incorrect =
      questions.length - correct - blank;

    const index = Math.min(
      correct,
      SCORE_TABLE.length - 1
    );

    const score = SCORE_TABLE[index];

    setResult({
      correct,
      incorrect,
      blank,
      score,
      cefr: getCEFRLevel(score),
    });
  }, []);

  if (!result) {
    return (
      <OkumaLayout>
        <div className="py-20 text-center font-bold">
          Sonuçlar hazırlanıyor...
        </div>
      </OkumaLayout>
    );
  }

  const total = 35;

  const percentage = Math.round(
    (result.correct / total) * 100
  );

  const restart = () => {
    sessionStorage.removeItem(
      "okuma_test_1_answers"
    );

    router.push("/okuma/1/bolum/1");
  };

  return (
    <OkumaLayout>
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <div className="text-sm font-black tracking-[0.25em] text-[#a61b1b]">
            SINAV TAMAMLANDI
          </div>

          <h1 className="mt-3 text-4xl font-black">
            SONUÇLARINIZ
          </h1>
        </div>

        <div className="mt-8 rounded-3xl bg-[#8f1717] p-8 text-center text-white shadow-xl">
          <div className="text-sm font-bold uppercase tracking-widest text-white/70">
            CEFR SEVİYESİ
          </div>

          <div className="mt-3 text-7xl font-black">
            {result.cefr}
          </div>

          <div className="mt-4 text-lg">
            {result.score} puan • %{percentage} başarı
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat
            value={total}
            label="Toplam"
          />

          <Stat
            value={result.correct}
            label="Doğru"
          />

          <Stat
            value={result.incorrect}
            label="Yanlış"
          />

          <Stat
            value={result.blank}
            label="Boş"
          />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => router.push("/okuma")}
            className="flex-1 rounded-xl border-2 border-[#a61b1b] bg-white py-4 font-black text-[#a61b1b]"
          >
            ← TESTLERE DÖN
          </button>

          <button
            onClick={restart}
            className="flex-1 rounded-xl bg-[#a61b1b] py-4 font-black text-white"
          >
            TESTİ TEKRARLA ↺
          </button>
        </div>
      </div>
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
    <div className="rounded-2xl border border-[#e2dbd4] bg-white p-5 text-center shadow-sm">
      <div className="text-3xl font-black text-[#a61b1b]">
        {value}
      </div>

      <div className="mt-1 text-xs font-black uppercase tracking-wider text-gray-500">
        {label}
      </div>
    </div>
  );
}