"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  okumaData,
  type Question,
  type DragWord,
} from "@/data/okumaData";

import QuestionRenderer from "./QuestionRenderer";

type Props = {
  testId: number;
  bolumId: number;
};

type Answers = Record<string, string>;

export default function OkumaBolum({
  testId,
  bolumId,
}: Props) {
  const router = useRouter();

  const test = okumaData.find(
    (item) => item.id === testId,
  );

  const bolum = test?.bolumler.find(
    (item) => item.bolumId === bolumId,
  );

  const storageKey =
    `okuma_answers_test_${testId}`;

  const [answers, setAnswers] =
    useState<Answers>({});

  const [selectedWord, setSelectedWord] =
    useState<string | null>(null);

  useEffect(() => {
    try {
      const saved =
        sessionStorage.getItem(storageKey);

      if (saved) {
        setAnswers(JSON.parse(saved));
      }
    } catch {
      setAnswers({});
    }
  }, [storageKey]);

  const saveAnswer = (
    questionId: string,
    value: string,
  ) => {
    setAnswers((previous) => {
      const updated = {
        ...previous,
        [questionId]: value,
      };

      try {
        sessionStorage.setItem(
          storageKey,
          JSON.stringify(updated),
        );
      } catch {
        // sessionStorage mavjud bo'lmasa
        // UI ishlashda davom etadi.
      }

      return updated;
    });
  };

  const totalQuestions =
    test?.bolumler.reduce(
      (sum, section) =>
        sum + section.questions.length,
      0,
    ) ?? 0;

  const progress =
    test && test.bolumler.length > 0
      ? Math.round(
          (bolumId /
            test.bolumler.length) *
            100,
        )
      : 0;

  const isFirst = bolumId === 1;
  const isLast =
    test !== undefined &&
    bolumId === test.bolumler.length;

  const navigateNext = () => {
    if (!test) return;

    if (isLast) {
      router.push(
        `/okuma/${testId}/sonuc`,
      );

      return;
    }

    router.push(
      `/okuma/${testId}/bolum/${
        bolumId + 1
      }`,
    );
  };

  const navigatePrevious = () => {
    if (isFirst) return;

    router.push(
      `/okuma/${testId}/bolum/${
        bolumId - 1
      }`,
    );
  };

  if (!test) {
    return (
      <main className="page-shell">
        <div className="error-box">
          TEST BULUNAMADI
        </div>
      </main>
    );
  }

  if (!bolum) {
    return (
      <main className="page-shell">
        <div className="error-box">
          BÖLÜM BULUNAMADI
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <div className="exam-container">

        {/* TOP BAR */}
        <div className="exam-topbar">
          <button
            type="button"
            onClick={() =>
              router.push("/okuma")
            }
            className="back-link"
          >
            ← TESTLERE GERİ DÖN
          </button>

          <div className="exam-counter">
            TEST {testId}
          </div>
        </div>

        {/* HEADER */}
        <header className="section-header">
          <div>
            <span className="section-kicker">
              BÖLÜM {bolumId} /{" "}
              {test.bolumler.length}
            </span>

            <h1>{bolum.title}</h1>
          </div>

          <div className="progress-box">
            <span>İLERLEME</span>

            <strong>
              %{progress}
            </strong>
          </div>
        </header>

        <div className="progress-track">
          <div
            className="progress-value"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        {/* INSTRUCTION */}
        {bolum.instruction && (
          <div className="instruction-box">
            <strong>
              TALİMAT
            </strong>

            <p>
              {bolum.instruction}
            </p>
          </div>
        )}

        {/* CONTENT */}
        <div className="exam-layout">

          {/* READING */}
          {bolum.readingText && (
            <section className="reading-card">
              <div className="reading-heading">
                METİN
              </div>

              <div className="reading-text">
                {bolum.readingText}
              </div>
            </section>
          )}

          {/* QUESTIONS */}
          <section className="questions-column">

            {bolum.dragDropContext && (
              <DragDropQuestion
                context={
                  bolum.dragDropContext
                }
                questions={
                  bolum.questions
                }
                answers={answers}
                selectedWord={
                  selectedWord
                }
                setSelectedWord={
                  setSelectedWord
                }
                saveAnswer={
                  saveAnswer
                }
              />
            )}

            {bolum.questions
              .filter(
                (question) =>
                  question.type !==
                  "drag-drop",
              )
              .map((question) => (
                <QuestionRenderer
                  key={question.id}
                  question={question}
                  value={
                    answers[
                      question.id
                    ] ?? ""
                  }
                  onChange={(value) =>
                    saveAnswer(
                      question.id,
                      value,
                    )
                  }
                />
              ))}
          </section>
        </div>

        {/* NAVIGATION */}
        <footer className="exam-navigation">
          <button
            type="button"
            disabled={isFirst}
            onClick={
              navigatePrevious
            }
            className="secondary-button"
          >
            ← ÖNCEKİ BÖLÜM
          </button>

          <div className="navigation-info">
            {Object.keys(answers).length}{" "}
            cevap kaydedildi
          </div>

          <button
            type="button"
            onClick={navigateNext}
            className="primary-button"
          >
            {isLast
              ? "TESTİ TAMAMLA"
              : "SONRAKİ BÖLÜM →"}
          </button>
        </footer>

        <div className="exam-total">
          Toplam {totalQuestions} soru
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   DRAG DROP
========================================================= */

function DragDropQuestion({
  context,
  questions,
  answers,
  selectedWord,
  setSelectedWord,
  saveAnswer,
}: {
  context: {
    textWithBlanks: string;
    words: DragWord[];
  };

  questions: Question[];

  answers: Answers;

  selectedWord: string | null;

  setSelectedWord: (
    value: string | null,
  ) => void;

  saveAnswer: (
    id: string,
    value: string,
  ) => void;
}) {
  const usedWords = useMemo(
    () =>
      new Set(
        Object.values(answers).filter(
          Boolean,
        ),
      ),
    [answers],
  );

  const parts =
    context.textWithBlanks.split(
      /(\[S\d+\])/g,
    );

  const getQuestionByNumber = (
    number: number,
  ) =>
    questions.find(
      (question) =>
        question.number === number,
    );

  const placeWord = (
    question: Question,
  ) => {
    if (!selectedWord) {
      if (answers[question.id]) {
        saveAnswer(question.id, "");
      }

      return;
    }

    const previousAnswer =
      answers[question.id];

    if (previousAnswer === selectedWord) {
      saveAnswer(question.id, "");

      setSelectedWord(null);

      return;
    }

    const owner = Object.entries(
      answers,
    ).find(
      ([, value]) =>
        value === selectedWord,
    );

    if (owner) {
      return;
    }

    saveAnswer(
      question.id,
      selectedWord,
    );

    setSelectedWord(null);
  };

  return (
    <section className="drag-drop-card">

      <div className="drag-heading">
        <div>
          <span>SÖZCÜKLER</span>

          <h2>
            Uygun kelimeleri
            boşluklara yerleştiriniz.
          </h2>
        </div>

        <div className="drag-hint">
          Kelimeye dokunun, ardından
          boşluğa dokunun.
        </div>
      </div>

      <div className="word-bank">
        {context.words.map((word) => {
          const used =
            usedWords.has(word.id);

          const selected =
            selectedWord === word.id;

          return (
            <button
              type="button"
              key={word.id}
              disabled={used}
              onClick={() =>
                setSelectedWord(
                  selected
                    ? null
                    : word.id,
                )
              }
              className={`word-chip ${
                selected
                  ? "selected"
                  : ""
              } ${
                used
                  ? "used"
                  : ""
              }`}
            >
              <b>{word.id}</b>
              {word.word}
            </button>
          );
        })}
      </div>

      <div className="drag-text">
        {parts.map(
          (part, index) => {
            const match =
              part.match(
                /^\[S(\d+)\]$/,
              );

            if (!match) {
              return (
                <span key={index}>
                  {part}
                </span>
              );
            }

            const number =
              Number(match[1]);

            const question =
              getQuestionByNumber(
                number,
              );

            if (!question) {
              return null;
            }

            const answerId =
              answers[
                question.id
              ];

            const answerWord =
              context.words.find(
                (word) =>
                  word.id ===
                  answerId,
              );

            return (
              <button
                type="button"
                key={index}
                onClick={() =>
                  placeWord(
                    question,
                  )
                }
                className={`blank ${
                  answerWord
                    ? "filled"
                    : selectedWord
                      ? "active"
                      : ""
                }`}
              >
                {answerWord
                  ? answerWord.word
                  : `S${number}`}
              </button>
            );
          },
        )}
      </div>
    </section>
  );
}