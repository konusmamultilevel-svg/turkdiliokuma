import Link from "next/link";
import SiteStats from "../lib/SiteStats";

const colors = {
  redLight: "#F8DADA",
  redSoft: "#E7A0A0",
  red: "#C62828",
  redMedium: "#A91F1F",
  redDark: "#7F1D1D",
  redDeep: "#5E1111",
};

const skills = [
  {
    number: "01",
    icon: "📖",
    title: "OKUMA",
    text: "Türkçe okuma becerisini geliştiren CEFR uyumlu testler.",
    active: true,
  },
  {
    number: "02",
    icon: "🎧",
    title: "DİNLEME",
    text: "Dinleme becerisini geliştirmeye yönelik çalışmalar.",
    active: false,
  },
  {
    number: "03",
    icon: "💬",
    title: "KONUŞMA",
    text: "Türkçe konuşma becerisini geliştiren uygulamalar.",
    active: false,
  },
  {
    number: "04",
    icon: "✍️",
    title: "YAZMA",
    text: "Yazma becerisini geliştirmeye yönelik çalışmalar.",
    active: false,
  },
];

const comments = [
  {
    name: "Platform Kullanıcısı",
    text: "Okuma testlerini gerçek sınav formatına yakın şekilde çözmek çok faydalı.",
  },
  {
    name: "Türkçe Öğrencisi",
    text: "Soruların bölüm bölüm olması ve test sonunda sonucu görmek oldukça kullanışlı.",
  },
  {
    name: "CEFR Adayı",
    text: "B1, B2 ve C1 seviyelerine hazırlanmak için kullanışlı bir platform.",
  },
];

export default function HomePage() {
  return (
    <main
      className="min-h-screen overflow-hidden bg-white text-slate-800"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white">
        {/* Completely white background */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#FFFFFF" }}
        />

        {/* Very subtle red decorations */}
        <div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: colors.red }}
        />

        <div
          className="absolute -right-32 top-10 h-[450px] w-[450px] rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: colors.red }}
        />

        {/* Decorative circles */}
        <div className="absolute right-10 top-24 hidden opacity-10 lg:block">
          <div
            className="h-32 w-32 rounded-full border-[18px]"
            style={{ borderColor: colors.red }}
          />

          <div
            className="-mt-20 ml-16 h-32 w-32 rounded-full border-[18px]"
            style={{ borderColor: colors.redSoft }}
          />
        </div>

        <div className="absolute bottom-20 left-10 hidden opacity-10 lg:block">
          <div
            className="h-24 w-24 rotate-45 border-[12px]"
            style={{ borderColor: colors.redMedium }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 md:py-28">
          <div className="mx-auto max-w-5xl text-center">

            {/* Badge */}
            <div
              className="mx-auto inline-flex rounded-full border bg-white px-5 py-2.5 text-xs font-black tracking-[0.18em] shadow-sm"
              style={{
                borderColor: colors.redSoft,
                color: colors.redDark,
              }}
            >
              TÜRKÇE CEFR SINAV HAZIRLIK PLATFORMU
            </div>

            {/* Main title card */}
            <div className="relative mx-auto mt-8 max-w-4xl">

              {/* Card shadow / glow */}
              <div
                className="absolute -inset-3 rounded-[3rem] opacity-10 blur-2xl"
                style={{ backgroundColor: colors.red }}
              />

              {/* Main card */}
              <div
                className="relative overflow-hidden rounded-[2.5rem] border bg-white px-6 py-10 sm:px-12 sm:py-14"
                style={{
                  borderColor: colors.redSoft,
                  boxShadow: "0 20px 50px rgba(127, 29, 29, 0.10)",
                }}
              >
                {/* Inner decorative pattern */}
                <div
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full border-[20px] opacity-10"
                  style={{ borderColor: colors.red }}
                />

                <div
                  className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full border-[16px] opacity-10"
                  style={{ borderColor: colors.redSoft }}
                />

                <div className="relative">

                  <h1
                    className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl"
                    style={{ color: colors.redDark }}
                  >
                    Türk Dili
                  </h1>

                  <div
                    className="mx-auto mt-2 h-1.5 w-20 rounded-full"
                    style={{ backgroundColor: colors.red }}
                  />

                  <h2
                    className="mt-3 text-4xl font-black sm:text-6xl md:text-7xl"
                    style={{ color: colors.red }}
                  >
                    Multilevel
                  </h2>

                  <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg md:text-xl">
                    Türkçe öğrenenler için hazırlanmış, CEFR seviyelerine
                    uygun interaktif eğitim ve sınav hazırlık platformu.
                  </p>

                  {/* Buttons */}
                  <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

                    <Link
                      href="/okuma"
                      className="rounded-2xl px-8 py-4 text-base font-black text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                      style={{
                        backgroundColor: colors.redDark,
                      }}
                    >
                      OKUMA TESTLERİNE BAŞLA →
                    </Link>

                    <a
                      href="#kitaplar"
                      className="rounded-2xl border-2 bg-white px-8 py-4 text-base font-black transition duration-300 hover:-translate-y-1"
                      style={{
                        borderColor: colors.red,
                        color: colors.redDark,
                      }}
                    >
                      KİTAPLARI KEŞFET
                    </a>
                  </div>

                  {/* Levels */}
                  <div className="mt-8 flex justify-center gap-3">
                    {["B1", "B2", "C1"].map((level) => (
                      <span
                        key={level}
                        className="rounded-full border bg-white px-5 py-2 text-sm font-black shadow-sm"
                        style={{
                          borderColor: colors.redSoft,
                          color: colors.redMedium,
                        }}
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-center">
  <SiteStats />
</div>
                </div>
              </div>
            </div>

            {/* Information */}
            <div
              className="mx-auto mt-8 max-w-2xl rounded-3xl border bg-white p-6 shadow-sm"
              style={{ borderColor: colors.redLight }}
            >
              <p className="text-sm leading-7 text-slate-600">
                <strong style={{ color: colors.redDark }}>
                  Türk Dili Multilevel
                </strong>{" "}
                kitapları temel alınarak hazırlanan bu platform,
                Türkçe öğrenenlerin sınav formatına uygun şekilde
                pratik yapmalarını ve gelişimlerini takip etmelerini
                amaçlamaktadır.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom separator */}
        <div
          className="relative h-2 w-full"
          style={{
            background:
              "linear-gradient(90deg, #F8DADA, #E7A0A0, #C62828, #A91F1F, #7F1D1D)",
          }}
        />
      </section>

      {/* =====================================================
          PLATFORM
      ====================================================== */}

      <section
        className="border-y bg-white px-6 py-24"
        style={{ borderColor: "#F3DADA" }}
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <span
              className="text-xs font-black tracking-[0.3em]"
              style={{ color: colors.red }}
            >
              PLATFORM
            </span>

            <h2
              className="mt-3 text-3xl font-black sm:text-4xl"
              style={{ color: colors.redDark }}
            >
              Dört temel dil becerisi
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Türkçe öğrenme sürecinizi dört temel beceri üzerinden
              destekleyin.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.number}
                className="group rounded-[2rem] border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  borderColor: skill.active
                    ? colors.redSoft
                    : "#E8E8E8",
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-black"
                    style={{ color: colors.redSoft }}
                  >
                    {skill.number}
                  </span>

                  <span className="text-3xl">
                    {skill.icon}
                  </span>
                </div>

                <h3
                  className="mt-7 text-xl font-black"
                  style={{ color: colors.redDark }}
                >
                  {skill.title}
                </h3>

                <p className="mt-3 min-h-[70px] text-sm leading-6 text-slate-500">
                  {skill.text}
                </p>

                {skill.active ? (
                  <Link
                    href="/okuma"
                    className="mt-6 inline-flex rounded-xl px-4 py-2 text-sm font-black text-white transition hover:opacity-90"
                    style={{
                      backgroundColor: colors.red,
                    }}
                  >
                    Testlere Git →
                  </Link>
                ) : (
                  <span
                    className="mt-6 inline-block text-xs font-black"
                    style={{ color: colors.redSoft }}
                  >
                    YAKINDA
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BOOKS
      ====================================================== */}

      <section
        id="kitaplar"
        className="relative overflow-hidden bg-white px-6 py-24"
      >
        {/* Decorative pattern */}
        <div
          className="absolute -right-24 top-20 h-72 w-72 rounded-full border-[30px] opacity-5"
          style={{ borderColor: colors.redDark }}
        />

        <div
          className="absolute -left-24 bottom-10 h-56 w-56 rounded-full border-[22px] opacity-5"
          style={{ borderColor: colors.red }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

            {/* Text */}
            <div>
              <span
                className="text-xs font-black tracking-[0.3em]"
                style={{ color: colors.red }}
              >
                TÜRK DİLİ MULTILEVEL
              </span>

              <h2
                className="mt-4 text-4xl font-black leading-tight sm:text-5xl"
                style={{ color: colors.redDark }}
              >
                Türkçe Multilevel
                <br />
                Kitapları
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
                Türkçe Multilevel Kitap Toplamı, Türkçeyi öğrenenler
                için farklı seviyeleri kapsayan kapsamlı bir çalışma
                serisidir.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Kitaplar, CEFR kriterlerine uygun olarak hazırlanmış
                ve öğrencilerin Türkçeyi sistemli şekilde
                geliştirmelerini desteklemek amacıyla tasarlanmıştır.
              </p>

              <div
                className="mt-8 rounded-3xl border bg-white p-6 shadow-sm"
                style={{ borderColor: colors.redLight }}
              >
                <p className="text-sm leading-7 text-slate-600">
                  Bu kitap toplamında dört temel beceri için ayrı
                  çalışmalar bulunmaktadır. Her kitap farklı bir
                  dil becerisinin geliştirilmesine odaklanır.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                {["B1", "B2", "C1"].map((level) => (
                  <div
                    key={level}
                    className="rounded-2xl border bg-white p-5 text-center shadow-sm"
                    style={{ borderColor: colors.redLight }}
                  >
                    <div
                      className="text-2xl font-black"
                      style={{ color: colors.redMedium }}
                    >
                      {level}
                    </div>

                    <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      CEFR
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book visual */}
            <div className="relative">

              <div
                className="absolute -inset-5 rounded-[3rem] opacity-10 blur-2xl"
                style={{ backgroundColor: colors.red }}
              />

              {/* Outer book frame */}
              <div
                className="relative rounded-[2.5rem] border p-3 shadow-2xl"
                style={{
                  borderColor: colors.redSoft,
                  backgroundColor: colors.redMedium,
                }}
              >
                {/* Book cover */}
                <div
                  className="rounded-[2rem] p-8 text-white sm:p-10"
                  style={{
                    background:
                      "linear-gradient(145deg, #C62828 0%, #A91F1F 65%, #7F1D1D 100%)",
                  }}
                >
                  <div className="text-xs font-black tracking-[0.3em] text-white/65">
                    TÜRKÇE EĞİTİM SERİSİ
                  </div>

                  <div className="mt-10 text-4xl font-black leading-tight sm:text-5xl">
                    TÜRK DİLİ
                  </div>

                  <div
                    className="mt-2 text-3xl font-black"
                    style={{ color: "#FBECEC" }}
                  >
                    MULTILEVEL
                  </div>

                  <div className="mt-10 h-px bg-white/20" />

                  <div className="mt-6 text-sm font-bold text-white/75">
                    B1 — B2 — C1
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {[
                      "OKUMA",
                      "DİNLEME",
                      "KONUŞMA",
                      "YAZMA",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/10 p-4"
                      >
                        <div className="text-xs font-black text-white/40">
                          0{index + 1}
                        </div>

                        <div className="mt-2 text-sm font-black">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          YAZAR
      ====================================================== */}

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div
            className="overflow-hidden rounded-[2.5rem] border bg-white shadow-xl"
            style={{ borderColor: colors.redLight }}
          >
            {/* Header */}
            <div
              className="relative overflow-hidden px-7 py-14 text-center sm:px-12"
              style={{
                background:
                  "linear-gradient(135deg, #7F1D1D 0%, #A91F1F 55%, #C62828 100%)",
              }}
            >
              <div
                className="absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-10"
                style={{ backgroundColor: colors.redLight }}
              />

              <div
                className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full opacity-10"
                style={{ backgroundColor: colors.redLight }}
              />

              <div className="relative">
                <span className="text-xs font-black tracking-[0.35em] text-white/60">
                  YAZAR
                </span>

                <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                  Dilnoza Sabirova
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70">
                  Türk Dili Multilevel kitaplarının yazarı ve
                  platformun yaratıcısı
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="grid gap-10 bg-white p-7 sm:p-10 lg:grid-cols-[1fr_280px] lg:items-center">
              <div>
                <div
                  className="mb-5 h-1 w-16 rounded-full"
                  style={{ backgroundColor: colors.red }}
                />

                <h3
                  className="text-2xl font-black sm:text-3xl"
                  style={{ color: colors.redDark }}
                >
                  Kitapların ve platformun yaratıcısı
                </h3>

                <p className="mt-6 leading-8 text-slate-600">
                  <strong style={{ color: colors.redDark }}>
                    Dilnoza Sabirova
                  </strong>{" "}
                  — “Türk Dili Multilevel” kitap serisinin yazarı,
                  kitapların telif haklarının sahibi ve bu eğitim
                  platformunun yaratıcısıdır.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  “Türk Dili Multilevel” adı altında hazırlanan
                  kitaplar; Türkçe öğrenenlerin okuma, dinleme,
                  konuşma ve yazma becerilerini geliştirmelerine
                  yönelik çalışmalar sunmaktadır.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Kitap serisi ve bu platform, öğrencilerin Türkçe
                  öğrenme sürecini daha sistemli hale getirmek,
                  farklı görev ve soru türleriyle pratik yapmalarını
                  sağlamak ve CEFR seviyelerine yönelik çalışmalarını
                  desteklemek amacıyla oluşturulmuştur.
                </p>

                {/* Author information */}
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div
                    className="rounded-2xl border bg-white p-5"
                    style={{ borderColor: colors.redLight }}
                  >
                    <div
                      className="text-xs font-black tracking-wider"
                      style={{ color: colors.redSoft }}
                    >
                      YAZAR
                    </div>

                    <div
                      className="mt-2 font-black"
                      style={{ color: colors.redDark }}
                    >
                      Dilnoza Sabirova
                    </div>
                  </div>

                  <div
                    className="rounded-2xl border bg-white p-5"
                    style={{ borderColor: colors.redLight }}
                  >
                    <div
                      className="text-xs font-black tracking-wider"
                      style={{ color: colors.redSoft }}
                    >
                      KİTAPLAR
                    </div>

                    <div
                      className="mt-2 font-black"
                      style={{ color: colors.redDark }}
                    >
                      Türk Dili Multilevel
                    </div>
                  </div>

                  <div
                    className="rounded-2xl border bg-white p-5"
                    style={{ borderColor: colors.redLight }}
                  >
                    <div
                      className="text-xs font-black tracking-wider"
                      style={{ color: colors.redSoft }}
                    >
                      PLATFORM
                    </div>

                    <div
                      className="mt-2 font-black"
                      style={{ color: colors.redDark }}
                    >
                      Yaratıcı
                    </div>
                  </div>
                </div>
              </div>

              {/* Author visual */}
              <div className="flex justify-center">
                <div
                  className="relative flex h-56 w-56 items-center justify-center rounded-full p-2 shadow-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #F8DADA, #C62828, #7F1D1D)",
                  }}
                >
                  <div
                    className="flex h-full w-full flex-col items-center justify-center rounded-full border-4 border-white/30 text-center"
                    style={{
                      background:
                        "linear-gradient(145deg, #A91F1F, #7F1D1D)",
                    }}
                  >
                    <div className="text-5xl font-black text-white">
                      DS
                    </div>

                    <div className="mt-3 text-xs font-black tracking-[0.25em] text-white/60">
                      YAZAR
                    </div>

                    <div className="mt-2 text-sm font-bold text-white/80">
                      Dilnoza Sabirova
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div
              className="border-t bg-white px-7 py-6 text-center"
              style={{ borderColor: colors.redLight }}
            >
              <p className="text-xs font-semibold text-slate-400">
                Türk Dili Multilevel kitapları ve platformu • Dilnoza Sabirova
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TEST SİSTEMİ
      ====================================================== */}

      <section
        className="relative overflow-hidden border-y bg-white px-6 py-24"
        style={{ borderColor: colors.redLight }}
      >
        {/* Decorative design */}
        <div
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[28px] opacity-5"
          style={{ borderColor: colors.redDark }}
        />

        <div
          className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[24px] opacity-5"
          style={{ borderColor: colors.red }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">

            <span
              className="text-xs font-black tracking-[0.3em]"
              style={{ color: colors.red }}
            >
              NASIL ÇALIŞIR?
            </span>

            <h2
              className="mt-3 text-3xl font-black sm:text-4xl"
              style={{ color: colors.redDark }}
            >
              Test sistemi
            </h2>

            <p className="mt-4 text-slate-500">
              Birkaç adımda testinizi tamamlayın ve sonucunuzu görün.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Step
              number="01"
              title="Testi seçin"
              text="OKUMA bölümünden çalışmak istediğiniz testi seçin."
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
          COMMENTS
      ====================================================== */}

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <span
              className="text-xs font-black tracking-[0.3em]"
              style={{ color: colors.red }}
            >
              GERİ BİLDİRİMLER
            </span>

            <h2
              className="mt-3 text-3xl font-black sm:text-4xl"
              style={{ color: colors.redDark }}
            >
              Kullanıcıların düşünceleri
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {comments.map((comment) => (
              <div
                key={comment.name}
                className="rounded-3xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  borderColor: colors.redLight,
                  boxShadow: "0 10px 30px rgba(127, 29, 29, 0.05)",
                }}
              >
                <div
                  className="text-lg tracking-widest"
                  style={{ color: colors.red }}
                >
                  ★★★★★
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  “{comment.text}”
                </p>

                <div
                  className="mt-6 font-black"
                  style={{ color: colors.redDark }}
                >
                  {comment.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-white px-6 py-24">
        <div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-7 py-16 text-center text-white shadow-2xl sm:px-12"
          style={{
            background:
              "linear-gradient(135deg, #7F1D1D 0%, #A91F1F 55%, #C62828 100%)",
          }}
        >
          {/* CTA decoration */}
          <div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[30px] opacity-15"
            style={{ borderColor: colors.redLight }}
          />

          <div
            className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[30px] opacity-15"
            style={{ borderColor: colors.redLight }}
          />

          <div className="relative">

            <span className="text-xs font-black tracking-[0.3em] text-white/70">
              HAZIR MISINIZ?
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Türkçe seviyenizi sınayın
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/80">
              OKUMA testlerini çözün ve Türkçe becerilerinizi
              geliştirmeye başlayın.
            </p>

            <Link
              href="/okuma"
              className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-black shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ color: colors.redMedium }}
            >
              OKUMA TESTLERİNE BAŞLA →
            </Link>
          </div>
        </div>
            </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        className="relative overflow-hidden border-t bg-white px-6 py-10"
        style={{
          borderColor: colors.redLight,
        }}
      >
        {/* TOP RIGHT CIRCLE */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border-[18px] opacity-10"
          style={{
            borderColor: colors.red,
          }}
        />

        {/* BOTTOM LEFT CIRCLE */}
        <div
          className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full border-[18px] opacity-10"
          style={{
            borderColor: colors.redSoft,
          }}
        />

        {/* RIGHT DIAMOND */}
        <div className="pointer-events-none absolute bottom-8 right-44 hidden lg:block">
          <div
            className="h-14 w-14 rotate-45 border-[7px] opacity-10"
            style={{
              borderColor: colors.redMedium,
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* BRAND */}
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div>
              <div
                className="font-black"
                style={{
                  color: colors.redDark,
                }}
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

            {/* CEFR */}
            <div className="flex flex-col items-center gap-2 sm:items-end">
              <div
                className="text-sm font-black"
                style={{
                  color: colors.red,
                }}
              >
                B1 • B2 • C1 • CEFR
              </div>

              <div className="text-xs text-slate-400">
                TÜRK DİLİ MULTILEVEL
              </div>
            </div>
          </div>

          {/* CONTACTS */}
          <div
            className="mt-6 border-t pt-5"
            style={{
              borderColor: "#F0E4E4",
            }}
          >
            <div className="mb-4 text-center text-[11px] font-black tracking-[0.2em] text-slate-400">
              BİZİMLE İLETİŞİME GEÇİN
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">

              {/* PHONE */}
              <a
                href="tel:+998940885524"
                className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: "#E8DADA",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#7F1D1D]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>

                <span>+998 94 088 55 24</span>
              </a>

              {/* TELEGRAM */}
              <a
                href="https://t.me/turkdili_multilevel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: "#E8DADA",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#229ED9]"
                >
                  <path d="M21.9 3.4 18.7 20c-.24 1.17-.87 1.46-1.77.91l-4.88-3.6-2.36 2.27c-.26.26-.48.48-.98.48l.35-4.99 9.1-8.22c.4-.35-.09-.55-.62-.2L6.28 13.7l-4.78-1.5c-1.04-.33-1.06-1.04.22-1.54L20.39 3.2c.88-.32 1.65.2 1.51.2z" />
                </svg>

                <span>Telegram</span>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/turkdilimultilevelkitaplari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: "#E8DADA",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#E4405F]"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                    ry="5"
                  />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line
                    x1="17.5"
                    x2="17.51"
                    y1="6.5"
                    y2="6.5"
                  />
                </svg>

                <span>Instagram</span>
              </a>

              {/* YOUTUBE */}
              <a
                href="https://www.youtube.com/@Konu%C5%9FmaMultilevel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: "#E8DADA",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#FF0000]"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.8 31.8 0 0 0 0 12a31.8 31.8 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.8 31.8 0 0 0 24 12a31.8 31.8 0 0 0-.5-5.8zM9.6 15.5v-7L15.8 12l-6.2 3.5z" />
                </svg>

                <span>YouTube</span>
              </a>

            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}

/* =========================================================
   STEP COMPONENT
========================================================= */

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
      className="rounded-[2rem] border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{
        borderColor: "#E8E8E8",
      }}
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl font-black text-white"
        style={{
          background:
            "linear-gradient(135deg, #C62828, #7F1D1D)",
        }}
      >
        {number}
      </div>

      <h3
        className="mt-7 text-xl font-black"
        style={{ color: colors.redDark }}
      >
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-500">
        {text}
      </p>
    </div>
  );
}

