"use client";

import React from "react";
import { useRouter } from "next/navigation";
import OkumaLayout from "@/components/OkumaLayout";

const colors = {
  redLight: "#F8DADA",
  redSoft: "#E7A0A0",
  red: "#C62828",
  redMedium: "#A91F1F",
  redDark: "#7F1D1D",
  redDeep: "#5E1111",
};

const tests = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: `OKUMA TESTİ ${String(index + 1).padStart(2, "0")}`,
}));

export default function OkumaPage() {
  const router = useRouter();

  return (
    <OkumaLayout>
      <div className="relative min-h-screen overflow-hidden bg-white">

        {/* =====================================================
            GLOBAL DECORATIVE PATTERNS
        ====================================================== */}

        {/* Top-left glow */}
        <div
          className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full opacity-[0.05] blur-3xl"
          style={{ backgroundColor: colors.red }}
        />

        {/* Top-right glow */}
        <div
          className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full opacity-[0.04] blur-3xl"
          style={{ backgroundColor: colors.red }}
        />

        {/* Top-right double circles */}
        <div className="pointer-events-none absolute right-10 top-32 hidden xl:block">
          <div
            className="h-32 w-32 rounded-full border-[18px] opacity-10"
            style={{ borderColor: colors.red }}
          />

          <div
            className="-mt-20 ml-16 h-32 w-32 rounded-full border-[18px] opacity-10"
            style={{ borderColor: colors.redSoft }}
          />
        </div>

        {/* Left diamond */}
        <div className="pointer-events-none absolute left-6 top-[520px] hidden xl:block">
          <div
            className="h-24 w-24 rotate-45 border-[12px] opacity-10"
            style={{ borderColor: colors.redMedium }}
          />
        </div>

        {/* Right circle */}
        <div className="pointer-events-none absolute right-6 top-[1000px] hidden xl:block">
          <div
            className="h-28 w-28 rounded-full border-[14px] opacity-10"
            style={{ borderColor: colors.red }}
          />
        </div>

        {/* Left bottom circles */}
        <div className="pointer-events-none absolute left-0 top-[1550px] hidden xl:block">
          <div
            className="h-36 w-36 rounded-full border-[16px] opacity-10"
            style={{ borderColor: colors.redSoft }}
          />

          <div
            className="-mt-24 ml-20 h-28 w-28 rounded-full border-[14px] opacity-10"
            style={{ borderColor: colors.red }}
          />
        </div>

        {/* Bottom-right diamond */}
        <div className="pointer-events-none absolute bottom-48 right-8 hidden xl:block">
          <div
            className="h-24 w-24 rotate-45 border-[12px] opacity-10"
            style={{ borderColor: colors.redMedium }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl space-y-8 px-4 py-6 sm:px-6 lg:px-8">
<div className="flex items-center">
  <button
    type="button"
    onClick={() => router.push("/")}
    className="group inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-black shadow-sm transition duration-300 hover:-translate-x-1 hover:shadow-md"
    style={{
      borderColor: "#E2E2E2",
      color: colors.redDark,
    }}
  >
    <span className="text-lg transition-transform group-hover:-translate-x-0.5">
      ←
    </span>

    <span>ANA SAYFAYA DÖN</span>
  </button>
</div>
          {/* =====================================================
              HERO
          ====================================================== */}

          <section
            className="relative overflow-hidden rounded-3xl p-7 text-white shadow-xl md:p-12"
            style={{
              background:
                "linear-gradient(135deg, #7F1D1D 0%, #A91F1F 55%, #C62828 100%)",
            }}
          >
            {/* Hero patterns */}
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[30px] opacity-10"
              style={{ borderColor: "#F8DADA" }}
            />

            <div
              className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full border-[26px] opacity-10"
              style={{ borderColor: "#F8DADA" }}
            />

            <div className="absolute bottom-8 right-32 hidden lg:block">
              <div
                className="h-20 w-20 rotate-45 border-[10px] opacity-10"
                style={{ borderColor: "#F8DADA" }}
              />
            </div>

            <div className="relative max-w-4xl">
              <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black tracking-wide">
                TÜRK DİLİ MULTILEVEL • OKUMA
              </div>

              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                Türkçe Okuma
                <br />
                CEFR Sınavları
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
                B1, B2 ve C1 seviyelerine yönelik okuma testlerini
                çözün, sınav formatına alışın ve Türkçe okuma
                becerilerinizi geliştirin.
              </p>
            </div>
          </section>

          {/* =====================================================
              INFO CARDS
          ====================================================== */}

          <section className="grid gap-5 md:grid-cols-3">
            <InfoCard
              value="10"
              title="OKUMA TESTİ"
              description="Farklı içerik ve soru yapılarından oluşan testler."
            />

            <InfoCard
              value="B1 • B2 • C1"
              title="SEVİYELER"
              description="CEFR seviyelerine göre hazırlanmış çalışmalar."
            />

            <InfoCard
              value="CEFR"
              title="SINAV FORMATI"
              description="Sınav hazırlığına uygun interaktif test sistemi."
            />
          </section>

          {/* =====================================================
              TESTLER
          ====================================================== */}

          <section
            className="relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm md:p-10"
            style={{ borderColor: "#E2E2E2" }}
          >
            {/* Section decorations */}
            <div className="absolute right-6 top-6 hidden md:block">
              <div
                className="h-20 w-20 rounded-full border-[10px] opacity-5"
                style={{ borderColor: colors.red }}
              />
            </div>

            <div className="absolute bottom-6 left-6 hidden md:block">
              <div
                className="h-16 w-16 rotate-45 border-[8px] opacity-5"
                style={{ borderColor: colors.redSoft }}
              />
            </div>

            <div className="relative">
              <div className="mb-8">
                <div
                  className="text-sm font-black tracking-[0.25em]"
                  style={{ color: colors.red }}
                >
                  TESTLER
                </div>

                <h2
                  className="mt-2 text-3xl font-black md:text-4xl"
                  style={{ color: colors.redDark }}
                >
                  Okuma testleri
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-500">
                  Çalışmak istediğiniz testi seçin ve sınava başlayın.
                </p>
              </div>

              {/* Test grid */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {tests.map((test) => (
                  <div
                    key={test.id}
                    className="group relative overflow-hidden rounded-[1.75rem] text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    style={{
                      background:
                        "linear-gradient(145deg, #7F1D1D 0%, #8F2222 55%, #A91F1F 100%)",
                    }}
                  >
                    {/* Decorative circle */}
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full border-[16px] opacity-10"
                      style={{ borderColor: "#F8DADA" }}
                    />

                    {/* Decorative diamond */}
                    <div
                      className="absolute -bottom-10 -left-10 h-24 w-24 rotate-45 border-[10px] opacity-10"
                      style={{ borderColor: "#F8DADA" }}
                    />

                    <div className="relative p-6">

                      {/* Number + CEFR */}
                      <div className="flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-lg font-black">
                          {String(test.id).padStart(2, "0")}
                        </div>

                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-black tracking-[0.15em] text-white/80">
                          CEFR
                        </span>
                      </div>

                      {/* Test title */}
                      <h3 className="mt-7 text-2xl font-black text-white">
                        {test.title}
                      </h3>

                      {/* Levels */}
                      <div className="mt-5 flex gap-2">
                        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black text-white/85">
                          B1
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black text-white/85">
                          B2
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black text-white/85">
                          C1
                        </span>
                      </div>

                      {/* White button */}
                      <button
                        type="button"
                        onClick={() => router.push(`/okuma/${test.id}`)}
                        className="mt-7 w-full rounded-xl bg-white px-5 py-3.5 text-sm font-black shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                        style={{ color: colors.redDark }}
                      >
                        TESTE BAŞLA →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =====================================================
              NASIL ÇALIŞIR
          ====================================================== */}

          <section
            className="relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm md:p-10"
            style={{ borderColor: "#E2E2E2" }}
          >
            <div className="absolute left-6 top-6 hidden md:block">
              <div
                className="h-20 w-20 rotate-45 border-[10px] opacity-5"
                style={{ borderColor: colors.red }}
              />
            </div>

            <div className="absolute bottom-6 right-8 hidden md:block">
              <div
                className="h-20 w-20 rounded-full border-[10px] opacity-5"
                style={{ borderColor: colors.redSoft }}
              />
            </div>

            <div className="relative">
              <div className="text-center">
                <div
                  className="text-sm font-black tracking-[0.25em]"
                  style={{ color: colors.red }}
                >
                  NASIL ÇALIŞIR?
                </div>

                <h2
                  className="mt-2 text-3xl font-black"
                  style={{ color: colors.redDark }}
                >
                  Üç adımda testinizi tamamlayın
                </h2>

                <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-500">
                  Testinizi seçin, soruları çözün ve sonuçlarınızı
                  test sonunda görüntüleyin.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                <Step
                  number="01"
                  title="Testi seçin"
                  text="Çalışmak istediğiniz OKUMA testini seçin."
                />

                <Step
                  number="02"
                  title="Soruları çözün"
                  text="Metinleri okuyun ve farklı soru türlerini cevaplayın."
                />

                <Step
                  number="03"
                  title="Sonucunuzu görün"
                  text="Test sonunda doğru, yanlış ve boş cevaplarınızı görün."
                />
              </div>
            </div>
          </section>

          {/* =====================================================
              CTA
          ====================================================== */}

          <section
            className="relative overflow-hidden rounded-3xl px-7 py-12 text-center text-white shadow-xl md:px-12"
            style={{
              background:
                "linear-gradient(135deg, #7F1D1D 0%, #A91F1F 55%, #C62828 100%)",
            }}
          >
            <div
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[26px] opacity-10"
              style={{ borderColor: "#F8DADA" }}
            />

            <div
              className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full border-[26px] opacity-10"
              style={{ borderColor: "#F8DADA" }}
            />

            <div className="absolute bottom-8 right-32 hidden lg:block">
              <div
                className="h-16 w-16 rotate-45 border-[8px] opacity-10"
                style={{ borderColor: "#F8DADA" }}
              />
            </div>

            <div className="relative">
              <div className="text-sm font-black tracking-[0.25em] text-white/60">
                HAZIRSANIZ
              </div>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Türkçe okuma seviyenizi test edin
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
                Kendinize uygun testi seçin ve sınav pratiğine başlayın.
              </p>

              <button
                type="button"
                onClick={() => router.push("/okuma/1")}
                className="mt-7 rounded-2xl bg-white px-8 py-4 font-black shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                style={{ color: colors.redDark }}
              >
                İLK TESTİ BAŞLAT →
              </button>
            </div>
          </section>

          {/* =====================================================
              FOOTER
          ====================================================== */}

          <footer
            className="relative overflow-hidden border-t bg-white px-6 py-10"
            style={{ borderColor: colors.redLight }}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border-[18px] opacity-10"
              style={{ borderColor: colors.red }}
            />

            <div
              className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full border-[18px] opacity-10"
              style={{ borderColor: colors.redSoft }}
            />

            <div className="pointer-events-none absolute bottom-8 right-44 hidden lg:block">
              <div
                className="h-14 w-14 rotate-45 border-[7px] opacity-10"
                style={{ borderColor: colors.redMedium }}
              />
            </div>

            <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

              <div>
                <div
                  className="font-black"
                  style={{ color: colors.redDark }}
                >
                  Türk Dili Multilevel
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  Türkçe CEFR sınav hazırlık platformu
                </div>

                <div className="mt-2 text-xs text-slate-400">
                  Yazar: Dilnoza Sabirova
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 sm:items-end">
                <div
                  className="text-sm font-black"
                  style={{ color: colors.red }}
                >
                  B1 • B2 • C1 • CEFR
                </div>

                <div className="text-xs text-slate-400">
                  OKUMA • TÜRK DİLİ MULTILEVEL
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </OkumaLayout>
  );
}

function InfoCard({
  value,
  title,
  description,
}: {
  value: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
      style={{ borderColor: "#DCDCDC" }}
    >
      <div
        className="absolute -right-8 -top-8 h-20 w-20 rounded-full border-[10px] opacity-5"
        style={{ borderColor: colors.red }}
      />

      <div
        className="relative text-3xl font-black"
        style={{ color: colors.red }}
      >
        {value}
      </div>

      <div
        className="relative mt-2 font-black"
        style={{ color: colors.redDark }}
      >
        {title}
      </div>

      <p className="relative mt-1 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
      style={{ borderColor: "#E2E2E2" }}
    >
      <div
        className="absolute -right-6 -top-6 h-16 w-16 rounded-full border-[8px] opacity-5"
        style={{ borderColor: colors.red }}
      />

      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-xl font-black text-white"
        style={{
          background:
            "linear-gradient(135deg, #C62828, #7F1D1D)",
        }}
      >
        {number}
      </div>

      <h3
        className="relative mt-5 text-xl font-black"
        style={{ color: colors.redDark }}
      >
        {title}
      </h3>

      <p className="relative mt-3 leading-7 text-slate-500">
        {text}
      </p>
    </div>
  );
}