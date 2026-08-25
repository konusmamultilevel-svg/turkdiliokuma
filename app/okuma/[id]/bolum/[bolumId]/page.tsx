"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import OkumaLayout from "@/components/OkumaLayout";
import QuestionRenderer from "@/components/QuestionRenderer";
import DragDropEngine from "@/components/DragDropEngine";

import { test1 } from "@/data/okuma/test1";
import { test2 } from "@/data/okuma/test2";

/* =========================================================
   COLORS
========================================================= */

const colors = {
  redLight: "#F8DADA",
  redSoft: "#E7A0A0",
  red: "#C62828",
  redMedium: "#A91F1F",
  redDark: "#7F1D1D",
  redDeep: "#5E1111",

  text: "#1F2937",
  muted: "#6B7280",
  border: "#E5E7EB",
  softBg: "#FAFAFA",
};

/* =========================================================
   TYPES
========================================================= */

type MatchingOption = {
  id: string;
  text: string;
};

type MatchingAnnouncement = {
  id: string;
  title?: string;
  company?: string;
  position?: string;
  location?: string;
  body: string;
  requirements?: string[];
  contact?: string;
  phone?: string;
};

type MatchingBolum = (typeof test1.bolumler[number]) & {
  matchingOptions?: MatchingOption[];
  matchingAnnouncements?: MatchingAnnouncement[];
};

/* =========================================================
   HELPERS
========================================================= */

/*
  Card ichidagi matn:
  "• birinchi • ikkinchi • uchinchi"
  ko‘rinishida kelsa, har bir bulletni alohida
  qatorda chiqaradi.
*/

function formatAnnouncementBody(text: string) {
  if (!text) return [];

  return text
    .split(/\s*•\s*/)
    .map((item) => item.trim())
    .filter(Boolean);
}

/* =========================================================
   COMPONENT
========================================================= */

export default function BolumPage() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);
  const bolumId = Number(params.bolumId);

  const isValidTest = id === 1 || id === 2;

  const STORAGE_KEY = `okuma_test_${id}_answers`;

  const currentTest = id === 1 ? test1 : test2;

  const bolum = currentTest.bolumler.find(
    (item) => item.bolumId === bolumId
  ) as MatchingBolum | undefined;

  /* =========================================================
     TOTALS
  ========================================================= */

  const totalQuestions = currentTest.bolumler.reduce(
    (sum, item) => sum + item.questions.length,
    0
  );

  const totalSections = currentTest.bolumler.length;

  /* =========================================================
     ANSWERS
  ========================================================= */

  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
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
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch {}

      setAnswers({});
    }
  }, [STORAGE_KEY]);

  const handleAnswer = (
    questionId: string,
    value: string
  ) => {
    setAnswers((previous) => {
      const updated = {
        ...previous,
        [questionId]: value,
      };

      try {
        sessionStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(updated)
        );
      } catch {}

      return updated;
    });
  };

  /* =========================================================
     PROGRESS
  ========================================================= */

  const answeredCount = useMemo(() => {
    return Object.values(answers).filter(
      (value) => value && value.trim() !== ""
    ).length;
  }, [answers]);

  const progress =
    totalQuestions > 0
      ? Math.min(
          100,
          Math.round(
            (answeredCount / totalQuestions) * 100
          )
        )
      : 0;

  /* =========================================================
     TEST NOT FOUND
  ========================================================= */

  if (!isValidTest) {
    return (
      <OkumaLayout>
        <div className="mx-auto max-w-3xl px-4 py-10">
          <div className="relative overflow-hidden rounded-[2rem] border bg-white p-10 text-center shadow-xl">

            <div
              className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full border-[12px]"
              style={{
                borderColor: colors.redSoft,
                opacity: 0.08,
              }}
            />

            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-black text-white shadow-md"
              style={{
                background:
                  "linear-gradient(135deg, #C62828, #7F1D1D)",
              }}
            >
              !
            </div>

            <h1
              className="mt-6 text-3xl font-black"
              style={{
                color: colors.redDark,
              }}
            >
              TEST BULUNAMADI
            </h1>

            <p className="mx-auto mt-3 max-w-md leading-7 text-slate-500">
              Aradığınız test mevcut değil veya henüz
              hazırlanmadı.
            </p>

            <button
              type="button"
              onClick={() => router.push("/okuma")}
              className="mt-7 rounded-2xl px-7 py-3.5 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #7F1D1D, #A91F1F)",
              }}
            >
              ← OKUMA TESTLERİNE DÖN
            </button>
          </div>
        </div>
      </OkumaLayout>
    );
  }

  /* =========================================================
     SECTION NOT FOUND
  ========================================================= */

  if (!bolum) {
    return (
      <OkumaLayout>
        <div className="mx-auto max-w-3xl px-4 py-10">
          <div className="rounded-[2rem] border bg-white p-10 text-center shadow-xl">

            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl font-black text-white"
              style={{
                background:
                  "linear-gradient(135deg, #C62828, #7F1D1D)",
              }}
            >
              {bolumId}
            </div>

            <h1
              className="mt-6 text-3xl font-black"
              style={{
                color: colors.redDark,
              }}
            >
              BÖLÜM BULUNAMADI
            </h1>

            <p className="mx-auto mt-3 max-w-md leading-7 text-slate-500">
              Bu test bölümü mevcut değil.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

              <button
                type="button"
                onClick={() =>
                  router.push(`/okuma/${id}`)
                }
                className="rounded-2xl border bg-white px-6 py-3.5 font-black text-slate-600 transition hover:bg-gray-50"
                style={{
                  borderColor: "#DCDCDC",
                }}
              >
                ← TEST BİLGİLERİ
              </button>

              <button
                type="button"
                onClick={() => router.push("/okuma")}
                className="rounded-2xl px-6 py-3.5 font-black text-white"
                style={{
                  backgroundColor: colors.redDark,
                }}
              >
                TESTLERE DÖN
              </button>

            </div>
          </div>
        </div>
      </OkumaLayout>
    );
  }

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const isLast = bolumId === totalSections;
  const isFirst = bolumId === 1;

  const next = () => {
    if (isLast) {
      router.push(`/okuma/${id}/sonuc`);
      return;
    }

    router.push(
      `/okuma/${id}/bolum/${bolumId + 1}`
    );
  };

  const previous = () => {
    if (!isFirst) {
      router.push(
        `/okuma/${id}/bolum/${bolumId - 1}`
      );
    }
  };

  /* =========================================================
     MATCHING DATA
  ========================================================= */

  const matchingOptions =
    bolum.matchingOptions ?? [];

  const matchingAnnouncements =
    bolum.matchingAnnouncements ?? [];

  /* =========================================================
     MAIN
  ========================================================= */

  return (
    <OkumaLayout>

      <div className="relative min-h-screen bg-[#FAFAFA]">

        {/* DECORATIONS */}

        <div className="pointer-events-none absolute left-0 top-20 hidden lg:block">
          <div
            className="h-28 w-28 rounded-full border-[12px]"
            style={{
              borderColor: colors.redSoft,
              opacity: 0.05,
              transform: "translateX(-55%)",
            }}
          />
        </div>

        <div className="pointer-events-none absolute right-0 top-32 hidden lg:block">
          <div
            className="h-24 w-24 rounded-full border-[10px]"
            style={{
              borderColor: colors.red,
              opacity: 0.04,
              transform: "translateX(55%)",
            }}
          />
        </div>

        {/* MAIN CONTAINER */}

        <div className="relative mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

          {/* BACK */}

          <div className="mb-5">
            <button
              type="button"
              onClick={() =>
                router.push(`/okuma/${id}`)
              }
              className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-black shadow-sm transition hover:-translate-x-1 hover:shadow-md"
              style={{
                borderColor: "#DFDFDF",
                color: colors.redDark,
              }}
            >
              <span className="text-lg">←</span>
              TEST BİLGİLERİNE DÖN
            </button>
          </div>

          {/* HEADER */}

          <section
            className="relative mb-5 overflow-hidden rounded-[1.75rem] border bg-white shadow-sm"
            style={{
              borderColor: "#E2E2E2",
            }}
          >

            <div
              className="pointer-events-none absolute right-[-20px] top-[-20px] h-32 w-32 rounded-full border-[13px]"
              style={{
                borderColor: colors.red,
                opacity: 0.045,
              }}
            />

            <div className="relative flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-7">

              <div>

                <div
                  className="text-[11px] font-black tracking-[0.25em]"
                  style={{
                    color: colors.red,
                  }}
                >
                  TÜRK DİLİ MULTİLEVEL • OKUMA
                </div>

                <h1
                  className="mt-2 text-2xl font-black md:text-3xl"
                  style={{
                    color: colors.redDark,
                  }}
                >
                  {bolum.title}
                </h1>

                <div className="mt-3 flex flex-wrap gap-2">

                  {["TEST", "CEFR", "OKUMA"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border bg-white px-3 py-1 text-[10px] font-black"
                        style={{
                          borderColor: colors.redSoft,
                          color: colors.redMedium,
                        }}
                      >
                        {item === "TEST"
                          ? `TEST ${String(id).padStart(
                              2,
                              "0"
                            )}`
                          : item}
                      </span>
                    )
                  )}

                </div>
              </div>

              <div
                className="shrink-0 rounded-2xl border bg-white px-5 py-3.5 shadow-sm"
                style={{
                  borderColor: colors.redSoft,
                }}
              >
                <div className="text-[10px] font-black tracking-wider text-slate-400">
                  BÖLÜM
                </div>

                <div
                  className="mt-1 text-xl font-black"
                  style={{
                    color: colors.redDark,
                  }}
                >
                  {bolumId} / {totalSections}
                </div>
              </div>

            </div>
          </section>

          {/* SECTION NAVIGATION */}

          <section className="mb-5 overflow-hidden rounded-2xl border bg-white p-3 shadow-sm">

            <div className="flex gap-2 overflow-x-auto pb-1">

              {currentTest.bolumler.map(
                (section) => {
                  const active =
                    section.bolumId === bolumId;

                  return (
                    <button
                      key={section.bolumId}
                      type="button"
                      onClick={() =>
                        router.push(
                          `/okuma/${id}/bolum/${section.bolumId}`
                        )
                      }
                      className="flex h-10 min-w-10 shrink-0 items-center justify-center rounded-xl px-4 text-sm font-black transition"
                      style={
                        active
                          ? {
                              color: "#FFFFFF",
                              background:
                                "linear-gradient(135deg, #7F1D1D, #A91F1F)",
                              boxShadow:
                                "0 5px 15px rgba(127,29,29,0.15)",
                            }
                          : {
                              color: "#6B7280",
                              backgroundColor:
                                "#FFFFFF",
                              border:
                                "1px solid #E1E1E1",
                            }
                      }
                    >
                      {section.bolumId}
                    </button>
                  );
                }
              )}

            </div>
          </section>

          {/* PROGRESS */}

          <section className="mb-5 rounded-2xl border bg-white p-4 shadow-sm">

            <div className="mb-2 flex items-center justify-between text-[11px] font-black">

              <span className="tracking-wider text-slate-400">
                CEVAPLANAN SORULAR
              </span>

              <span
                style={{
                  color: colors.redDark,
                }}
              >
                {answeredCount} / {totalQuestions}
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-100">

              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg, #7F1D1D, #C62828)",
                }}
              />

            </div>

            <div className="mt-1.5 text-right text-[10px] font-bold text-slate-400">
              %{progress}
            </div>

          </section>

          {/* INSTRUCTION */}

          {bolum.instruction && (
            <section
              className="relative mb-6 overflow-hidden rounded-2xl border bg-white shadow-sm"
              style={{
                borderColor: colors.redSoft,
              }}
            >

              <div
                className="absolute left-0 top-0 h-full w-1"
                style={{
                  background:
                    "linear-gradient(180deg, #7F1D1D, #C62828)",
                }}
              />

              <div className="p-5 pl-7">

                <div
                  className="text-[10px] font-black tracking-[0.22em]"
                  style={{
                    color: colors.red,
                  }}
                >
                  TALİMAT
                </div>

                <p className="mt-2 max-w-5xl text-sm leading-6 text-slate-700">
                  {bolum.instruction}
                </p>

              </div>
            </section>
          )}

          {/* =====================================================
              BÖLÜM 2 — MATCHING
          ====================================================== */}

          {bolumId === 2 &&
            matchingOptions.length > 0 &&
            matchingAnnouncements.length > 0 && (
              <section>

                {/* =================================================
                    DURUMLAR
                ================================================== */}

                <div className="mb-12 overflow-hidden rounded-[1.5rem] border bg-white shadow-sm">

                  <div className="p-6 md:p-7">

                    <div
                      className="text-[10px] font-black tracking-[0.22em]"
                      style={{
                        color: colors.red,
                      }}
                    >
                      CEVAP SEÇENEKLERİ
                    </div>

                    <h2
                      className="mt-1.5 text-xl font-black md:text-2xl"
                      style={{
                        color: colors.redDark,
                      }}
                    >
                      A–J durumları
                    </h2>

                    <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-500">
                      Aşağıdaki durumları okuyunuz.
                      S7–S14 ilanlarının hangi duruma
                      uygun olduğunu bulunuz. İki seçenek
                      kullanılmayacaktır.
                    </p>

                    {/* =================================================
                        HAR BIR DURUM ALOHIDA QATOR
                    ================================================== */}

                    <div className="mt-8 space-y-4">

                      {matchingOptions.map(
                        (option) => (
                          <div
                            key={option.id}
                            className="flex w-full items-start gap-4 rounded-2xl border px-5 py-4 transition hover:-translate-y-0.5 hover:shadow-sm"
                            style={{
                              borderColor: "#E7B0B0",
                              backgroundColor: "#FFF8F8",
                            }}
                          >

                            {/* LETTER */}

                            <div
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white shadow-sm"
                              style={{
                                background:
                                  "linear-gradient(135deg, #A83232, #C94A4A)",
                              }}
                            >
                              {option.id}
                            </div>

                            {/* TEXT */}

                            <p className="min-w-0 flex-1 pt-0.5 text-[15px] font-normal leading-7 text-slate-700">
                              {option.text}
                            </p>

                          </div>
                        )
                      )}

                    </div>
                  </div>
                </div>

                {/* =================================================
                    ANNOUNCEMENTS TITLE
                ================================================== */}

                <div className="mb-7">

                  <div
                    className="text-[10px] font-black tracking-[0.22em]"
                    style={{
                      color: colors.red,
                    }}
                  >
                    İLANLAR
                  </div>

                  <h2
                    className="mt-1 text-xl font-black md:text-2xl"
                    style={{
                      color: colors.redDark,
                    }}
                  >
                    S7–S14
                  </h2>

                  <p className="mt-1.5 text-sm text-slate-500">
                    Her ilan için A–J arasından uygun
                    durumu seçiniz.
                  </p>

                </div>

                {/* =================================================
                    S7-S14 — 3 CARD PER ROW
                ================================================== */}

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-x-10
                    gap-y-12
                    sm:grid-cols-2
                    lg:grid-cols-3
                    lg:gap-x-12
                    lg:gap-y-14
                    xl:gap-x-14
                  "
                >

                  {matchingAnnouncements.map(
                    (announcement) => {

                      const question =
                        bolum.questions.find(
                          (item) =>
                            item.number ===
                            Number(
                              announcement.id.replace(
                                "S",
                                ""
                              )
                            )
                        );

                      if (!question) {
                        return null;
                      }

                      const selectedAnswer =
                        answers[question.id] || "";

                      const bodyLines =
                        formatAnnouncementBody(
                          announcement.body
                        );

                      return (
                        <article
                          key={announcement.id}
                          className="
                            relative
                            mx-auto
                            w-full
                            max-w-[380px]
                            overflow-hidden
                            rounded-[1.5rem]
                            border
                            shadow-md
                            transition
                            duration-200
                            hover:-translate-y-1
                            hover:shadow-xl
                          "
                          style={{
                            borderColor: "#A94A4A",
                            background:
                              "linear-gradient(135deg, #A83232 0%, #C64B4B 50%, #A83232 100%)",
                          }}
                        >

                          {/* DECORATION */}

                          <div
                            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rotate-45 rounded-[2rem] border-[8px]"
                            style={{
                              borderColor:
                                "rgba(255,255,255,0.10)",
                            }}
                          />

                          {/* =================================================
                              CARD HEADER
                          ================================================== */}

                          <div className="relative border-b border-white/15 px-5 py-4">

                            <div className="flex items-center justify-between gap-3">

                              <div className="flex items-center gap-3">

                                <div
                                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-black"
                                  style={{
                                    color:
                                      colors.redDark,
                                  }}
                                >
                                  {announcement.id}
                                </div>

                                <div className="text-sm font-black tracking-wide text-white">
                                  İLAN
                                </div>

                              </div>

                              {selectedAnswer && (
                                <div
                                  className="flex h-9 min-w-9 items-center justify-center rounded-lg bg-white px-2.5 text-sm font-black"
                                  style={{
                                    color:
                                      colors.redDark,
                                  }}
                                >
                                  {selectedAnswer}
                                </div>
                              )}

                            </div>
                          </div>

                          {/* =================================================
                              CARD CONTENT
                          ================================================== */}

                          <div className="relative p-5">

                            {/* COMPANY / POSITION / LOCATION */}

                            {(announcement.company ||
                              announcement.position ||
                              announcement.location) && (
                              <div className="space-y-3">

                                {announcement.company && (
                                  <div className="text-[15px] font-normal leading-6 text-white">
                                    <span className="font-black">
                                      Firma Adı:
                                    </span>{" "}
                                    <span>
                                      {announcement.company}
                                    </span>
                                  </div>
                                )}

                                {announcement.position && (
                                  <div className="text-[15px] font-normal leading-6 text-white">
                                    <span className="font-black">
                                      Pozisyon:
                                    </span>{" "}
                                    <span>
                                      {announcement.position}
                                    </span>
                                  </div>
                                )}

                                {announcement.location && (
                                  <div className="text-[15px] font-normal leading-6 text-white">
                                    <span className="font-black">
                                      Lokasyon:
                                    </span>{" "}
                                    <span>
                                      {announcement.location}
                                    </span>
                                  </div>
                                )}

                              </div>
                            )}

                            {/* =================================================
                                BODY — TARTIBLI SATRLAR
                            ================================================== */}

                            <div
                              className="mt-6 rounded-xl border p-4"
                              style={{
                                background:
                                  "rgba(255,255,255,0.11)",
                                borderColor:
                                  "rgba(255,255,255,0.18)",
                              }}
                            >

                              <div className="space-y-3">

                                {bodyLines.map(
                                  (line, index) => (
                                    <div
                                      key={index}
                                      className="flex items-start gap-3 text-[15px] font-normal leading-7 text-white"
                                    >

                                      <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-white" />

                                      <span className="min-w-0 flex-1">
                                        {line}
                                      </span>

                                    </div>
                                  )
                                )}

                              </div>

                            </div>

                            {/* =================================================
                                REQUIREMENTS
                            ================================================== */}

                            {announcement.requirements &&
                              announcement.requirements.length >
                                0 && (
                                <div className="mt-6">

                                  <div className="text-[11px] font-black tracking-[0.18em] text-white/80">
                                    ARANAN NİTELİKLER
                                  </div>

                                  <div className="mt-3 space-y-3">

                                    {announcement.requirements.map(
                                      (
                                        requirement,
                                        index
                                      ) => (
                                        <div
                                          key={index}
                                          className="flex items-start gap-3 text-[14px] font-normal leading-6 text-white/95"
                                        >

                                          <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-white" />

                                          <span className="min-w-0 flex-1">
                                            {requirement}
                                          </span>

                                        </div>
                                      )
                                    )}

                                  </div>
                                </div>
                              )}

                            {/* =================================================
                                CONTACT
                            ================================================== */}

                            {(announcement.contact ||
                              announcement.phone) && (
                              <div
                                className="mt-6 border-t pt-5"
                                style={{
                                  borderColor:
                                    "rgba(255,255,255,0.18)",
                                }}
                              >

                                <div className="text-[11px] font-black tracking-[0.18em] text-white/80">
                                  BAŞVURU İÇİN
                                </div>

                                {announcement.contact && (
                                  <div className="mt-2 text-[14px] font-normal leading-6 text-white/95">
                                    <span className="font-black text-white">
                                      İletişim:
                                    </span>{" "}
                                    {announcement.contact}
                                  </div>
                                )}

                                {announcement.phone && (
                                  <div className="mt-2 text-[14px] font-normal leading-6 text-white/95">
                                    <span className="font-black text-white">
                                      Tel:
                                    </span>{" "}
                                    {announcement.phone}
                                  </div>
                                )}

                              </div>
                            )}

                            {/* =================================================
                                QUESTION
                            ================================================== */}

                            <div
                              className="mt-6 border-t pt-5"
                              style={{
                                borderColor:
                                  "rgba(255,255,255,0.18)",
                              }}
                            >

                              <div className="mb-4">

                                <div className="text-[11px] font-black tracking-[0.18em] text-white/80">
                                  SORU {question.number}
                                </div>

                                <div className="mt-1.5 text-[15px] font-normal leading-6 text-white">
                                  Uygun durumu seçiniz
                                </div>

                              </div>

                              {/* A-J BUTTONS */}

                              <div className="grid grid-cols-5 gap-2">

                                {question.options?.map(
                                  (option) => {

                                    const selected =
                                      selectedAnswer ===
                                      option;

                                    return (
                                      <button
                                        key={`${question.id}-${option}`}
                                        type="button"
                                        onClick={() =>
                                          handleAnswer(
                                            question.id,
                                            option
                                          )
                                        }
                                        className="flex h-10 items-center justify-center rounded-lg px-1 text-[11px] font-black transition-all duration-150 hover:-translate-y-0.5"
                                        style={{
                                          backgroundColor:
                                            selected
                                              ? "#FFFFFF"
                                              : "rgba(255,255,255,0.12)",

                                          color:
                                            selected
                                              ? colors.redDark
                                              : "#FFFFFF",

                                          border:
                                            selected
                                              ? "2px solid #FFFFFF"
                                              : "1px solid rgba(255,255,255,0.30)",

                                          boxShadow:
                                            selected
                                              ? "0 3px 10px rgba(0,0,0,0.18)"
                                              : "none",
                                        }}
                                      >
                                        {option}
                                      </button>
                                    );
                                  }
                                )}

                              </div>
                            </div>

                          </div>
                        </article>
                      );
                    }
                  )}

                </div>
              </section>
            )}

          {/* =====================================================
              OTHER SECTIONS
          ====================================================== */}

          {bolumId !== 2 && (
            <>

              {/* DRAG DROP */}

              {bolum.dragDropContext && (
                <section className="relative mb-6">
                  <DragDropEngine
                    context={bolum.dragDropContext}
                    questions={bolum.questions}
                    answers={answers}
                    handleAnswer={handleAnswer}
                  />
                </section>
              )}

              {/* READING TEXT */}

              {bolum.readingText && (
                <section
                  className="relative mb-6 overflow-hidden rounded-[1.75rem] border bg-white shadow-sm"
                  style={{
                    borderColor: "#E0E0E0",
                  }}
                >

                  <div
                    className="absolute left-0 top-0 h-full w-1"
                    style={{
                      background:
                        "linear-gradient(180deg, #7F1D1D, #C62828)",
                    }}
                  />

                  <div className="p-5 pl-6 md:p-7 md:pl-8">

                    <div
                      className="mb-4 text-[10px] font-black tracking-[0.22em]"
                      style={{
                        color: colors.red,
                      }}
                    >
                      OKUMA METNİ
                    </div>

                    <div className="max-w-6xl whitespace-pre-line text-[16px] font-serif leading-[1.8] text-slate-800">
                      {bolum.readingText}
                    </div>

                  </div>
                </section>
              )}

              {/* QUESTIONS */}

              <section
                className={
                  bolumId === 3
                    ? "grid gap-5 md:grid-cols-2"
                    : "space-y-5"
                }
              >

                {bolum.questions.map(
                  (question) => {

                    /* Q25-29 */

                    if (
                      bolumId === 4 &&
                      question.number >= 25 &&
                      question.number <= 29
                    ) {

                      const options = [
                        "DOĞRU",
                        "YANLIŞ",
                        "VERİLMEMİŞ",
                      ];

                      const letters = [
                        "A",
                        "B",
                        "C",
                      ];

                      const selectedAnswer =
                        answers[question.id] || "";

                      return (
                        <div
                          key={question.id}
                          className="relative overflow-hidden rounded-[1.5rem] border bg-white p-5 shadow-sm sm:p-6"
                          style={{
                            borderColor:
                              "#E1E1E1",
                          }}
                        >

                          <div className="mb-5 flex items-start gap-3">

                            <div
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black text-white"
                              style={{
                                backgroundColor:
                                  colors.redDark,
                              }}
                            >
                              {question.number}
                            </div>

                            <div className="min-w-0 flex-1">

                              <div
                                className="text-[9px] font-black tracking-[0.2em]"
                                style={{
                                  color:
                                    colors.red,
                                }}
                              >
                                SORU {question.number}
                              </div>

                              <div className="mt-1.5 text-[15px] font-bold leading-6 text-slate-800">
                                {question.text}
                              </div>

                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">

                            {options.map(
                              (
                                option,
                                index
                              ) => {

                                const selected =
                                  selectedAnswer ===
                                  option;

                                return (
                                  <button
                                    key={`${question.id}-${option}`}
                                    type="button"
                                    onClick={() =>
                                      handleAnswer(
                                        question.id,
                                        option
                                      )
                                    }
                                    className="flex w-full items-center gap-2.5 rounded-xl border-2 px-3 py-2.5 text-left transition-all duration-150"
                                    style={{
                                      borderColor:
                                        selected
                                          ? colors.red
                                          : "#E2DDD8",

                                      backgroundColor:
                                        selected
                                          ? "#FFF6F6"
                                          : "#FFFFFF",

                                      boxShadow:
                                        selected
                                          ? "0 3px 10px rgba(127,29,29,0.07)"
                                          : "none",
                                    }}
                                  >

                                    <span
                                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black"
                                      style={{
                                        backgroundColor:
                                          selected
                                            ? colors.red
                                            : "#F4F1EE",

                                        color:
                                          selected
                                            ? "#FFFFFF"
                                            : colors.redDark,
                                      }}
                                    >
                                      {letters[index]}
                                    </span>

                                    <span
                                      className="flex-1 text-sm font-bold"
                                      style={{
                                        color:
                                          selected
                                            ? colors.redDark
                                            : "#333333",
                                      }}
                                    >
                                      {option}
                                    </span>

                                    <span
                                      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2"
                                      style={{
                                        borderColor:
                                          selected
                                            ? colors.red
                                            : "#C9C3BD",
                                      }}
                                    >
                                      {selected && (
                                        <span
                                          className="h-2 w-2 rounded-full"
                                          style={{
                                            backgroundColor:
                                              colors.red,
                                          }}
                                        />
                                      )}
                                    </span>

                                  </button>
                                );
                              }
                            )}

                          </div>
                        </div>
                      );
                    }

                    /* ALL OTHER QUESTIONS */

                    return (
                      <div
                        key={question.id}
                        className="rounded-2xl"
                      >
                        <QuestionRenderer
                          question={question}
                          value={
                            answers[
                              question.id
                            ] || ""
                          }
                          onChange={(
                            value: string
                          ) =>
                            handleAnswer(
                              question.id,
                              value
                            )
                          }
                        />
                      </div>
                    );
                  }
                )}

              </section>
            </>
          )}

          {/* =====================================================
              NAVIGATION
          ====================================================== */}

          <section
            className="mb-8 mt-8 border-t pt-6"
            style={{
              borderColor: "#E1E1E1",
            }}
          >

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              {isFirst ? (
                <button
                  type="button"
                  onClick={() =>
                    router.push(`/okuma/${id}`)
                  }
                  className="rounded-xl border bg-white px-5 py-3 text-sm font-black text-slate-600 shadow-sm transition hover:bg-gray-50"
                  style={{
                    borderColor: "#DCDCDC",
                  }}
                >
                  ← TEST BİLGİLERİ
                </button>
              ) : (
                <button
                  type="button"
                  onClick={previous}
                  className="rounded-xl border bg-white px-5 py-3 text-sm font-black text-slate-600 shadow-sm transition hover:bg-gray-50"
                  style={{
                    borderColor: "#DCDCDC",
                  }}
                >
                  ← ÖNCEKİ BÖLÜM
                </button>
              )}

              <button
                type="button"
                onClick={next}
                className="rounded-xl px-7 py-3 text-sm font-black text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #7F1D1D, #A91F1F)",
                }}
              >
                {isLast
                  ? "SINAVI BİTİR →"
                  : "SONRAKİ BÖLÜM →"}
              </button>

            </div>
          </section>

        </div>
      </div>
    </OkumaLayout>
  );
}