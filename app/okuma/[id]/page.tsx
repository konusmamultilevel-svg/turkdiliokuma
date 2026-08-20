"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import OkumaLayout from "@/components/OkumaLayout";
import { test1 } from "@/data/okuma/test1";

export default function TestIntroPage() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);

  if (id !== 1) {
    return (
      <OkumaLayout>
        <div className="rounded-2xl bg-white p-10 text-center">
          <h1 className="text-3xl font-black">
            TEST BULUNAMADI
          </h1>
        </div>
      </OkumaLayout>
    );
  }

  const total = test1.bolumler.reduce(
    (sum, bolum) => sum + bolum.questions.length,
    0
  );

  return (
    <OkumaLayout>
      <button
        onClick={() => router.push("/okuma")}
        className="mb-6 font-bold text-[#a61b1b] hover:underline"
      >
        ← TESTLERE DÖN
      </button>

      <div className="rounded-3xl border border-[#e4ddd6] bg-white p-7 shadow-sm md:p-12">
        <div className="text-center">
          <div className="text-sm font-black tracking-[0.25em] text-[#a61b1b]">
            CEFR TÜRKÇE
          </div>

          <h1 className="mt-3 text-4xl font-black text-[#8f1717] md:text-5xl">
            {test1.title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            {test1.description}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-[#f8f5f2] p-5 text-center">
            <div className="text-3xl font-black text-[#a61b1b]">
              5
            </div>
            <div className="mt-1 text-sm font-bold text-gray-600">
              BÖLÜM
            </div>
          </div>

          <div className="rounded-2xl bg-[#f8f5f2] p-5 text-center">
            <div className="text-3xl font-black text-[#a61b1b]">
              {total}
            </div>
            <div className="mt-1 text-sm font-bold text-gray-600">
              SORU
            </div>
          </div>

          <div className="rounded-2xl bg-[#f8f5f2] p-5 text-center">
            <div className="text-3xl font-black text-[#a61b1b]">
              {test1.duration}
            </div>
            <div className="mt-1 text-sm font-bold text-gray-600">
              DAKİKA
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="mb-4 text-xl font-black">
            SINAV BÖLÜMLERİ
          </h2>

          <div className="space-y-3">
            {test1.bolumler.map((bolum) => (
              <div
                key={bolum.bolumId}
                className="flex items-center justify-between rounded-xl border border-gray-200 p-4"
              >
                <div>
                  <span className="mr-3 font-black text-[#a61b1b]">
                    {bolum.bolumId}
                  </span>
                  <span className="font-bold">
                    {bolum.title}
                  </span>
                </div>

                <span className="text-sm font-bold text-gray-500">
                  {bolum.questions.length} soru
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => router.push("/okuma/1/bolum/1")}
            className="rounded-2xl bg-[#a61b1b] px-12 py-4 text-lg font-black text-white shadow-lg transition hover:bg-[#8f1717]"
          >
            TESTE BAŞLA →
          </button>
        </div>
      </div>
    </OkumaLayout>
  );
}