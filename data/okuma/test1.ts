export type QuestionType =
  | "drag-drop"
  | "multiple-choice"
  | "true-false-unknown"
  | "matching";

export type Question = {
  id: string;
  type: QuestionType;
  number: number;
  text?: string;
  options?: string[];
  correctAnswer: string;
};

export type DragDropWord = {
  id: string;
  word: string;
};

export type DragDropContext = {
  textWithBlanks: string;
  words: DragDropWord[];
};

export type OkumaBolum = {
  bolumId: number;
  title: string;
  instruction?: string;
  readingText?: string;
  dragDropContext?: DragDropContext;
  questions: Question[];
};

export type OkumaTest = {
  id: number;
  title: string;
  description: string;
  duration: number;
  bolumler: OkumaBolum[];
};

export const test1: OkumaTest = {
  id: 1,
  title: "OKUMA TESTİ 1",
  description:
    "Bu sınavda 5 okuma metni bulunmaktadır. Her doğru cevap bir puan değerindedir.",
  duration: 60,

  bolumler: [
    {
      bolumId: 1,
      title: "Teknolojinin Günlük Yaşama Etkisi",

      instruction:
        "Sorular 1–6. Metni okuyunuz. Sağdaki sözcüklerden uygun olanı sürükleyerek metindeki boşluğa bırakınız. İki sözcük kullanılmayacaktır.",

      dragDropContext: {
        textWithBlanks: `Son yıllarda teknoloji, insanların yaşam biçimini köklü şekilde değiştirmiştir. Özellikle akıllı telefonlar, tabletler ve dizüstü bilgisayarlar sayesinde insanlar neredeyse her işini dijital ortamda halledebilir hâle gelmiştir. Bu durum, hem zamandan tasarruf sağlamış hem de bilgiye erişimi [S1] hâle getirmiştir.

Eskiden bir konu hakkında bilgi edinmek için saatlerce kütüphanelerde araştırma yapmak gerekirdi, şimdi ise birkaç saniyede milyonlarca kaynağa ulaşmak mümkündür.

Ancak bu kolaylıklar bazı [S2] durumları da beraberinde getirmiştir. Teknolojik araçların aşırı kullanımı, bireyleri hareketsizliğe itmekte ve bu da çeşitli sağlık sorunlarına yol açmaktadır. Aynı zamanda dijital ortamda geçirilen uzun saatler, sosyal ilişkilerin zayıflamasına ve [S3] iletişim biçimlerinin artmasına neden olmaktadır.

Özellikle gençler arasında sosyal medya kullanımı oldukça yaygındır. Gün içinde saatlerce ekran karşısında vakit geçiren bireyler, gerçek dünyayla bağlarını koparma riskiyle karşı karşıyadır. Bu da onların hem duygusal hem de zihinsel olarak [S4] etkilenmelerine yol açabilir.

Teknoloji, bilinçli kullanıldığında yaşamı kolaylaştıran bir araçtır; ancak bilinçsiz kullanım, ciddi [S5] doğurabilir.

Uzmanlar, teknolojinin sunduğu fırsatlardan yararlanırken aynı zamanda onun getirdiği riskleri de göz önünde bulundurmayı önermektedir. Sağlıklı bir denge kurmak, hem bireysel gelişim hem de toplumsal refah açısından [S6] öneme sahiptir.`,

        words: [
          { id: "A", word: "kolay" },
          { id: "B", word: "yüzeysel" },
          { id: "C", word: "katkılar" },
          { id: "D", word: "sorunlar" },
          { id: "E", word: "olumsuz" },
          { id: "F", word: "ruhsal" },
          { id: "G", word: "hayati" },
          { id: "H", word: "sonuçlar" },
        ],
      },

      questions: [
        {
          id: "T1_B1_Q1",
          type: "drag-drop",
          number: 1,
          correctAnswer: "A",
        },
        {
          id: "T1_B1_Q2",
          type: "drag-drop",
          number: 2,
          correctAnswer: "E",
        },
        {
          id: "T1_B1_Q3",
          type: "drag-drop",
          number: 3,
          correctAnswer: "B",
        },
        {
          id: "T1_B1_Q4",
          type: "drag-drop",
          number: 4,
          correctAnswer: "F",
        },
        {
          id: "T1_B1_Q5",
          type: "drag-drop",
          number: 5,
          correctAnswer: "D",
        },
        {
          id: "T1_B1_Q6",
          type: "drag-drop",
          number: 6,
          correctAnswer: "G",
        },
      ],
    },

    {
      bolumId: 2,
      title: "Durumlar ve Bilgi Metinleri",

      instruction:
        "Sorular 7–14. Aşağıdaki durumları ve bilgi metinlerini okuyunuz. Her durum için uygun metni bulunuz. İki seçenek kullanılmayacaktır.",

      readingText: `S7 — Dijital Okuryazarlık Eğitimi

Çalışanların dijital araçları daha etkili ve güvenli kullanabilmesi için temel bilgisayar becerileri, çevrim içi güvenlik, veri yönetimi ve dijital iletişim konularında eğitimler düzenlenmektedir.

S8 — İntihal Tespit Yazılımı

Akademik çalışmaların özgünlüğünü kontrol etmek amacıyla geliştirilen yazılımlar, makalelerdeki benzerlik oranlarını analiz ederek olası intihal durumlarının belirlenmesine yardımcı olmaktadır.

S9 — Yapay Zekâ Destekli Müşteri Hizmetleri

Şirketler, yapay zekâ destekli sohbet sistemleri sayesinde müşterilerden gelen sorulara hızlı cevap vermeyi ve hizmet kalitesini artırmayı hedeflemektedir.

S10 — Sürdürülebilir Enerji

Kentsel dönüşüm projelerinde güneş, rüzgâr ve diğer yenilenebilir enerji kaynaklarının kullanılması hem enerji maliyetlerinin azaltılmasına hem de çevrenin korunmasına katkı sağlayabilir.

S11 — Eleştirel Düşünme

Eğitim programlarında öğrencilerin bilgileri sorgulaması, farklı görüşleri karşılaştırması, kanıtları değerlendirmesi ve kendi sonuçlarına ulaşması amaçlanmaktadır.

S12 — Alternatif Tedavi Yöntemleri

Bazı insanlar kronik ağrıların yönetiminde farklı tedavi yaklaşımlarını araştırmakta ve bu yöntemler hakkında uzmanlardan bilgi almaktadır.

S13 — Kişiselleştirilmiş Turizm

Turizm şirketleri, müşterilerin ilgi alanlarını ve seyahat alışkanlıklarını analiz ederek kişiye özel seyahat önerileri ve dijital hizmetler sunmaktadır.

S14 — Uluslararası Kitap Pazarlaması

Yazarlar, kitaplarını farklı ülkelerde tanıtmak amacıyla sosyal medya kampanyaları, çeviri çalışmaları ve uluslararası yayınevleriyle iş birliklerinden yararlanmaktadır.`,

      questions: [
        {
          id: "T1_B2_Q7",
          type: "matching",
          number: 7,
          text: "Bir şirket, çalışanlarının dijital okuryazarlık becerilerini artırmak için eğitim programı düzenlemek istiyor.",
          options: [
            "S7",
            "S8",
            "S9",
            "S10",
            "S11",
            "S12",
            "S13",
            "S14",
          ],
          correctAnswer: "S7",
        },
        {
          id: "T1_B2_Q8",
          type: "matching",
          number: 8,
          text: "Bir üniversite öğrencisi, akademik makalelerdeki intihal sorununu önlemek için yazılım arıyor.",
          options: [
            "S7",
            "S8",
            "S9",
            "S10",
            "S11",
            "S12",
            "S13",
            "S14",
          ],
          correctAnswer: "S8",
        },
        {
          id: "T1_B2_Q9",
          type: "matching",
          number: 9,
          text: "Bir girişimci, yapay zekâ tabanlı müşteri hizmetleri çözümü geliştirmek istiyor.",
          options: [
            "S7",
            "S8",
            "S9",
            "S10",
            "S11",
            "S12",
            "S13",
            "S14",
          ],
          correctAnswer: "S9",
        },
        {
          id: "T1_B2_Q10",
          type: "matching",
          number: 10,
          text: "Bir belediye, kentsel dönüşüm projelerinde sürdürülebilir enerji kaynaklarını kullanmak istiyor.",
          options: [
            "S7",
            "S8",
            "S9",
            "S10",
            "S11",
            "S12",
            "S13",
            "S14",
          ],
          correctAnswer: "S10",
        },
        {
          id: "T1_B2_Q11",
          type: "matching",
          number: 11,
          text: "Bir öğretmen, öğrencilerinin eleştirel düşünme becerilerini geliştirmek istiyor.",
          options: [
            "S7",
            "S8",
            "S9",
            "S10",
            "S11",
            "S12",
            "S13",
            "S14",
          ],
          correctAnswer: "S11",
        },
        {
          id: "T1_B2_Q12",
          type: "matching",
          number: 12,
          text: "Bir hasta, kronik ağrılarını yönetmek için farklı tedavi yöntemleri araştırıyor.",
          options: [
            "S7",
            "S8",
            "S9",
            "S10",
            "S11",
            "S12",
            "S13",
            "S14",
          ],
          correctAnswer: "S12",
        },
        {
          id: "T1_B2_Q13",
          type: "matching",
          number: 13,
          text: "Bir turizm şirketi, müşterilerine kişiselleştirilmiş seyahat deneyimleri sunmak istiyor.",
          options: [
            "S7",
            "S8",
            "S9",
            "S10",
            "S11",
            "S12",
            "S13",
            "S14",
          ],
          correctAnswer: "S13",
        },
        {
          id: "T1_B2_Q14",
          type: "matching",
          number: 14,
          text: "Bir yazar, kitabının uluslararası pazarda tanıtımını yapmak istiyor.",
          options: [
            "S7",
            "S8",
            "S9",
            "S10",
            "S11",
            "S12",
            "S13",
            "S14",
          ],
          correctAnswer: "S14",
        },
      ],
    },

    {
      bolumId: 3,
      title: "Dijital Güvenlik ve Siber Tehditler",

      instruction:
        "Sorular 15–20. Her paragraf için en uygun başlığı A–H arasından bulunuz. İki başlık kullanılmayacaktır.",

      readingText: `I. Günümüzde siber tehditler yalnızca devlet kurumlarını ya da büyük şirketleri değil, bireyleri de ciddi biçimde hedef alıyor. Fidye yazılımlarından kimlik hırsızlığına kadar pek çok saldırı türü dijital ortamda hızla yayılıyor. Özellikle yapay zekâ teknolojilerinin kötü niyetli kullanımı, siber suçların daha karmaşık hale gelmesine yol açıyor.

II. Birçok ülke, kişisel verilerin korunmasına yönelik yasal düzenlemeleri sıkılaştırıyor. Avrupa Birliği'nin GDPR uygulaması bu alanda önemli bir örnek oluşturuyor. Türkiye'de de KVKK gibi düzenlemelerle bu alandaki bilinç artırılmaya çalışılıyor.

III. Siber saldırıların sadece güvenlik açıklarına değil, şirketlerin finansal yapılarına da ciddi zarar verdiği biliniyor. Bir saldırı nedeniyle milyonlarca liralık kayıp yaşanabileceği gibi şirketlerin itibarı da zarar görebiliyor. Müşteri güveni sarsıldığında uzun vadeli zararlar ortaya çıkabiliyor.

IV. Kurumsal firmalar, dijital dönüşüm süreçlerinde güvenliği ön planda tutmak zorundadır. Veri merkezlerinin güvenliği, ağ altyapısının korunması ve bulut teknolojilerinin güvenilirliği bu sürecin temelini oluşturur. Uzaktan çalışma sistemleri de yeni güvenlik önlemlerini zorunlu kılmıştır.

V. Günümüz dünyasında tüm bireylerin dijital güvenlik konusunda bilinçli olması önem taşıyor. Bu bağlamda eğitim kurumlarına büyük görev düşüyor. Siber zorbalık, sahte haberler ve parola güvenliği gibi konular genç yaşlardan itibaren öğretilmelidir.

VI. Gittikçe karmaşıklaşan siber tehditler, klasik güvenlik yöntemlerinin yetersizliğini ortaya koyuyor. Bu nedenle gelecekte siber güvenlik uzmanlarına duyulan ihtiyaç daha da artacak. Üniversitelerde siber güvenlik bölümlerinin açılması ve sertifika programlarının yaygınlaştırılması önem taşıyor.`,

      questions: [
        {
          id: "T1_B3_Q15",
          type: "matching",
          number: 15,
          text: "I. paragraf",
          options: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
          ],
          correctAnswer: "H",
        },
        {
          id: "T1_B3_Q16",
          type: "matching",
          number: 16,
          text: "II. paragraf",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "B",
        },
        {
          id: "T1_B3_Q17",
          type: "matching",
          number: 17,
          text: "III. paragraf",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "C",
        },
        {
          id: "T1_B3_Q18",
          type: "matching",
          number: 18,
          text: "IV. paragraf",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "D",
        },
        {
          id: "T1_B3_Q19",
          type: "matching",
          number: 19,
          text: "V. paragraf",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "A",
        },
        {
          id: "T1_B3_Q20",
          type: "matching",
          number: 20,
          text: "VI. paragraf",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "E",
        },
      ],
    },

    {
      bolumId: 4,
      title: "Kitapların İnsan Hayatındaki Yeri",

      instruction:
        "Sorular 21–29. Metni okuyunuz ve soruları cevaplayınız.",

      readingText: `Kitaplar, insanlık tarihi kadar eski olan bilgi aktarma araçlarıdır. İlk çağlarda taşlara kazınan yazılar zamanla parşömenlere, oradan da kâğıtlara geçiş yapmıştır. Yazının icadıyla birlikte insanlar bilgilerini, düşüncelerini ve deneyimlerini gelecek kuşaklara aktarabilme imkânı bulmuşlardır. İlk kitaplar daha çok dini metinler ve resmi belgeler şeklinde ortaya çıkmıştır. Zamanla kitaplar sadece bilgi aktarma değil, aynı zamanda duygu, düşünce ve hayal dünyasının bir yansıması hâline gelmiştir.

Orta Çağ'da kitaplar sınırlı sayıda ve sadece seçkin kişiler tarafından okunabilirken, matbaanın icadıyla birlikte kitaplara ulaşmak daha kolay hâle gelmiştir. Matbaanın insanlık tarihindeki bu büyük devrimiyle kitap, halkın hayatına daha fazla girmiştir. Aydınlanma Çağı ile birlikte kitap okuma bir ihtiyaç ve kültürel bir faaliyet olarak yaygınlaşmıştır.

Günümüzde dijitalleşmenin etkisiyle kitaplar artık sadece fiziksel bir nesne olmaktan çıkmış, ekranlarda yerini almıştır. E-kitaplar, sesli kitaplar gibi yeni formatlar sayesinde insanlar zaman ve mekân fark etmeksizin kitap okuyabilir hâle gelmişlerdir. Bu durum kitaplara ulaşımı kolaylaştırsa da bazı geleneksel okurlar hâlâ kâğıdın kokusunu ve sayfa çevirmeyi tercih etmektedir.

Birçok araştırma, kitap okuma alışkanlığının bireylerin zihinsel gelişimine büyük katkı sağladığını ortaya koymuştur. Kitap okuyan bireylerin kelime hazinelerinin geniş olduğu, olaylara farklı açılardan bakabildiği ve empati yeteneklerinin geliştiği saptanmıştır. Bununla birlikte, her bireyin kitapla kurduğu ilişki farklıdır. Kimisi romanlarla duygusal bir bağ kurarken, kimisi ansiklopedik bilgileri tercih eder. Bazısı ise kitapları sadece akademik başarı için bir araç olarak görür.`,

      questions: [
        {
          id: "T1_B4_Q21",
          type: "multiple-choice",
          number: 21,
          text: "Metnin bütününe göre aşağıdaki yargılardan hangisine varılamaz?",
          options: [
            "A",
            "B",
            "C",
            "D",
          ],
          correctAnswer: "C",
        },
        {
          id: "T1_B4_Q22",
          type: "multiple-choice",
          number: 22,
          text: "“Matbaanın insanlık tarihindeki büyük devrimi” sözüyle anlatılmak istenen nedir?",
          options: [
            "A",
            "B",
            "C",
            "D",
          ],
          correctAnswer: "C",
        },
        {
          id: "T1_B4_Q23",
          type: "multiple-choice",
          number: 23,
          text: "Kitapların tarihsel yolculuğuna uygun sıralama hangisidir?",
          options: [
            "A",
            "B",
            "C",
            "D",
          ],
          correctAnswer: "B",
        },
        {
          id: "T1_B4_Q24",
          type: "multiple-choice",
          number: 24,
          text: "Metne göre aşağıdakilerden hangisi doğrudur?",
          options: [
            "A",
            "B",
            "C",
            "D",
          ],
          correctAnswer: "C",
        },
        {
          id: "T1_B4_Q25",
          type: "true-false-unknown",
          number: 25,
          text: "İlk kitaplar bilimsel araştırmalar ve felsefi metinlerden oluşmuştur.",
          options: ["DOĞRU", "YANLIŞ", "VERİLMEMİŞ"],
          correctAnswer: "YANLIŞ",
        },
        {
          id: "T1_B4_Q26",
          type: "true-false-unknown",
          number: 26,
          text: "Bazı insanlar geleneksel kitapları tercih etmeye devam etmektedir.",
          options: ["DOĞRU", "YANLIŞ", "VERİLMEMİŞ"],
          correctAnswer: "DOĞRU",
        },
        {
          id: "T1_B4_Q27",
          type: "true-false-unknown",
          number: 27,
          text: "Kitap okumanın empati kurma becerisi üzerinde olumlu etkisi vardır.",
          options: ["DOĞRU", "YANLIŞ", "VERİLMEMİŞ"],
          correctAnswer: "DOĞRU",
        },
        {
          id: "T1_B4_Q28",
          type: "true-false-unknown",
          number: 28,
          text: "Günümüzde kitapların yerini tamamen dijital formatlar almıştır.",
          options: ["DOĞRU", "YANLIŞ", "VERİLMEMİŞ"],
          correctAnswer: "YANLIŞ",
        },
        {
          id: "T1_B4_Q29",
          type: "true-false-unknown",
          number: 29,
          text: "Kitap okuma alışkanlığı bireylerin sadece akademik başarısına katkı sağlar.",
          options: ["DOĞRU", "YANLIŞ", "VERİLMEMİŞ"],
          correctAnswer: "YANLIŞ",
        },
      ],
    },

    {
      bolumId: 5,
      title: "Gençlerde Kitap Okuma Alışkanlığı",

      instruction:
        "Sorular 30–35. Metni okuyunuz ve soruları cevaplayınız.",

      readingText: `A) Son yıllarda yapılan birçok araştırma, gençlerin kitap okuma oranlarının giderek düştüğünü göstermektedir. Özellikle dijital içeriklerin artması, sosyal medyanın günlük yaşamın merkezine yerleşmesi ve dikkat sürelerinin kısalması, gençlerin kitaplara olan ilgisini azaltan temel faktörler arasında sayılmaktadır. Türkiye'de yapılan bir araştırmaya göre gençlerin %60'ı kitap okumaya zaman ayıramadığını belirtirken, %30'u kitapların sıkıcı olduğunu ifade etmektedir.

B) Bazı eğitimciler, kitap okumayı teşvik etmek için okul müfredatlarına kitap okuma saatlerinin dâhil edilmesini savunmaktadır. Bununla birlikte gençlerin sadece zorunlu okuma etkinlikleriyle değil, kendi ilgi alanlarına yönelik kitaplarla tanıştırılmaları gerektiği vurgulanmaktadır. Aksi hâlde okuma bir zorunluluk gibi algılanmakta ve öğrencilerde ters tepki yaratabilmektedir.

C) Teknolojinin sunduğu imkânlar, kitap okuma alışkanlığı açısından hem bir tehdit hem de bir fırsat oluşturmaktadır. E-kitap uygulamaları, sesli kitaplar ve dijital kütüphaneler sayesinde gençlerin kitaplara erişimi kolaylaşmıştır. Ancak aynı dijital platformlar dikkat dağıtıcı unsurlar da barındırmaktadır.

D) Psikolojik açıdan bakıldığında düzenli kitap okumanın gençlerin empati kurma yeteneklerini geliştirdiği, kelime hazinelerini zenginleştirdiği ve bilişsel kapasitelerini artırdığı bilinmektedir. Kitap okuyan gençler kendilerini daha iyi ifade edebilmekte ve eleştirel düşünme becerileri gelişmektedir.

E) Kitap okuma alışkanlığını geliştirmek amacıyla birçok ülkede çeşitli kampanyalar düzenlenmektedir. Kütüphane sayılarının artırılması, okuma festivallerinin yaygınlaştırılması ve okullarda kitap kulüplerinin kurulması bu çabaların başında gelmektedir. Ailelerin çocuklara rol model olmaları ve birlikte kitap okuma saatleri düzenlemeleri de bu süreci desteklemektedir.`,

      questions: [
        {
          id: "T1_B5_Q30",
          type: "multiple-choice",
          number: 30,
          text: "Aşağıdakilerden hangisi metinde belirtilmemiştir?",
          options: [
            "A) Gençlerin kitap okuma oranları düşmektedir.",
            "B) Sesli kitaplar sayesinde gençlerin kitaplara erişimi kolaylaşmıştır.",
            "C) Teknoloji hem fırsat hem de tehdit unsuru olabilir.",
            "D) Ailelerin çocuklara kitap okuma konusunda örnek olması önemlidir.",
          ],
          correctAnswer: "B",
        },
        {
          id: "T1_B5_Q31",
          type: "multiple-choice",
          number: 31,
          text: "Metne göre gençlerin kitap okumayı sıkıcı bulmasının nedenlerinden biri aşağıdakilerden hangisidir?",
          options: [
            "A) İlgi alanlarına uygun kitaplarla tanıştırılmamaları",
            "B) Kitapların çok pahalı olması",
            "C) Kütüphanelerin tamamen kapatılması",
            "D) Kitapların yalnızca akademik olması",
          ],
          correctAnswer: "A",
        },
        {
          id: "T1_B5_Q32",
          type: "multiple-choice",
          number: 32,
          text: "Metne göre kitap okumanın psikolojik faydalarından biri aşağıdakilerden hangisidir?",
          options: [
            "A) Kitap fiyatlarını daha iyi anlamak",
            "B) Spor aktivitelerine katılımı artırmak",
            "C) Eleştirel düşünme becerilerini geliştirmek",
            "D) Teknolojik cihazları tamamen bırakmak",
          ],
          correctAnswer: "C",
        },
        {
          id: "T1_B5_Q33",
          type: "matching",
          number: 33,
          text: "Gençler, dikkat sürelerinin kısalmasından dolayı kitaplara odaklanmakta zorlanmaktadır.",
          options: ["A", "B", "C", "D", "E"],
          correctAnswer: "A",
        },
        {
          id: "T1_B5_Q34",
          type: "matching",
          number: 34,
          text: "Kitap okuyan gençlerin kendilerini ifade etme becerileri gelişmektedir.",
          options: ["A", "B", "C", "D", "E"],
          correctAnswer: "D",
        },
        {
          id: "T1_B5_Q35",
          type: "matching",
          number: 35,
          text: "Gençlerin okuma alışkanlığını desteklemek için ailelerin davranışları önem taşımaktadır.",
          options: ["A", "B", "C", "D", "E"],
          correctAnswer: "E",
        },
      ],
    },
  ],
};