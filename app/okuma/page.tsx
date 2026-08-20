"use client";

import React from "react";
import { useRouter } from "next/navigation";
import OkumaLayout from "@/components/OkumaLayout";
import { test1 } from "@/data/okuma/test1";

export default function OkumaPage() {
  const router = useRouter();

  const totalQuestions = test1.bolumler.reduce(
    (total, bolum) => total + bolum.questions.length,
    0
  );

  return (
    <OkumaLayout>
      <section className="overflow-hidden rounded-3xl bg-[#8f1717] p-7 text-white shadow-xl md:p-12">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold">
            TÜRK DİLİ • CEFR
          </div>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Türkçe Okuma
            <br />
            Sınav Platformu
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
            CEFR seviyenizi ölçmek için hazırlanmış okuma sınavlarını
            çözün, cevaplarınızı kontrol edin ve sonuçlarınızı görün.
          </p>
        </div>
      </section>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-[#e4ddd6] bg-white p-6">
          <div className="text-3xl font-black text-[#a61b1b]">5</div>
          <div className="mt-2 font-bold">Okuma Metni</div>
          <p className="mt-1 text-sm text-gray-500">
            Farklı soru türleriyle hazırlanmış bölümler.
          </p>
        </div>

        <div className="rounded-2xl border border-[#e4ddd6] bg-white p-6">
          <div className="text-3xl font-black text-[#a61b1b]">
            {totalQuestions}
          </div>
          <div className="mt-2 font-bold">Toplam Soru</div>
          <p className="mt-1 text-sm text-gray-500">
            Her doğru cevap bir puan değerindedir.
          </p>
        </div>

        <div className="rounded-2xl border border-[#e4ddd6] bg-white p-6">
          <div className="text-3xl font-black text-[#a61b1b]">
            {test1.duration} dk
          </div>
          <div className="mt-2 font-bold">Sınav Süresi</div>
          <p className="mt-1 text-sm text-gray-500">
            Sınavı tamamlamak için ayrılan süre.
          </p>
        </div>
      </div>

      <section className="mt-8 rounded-3xl border border-[#e4ddd6] bg-white p-7 shadow-sm md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-black tracking-widest text-[#a61b1b]">
              HAZIR MISINIZ?
            </div>

            <h2 className="mt-2 text-3xl font-black">
              {test1.title}
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-gray-600">
              {test1.description}
            </p>
          </div>

          <button
            onClick={() => router.push("/okuma/1")}
            className="shrink-0 rounded-2xl bg-[#a61b1b] px-8 py-4 text-lg font-black text-white shadow-lg transition hover:bg-[#8f1717] hover:-translate-y-0.5"
          >
            SINAVA BAŞLA →
          </button>
        </div>
      </section>
    </OkumaLayout>
  );
}