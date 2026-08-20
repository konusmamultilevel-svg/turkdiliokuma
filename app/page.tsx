
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F5F2]">
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl w-full text-center">

          <div className="mb-6 inline-flex items-center rounded-full bg-[#A61B1B]/10 px-5 py-2 text-sm font-bold text-[#A61B1B]">
            TÜRKÇE CEFR SINAV HAZIRLIK PLATFORMU
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#8F1717]">
            Türk Dili
            <br />
            <span className="text-gray-900">
              Multilevel
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-xl md:text-2xl leading-relaxed text-gray-600">
            Türkçe seviyenizi geliştirmek ve CEFR sınavlarına hazırlanmak
            için hazırlanmış interaktif eğitim platformu.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <div className="text-3xl mb-2">📖</div>
              <h2 className="font-bold text-gray-900">
                OKUMA
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                CEFR okuma testleri
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <div className="text-3xl mb-2">🎧</div>
              <h2 className="font-bold text-gray-900">
                DİNLEME
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Dinleme çalışmaları
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <div className="text-3xl mb-2">💬</div>
              <h2 className="font-bold text-gray-900">
                KONUŞMA
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Konuşma çalışmaları
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <div className="text-3xl mb-2">✍️</div>
              <h2 className="font-bold text-gray-900">
                YAZMA
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Yazma çalışmaları
              </p>
            </div>

          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              href="/okuma"
              className="rounded-xl bg-[#A61B1B] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#8F1717]"
            >
              OKUMA TESTLERİNE BAŞLA →
            </Link>

          </div>

          <p className="mt-8 text-sm text-gray-400">
            Türkçe B1 • B2 • C1 • CEFR
          </p>

        </div>
      </section>
    </main>
  );
}
