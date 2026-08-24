import type {
  Question,
  DragDropWord,
  DragDropContext,
  OkumaBolum,
  OkumaTest,
  QuestionType,
} from "../../types";

export type {
  Question,
  DragDropWord,
  DragDropContext,
  OkumaBolum,
  OkumaTest,
  QuestionType,
};

/* =========================================================
   BÖLÜM 2 İÇİN ÖZEL TİPLER
========================================================= */

type MatchingOption = {
  id: string;
  text: string;
};

type MatchingAnnouncement = {
  id: string;
  title: string;
  company?: string;
  position?: string;
  location?: string;
  body: string;
  requirements?: string[];
  contact?: string;
  phone?: string;
};

export const test1: OkumaTest = {
  id: 1,

  title: "OKUMA TESTİ 1",

  description:
    "Bu sınavda 5 okuma metni bulunmaktadır. Her doğru cevap bir puan değerindedir.",

  duration: 60,

  bolumler: [
    /* =====================================================
       BÖLÜM 1
    ====================================================== */

    {
      bolumId: 1,

      title: "Teknolojinin Günlük Yaşama Etkisi",

      instruction:
        "Sorular 1–6. Metni okuyunuz. Her boşluk için aşağıdaki sözcüklerden uygun olanı seçiniz. İki sözcük kullanılmayacaktır.",

      dragDropContext: {
        textWithBlanks: `Son yıllarda teknoloji, insanların yaşam biçimini köklü şekilde değiştirmiştir. Özellikle akıllı telefonlar, tabletler ve dizüstü bilgisayarlar sayesinde insanlar neredeyse her işini dijital ortamda halledebilir hâle gelmiştir. Bu durum, hem zamandan tasarruf sağlamış hem de bilgiye erişimi [S1] hâle getirmiştir.

Eskiden bir konu hakkında bilgi edinmek için saatlerce kütüphanelerde araştırma yapmak gerekirdi, şimdi ise birkaç saniyede milyonlarca kaynağa ulaşmak mümkündür.

Ancak bu kolaylıklar bazı [S2] durumları da beraberinde getirmiştir. Teknolojik araçların aşırı kullanımı, bireyleri hareketsizliğe itmekte ve bu da çeşitli sağlık sorunlarına yol açmaktadır. Aynı zamanda dijital ortamda geçirilen uzun saatler, sosyal ilişkilerin zayıflamasına ve [S3] iletişim biçimlerinin artmasına neden olmaktadır.

Özellikle gençler arasında sosyal medya kullanımı oldukça yaygındır. Gün içinde saatlerce ekran karşısında vakit geçiren bireyler, gerçek dünyayla bağlarını koparma riskiyle karşı karşıyadır. Bu da onların hem duygusal hem de zihinsel olarak [S4] etkilenmelerine yol açabilir.

Teknoloji, bilinçli kullanıldığında yaşamı kolaylaştıran bir araçtır; ancak bilinçsiz kullanım, ciddi [S5] doğurabilir.

Uzmanlar, teknolojinin sunduğu fırsatlardan yararlanırken aynı zamanda onun getirdiği riskleri de göz önünde bulundurmayı önermektedir. Sağlıklı bir denge kurmak, hem bireysel gelişim hem de toplumsal refah açısından [S6] öneme sahiptir.`,

        words: [
          {
            id: "A",
            word: "kolay",
          },
          {
            id: "B",
            word: "yüzeysel",
          },
          {
            id: "C",
            word: "katkılar",
          },
          {
            id: "D",
            word: "sorunlar",
          },
          {
            id: "E",
            word: "olumsuz",
          },
          {
            id: "F",
            word: "ruhsal",
          },
          {
            id: "G",
            word: "hayati",
          },
          {
            id: "H",
            word: "sonuçlar",
          },
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

    /* =====================================================
       BÖLÜM 2
       A-J DURUMLAR
       S7-S14 İLANLAR
    ====================================================== */

    {
      bolumId: 2,

      title: "Durumlar ve Bilgi Metinleri",

      instruction:
        "Sorular 7–14. A–J durumlarını okuyunuz. S7–S14 ilanlarını inceleyiniz. Her ilan için uygun durumu A–J arasından seçiniz. İki seçenek kullanılmayacaktır.",

      /*
        A-J seçenekleri
      */
      matchingOptions: [
        {
          id: "A",
          text:
            "Bir şirket, çalışanlarının dijital okuryazarlık becerilerini artırmak için eğitim programları düzenlemek istiyor.",
        },
        {
          id: "B",
          text:
            "Bir üniversite öğrencisi, akademik makalelerdeki intihal sorununu önlemek için bir yazılım arıyor.",
        },
        {
          id: "C",
          text:
            "Bir girişimci, yapay zeka tabanlı bir müşteri hizmetleri çözümü geliştirmek için yatırım arıyor.",
        },
        {
          id: "D",
          text:
            "Bir belediye, kentsel dönüşüm projelerinde sürdürülebilir enerji kaynaklarını kullanmak istiyor.",
        },
        {
          id: "E",
          text:
            "Bir öğretmen, öğrencilerinin eleştirel düşünme becerilerini geliştirmek için yeni bir müfredat tasarlıyor.",
        },
        {
          id: "F",
          text:
            "Bir hasta, kronik ağrılarını yönetmek için alternatif tıp yöntemleri araştırıyor.",
        },
        {
          id: "G",
          text:
            "Bir turizm şirketi, müşterilerine kişiselleştirilmiş seyahat deneyimleri sunmak için teknoloji entegrasyonu yapmak istiyor.",
        },
        {
          id: "H",
          text:
            "Bir yazar, kitabının uluslararası pazarda tanıtımını yapmak için bir pazarlama stratejisi arıyor.",
        },
        {
          id: "I",
          text:
            "Bir spor kulübü, sporcuların performansını artırmak için biyomekanik analiz teknolojileri kullanmak istiyor.",
        },
        {
          id: "J",
          text:
            "Bir devlet kurumu, vatandaşların kamu hizmetlerine erişimini kolaylaştırmak için bir dijital platform geliştiriyor.",
        },
      ],

      /*
        KİTAPTAKİ S7-S14 İLANLAR
      */
      matchingAnnouncements: [
        {
          id: "S7",

         

          company: "Al Teknolojileri",

          position: "Yapay Zeka Geliştirici ve Yatırım Uzmanı",

          location: "İzmir/Karşıyaka",

          body:
            "Yapay zeka tabanlı müşteri hizmetleri çözümleri geliştirmek ve yatırım süreçlerini yönetmek için uzmanlar arıyoruz.",

          requirements: [
            "Yapay zeka ve makine öğrenmesi konularında deneyim",
            "Yatırım süreçlerine hakimiyet",
            "Proje yönetimi becerileri",
            "En az 5 yıl deneyimli",
            "İngilizce dil bilgisi (ileri seviye)",
          ],

          contact: "ik@aiteknolojileri.com",

          phone: "0 232 456 78 90",
        },

        {
          id: "S8",

          

          company: "Global Kitap Yayıncılık",

          position: "Uluslararası Pazarlama Stratejisti",

          location: "İstanbul/Levent",

          body:
            "Kitap tanıtımı için uluslararası pazarlama stratejileri geliştirecek deneyimli stratejistler arıyoruz.",

          requirements: [
            "Uluslararası pazarlama ve kitap yayıncılığı deneyimi",
            "İngilizce dil bilgisi (ileri seviye)",
            "En az 5 yıl deneyimli",
            "Yaratıcı ve analitik düşünme becerilerine sahip",
            "Seyahat engeli bulunmayan",
          ],

          contact: "ik@globalkitap.com",

          phone: "0 212 987 65 43",
        },

        {
          id: "S9",

        

          company: "Doğal Yaşam Merkezi",

          position: "Alternatif Tıp Uzmanı",

          location: "İzmir/Bornova",

          body:
            "Kronik ağrıları yönetmek için alternatif tıp yöntemleri konusunda uzmanlar arıyoruz.",

          requirements: [
            "Alternatif tıp ve doğal tedavi yöntemlerinde deneyim",
            "Tercihen akupunktur veya fitoterapi sertifikasına sahip",
            "En az 3 yıl deneyimli",
            "İletişimi kuvvetli ve hasta odaklı çalışabilen",
          ],

          contact: "ik@dogalyasam.com",

          phone: "0 232 987 65 43",
        },

        {
          id: "S10",

         

          company: "Teknoloji Akademi",

          position: "Dijital Okuryazarlık Eğitmeni",

          location: "İstanbul/Beşiktaş",

          body:
            "Firmamız, çalışanlarının dijital becerilerini geliştirmek ve iş verimliliğini artırmak amacıyla deneyimli bir dijital okuryazarlık eğitmeni arıyor.",

          requirements: [
            "Veri analizi ve siber güvenlik konularında uzmanlık",
            "Eğitim ve sunum becerileri kuvvetli",
            "En az 3 yıl deneyimli",
            "Tercihen dijital dönüşüm projelerinde çalışmış",
            "İletişimi kuvvetli ve takım çalışmasına yatkın",
          ],

          contact: "ikja teknolojiakademi.com",

          phone: "0 212 123 45 67",
        },

        {
          id: "S11",

         

          company: "Akademik Çözümler Ltd.",

          position: "Satış Temsilcisi",

          location: "Ankara/Çankaya",

          body:
            "Akademik çalışmalarda orijinalliği sağlamak için geliştirilen intihal tespit yazılımımızın satışını yapacak deneyimli temsilciler arıyoruz.",

          requirements: [
            "Satış ve pazarlama deneyimi",
            "Akademik yayıncılık sektörüne hakimiyet",
            "İkna kabiliyeti yüksek",
            "En az lisans mezunu",
            "Seyahat engeli bulunmayan",
          ],

          contact: "satis@akademik.cuzumler.com",

          phone: "0312 987 65 43",
        },

        {
          id: "S12",

       

          company: "Eğitim Vizyonu",

          position: "Eleştirel Düşünme Eğitmeni",

          location: "Ankara/Kızılay",

          body:
            "Öğrencilerin eleştirel düşünme becerilerini geliştirmek için yeni bir müfredat tasarlayacak eğitmenler arıyoruz.",

          requirements: [
            "Eğitim ve öğretim deneyimi",
            "Eleştirel düşünme ve problem çözme tekniklerine hakimiyet",
            "En az lisans mezunu",
            "Tercihen felsefe veya eğitim bilimleri alanında eğitimli",
            "İletişimi kuvvetli ve yaratıcı düşünebilen",
          ],

          contact: "ik@egitimvizyonu.com",

          phone: "0312 123 45 67",
        },

        {
          id: "S13",

         

          company: "Yeşil Şehir Danışmanlık",

          position: "Sürdürülebilir Enerji Danışmanı",

          location: "İstanbul/Şişli",

          body:
            "Kentsel dönüşüm projelerinde sürdürülebilir enerji kaynaklarını kullanacak danışmanlar arıyoruz.",

          requirements: [
            "Sürdürülebilir enerji ve çevre teknolojileri konularında uzmanlık",
            "Proje yönetimi deneyimi",
            "En az lisans mezunu",
            "Tercihen mühendislik veya çevre bilimleri alanında eğitimli",
            "İletişimi kuvvetli ve analitik düşünme becerilerine sahip",
          ],

          contact: "ik@yesilsehir.com",

          phone: "0 212 345 67 89",
        },

        {
          id: "S14",

          

          company: "Turizm Teknolojileri",

          position: "Teknoloji Entegrasyon Uzmanı",

          location: "Antalya/Lara",

          body:
            "Turizm sektöründe kişiselleştirilmiş seyahat deneyimleri sunmak için teknoloji entegrasyonu yapacak uzmanlar arıyoruz.",

          requirements: [
            "Teknoloji entegrasyonu ve yazılım geliştirme deneyimi",
            "Turizm sektörüne hakimiyet",
            "En az lisans mezunu",
            "İngilizce dil bilgisi (ileri seviye)",
            "Seyahat engeli bulunmayan",
          ],

          contact: "ik@turizmteknolojileri.com",

          phone: "0 212 345 67 89",
        },
      ] as MatchingAnnouncement[],

      questions: [
        {
          id: "T1_B2_Q7",
          type: "matching",
          number: 7,
          text: "S7 ilanı hangi duruma uygundur?",
          options: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
          ],
          correctAnswer: "C",
        },

        {
          id: "T1_B2_Q8",
          type: "matching",
          number: 8,
          text: "S8 ilanı hangi duruma uygundur?",
          options: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
          ],
          correctAnswer: "H",
        },

        {
          id: "T1_B2_Q9",
          type: "matching",
          number: 9,
          text: "S9 ilanı hangi duruma uygundur?",
          options: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
          ],
          correctAnswer: "F",
        },

        {
          id: "T1_B2_Q10",
          type: "matching",
          number: 10,
          text: "S10 ilanı hangi duruma uygundur?",
          options: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
          ],
          correctAnswer: "A",
        },

        {
          id: "T1_B2_Q11",
          type: "matching",
          number: 11,
          text: "S11 ilanı hangi duruma uygundur?",
          options: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
          ],
          correctAnswer: "B",
        },

        {
          id: "T1_B2_Q12",
          type: "matching",
          number: 12,
          text: "S12 ilanı hangi duruma uygundur?",
          options: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
          ],
          correctAnswer: "E",
        },

        {
          id: "T1_B2_Q13",
          type: "matching",
          number: 13,
          text: "S13 ilanı hangi duruma uygundur?",
          options: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
          ],
          correctAnswer: "D",
        },

        {
          id: "T1_B2_Q14",
          type: "matching",
          number: 14,
          text: "S14 ilanı hangi duruma uygundur?",
          options: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
          ],
          correctAnswer: "G",
        },
      ],
    },

    /* =====================================================
       BÖLÜM 3
    ====================================================== */

    {
      bolumId: 3,

      title: "Dijital Güvenlik ve Siber Tehditler",

      instruction:
        "Sorular 15–20. Her paragraf için en uygun başlığı A–H arasından bulunuz. İki başlık kullanılmayacaktır.",

      readingText: `I. Günümüzde siber tehditler yalnızca devlet kurumlarını ya da büyük şirketleri değil, bireyleri de ciddi biçimde hedef alıyor. Fidye yazılımlarından kimlik hırsızlığına kadar pek çok saldırı türü dijital ortamda hızla yayılıyor. Özellikle yapay zekâ teknolojilerinin kötü niyetli kullanımı, siber suçların daha karmaşık hale gelmesine yol açıyor. Artık geleneksel antivirüs yazılımları, bu saldırılara karşı yeterli koruma sağlayamıyor. Siber tehditler, hem bireylerin hem de kurumların dijital dünyada güvenliğini tehdit eden en büyük unsurlardan biri hâline gelmiş durumda.

II. Birçok ülke, kişisel verilerin korunmasına yönelik yasal düzenlemeleri sıkılaştırıyor. Avrupa Birliği’nin GDPR (Genel Veri Koruma Tüzüğü) uygulaması bu alanda önemli bir örnek oluşturuyor. Bu tür yasalar, şirketlerin kullanıcı verilerini nasıl topladığını, depoladığını ve işlediğini kontrol altına almayı amaçlıyor. Türkiye’de de KVKK gibi düzenlemelerle bu alandaki bilinç artırılmaya çalışılıyor. Ancak, yasal çerçevelerin etkili olabilmesi için hem kamu hem özel sektör çalışanlarının bu konuda yeterli eğitime sahip olması gerekiyor.

III. Siber saldırıların sadece güvenlik açıklarına değil, şirketlerin finansal yapılarına da ciddi zararlar verdiği biliniyor. Örneğin, bir bankanın sunucularına yapılan bir DDoS saldırısı nedeniyle milyonlarca dolar kayıp yaşanabiliyor. Ayrıca bu tür saldırılar, şirketlerin itibarına da büyük ölçüde zarar veriyor. Müşteri güveni sarsıldığında, uzun vadeli zararlar kaçınılmaz hâle geliyor. Bu nedenle siber güvenlik yalnızca teknik bir mesele değil, aynı zamanda ekonomik bir öncelik olarak ele alınmalıdır.

IV. Kurumsal firmalar, dijital dönüşüm süreçlerinde güvenliği ön planda tutmak zorundadır. Veri merkezlerinin güvenliği, ağ altyapısının korunması ve bulut teknolojilerinin güvenilirliği gibi faktörler bu sürecin temelini oluşturur. Ayrıca uzaktan çalışma sistemleri, yeni güvenlik önlemlerini zorunlu kılmıştır. Çalışanların farklı konumlardan sisteme erişmesi, daha geniş güvenlik duvarları ve çok katmanlı koruma sistemlerini gerektirmektedir. Başarılı bir dijital dönüşüm, güvenlik temeli olmadan mümkün değildir.

V. Günümüz dünyasında yalnızca teknik personel değil, tüm bireylerin dijital güvenlik konusunda bilinçli olması önem taşıyor. Bu bağlamda eğitim kurumlarına büyük görev düşüyor. İlköğretimden üniversiteye kadar her seviyede, dijital güvenlik farkındalığı kazandıran programlar geliştirilmelidir. Siber zorbalık, sahte haberler, parola güvenliği gibi konular genç yaşlardan itibaren öğretilmeli; böylece daha güvenli bir dijital toplum oluşturulabilir.

VI. Gittikçe karmaşıklaşan siber tehditler, klasik güvenlik yöntemlerinin yetersizliğini ortaya koyuyor. Bu nedenle gelecekte siber güvenlik uzmanlarına duyulan ihtiyaç daha da artacak. Ancak bu alanda yetişmiş insan gücü hâlâ yeterli değil. Üniversitelerde siber güvenlik bölümlerinin açılması, özel kurslar ve sertifika programlarının yaygınlaştırılması bu açığı kapatmada önemli rol oynayacaktır. Teknolojinin hızla geliştiği bir çağda, bilgili ve yetkin insan kaynağı olmadan dijital dünyayı korumak imkânsızdır.`,
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
          correctAnswer: "B",
        },

        {
          id: "T1_B3_Q17",
          type: "matching",
          number: 17,
          text: "III. paragraf",
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
          correctAnswer: "C",
        },

        {
          id: "T1_B3_Q18",
          type: "matching",
          number: 18,
          text: "IV. paragraf",
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
          correctAnswer: "D",
        },

        {
          id: "T1_B3_Q19",
          type: "matching",
          number: 19,
          text: "V. paragraf",
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
          correctAnswer: "A",
        },

        {
          id: "T1_B3_Q20",
          type: "matching",
          number: 20,
          text: "VI. paragraf",
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
          correctAnswer: "E",
        },
      ],
    },

    /* =====================================================
       BÖLÜM 4
    ====================================================== */

    {
  bolumId: 4,

  title: "Kitapların İnsan Hayatındaki Yeri",

  instruction:
    "Sorular 21–29. Metni okuyunuz. 21–24. sorularda doğru seçeneği (A, B, C veya D) işaretleyiniz. 25–29. sorularda cümlenin DOĞRU, YANLIŞ veya VERİLMEMİŞ olduğunu belirleyiniz.",

  readingText: `Kitaplar, insanlık tarihi kadar eski olan bilgi aktarma araçlarıdır. İlk çağlarda taşlara kazınan yazılar zamanla parşömenlere, oradan da kâğıtlara geçiş yapmıştır. Yazının icadıyla birlikte insanlar bilgilerini, düşüncelerini ve deneyimlerini gelecek kuşaklara aktarabilme imkânı bulmuşlardır. İlk kitaplar daha çok dini metinler ve resmi belgeler şeklinde ortaya çıkmıştır. Zamanla kitaplar sadece bilgi aktarma değil, aynı zamanda duygu, düşünce ve hayal dünyasının bir yansıması hâline gelmiştir.

Orta Çağ'da kitaplar sınırlı sayıda ve sadece seçkin kişiler tarafından okunabilirken, matbaanın icadıyla birlikte kitaplara ulaşmak daha kolay hâle gelmiştir. Matbaanın insanlık tarihindeki bu büyük devrimiyle kitap, halkın hayatına daha fazla girmiştir. Aydınlanma Çağı ile birlikte kitap okuma bir ihtiyaç ve kültürel bir faaliyet olarak yaygınlaşmıştır.

Günümüzde dijitalleşmenin etkisiyle kitaplar artık sadece fiziksel bir nesne olmaktan çıkmış, ekranlarda yerini almıştır. E-kitaplar, sesli kitaplar gibi yeni formatlar sayesinde insanlar zaman ve mekân fark etmeksizin kitap okuyabilir hâle gelmişlerdir. Bu durum, kitaplara ulaşımı kolaylaştırsa da bazı geleneksel okurlar, hâlâ kâğıdın kokusunu, sayfa çevirmeyi tercih etmektedir.

Birçok araştırma, kitap okuma alışkanlığının bireylerin zihinsel gelişimine büyük katkı sağladığını ortaya koymuştur. Kitap okuyan bireylerin kelime hazinelerinin geniş olduğu, olaylara farklı açılardan bakabildiği, empati yeteneklerinin geliştiği saptanmıştır. Bununla birlikte, her bireyin kitapla kurduğu ilişki farklıdır. Kimisi romanlarla duygusal bir bağ kurarken, kimisi ansiklopedik bilgileri tercih eder. Bazısı ise kitapları sadece akademik başarı için bir araç olarak görür. Ancak her hâlükârda kitaplar, bireylerin iç dünyasını zenginleştiren en etkili araçlardan biri olmayı sürdürmektedir.`,

  questions: [
    {
      id: "T1_B4_Q21",
      type: "multiple-choice",
      number: 21,

      text:
        "Metnin bütününe göre aşağıdaki yargılardan hangisine varılamaz?",

      options: [
        "A) Kitaplar, sadece geçmişte değil günümüzde de insan yaşamında önemlidir.",
        "B) Kitap okuma alışkanlığı, bireyin zihinsel gelişimini desteklemektedir.",
        "C) Her birey kitaplara aynı amaçla yaklaşmakta ve aynı tür kitapları tercih etmektedir.",
        "D) Kitaplar, hem bilgi hem de duygu aktarma aracıdır.",
      ],

      correctAnswer: "C",
    },

    {
      id: "T1_B4_Q22",
      type: "multiple-choice",
      number: 22,

      text:
        "Metinde geçen “matbaanın insanlık tarihindeki büyük devrimi” sözüyle anlatılmak istenen nedir?",

      options: [
        "A) Matbaanın sadece teknik bir yenilik olması",
        "B) Kitapların içeriğinde büyük değişimlerin olması",
        "C) Kitaplara ulaşmanın kolaylaşmasıyla toplumların bilgiye erişiminin artması",
        "D) Matbaanın sadece dini kitaplar basmak için kullanılması",
      ],

      correctAnswer: "C",
    },

    {
      id: "T1_B4_Q23",
      type: "multiple-choice",
      number: 23,

      text:
        "Aşağıdakilerden hangisi metne göre kitapların tarihsel yolculuğuna uygun bir sıralamadır?",

      options: [
        "A) Kâğıt – Parşömen – Taş",
        "B) Taş – Parşömen – Kâğıt",
        "C) Parşömen – Taş – Kâğıt",
        "D) Taş – Kâğıt – Parşömen",
      ],

      correctAnswer: "B",
    },

    {
      id: "T1_B4_Q24",
      type: "multiple-choice",
      number: 24,

      text:
        "Metne göre aşağıdakilerden hangisi doğrudur?",

      options: [
        "A) E-kitaplar sadece akademik amaçlarla kullanılmaktadır.",
        "B) Orta Çağ’da kitaplara ulaşmak çok kolaydı.",
        "C) Matbaanın icadı, kitapların toplumun her kesimine yayılmasına katkı sağlamıştır.",
        "D) Günümüzde kitaplar yalnızca basılı hâlde okunmaktadır.",
      ],

      correctAnswer: "C",
    },

    {
      id: "T1_B4_Q25",
      type: "true-false-unknown",
      number: 25,

      text:
        "İlk kitaplar bilimsel araştırmalar ve felsefi metinlerden oluşmuştur.",

      options: [
        "DOĞRU",
        "YANLIŞ",
        "VERİLMEMİŞ",
      ],

      correctAnswer: "YANLIŞ",
    },

    {
      id: "T1_B4_Q26",
      type: "true-false-unknown",
      number: 26,

      text:
        "Bazı insanlar geleneksel kitapları tercih etmeye devam etmektedir.",

      options: [
        "DOĞRU",
        "YANLIŞ",
        "VERİLMEMİŞ",
      ],

      correctAnswer: "DOĞRU",
    },

    {
      id: "T1_B4_Q27",
      type: "true-false-unknown",
      number: 27,

      text:
        "Kitap okumanın empati kurma becerisi üzerinde olumlu etkisi vardır.",

      options: [
        "DOĞRU",
        "YANLIŞ",
        "VERİLMEMİŞ",
      ],

      correctAnswer: "DOĞRU",
    },

    {
      id: "T1_B4_Q28",
      type: "true-false-unknown",
      number: 28,

      text:
        "Günümüzde kitapların yerini tamamen dijital formatlar almıştır.",

      options: [
        "DOĞRU",
        "YANLIŞ",
        "VERİLMEMİŞ",
      ],

      correctAnswer: "YANLIŞ",
    },

    {
      id: "T1_B4_Q29",
      type: "true-false-unknown",
      number: 29,

      text:
        "Kitap okuma alışkanlığı, bireylerin sadece akademik başarısına katkı sağlar.",

      options: [
        "DOĞRU",
        "YANLIŞ",
        "VERİLMEMİŞ",
      ],

      correctAnswer: "YANLIŞ",
    },
  ],
},

           /* =====================================================
       BÖLÜM 5
    ====================================================== */

    {
      bolumId: 5,

      title: "Gençlerde Kitap Okuma Alışkanlığı",

      instruction:
        "Sorular 30–35. Metni okuyunuz ve soruları cevaplayınız.",

      readingText: `A) Son yıllarda yapılan birçok araştırma, gençlerin kitap okuma oranlarının giderek düştüğünü göstermektedir. Özellikle dijital içeriklerin artması, sosyal medyanın günlük yaşamın merkezine yerleşmesi ve dikkat sürelerinin kısalması, gençlerin kitaplara olan ilgisini azaltan temel faktörler arasında sayılmaktadır. Türkiye’de yapılan bir araştırmaya göre, gençlerin %60’ı kitap okumaya zaman ayıramadığını belirtirken, %30’u kitapların sıkıcı olduğunu ifade etmektedir. Bu durum, okuma alışkanlığı kazanmanın yalnızca bireysel bir tercih değil, aynı zamanda toplumsal ve kültürel bir mesele olduğunu da göstermektedir.

B) Bazı eğitimciler, kitap okumayı teşvik etmek için okul müfredatlarına kitap okuma saatlerinin dahil edilmesini savunmaktadır. Bununla birlikte, gençlerin sadece zorunlu okuma etkinlikleriyle değil, kendi ilgi alanlarına yönelik kitaplarla tanıştırılmaları gerektiği vurgulanmaktadır. Aksi hâlde, okuma bir zorunluluk gibi algılanmakta ve bu da öğrencilerde ters tepki yaratmaktadır. Bu nedenle okuma sevgisi, çocuklukta başlayarak bilinçli bir şekilde geliştirilmelidir.

C) Teknolojinin sunduğu imkanlar, kitap okuma alışkanlığı açısından hem bir tehdit hem de bir fırsat oluşturmaktadır. E-kitap uygulamaları, sesli kitaplar ve dijital kütüphaneler sayesinde gençlerin kitaplara erişimi her zamankinden daha kolay hale gelmiştir. Ancak aynı dijital platformlar, aynı zamanda dikkat dağıtıcı unsurlar barındırmakta ve sürekli uyarıcılarla gençlerin odaklanma becerilerini zayıflatmaktadır. Bu bağlamda, teknolojiyi bilinçli kullanmak ve gençleri dijital okuryazarlık konusunda eğitmek büyük önem taşımaktadır.

D) Psikolojik açıdan bakıldığında, düzenli kitap okumanın gençlerin empati kurma yeteneklerini geliştirdiği, kelime haznelerini zenginleştirdiği ve bilişsel kapasitelerini artırdığı bilinmektedir. Kitap okuyan gençler, kendilerini daha iyi ifade edebilmekte, eleştirel düşünme becerileri gelişmekte ve akademik başarıları olumlu yönde etkilenmektedir. Bu faydalar, gençlerin kitap okuma alışkanlığı kazanmaları için yeterince güçlü gerekçelerdir.

E) Kitap okuma alışkanlığını geliştirmek amacıyla birçok ülkede çeşitli kampanyalar düzenlenmektedir. Kütüphane sayılarının artırılması, okuma festivallerinin yaygınlaştırılması ve okullarda kitap kulüplerinin kurulması bu çabaların başında gelmektedir. Ailelerin çocuklara rol model olmaları, birlikte kitap okuma saatleri düzenlemeleri ve evde kitap bulundurmaları da bu süreci destekleyen unsurlardır.`,

      questions: [
        {
          id: "T1_B5_Q30",
          type: "multiple-choice",
          number: 30,
          text:
            "Aşağıdakilerden hangisi metinde belirtilmemiştir?",
          options: [
            "A) Gençlerin kitap okuma oranları düşmektedir.",
            "B) Sesli kitaplar sayesinde gençlerin kitaplara ilgisi artmıştır.",
            "C) Teknoloji hem fırsat hem de tehdit unsuru olabilir.",
            "D) Ailelerin çocuklara kitap okuma konusunda örnek olması önemlidir.",
          ],
          correctAnswer: "B",
        },

        {
          id: "T1_B5_Q31",
          type: "multiple-choice",
          number: 31,
          text:
            "Metne göre gençlerin kitap okumayı sıkıcı bulmasının en önemli nedeni nedir?",
          options: [
            "A) Okuma sürelerinin kısıtlı olması",
            "B) İlgi alanlarına uygun kitaplarla tanışmamaları",
            "C) Ailelerinin onları kitap okumaya teşvik etmemesi",
            "D) Kitapların pahalı olması",
          ],
          correctAnswer: "B",
        },

        {
          id: "T1_B5_Q32",
          type: "multiple-choice",
          number: 32,
          text:
            "Metne göre kitap okumanın psikolojik faydalarından biri aşağıdakilerden hangisidir?",
          options: [
            "A) Kitap fiyatlarını daha iyi anlamak",
            "B) Spor aktivitelerine katılımın artması",
            "C) Eleştirel düşünme becerilerinin gelişmesi",
            "D) Teknolojik cihazlara olan bağımlılığın azalması",
          ],
          correctAnswer: "C",
        },

        {
          id: "T1_B5_Q33",
          type: "matching",
          number: 33,
          text:
            "Gençler, dikkat sürelerinin kısalmasından dolayı kitaplara odaklanmakta zorlanmaktadır.",
          options: [
            "A",
            "B",
            "C",
            "D",
            "E",
          ],
          correctAnswer: "A",
        },

        {
          id: "T1_B5_Q34",
          type: "matching",
          number: 34,
          text:
            "Kitap okuyan gençlerin kendilerini ifade etme becerileri gelişmektedir.",
          options: [
            "A",
            "B",
            "C",
            "D",
            "E",
          ],
          correctAnswer: "D",
        },

        {
          id: "T1_B5_Q35",
          type: "matching",
          number: 35,
          text:
            "Gençlerin okuma alışkanlığını desteklemek için ailelerin davranışları önem taşımaktadır.",
          options: [
            "A",
            "B",
            "C",
            "D",
            "E",
          ],
          correctAnswer: "E",
        },
      ],
    },
  ],
} as OkumaTest;