"use client";

import { useRouter } from "next/navigation";
import { okumaData } from "@/data/okumaData";

export default function OkumaTestList() {
  const router = useRouter();

  return (
    <main className="page-shell">
      <div className="page-container">
        <div className="page-heading">
          <span>OKUMA</span>
          <h1>OKUMA TESTLERİ</h1>
          <p>
            Türkçe okuma becerilerinizi test edin.
          </p>
        </div>

        <div className="test-grid">
          {okumaData.map((test) => {
            const total = test.bolumler.reduce(
              (sum, bolum) =>
                sum + bolum.questions.length,
              0,
            );

            return (
              <article
                key={test.id}
                className="test-card"
              >
                <div className="test-number">
                  {String(test.id).padStart(2, "0")}
                </div>

                <h2>{test.title}</h2>

                <div className="test-info">
                  <span>
                    5 BÖLÜM
                  </span>

                  <span>•</span>

                  <span>
                    {total} SORU
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    router.push(
                      `/okuma/${test.id}`,
                    )
                  }
                  className="primary-button"
                >
                  BAŞLA
                  <span>→</span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}