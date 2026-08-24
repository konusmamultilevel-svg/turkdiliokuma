"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import OkumaLayout from "@/components/OkumaLayout";
import QuestionRenderer from "@/components/QuestionRenderer";
import DragDropEngine from "@/components/DragDropEngine";
import { test1 } from "@/data/okuma/test1";

const colors = {
  redLight: "#F8DADA",
  redSoft: "#E7A0A0",
  red: "#C62828",
  redMedium: "#A91F1F",
  redDark: "#7F1D1D",
  redDeep: "#5E1111",
};

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

type MatchingBolum = (typeof test1.bolumler)[number] & {
  matchingOptions?: MatchingOption[];
  matchingAnnouncements?: MatchingAnnouncement[];
};

export default function BolumPage() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);
  const bolumId = Number(params.bolumId);

  const currentTest = test1;
  const STORAGE_KEY = `okuma_test_${id}_answers`;

  const bolum = currentTest.bolumler.find(
    (item) => item.bolumId === bolumId
  ) as MatchingBolum | undefined;

  const totalQuestions = currentTest.bolumler.reduce(
    (sum, item) => sum + item.questions.length,
    0
  );

  const totalSections = currentTest.bolumler.length;

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
      } catch {
        // Storage ishlamasa ham test davom etadi.
      }

      setAnswers({});
    }
  }, [STORAGE_KEY]);

  const handleAnswer = (questionId: string, value: string) => {
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
      } catch {
        // Storage ishlamasa ham test davom etadi.
      }

      return updated;
    });
  };

  const answeredCount = useMemo(() => {
    return Object.values(answers).filter(
      (value) => value && value.trim() !== ""
    ).length;
  }, [answers]);

  const progress =
    totalQuestions > 0
      ? Math.min(
          100,
          Math.round((answeredCount / totalQuestions) * 100)
        )
      : 0;

  const isValidTest = id >= 1 && id <= 10;

  /* =====================================================
     TEST BULUNAMADI
  ====================================================== */

  if (!isValidTest) {
    return (
      <OkumaLayout>
        <div className="relative">
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
                className="pointer-events-none absolute -bottom-12 -left-12 h-24 w-24 rotate-45 border-[10px]"
                style={{
                  borderColor: colors.redLight,
                  opacity: 0.08,
                }}
              />

              <div
                className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-black text-white shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, #C62828, #7F1D1D)",
                }}
              >
                !
              </div>

              <h1
                className="relative mt-6 text-3xl font-black"
                style={{
                  color: colors.redDark,
                }}
              >
                TEST BULUNAMADI
              </h1>

              <p className="relative mx-auto mt-3 max-w-md leading-7 text-slate-500">
                Aradığınız test mevcut değil veya henüz hazırlanmadı.
              </p>

              <button
                type="button"
                onClick={() => router.push("/okuma")}
                className="relative mt-7 rounded-2xl px-7 py-3.5 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #7F1D1D, #A91F1F)",
                }}
              >
                ← OKUMA TESTLERİNE DÖN
              </button>
            </div>
          </div>
        </div>
      </OkumaLayout>
    );
  }

  /* =====================================================
     BÖLÜM BULUNAMADI
  ====================================================== */

  if (!bolum) {
    return (
      <OkumaLayout>
        <div className="relative">
          <div className="mx-auto max-w-3xl px-4 py-10">
            <div className="relative overflow-hidden rounded-[2rem] border bg-white p-10 text-center shadow-xl">
              <div
                className="pointer-events-none absolute -right-12 top-4 h-24 w-24 rounded-full border-[10px]"
                style={{
                  borderColor: colors.red,
                  opacity: 0.07,
                }}
              />

              <div
                className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rotate-45 border-[10px]"
                style={{
                  borderColor: colors.redSoft,
                  opacity: 0.07,
                }}
              />

              <div
                className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl font-black text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #C62828, #7F1D1D)",
                }}
              >
                {bolumId}
              </div>

              <h1
                className="relative mt-6 text-3xl font-black"
                style={{
                  color: colors.redDark,
                }}
              >
                BÖLÜM BULUNAMADI
              </h1>

              <p className="relative mx-auto mt-3 max-w-md leading-7 text-slate-500">
                Bu test bölümü mevcut değil.
              </p>

              <div className="relative mt-7 flex flex-col justify-center gap-3 sm:flex-row">
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
        </div>
      </OkumaLayout>
    );
  }

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

  const matchingOptions = bolum.matchingOptions ?? [];
  const matchingAnnouncements =
    bolum.matchingAnnouncements ?? [];

  return (
    <OkumaLayout>
      <div className="relative">
        {/* =====================================================
            DECORATIVE SHAPES
        ====================================================== */}

        {/* TOP LEFT */}
        <div className="pointer-events-none absolute left-0 top-10 hidden lg:block">
          <div
            className="h-28 w-28 rounded-full border-[12px]"
            style={{
              borderColor: colors.redSoft,
              opacity: 0.06,
              transform: "translateX(-55%)",
            }}
          />
        </div>

        {/* TOP RIGHT */}
        <div className="pointer-events-none absolute right-0 top-24 hidden lg:block">
          <div
            className="h-24 w-24 rounded-full border-[11px]"
            style={{
              borderColor: colors.red,
              opacity: 0.05,
              transform: "translateX(55%)",
            }}
          />
        </div>

        {/* LEFT MID */}
        <div className="pointer-events-none absolute left-0 top-[850px] hidden xl:block">
          <div
            className="h-20 w-20 rotate-45 border-[9px]"
            style={{
              borderColor: colors.redMedium,
              opacity: 0.045,
              transform: "translateX(-55%) rotate(45deg)",
            }}
          />
        </div>

        {/* RIGHT MID */}
        <div className="pointer-events-none absolute right-0 top-[1350px] hidden xl:block">
          <div
            className="h-24 w-24 rounded-full border-[10px]"
            style={{
              borderColor: colors.redSoft,
              opacity: 0.045,
              transform: "translateX(55%)",
            }}
          />
        </div>

        {/* =====================================================
            MAIN
        ====================================================== */}

        <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* BACK BUTTON */}

          <div className="mb-5">
            <button
              type="button"
              onClick={() =>
                router.push(`/okuma/${id}`)
              }
              className="group inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-black shadow-sm transition hover:-translate-x-1 hover:shadow-md"
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
            className="relative mb-5 overflow-hidden rounded-[2rem] border bg-white shadow-md"
            style={{
              borderColor: "#DFDFDF",
            }}
          >
            <div
              className="pointer-events-none absolute right-[-20px] top-[-20px] h-32 w-32 rounded-full border-[14px]"
              style={{
                borderColor: colors.red,
                opacity: 0.05,
              }}
            />

            <div className="relative flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <div
                  className="text-xs font-black tracking-[0.3em]"
                  style={{
                    color: colors.red,
                  }}
                >
                  TÜRK DİLİ MULTİLEVEL • OKUMA
                </div>

                <h1
                  className="mt-2 text-3xl font-black md:text-4xl"
                  style={{
                    color: colors.redDark,
                  }}
                >
                  {bolum.title}
                </h1>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span
                    className="rounded-full border bg-white px-3 py-1 text-xs font-black"
                    style={{
                      borderColor: colors.redSoft,
                      color: colors.redMedium,
                    }}
                  >
                    TEST {String(id).padStart(2, "0")}
                  </span>

                  <span
                    className="rounded-full border bg-white px-3 py-1 text-xs font-black"
                    style={{
                      borderColor: colors.redSoft,
                      color: colors.redMedium,
                    }}
                  >
                    CEFR
                  </span>

                  <span
                    className="rounded-full border bg-white px-3 py-1 text-xs font-black"
                    style={{
                      borderColor: colors.redSoft,
                      color: colors.redMedium,
                    }}
                  >
                    OKUMA
                  </span>
                </div>
              </div>

              <div
                className="shrink-0 rounded-2xl border bg-white px-5 py-4 shadow-sm"
                style={{
                  borderColor: colors.redSoft,
                }}
              >
                <div className="text-xs font-black tracking-wider text-slate-400">
                  BÖLÜM
                </div>

                <div
                  className="mt-1 text-2xl font-black"
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

          <section
            className="mb-5 overflow-hidden rounded-2xl border bg-white p-4 shadow-sm"
            style={{
              borderColor: "#DFDFDF",
            }}
          >
            <div className="flex gap-2 overflow-x-auto pb-1">
              {currentTest.bolumler.map((section) => {
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
                    className="flex h-11 min-w-11 shrink-0 items-center justify-center rounded-xl px-4 text-sm font-black transition"
                    style={
                      active
                        ? {
                            color: "#FFFFFF",
                            background:
                              "linear-gradient(135deg, #7F1D1D, #A91F1F)",
                            boxShadow:
                              "0 7px 18px rgba(127,29,29,0.16)",
                          }
                        : {
                            color: "#6B7280",
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #E1E1E1",
                          }
                    }
                  >
                    {section.bolumId}
                  </button>
                );
              })}
            </div>
          </section>

          {/* PROGRESS */}

          <section
            className="mb-5 rounded-2xl border bg-white p-5 shadow-sm"
            style={{
              borderColor: "#DFDFDF",
            }}
          >
            <div className="mb-2 flex items-center justify-between text-xs font-black">
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

            <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg, #7F1D1D, #C62828)",
                }}
              />
            </div>

            <div className="mt-2 text-right text-xs font-bold text-slate-400">
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
                className="absolute left-0 top-0 h-full w-1.5"
                style={{
                  background:
                    "linear-gradient(180deg, #7F1D1D, #C62828)",
                }}
              />

              <div className="relative p-5 pl-7 md:p-6 md:pl-8">
                <div
                  className="text-xs font-black tracking-[0.25em]"
                  style={{
                    color: colors.red,
                  }}
                >
                  TALİMAT
                </div>

                <p className="mt-2 max-w-5xl leading-7 text-slate-700">
                  {bolum.instruction}
                </p>
              </div>
            </section>
          )}

          {/* =====================================================
              BÖLÜM 2
          ====================================================== */}

          {bolumId === 2 &&
            matchingOptions.length > 0 &&
            matchingAnnouncements.length > 0 && (
              <section className="relative">
                {/* A-J */}

                <div
                  className="relative overflow-hidden rounded-[2rem] border bg-white p-6 shadow-sm md:p-8"
                  style={{
                    borderColor: "#DFDFDF",
                  }}
                >
                  <div
                    className="pointer-events-none absolute right-[-30px] top-[-30px] h-28 w-28 rounded-full border-[14px]"
                    style={{
                      borderColor: colors.redSoft,
                      opacity: 0.06,
                    }}
                  />

                  <div className="relative">
                    <div
                      className="text-xs font-black tracking-[0.25em]"
                      style={{
                        color: colors.red,
                      }}
                    >
                      JAVAP VARİANTLARI
                    </div>

                    <h2
                      className="mt-2 text-2xl font-black md:text-3xl"
                      style={{
                        color: colors.redDark,
                      }}
                    >
                      A–J durumları
                    </h2>

                    <p className="mt-3 max-w-4xl leading-7 text-slate-500">
                      Aşağıdaki durumları okuyunuz. S7–S14
                      ilanlarının hangi duruma uygun olduğunu
                      bulunuz. İki seçenek kullanılmayacaktır.
                    </p>

                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                      {matchingOptions.map((option) => (
                        <div
                          key={option.id}
                          className="flex gap-4 rounded-2xl border bg-white p-4"
                          style={{
                            borderColor: "#E4E4E4",
                          }}
                        >
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-black text-white"
                            style={{
                              background:
                                "linear-gradient(135deg, #7F1D1D, #C62828)",
                            }}
                          >
                            {option.id}
                          </div>

                          <p className="pt-1 text-sm font-semibold leading-7 text-slate-700">
                            {option.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* S7-S14 */}

                <div className="mt-8">
                  <div className="mx-auto mb-5 max-w-5xl">
                    <div
                      className="text-xs font-black tracking-[0.25em]"
                      style={{
                        color: colors.red,
                      }}
                    >
                      İLANLAR
                    </div>

                    <h2
                      className="mt-2 text-2xl font-black md:text-3xl"
                      style={{
                        color: colors.redDark,
                      }}
                    >
                      S7–S14
                    </h2>

                    <p className="mt-2 text-slate-500">
                      Her ilan için A–J arasından uygun durumu seçiniz.
                    </p>
                  </div>

                  <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                    {matchingAnnouncements.map((announcement) => {
                      const question = bolum.questions.find(
                        (item) =>
                          item.number ===
                          Number(
                            announcement.id.replace("S", "")
                          )
                      );

                      if (!question) {
                        return null;
                      }

                      const selectedAnswer =
                        answers[question.id] || "";

                      return (
                        <article
                          key={announcement.id}
                          className="relative overflow-hidden rounded-[1.5rem] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                          style={{
                            background:
                              "linear-gradient(145deg, #7F1D1D 0%, #921F1F 55%, #A91F1F 100%)",
                          }}
                        >
                          <div
                            className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full border-[12px]"
                            style={{
                              borderColor: colors.redLight,
                              opacity: 0.10,
                            }}
                          />

                          <div
                            className="pointer-events-none absolute -bottom-8 -left-8 h-20 w-20 rotate-45 border-[9px]"
                            style={{
                              borderColor: colors.redLight,
                              opacity: 0.07,
                            }}
                          />

                          <div className="relative p-4 sm:p-5">
                            {/* ANNOUNCEMENT HEADER */}

                            <div className="flex items-center justify-between">
                              <div
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-xs font-black"
                                style={{
                                  color: colors.redDark,
                                }}
                              >
                                {announcement.id}
                              </div>

                              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-black tracking-[0.18em] text-white/80">
                                İLAN
                              </span>
                            </div>

                            {/* COMPANY */}

                            <div className="mt-4 space-y-1 text-xs leading-5 text-white/80">
                              {announcement.company && (
                                <div>
                                  <span className="font-black text-white">
                                    Firma Adı:
                                  </span>{" "}
                                  {announcement.company}
                                </div>
                              )}

                              {announcement.position && (
                                <div>
                                  <span className="font-black text-white">
                                    Pozisyon:
                                  </span>{" "}
                                  {announcement.position}
                                </div>
                              )}

                              {announcement.location && (
                                <div>
                                  <span className="font-black text-white">
                                    Lokasyon:
                                  </span>{" "}
                                  {announcement.location}
                                </div>
                              )}
                            </div>

                            {/* BODY */}

                            <div className="mt-4 rounded-xl border border-white/10 bg-white/10 p-3">
                              <p className="text-xs leading-6 text-white/90">
                                {announcement.body}
                              </p>
                            </div>

                            {/* REQUIREMENTS */}

                            {announcement.requirements &&
                              announcement.requirements.length > 0 && (
                                <div className="mt-4">
                                  <div className="text-[9px] font-black tracking-[0.18em] text-white/60">
                                    ARANAN NİTELİKLER
                                  </div>

                                  <div className="mt-2 space-y-1.5">
                                    {announcement.requirements.map(
                                      (requirement, index) => (
                                        <div
                                          key={index}
                                          className="flex gap-2 text-xs leading-5 text-white/80"
                                        >
                                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />

                                          <span>
                                            {requirement}
                                          </span>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              )}

                            {/* CONTACT */}

                            {(announcement.contact ||
                              announcement.phone) && (
                              <div className="mt-4 border-t border-white/10 pt-3">
                                <div className="text-[9px] font-black tracking-[0.18em] text-white/60">
                                  BAŞVURU İÇİN
                                </div>

                                {announcement.contact && (
                                  <div className="mt-1 text-xs text-white/80">
                                    <span className="font-black text-white">
                                      İletişim:
                                    </span>{" "}
                                    {announcement.contact}
                                  </div>
                                )}

                                {announcement.phone && (
                                  <div className="mt-1 text-xs text-white/80">
                                    <span className="font-black text-white">
                                      Tel:
                                    </span>{" "}
                                    {announcement.phone}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* ANSWER */}

                            <div className="mt-4 border-t border-white/10 pt-4">
                              <div className="mb-2 flex items-center justify-between gap-3">
                                <div>
                                  <div className="text-[9px] font-black tracking-[0.18em] text-white/60">
                                    SORU {question.number}
                                  </div>

                                  <div className="mt-1 text-xs font-bold text-white/90">
                                    Uygun durumu seçiniz
                                  </div>
                                </div>

                                {selectedAnswer && (
                                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs font-black text-[#7F1D1D]">
                                    {selectedAnswer}
                                  </div>
                                )}
                              </div>

                              <div className="grid grid-cols-5 gap-1.5">
                                {question.options?.map((option) => {
                                  const selected =
                                    selectedAnswer === option;

                                  return (
                                    <button
                                      key={option}
                                      type="button"
                                      onClick={() =>
                                        handleAnswer(
                                          question.id,
                                          option
                                        )
                                      }
                                      className="rounded-lg py-2 text-xs font-black transition duration-200 hover:-translate-y-0.5"
                                      style={{
                                        backgroundColor:
                                          selected
                                            ? "#FFFFFF"
                                            : "rgba(255,255,255,0.10)",
                                        color: selected
                                          ? colors.redDark
                                          : "#FFFFFF",
                                        border: selected
                                          ? "2px solid #FFFFFF"
                                          : "1px solid rgba(255,255,255,0.18)",
                                      }}
                                    >
                                      {option}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

          {/* =====================================================
              OTHER SECTIONS
          ====================================================== */}

          {bolumId !== 2 && (
            <>
              {/* DRAG & DROP */}

              {bolum.dragDropContext && (
                <section className="relative mb-6">
                  <div
                    className="pointer-events-none absolute -left-3 -top-3 h-20 w-20 rounded-full border-[9px]"
                    style={{
                      borderColor: colors.red,
                      opacity: 0.04,
                    }}
                  />

                  <div className="relative">
                    <DragDropEngine
                      context={bolum.dragDropContext}
                      questions={bolum.questions}
                      answers={answers}
                      handleAnswer={handleAnswer}
                    />
                  </div>
                </section>
              )}

              {/* READING TEXT */}

              {bolum.readingText && (
                <section
                  className="relative mb-6 overflow-hidden rounded-[2rem] border bg-white shadow-md"
                  style={{
                    borderColor: "#DFDFDF",
                  }}
                >
                  <div
                    className="pointer-events-none absolute right-5 top-5 h-16 w-16 rounded-full border-[8px]"
                    style={{
                      borderColor: colors.red,
                      opacity: 0.04,
                    }}
                  />

                  <div className="relative p-6 md:p-8">
                    <div
                      className="mb-5 text-xs font-black tracking-[0.25em]"
                      style={{
                        color: colors.red,
                      }}
                    >
                      OKUMA METNİ
                    </div>

                    <div className="w-full max-w-6xl whitespace-pre-line font-serif text-xl leading-9 text-slate-800">
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
                {bolum.questions.map((question) => {
                  /* =================================================
                     Q25-29
                  ================================================== */

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

                    const letters = ["A", "B", "C"];

                    const selectedAnswer =
                      answers[question.id] || "";

                    return (
                      <div
                        key={question.id}
                        className="relative overflow-hidden rounded-[1.5rem] border bg-white p-5 shadow-sm sm:p-6"
                        style={{
                          borderColor: "#E1E1E1",
                        }}
                      >
                        <div className="mb-5 flex items-start gap-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white"
                            style={{
                              backgroundColor: colors.redDark,
                            }}
                          >
                            {question.number}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div
                              style={{
                                fontFamily:
                                  "Arial, sans-serif",
                                fontSize: "10px",
                                fontWeight: 900,
                                letterSpacing:
                                  "0.2em",
                                color: colors.red,
                              }}
                            >
                              SORU {question.number}
                            </div>

                            <div
                              style={{
                                marginTop: "4px",
                                fontFamily:
                                  "Arial, sans-serif",
                                fontSize: "18px",
                                fontWeight: 700,
                                lineHeight: 1.6,
                                color: "#1F2937",
                              }}
                            >
                              {question.text}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 md:gap-8">
                          {options.map(
                            (option, index) => {
                              const selected =
                                selectedAnswer === option;

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
                                  className="flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-all duration-200"
                                  style={{
                                    borderColor: selected
                                      ? colors.red
                                      : "#E2DDD8",

                                    backgroundColor:
                                      selected
                                        ? "#FFF6F6"
                                        : "#FFFFFF",

                                    boxShadow: selected
                                      ? "0 4px 12px rgba(127,29,29,0.08)"
                                      : "none",
                                  }}
                                >
                                  <span
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                                    style={{
                                      fontFamily:
                                        "Arial, sans-serif",
                                      fontSize: "14px",
                                      fontWeight: 900,
                                      backgroundColor:
                                        selected
                                          ? colors.red
                                          : "#F4F1EE",
                                      color: selected
                                        ? "#FFFFFF"
                                        : colors.redDark,
                                    }}
                                  >
                                    {letters[index]}
                                  </span>

                                  <span
                                    style={{
                                      display: "block",
                                      flex: 1,
                                      fontFamily:
                                        "Arial, sans-serif",
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1.5,
                                      color: selected
                                        ? colors.redDark
                                        : "#333333",
                                    }}
                                  >
                                    {option}
                                  </span>

                                  <span
                                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                    style={{
                                      borderColor: selected
                                        ? colors.red
                                        : "#C9C3BD",
                                    }}
                                  >
                                    {selected && (
                                      <span
                                        className="h-2.5 w-2.5 rounded-full"
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

                  /* =================================================
                     QOLGAN SAVOLLAR
                  ================================================== */

                  return (
                    <div key={question.id}>
                      <QuestionRenderer
                        question={question}
                        value={
                          answers[question.id] || ""
                        }
                        onChange={(value: string) =>
                          handleAnswer(
                            question.id,
                            value
                          )
                        }
                      />
                    </div>
                  );
                })}
              </section>
            </>
          )}

          {/* =====================================================
              NAVIGATION
          ====================================================== */}

          <section
            className="mt-8 mb-8 border-t pt-6"
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
                  className="rounded-xl border bg-white px-5 py-3 font-black text-slate-600 shadow-sm transition hover:bg-gray-50"
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
                  className="rounded-xl border bg-white px-5 py-3 font-black text-slate-600 shadow-sm transition hover:bg-gray-50"
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
                className="rounded-xl px-7 py-3 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
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