"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";

import OkumaLayout from "@/components/OkumaLayout";
import { test1 } from "@/data/okuma/test1";
import { test2 } from "@/data/okuma/test2";

const colors = {
  redLight: "#F8DADA",
  redSoft: "#E7A0A0",
  red: "#C62828",
  redMedium: "#A91F1F",
  redDark: "#7F1D1D",
};

export default function OkumaTestPage() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);

const test = id === 1 ? test1 : test2;

if (id !== 1 && id !== 2) {
    return (
      <OkumaLayout>
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#e5ddd6] bg-white p-10 text-center shadow-sm">
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-black text-white"
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

          <p className="mt-3 text-slate-500">
            Bu test henüz hazırlanmadı.
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
            ← TESTLERE DÖN
          </button>
        </div>
      </OkumaLayout>
    );
  }

  const totalQuestions = test.bolumler.reduce(
    (sum, bolum) => sum + bolum.questions.length,
    0
  );

  return (
    <OkumaLayout>
     <div className="relative">

     
        <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

          {/* =====================================================
              BACK
          ====================================================== */}

          <button
            type="button"
            onClick={() => router.push("/okuma")}
            className="mb-5 inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-black shadow-sm transition hover:-translate-x-1 hover:shadow-md"
            style={{
              borderColor: "#DFDFDF",
              color: colors.redDark,
            }}
          >
            <span className="text-lg">
              ←
            </span>

            OKUMA TESTLERİ
          </button>

          {/* =====================================================
              HERO
          ====================================================== */}

          <section
            className="relative overflow-hidden rounded-[2rem] shadow-xl"
            style={{
              background:
                "linear-gradient(135deg, #7F1D1D 0%, #A91F1F 55%, #C62828 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-[22px]"
              style={{
                borderColor: colors.redLight,
                opacity: 0.1,
              }}
            />

            <div
              className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full border-[24px]"
              style={{
                borderColor: colors.redLight,
                opacity: 0.08,
              }}
            />

            <div className="relative p-7 sm:p-10 md:p-12">

              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black tracking-[0.2em] text-white">
                TÜRK DİLİ MULTİLEVEL • OKUMA
              </div>

              <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
                {test.title}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
                CEFR formatına uygun Türkçe okuma sınavını
                çözün ve seviyenizi test edin.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["B1", "B2", "C1", "CEFR"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black text-white"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

            </div>
          </section>

          {/* =====================================================
              INFO
          ====================================================== */}

          <section className="mt-6 grid gap-5 md:grid-cols-3">

            <InfoCard
              title="BÖLÜM"
              value={String(test.bolumler.length)}
              text="Farklı okuma soru bölümü."
            />

            <InfoCard
              title="SORU"
              value={String(totalQuestions)}
              text="Toplam test sorusu."
            />

            <InfoCard
              title="SEVİYE"
              value="B1 • B2 • C1"
              text="CEFR seviyelerine uygun."
            />

          </section>

          {/* =====================================================
              TEST CONTENT
          ====================================================== */}

          <section className="mt-6 rounded-[2rem] border border-[#e4ddd6] bg-white p-6 shadow-sm md:p-8">

            <div
              className="text-xs font-black tracking-[0.25em]"
              style={{
                color: colors.red,
              }}
            >
              TEST İÇERİĞİ
            </div>

            <h2
              className="mt-2 text-2xl font-black md:text-3xl"
              style={{
                color: colors.redDark,
              }}
            >
              Test bölümleri
            </h2>

            <div className="mt-6 space-y-3">
              {test.bolumler.map((bolum) => (
                <div
                  key={bolum.bolumId}
                  className="flex flex-col gap-3 rounded-2xl border p-4 sm:flex-row sm:items-center sm:justify-between"
                  style={{
                    borderColor: "#E8E2DD",
                  }}
                >
                  <div>
                    <div
                      className="text-xs font-black"
                      style={{
                        color: colors.red,
                      }}
                    >
                      BÖLÜM {bolum.bolumId}
                    </div>

                    <div className="mt-1 text-lg font-black text-gray-900">
                      {bolum.title}
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#FFF5F5] px-4 py-2 text-sm font-black text-[#7F1D1D]">
                    {bolum.questions.length} soru
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* =====================================================
              START
          ====================================================== */}

          <section
            className="mt-6 rounded-[2rem] border bg-white p-6 text-center shadow-sm md:p-8"
            style={{
              borderColor: colors.redLight,
            }}
          >
            <h2 className="text-2xl font-black text-gray-900">
              Sınava hazır mısınız?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-500">
              Testi başlattığınızda ilk bölüm açılacaktır.
              Cevaplarınız sınav boyunca otomatik olarak
              kaydedilecektir.
            </p>

            {/* =================================================
                TESTE BAŞLA
            ================================================== */}

            <button
              type="button"
              onClick={() =>
                router.push(
                  `/okuma/${id}/bolum/1`
                )
              }
              className="mt-6 rounded-2xl px-10 py-4 text-base font-black text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, #7F1D1D, #A91F1F)",
              }}
            >
              TESTE BAŞLA →
            </button>

          </section>

        </div>
      </div>
    </OkumaLayout>
  );
}

function InfoCard({
  title,
  value,
  text,
}: {
  title: string;
  value: string;
  text: string;
}) {
  return (
    <div
      className="rounded-2xl border bg-white p-5 shadow-sm"
      style={{
        borderColor: "#E4DDD6",
      }}
    >
      <div
        className="text-xs font-black tracking-[0.2em]"
        style={{
          color: colors.red,
        }}
      >
        {title}
      </div>

      <div
        className="mt-2 text-2xl font-black"
        style={{
          color: colors.redDark,
        }}
      >
        {value}
      </div>

      <div className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </div>
    </div>
  );
}