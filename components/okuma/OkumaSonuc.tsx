"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import OkumaLayout from "@/components/OkumaLayout";
import { test1 } from "@/data/okuma/test1";
import { supabase } from "@/lib/supabase";

type WrongAnswer = {
  number: number;
  questionId: string;
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
};

type Result = {
  total: number;
  correct: number;
  incorrect: number;
  blank: number;
  percentage: number;
  score: number;
  cefr: string;
  wrongAnswers: WrongAnswer[];
};

const SCORE_TABLE = [
  0, 20, 24, 27, 29, 32, 34, 36, 38, 39,
  41, 42, 43, 44, 46, 47, 49, 51, 52, 54,
  55, 57, 58, 60, 61, 63, 65, 66, 68, 70,
  71, 73, 75, 75, 75, 75,
];

function getScore(correct: number): number {
  const index = Math.min(
    Math.max(correct, 0),
    SCORE_TABLE.length - 1
  );

  return SCORE_TABLE[index];
}

function getCEFRLevel(score: number): string {
  if (score >= 65) return "C1";
  if (score >= 51) return "B2";
  if (score >= 38) return "B1";

  return "Sertifika Yok";
}

/* =========================================================
   ANSWER FORMATINI O'QISH
========================================================= */

function formatAnswer(
  question: any,
  answer: string
): string {
  if (!answer) {
    return "Cevaplanmadı";
  }

  /* Matching */
  if (question.type === "matching") {
    if (!question.matchingItems) {
      return answer;
    }

    const pairs = answer
      .split("|")
      .filter(Boolean);

    const selected: Record<string, string> = {};

    pairs.forEach((pair: string) => {
      const [key, value] = pair.split(":");

      if (key && value) {
        selected[key] = value;
      }
    });

    const result = question.matchingItems
      .map((item: any) => {
        const selectedId = selected[item.id];

        if (!selectedId) {
          return null;
        }

        const option = question.matchingOptions?.find(
          (opt: any) =>
            opt.id === selectedId
        );

        return option?.text ?? selectedId;
      })
      .filter(Boolean);

    return result.length > 0
      ? result.join(", ")
      : answer;
  }

  /* Ordering */
  if (question.type === "ordering") {
    if (!question.orderingItems) {
      return answer;
    }

    const ids = answer
      .split(",")
      .filter(Boolean);

    const result = ids
      .map((id: string) => {
        const item =
          question.orderingItems?.find(
            (item: any) =>
              item.id === id
          );

        return item?.text ?? id;
      });

    return result.join(" → ");
  }

  /* Multiple choice / True False / Drag Drop */
  const option =
    question.options?.find(
      (item: any) =>
        item.id === answer ||
        item.value === answer
    );

  if (option) {
    return (
      option.text ??
      option.label ??
      option.value ??
      option.id
    );
  }

  return answer;
}

/* =========================================================
   QUESTION TEXT
========================================================= */

function getQuestionText(
  question: any,
  number: number
): string {
  if (question.question) {
    return question.question;
  }

  if (question.text) {
    return question.text;
  }

  if (question.prompt) {
    return question.prompt;
  }

  return `Soru ${number}`;
}

/* =========================================================
   CHECKER
========================================================= */

function checkQuestion(
  question: any,
  answer: string
): boolean {
  if (
    question.type === "multiple-choice" ||
    question.type === "true-false-unknown" ||
    question.type === "drag-drop"
  ) {
    return (
      answer ===
      question.correctAnswer
    );
  }

  if (question.type === "matching") {
    if (!question.matchingItems) {
      return false;
    }

    const pairs = answer
      .split("|")
      .filter(Boolean);

    const selected: Record<
      string,
      string
    > = {};

    pairs.forEach((pair: string) => {
      const [key, value] =
        pair.split(":");

      if (key && value) {
        selected[key] = value;
      }
    });

    return question.matchingItems.every(
      (item: any) =>
        selected[item.id] ===
        item.answerId
    );
  }

  if (question.type === "ordering") {
    if (!question.correctOrder) {
      return false;
    }

    const submitted = answer
      .split(",")
      .filter(Boolean);

    return (
      JSON.stringify(submitted) ===
      JSON.stringify(
        question.correctOrder
      )
    );
  }

  return false;
}

/* =========================================================
   RESULT PAGE
========================================================= */

export default function OkumaSonuc() {
  const router = useRouter();

  const [result, setResult] =
    useState<Result | null>(null);

  useEffect(() => {
  const loadResult = async () => {
    try {
      const saved =
        sessionStorage.getItem(
          "okuma_test_1_answers"
        );

      const answers: Record<
        string,
        string
      > = saved
        ? JSON.parse(saved)
        : {};

      const questions =
        test1.bolumler.flatMap(
          (bolum) =>
            bolum.questions
        );

      let correct = 0;
      let blank = 0;

      const wrongAnswers: WrongAnswer[] =
        [];

      questions.forEach(
        (question: any, index: number) => {
          const answer =
            answers[question.id];

          /* BOŞ */
          if (
            !answer ||
            answer.trim() === ""
          ) {
            blank++;
            return;
          }

          /* TO'G'RI */
          if (
            checkQuestion(
              question,
              answer
            )
          ) {
            correct++;
            return;
          }

          /* XATO */
          wrongAnswers.push({
            number: index + 1,
            questionId:
              question.id,
            questionText:
              getQuestionText(
                question,
                index + 1
              ),
            userAnswer:
              formatAnswer(
                question,
                answer
              ),
            correctAnswer:
              formatAnswer(
                question,
                question.correctAnswer ??
                  ""
              ),
          });
        }
      );

      const total =
        questions.length;

      const incorrect =
        total -
        correct -
        blank;

      const percentage =
        total > 0
          ? Math.round(
              (correct / total) * 100
            )
          : 0;

      const score =
        getScore(correct);

      const cefr =
        getCEFRLevel(score);
const visitorId =
  localStorage.getItem("turkdili_visitor_id") ||
  crypto.randomUUID();

localStorage.setItem(
  "turkdili_visitor_id",
  visitorId
);

const { error } = await supabase
  .from("test_attempts")
  .insert({
    visitor_id: visitorId,
    test_id: "1",
  });

if (error) {
  console.error(
    "TEST ATTEMPT SAQLASH XATOSI:",
    JSON.stringify(error, null, 2)
  );
} else {
  console.log("TEST ATTEMPT SAQLANDI");

  window.dispatchEvent(
    new Event("test-attempt-saved")
  );
}
      setResult({
        total,
        correct,
        incorrect,
        blank,
        percentage,
        score,
        cefr,
        wrongAnswers,
      });
    } catch {
      const total =
        test1.bolumler.reduce(
          (sum, bolum) =>
            sum +
            bolum.questions.length,
          0
        );

      setResult({
        total,
        correct: 0,
        incorrect: 0,
        blank: total,
        percentage: 0,
        score: 0,
        cefr: "Sertifika Yok",
        wrongAnswers: [],
      });
    }
  }, []);

  /* =========================================================
     RESTART
  ========================================================= */

  const restart = () => {
  sessionStorage.removeItem("okuma_test_1_answers");
  sessionStorage.removeItem("okuma_answers_test_1");

  router.push("/okuma/1/bolum/1");
};

  /* =========================================================
     LOADING
  ========================================================= */

  if (!result) {
    return (
      <OkumaLayout>
        <div className="py-20 text-center">
          <div className="text-2xl font-black text-[#a61b1b]">
            SONUÇLAR HAZIRLANIYOR...
          </div>

          <p className="mt-2 text-gray-500">
            Cevaplarınız değerlendiriliyor.
          </p>
        </div>
      </OkumaLayout>
    );
  }

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <OkumaLayout>
      <div className="mx-auto max-w-5xl px-4 py-8">

        {/* HEADER */}
        <div className="text-center">

          <div className="text-sm font-black tracking-[0.25em] text-[#a61b1b]">
            SINAV TAMAMLANDI
          </div>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            SONUÇLARINIZ
          </h1>

          <p className="mt-2 text-gray-500">
            TÜRK DİLİ MULTILEVEL • OKUMA TESTİ 1
          </p>

        </div>

        {/* CEFR */}
        <div className="mt-8 rounded-3xl bg-[#8f1717] p-8 text-center text-white shadow-xl">

          <div className="text-sm font-bold uppercase tracking-widest text-white/70">
            CEFR SEVİYESİ
          </div>

          <div className="mt-3 text-7xl font-black">
            {result.cefr}
          </div>

          <div className="mt-4 text-lg">
            {result.score} puan
            {" • "}
            %{result.percentage} başarı
          </div>

        </div>

        {/* STATS */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

          <Stat
            value={result.total}
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

        {/* SUMMARY */}
        <div className="mt-8 rounded-3xl border border-[#e2dbd4] bg-white p-6 shadow-sm md:p-8">

          <h2 className="text-xl font-black">
            Test Özeti
          </h2>

          <div className="mt-5 space-y-3">

            <ResultRow
              label="Toplam soru"
              value={String(
                result.total
              )}
            />

            <ResultRow
              label="Doğru cevap"
              value={String(
                result.correct
              )}
            />

            <ResultRow
              label="Yanlış cevap"
              value={String(
                result.incorrect
              )}
            />

            <ResultRow
              label="Cevaplanmayan"
              value={String(
                result.blank
              )}
            />

            <ResultRow
              label="Başarı oranı"
              value={`%${result.percentage}`}
            />

            <ResultRow
              label="CEFR seviyesi"
              value={result.cefr}
              highlight
            />

          </div>

        </div>

        {/* =================================================
            WRONG ANSWERS
        ================================================= */}

        {result.wrongAnswers.length >
          0 && (
          <section className="mt-8">

            <div className="mb-5">

              <div className="text-sm font-black tracking-[0.2em] text-[#a61b1b]">
                HATALI CEVAPLAR
              </div>

              <h2 className="mt-2 text-3xl font-black">
                Xato javoblaringiz
              </h2>

              <p className="mt-2 text-gray-500">
                Quyida faqat noto‘g‘ri javob berilgan
                savollar ko‘rsatilgan.
              </p>

            </div>

            <div className="space-y-5">

              {result.wrongAnswers.map(
                (item) => (
                  <div
                    key={item.questionId}
                    className="overflow-hidden rounded-3xl border border-red-200 bg-white shadow-sm"
                  >

                    {/* QUESTION HEADER */}
                    <div className="flex items-center justify-between border-b border-red-100 bg-red-50 px-5 py-4">

                      <div className="font-black text-red-700">
                        ❌ Soru {item.number}
                      </div>

                    </div>

                    {/* QUESTION */}
                    <div className="p-6">

                      <div className="font-bold leading-7 text-gray-900">
                        {item.questionText}
                      </div>

                      {/* USER ANSWER */}
                      <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4">

                        <div className="text-xs font-black uppercase tracking-wider text-red-600">
                          Sizin cavabınız
                        </div>

                        <div className="mt-2 font-bold text-red-800">
                          {item.userAnswer}
                        </div>

                      </div>

                      {/* CORRECT ANSWER */}
                      <div className="mt-3 rounded-2xl border border-green-200 bg-green-50 p-4">

                        <div className="text-xs font-black uppercase tracking-wider text-green-600">
                          Doğru cavab
                        </div>

                        <div className="mt-2 font-bold text-green-800">
                          {item.correctAnswer}
                        </div>

                      </div>

                    </div>

                  </div>
                )
              )}

            </div>

          </section>
        )}

        {/* ALL CORRECT */}
        {result.wrongAnswers.length ===
          0 &&
          result.incorrect === 0 &&
          result.blank === 0 && (
            <div className="mt-8 rounded-3xl border border-green-200 bg-green-50 p-8 text-center">

              <div className="text-4xl">
                🎉
              </div>

              <h2 className="mt-3 text-2xl font-black text-green-800">
                Tüm cevaplarınız doğru!
              </h2>

              <p className="mt-2 text-green-700">
                Harika sonuç!
              </p>

            </div>
          )}

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <button
            type="button"
            onClick={() =>
              router.push(
                "/okuma"
              )
            }
            className="flex-1 rounded-xl border-2 border-[#a61b1b] bg-white py-4 font-black text-[#a61b1b] transition hover:bg-[#a61b1b] hover:text-white"
          >
            ← TESTLERE DÖN
          </button>

          <button
            type="button"
            onClick={restart}
            className="flex-1 rounded-xl bg-[#a61b1b] py-4 font-black text-white transition hover:bg-[#7d1111]"
          >
            TESTİ TEKRARLA ↺
          </button>

        </div>

      </div>
    </OkumaLayout>
  );
}

/* =========================================================
   STAT
========================================================= */

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

/* =========================================================
   RESULT ROW
========================================================= */

function ResultRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#eee7e1] pb-3 last:border-0 last:pb-0">

      <span className="text-sm font-semibold text-gray-600">
        {label}
      </span>

      <span
        className={
          highlight
            ? "font-black text-[#a61b1b]"
            : "font-bold text-gray-900"
        }
      >
        {value}
      </span>

    </div>
  );
}

