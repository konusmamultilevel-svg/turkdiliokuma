"use client";

import { useRouter } from "next/navigation";
import { okumaData } from "@/data/okumaData";

type Props = {
  testId: number;
};

export default function OkumaTestIntro({
  testId,
}: Props) {
  const router = useRouter();

  const test = okumaData.find(
    (item) => item.id === testId,
  );

  if (!test) {
    return (
      <main className="page-shell">
        <div className="error-box">
          TEST BULUNAMADI
        </div>
      </main>
    );
  }

  const totalQuestions =
    test.bolumler.reduce(
      (sum, bolum) =>
        sum + bolum.questions.length,
      0,
    );

  return (
    <main className="page-shell">
      <div className="page-container narrow">
        <button
          type="button"
          onClick={() =>
            router.push("/okuma")
          }
          className="back-link"
        >
          ← TESTLERE GERİ DÖN
        </button>

        <section className="intro-card">
          <div className="intro-badge">
            OKUMA
          </div>

          <h1>{test.title}</h1>

          <p className="intro-description">
            Bu test 5 bölümden ve toplam{" "}
            {totalQuestions} sorudan oluşmaktadır.
          </p>

          <div className="section-list">
            {test.bolumler.map((bolum) => (
              <div
                key={bolum.bolumId}
                className="section-row"
              >
                <div>
                  <strong>
                    BÖLÜM {bolum.bolumId}
                  </strong>

                  <span>
                    {bolum.title}
                  </span>
                </div>

                <b>
                  {bolum.questions.length} SORU
                </b>
              </div>
            ))}
          </div>

          <div className="notice">
            <strong>Bilgi:</strong>

            <span>
              Cevaplar bölüm sırasında
              kontrol edilmez. Testin tamamı
              bittikten sonra sonuçlarınız
              hesaplanır.
            </span>
          </div>

          <button
            type="button"
            onClick={() =>
              router.push(
                `/okuma/${test.id}/bolum/1`,
              )
            }
            className="primary-button large"
          >
            TESTE BAŞLA
            <span>→</span>
          </button>
        </section>
      </div>
    </main>
  );
}