"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  getCEFRLevel,
  getScore,
  okumaData,
  type Question,
} from "@/data/okumaData";

type Result = {
  total: number;
  correct: number;
  incorrect: number;
  blank: number;
  percentage: number;
  score: number;
  cefr: string;
};

export default function OkumaSonuc({
  testId,
}: {
  testId: number;
}) {
  const router = useRouter();

  const [result, setResult] =
    useState<Result | null>(null);

  useEffect(() => {
    const test = okumaData.find(
      (item) => item.id === testId,
    );

    if (!test) return;

    const allQuestions: Question[] =
      test.bolumler.flatMap(
        (bolum) => bolum.questions,
      );

    const storageKey =
      `okuma_answers_test_${testId}`;

    let answers: Record<
      string,
      string
    > = {};

    try {
      const saved =
        sessionStorage.getItem(
          storageKey,
        );

      if (saved) {
        answers = JSON.parse(saved);
      }
    } catch {
      answers = {};
    }

    let correct = 0;
    let blank = 0;

    allQuestions.forEach(
      (question) => {
        const answer =
          answers[question.id];

        if (
          !answer ||
          answer.trim() === ""
        ) {
          blank++;
          return;
        }

        if (
          checkQuestion(
            question,
            answer,
          )
        ) {
          correct++;
        }
      },
    );

    const total =
      allQuestions.length;

    const incorrect =
      total -
      correct -
      blank;

    const percentage =
      total > 0
        ? Math.round(
            (correct / total) * 100,
          )
        : 0;

    const score =
      getScore(correct);

    const cefr =
      getCEFRLevel(score);

    setResult({
      total,
      correct,
      incorrect,
      blank,
      percentage,
      score,
      cefr,
    });
  }, [testId]);

  const resetTest = () => {
    try {
      sessionStorage.removeItem(
        `okuma_answers_test_${testId}`,
      );
    } catch {
      // ignore
    }

    router.push(
      `/okuma/${testId}/bolum/1`,
    );
  };

  if (!result) {
    return (
      <main className="page-shell">
        <div className="loading-box">
          NATİCE HAZIRLANIYOR...
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <div className="page-container narrow">

        <div className="result-card">

          <div className="result-header">
            <span>NATİCE</span>

            <h1>
              OKUMA TESTİ {testId}
            </h1>

            <p>
              Test tamamlandı.
              Aşağıda ümumi nəticəniz
              göstərilir.
            </p>
          </div>

          <div className="score-panel">
            <span>CEFR</span>

            <strong>
              {result.cefr}
            </strong>

            <div className="score-line">
              <span>
                Ball:{" "}
                <b>{result.score}</b>
              </span>

              <span>
                Faiz:{" "}
                <b>
                  %{result.percentage}
                </b>
              </span>
            </div>
          </div>

          <div className="result-grid">

            <ResultBox
              value={result.total}
              label="TOPLAM SORU"
              variant="normal"
            />

            <ResultBox
              value={result.correct}
              label="DOĞRU"
              variant="correct"
            />

            <ResultBox
              value={result.incorrect}
              label="YANLIŞ"
              variant="incorrect"
            />

            <ResultBox
              value={result.blank}
              label="BOŞ"
              variant="blank"
            />

          </div>

          <div className="result-message">
            <strong>
              Değerlendirme
            </strong>

            <p>
              Cevaplarınız testin bütün
              bölümleri tamamlandıktan sonra
              birlikte değerlendirildi.
            </p>
          </div>

          <div className="result-actions">
            <button
              type="button"
              onClick={() =>
                router.push(
                  "/okuma",
                )
              }
              className="secondary-button"
            >
              ← TESTLERE GERİ DÖN
            </button>

            <button
              type="button"
              onClick={resetTest}
              className="primary-button"
            >
              TESTİ TEKRARLA ↺
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}

function ResultBox({
  value,
  label,
  variant,
}: {
  value: number;
  label: string;
  variant:
    | "normal"
    | "correct"
    | "incorrect"
    | "blank";
}) {
  return (
    <div
      className={`result-box ${variant}`}
    >
      <strong>{value}</strong>

      <span>{label}</span>
    </div>
  );
}

/* =========================================================
   UNIVERSAL CHECKER
========================================================= */

function checkQuestion(
  question: Question,
  answer: string,
): boolean {
  if (
    question.type ===
      "multiple-choice" ||
    question.type ===
      "true-false-unknown" ||
    question.type ===
      "drag-drop"
  ) {
    return (
      answer ===
      question.correctAnswer
    );
  }

  if (
    question.type === "matching"
  ) {
    if (
      !question.matchingItems
    ) {
      return false;
    }

    const pairs = answer
      .split("|")
      .filter(Boolean);

    const selected =
      Object.fromEntries(
        pairs.map((pair) => {
          const [key, value] =
            pair.split(":");

          return [key, value];
        }),
      );

    return question.matchingItems.every(
      (item) =>
        selected[item.id] ===
        item.answerId,
    );
  }

  if (
    question.type === "ordering"
  ) {
    if (
      !question.correctOrder
    ) {
      return false;
    }

    const submitted =
      answer.split(",");

    return (
      JSON.stringify(
        submitted,
      ) ===
      JSON.stringify(
        question.correctOrder,
      )
    );
  }

  return false;
}