import type {
  OkumaTest,
} from "../../types";

/* =========================================================
   OKUMA TESTİ 2
   TOPLAM: 35 SORU
   SÜRE: 60 DAKİKA
========================================================= */

export const test2: OkumaTest = {
  id: 2,

  title: "OKUMA TESTİ 2",

  description:
    "Bu sınavda 5 okuma metni bulunmaktadır. Her doğru cevap bir puan değerindedir.",

  duration: 60,

  bolumler: [
    /* =====================================================
       BÖLÜM 1
       SORULAR 1-6
       DRAG & DROP
    ====================================================== */

    {
      bolumId: 1,

      title: "Çevre Kirliliği ve Sürdürülebilirlik",

      instruction:
        "Sorular 1–6. Aşağıdaki metni okuyunuz ve alttaki sözcükleri (A–H) kullanarak boşlukları (1–6) doldurunuz. Her sözcük yalnızca bir defa kullanılabilir. Seçmemeniz gereken iki seçenek vardır.",

      dragDropContext: {
        textWithBlanks: `Çevre kirliliği, günümüzde en ciddi küresel sorunlardan biri olarak karşımıza çıkmaktadır. Sanayileşmenin hızla arttığı günümüz dünyasında, doğa üzerindeki olumsuz etkiler her geçen gün daha da belirgin hâle gelmektedir. Hava kirliliği, su kirliliği ve orman tahribatı gibi faktörler, çevreyi [S1] ve insan sağlığını tehdit etmektedir. Bu kirliliğin azaltılması, sürdürülebilir bir dünya yaratabilmek için [S2] bir öneme sahiptir.

Çevre kirliliğinin önlenmesi için dünya genelinde çeşitli stratejiler geliştirilmiştir. Yenilenebilir enerji kaynaklarına yönelmek, karbon salınımını [S3] ve fosil yakıt kullanımını azaltmak, bu stratejilerin başında gelmektedir. Ayrıca, atıkların doğru bir şekilde yönetilmesi ve geri dönüşüm oranlarının artırılması, çevre dostu bir yaşam tarzının temellerini oluşturmaktadır. Her birey, daha bilinçli bir tüketici olarak doğaya karşı olan sorumluluğunu yerine getirebilir.

Çevre kirliliğiyle mücadelede toplumsal farkındalık yaratmak da oldukça önemlidir. İnsanlar çevre bilinci geliştirmeli ve daha sağlıklı bir yaşam için [S4] alışkanlıklar edinmelidir. Örneğin, plastik kullanımını sınırlamak, doğal kaynakları tasarruflu kullanmak ve yeşil alanları artırmak, çevrenin korunmasına yardımcı olacak basit ama etkili adımlardır. Ayrıca hükümetler ve yerel yönetimler, çevre kirliliğini azaltmak için faydalı yasalar çıkararak sürdürülebilir gelişimi teşvik [S5]. Sadece çevreyi korumakla kalmamalı, aynı zamanda ekonomiyi ve toplumu da göz önünde bulundurmalıyız. Sürdürülebilir kalkınma, doğal kaynakları aşırı tüketmeden, çevreyi koruyarak insan refahını artırma amacını güder.

Sonuç olarak, çevre kirliliğiyle mücadele sadece hükümetlerin değil, her bireyin ortak bir sorumluluğudur. Hep birlikte hareket ederek gelecek nesillere temiz ve yaşanabilir bir dünya bırakabiliriz. Bu sorumluluğu yerine getirmek, hem bizim hem de çocuklarımızın daha [S6] bir yaşam sürmelerini sağlayacaktır.`,

        words: [
          {
            id: "A",
            word: "düşürmek",
          },
          {
            id: "B",
            word: "hayati",
          },
          {
            id: "C",
            word: "sağlıklı",
          },
          {
            id: "D",
            word: "olumsuz etkilemekte",
          },
          {
            id: "E",
            word: "etmelidirler",
          },
          {
            id: "F",
            word: "engellemek",
          },
          {
            id: "G",
            word: "geliştirilecek",
          },
          {
            id: "H",
            word: "bilinçli",
          },
        ],
      },

      questions: [
        {
          id: "T2_B1_Q1",
          type: "drag-drop",
          number: 1,
          correctAnswer: "D",
        },
        {
          id: "T2_B1_Q2",
          type: "drag-drop",
          number: 2,
          correctAnswer: "B",
        },
        {
          id: "T2_B1_Q3",
          type: "drag-drop",
          number: 3,
          correctAnswer: "A",
        },
        {
          id: "T2_B1_Q4",
          type: "drag-drop",
          number: 4,
          correctAnswer: "H",
        },
        {
          id: "T2_B1_Q5",
          type: "drag-drop",
          number: 5,
          correctAnswer: "E",
        },
        {
          id: "T2_B1_Q6",
          type: "drag-drop",
          number: 6,
          correctAnswer: "C",
        },
      ],
    },

    /* =====================================================
       BÖLÜM 2
       SORULAR 7-14
       EŞLEŞTİRME
    ====================================================== */

    {
      bolumId: 2,

      title: "Spor Faaliyetleri ve Bilgi Metinleri",

      instruction:
        "Sorular 7–14. Aşağıda verilen durumları (A–J) ve bilgi metinlerini (7–14) okuyunuz. Her durum için uygun olan metni bulup uygun seçeneği işaretleyiniz. Her seçenek yalnızca bir defa kullanılabilir. Seçilmeyecek iki seçenek bulunmaktadır.",

      matchingOptions: [
        {
          id: "A",
          text:
            "Biri, basketbol takımındaki oyuncuların maç sırasında daha hızlı karar verebilmesi için özel bir eğitim programı arıyor.",
        },
        {
          id: "B",
          text:
            "Biri, futbol takımındaki oyuncuların fiziksel performansını artırmaya yönelik yeni bir antrenman programı arıyor.",
        },
        {
          id: "C",
          text:
            "Biri, faaliyetlerini sürdürebilmek için uygun bir yere taşınmak isteyen bir spor organizasyonu arıyor.",
        },
        {
          id: "D",
          text:
            "Biri, rakiplerinin stratejilerine karşı daha hazırlıklı olabilmek için strateji geliştirme kampına katılmak istiyor.",
        },
        {
          id: "E",
          text:
            "Biri, genç sporcularının teknik becerilerini geliştirmek amacıyla antrenman yöntemlerini yenileyen bir yüzme kulübü arıyor.",
        },
        {
          id: "F",
          text:
            "Biri, zihinsel sağlığını desteklemek için yoga ve meditasyon dersleri sunan bir spor salonu arıyor.",
        },
        {
          id: "G",
          text:
            "Biri, çevreye duyarlı ve geri dönüştürülebilir malzemelerin kullanıldığı bir koşu etkinliği düzenlemek istiyor.",
        },
        {
          id: "H",
          text:
            "Biri, futbolcuların teknik becerilerini geliştirmek için bireysel koçluk programları sunan bir kulüp arıyor.",
        },
        {
          id: "I",
          text:
            "Biri, atletlerin performansını artırmaya yönelik biyomekanik analiz çalışmaları yapmak istiyor.",
        },
        {
          id: "J",
          text:
            "Biri, profesyonel sporcuların daha verimli antrenman yapabilmesi için yeni teknolojik araçlar kullanan bir spor organizasyonu arıyor.",
        },
      ],

      matchingAnnouncements: [
        {
          id: "S7",
          title: "Performansını Zirveye Taşı!",
          body: `Futbol kulübünüzde özel antrenman programlarıyla hem fiziksel performansınızı hem de teknik becerilerinizi geliştirin!

Bu fırsatlarla:
• Özel egzersiz programlarıyla dayanıklılığınızı artırın,
• Hız ve çevikliğinizi geliştirin,
• Bireysel antrenmanlarla teknik becerilerinizi geliştirin.`,
        },

        {
          id: "S8",
          title: "Sporla Çevreyi Koru!",
          body: `Koşu ve spor etkinliklerinde geri dönüştürülebilir malzemeler kullanarak hem spor yapın hem de çevreyi koruyun!

Bu fırsatlarla:
• Plastik ve kâğıt gibi geri dönüştürülebilir malzemeler kullanın,
• Çevreye olan etkinizi azaltın,
• Spor yaparken çevre bilincinizi artırın.`,
        },

        {
          id: "S9",
          title: "Basketbolda Hızlı ve Akıllı Oyna!",
          body: `Basketbol oyuncularının hızlı düşünme ve doğru karar verme becerilerini geliştirmelerine yardımcı olun!

Bu fırsatlarla:
• Özel hızlı karar alma eğitimleri uygulayın,
• Oyun sırasında stratejileri hızlı bir şekilde uygulamayı öğrenin,
• Takımınızın performansını artırın.`,
        },

        {
          id: "S10",
          title: "Yüzmede Tekniğini Geliştir, Zirveye Yüz!",
          body: `Genç yüzücülerin teknik becerilerini geliştirin ve yüzme performanslarını artırın!

Bu fırsatlarla:
• Yeni ve etkili antrenman tekniklerini keşfedin,
• Sporcuların teknik becerilerini geliştirin,
• Yüzmede hız ve kontrol kazanın.`,
        },

        {
          id: "S11",
          title: "Zihnin ve Bedenin Dengede Olsun!",
          body: `Yoga ve meditasyon dersleriyle hem fiziksel hem de zihinsel sağlığınızı destekleyin!

Bu fırsatlarla:
• Stresi azaltın ve zihinsel denge sağlayın,
• Fiziksel sağlığınızı destekleyin,
• Daha enerjik ve huzurlu bir yaşam sürün.`,
        },

        {
          id: "S12",
          title: "Oyununu Zirveye Taşı!",
          body: `Futbolcuların teknik becerilerini geliştirmeleri için özel antrenman ve bireysel koçluk programlarından yararlanın!

Bu fırsatlarla:
• Kişisel ihtiyaçlarınıza uygun teknik gelişim fırsatları yakalayın,
• Hız, dayanıklılık ve oyun stratejinizi geliştirin,
• Profesyonel rehberlik ile sahada fark yaratın.`,
        },

        {
          id: "S13",
          title: "Performansını Maksimuma Çıkart!",
          body: `Sporcuların hareketlerini biyomekanik analizlerle inceleyerek performanslarını geliştirmelerine yardımcı olun!

Bu fırsatlarla:
• Tekniklerinizi geliştirin ve antrenmanlarınızı daha verimli hâle getirin,
• Sakatlanma riskinizi azaltın,
• Bilimsel yöntemlerle performansınızı artırın.`,
        },

        {
          id: "S14",
          title: "Stratejini Geliştir, Maçı Kazan!",
          body: `Tenis oyuncuları için özel antrenman kamplarıyla oyun stratejinizi geliştirin!

Bu fırsatlarla:
• Rakiplerinizin oyun tarzını analiz edin,
• Karşı stratejiler geliştirerek sahada avantaj sağlayın,
• Hızlı düşünme ve uygulama becerilerinizi geliştirin.`,
        },
      ],

      questions: [
        {
          id: "T2_B2_Q7",
          type: "matching",
          number: 7,
          text: "S7 metni hangi duruma uygundur?",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
          correctAnswer: "B",
        },
        {
          id: "T2_B2_Q8",
          type: "matching",
          number: 8,
          text: "S8 metni hangi duruma uygundur?",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
          correctAnswer: "G",
        },
        {
          id: "T2_B2_Q9",
          type: "matching",
          number: 9,
          text: "S9 metni hangi duruma uygundur?",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
          correctAnswer: "A",
        },
        {
          id: "T2_B2_Q10",
          type: "matching",
          number: 10,
          text: "S10 metni hangi duruma uygundur?",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
          correctAnswer: "E",
        },
        {
          id: "T2_B2_Q11",
          type: "matching",
          number: 11,
          text: "S11 metni hangi duruma uygundur?",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
          correctAnswer: "F",
        },
        {
          id: "T2_B2_Q12",
          type: "matching",
          number: 12,
          text: "S12 metni hangi duruma uygundur?",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
          correctAnswer: "H",
        },
        {
          id: "T2_B2_Q13",
          type: "matching",
          number: 13,
          text: "S13 metni hangi duruma uygundur?",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
          correctAnswer: "I",
        },
        {
          id: "T2_B2_Q14",
          type: "matching",
          number: 14,
          text: "S14 metni hangi duruma uygundur?",
          options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
          correctAnswer: "D",
        },
      ],
    },

    /* =====================================================
       BÖLÜM 3
       SORULAR 15-20
       PARAGRAF - BAŞLIK EŞLEŞTİRME
    ====================================================== */

    {
      bolumId: 3,

      title: "Teknolojinin Günlük Hayattaki Yeri",

      instruction:
        "Sorular 15–20. Aşağıdaki başlıkları (A–H) ve paragrafları (15–20) okuyunuz. Her paragraf için uygun bir başlık bulunuz. Her başlık yalnızca bir defa kullanılabilir.",

      readingText: `I. Günümüzde evlerimiz, yalnızca yaşamak için kullandığımız alanlar olmaktan çıkmış, teknolojinin sunduğu olanaklarla adeta “akıllı” sistemlere dönüşmüştür. Aydınlatma sistemlerinden güvenlik kameralarına, ısı kontrolünden sesli asistanlara kadar birçok cihaz uzaktan kontrol edilebilir hâle gelmiştir. Bu gelişmeler yalnızca konforu artırmakla kalmaz, aynı zamanda enerji tasarrufu ve güvenlik açısından da önemli avantajlar sağlar.

II. Teknolojinin özellikle sağlık alanında sağladığı yenilikler, bireylerin yaşam tarzlarını doğrudan etkilemektedir. Giyilebilir cihazlar sayesinde kalp atış hızı, uyku düzeni ve adım sayısı gibi birçok veri anlık olarak takip edilebilmektedir. Bu cihazlar, erken teşhis ve düzenli sağlık takibi gibi alanlarda önemli rol oynar. Teknoloji sayesinde bireyler kendi sağlık durumlarını daha yakından izleyebilir hâle gelmiştir.

III. Öğrenciler artık ders kitaplarının yanında tablet ve dizüstü bilgisayarlar kullanmakta, öğretmenler ise çevrim içi platformlar aracılığıyla etkileşimli materyaller sunmaktadır. Pandemi süreci, uzaktan eğitim sistemlerini hızla yaygınlaştırmış ve teknolojiye dayalı eğitimin önemini bir kez daha göstermiştir. Ancak bu sistemin etkin olabilmesi için öğrenci ve öğretmenlerin dijital okuryazarlık düzeylerinin yeterli olması gerekmektedir.

IV. Birçok kişi teknolojinin sunduğu hız ve erişim kolaylığı sayesinde zaman yönetimini daha etkili bir şekilde gerçekleştirmektedir. Online alışveriş, internet bankacılığı, mobil uygulamalar ve dijital takvim sistemleri bireylerin günlük hayatlarını organize etmelerine yardımcı olmaktadır. Bu tür kolaylıklar hem zamandan hem de fiziksel emekten tasarruf edilmesini sağlamaktadır.

V. Her ne kadar teknoloji günlük hayatı kolaylaştırsa da aşırı ve bilinçsiz kullanımı ciddi sonuçlara yol açabilir. Özellikle gençler arasında sosyal medya kullanımının artması, yüz yüze iletişimi azaltmakta ve yalnızlık hissini artırmaktadır. Uzun süreli ekran kullanımı uyku problemlerine, dikkat eksikliğine ve sosyal becerilerin zayıflamasına neden olabilmektedir. Bu nedenle dijital denge sağlamak günümüzün en önemli meselelerinden biridir.

VI. Şehirlerde dijitalleşmenin etkisi toplu ulaşım sistemlerinden belediye hizmetlerine kadar her alanda hissedilmektedir. Akıllı ulaşım sistemleri trafik akışını düzenleyerek zamandan tasarruf sağlamakta, mobil uygulamalar ise vatandaşların kamu hizmetlerine erişimini kolaylaştırmaktadır. Dijitalleşme, şehirlerin daha yaşanabilir ve sürdürülebilir olmasına katkı sunmaktadır.`,

      matchingOptions: [
        {
          id: "A",
          text: "Akıllı Ev Sistemlerinin Yaşam Kalitesine Etkisi",
        },
        {
          id: "B",
          text: "Teknolojinin İnsan İlişkileri Üzerindeki Etkisi",
        },
        {
          id: "C",
          text: "Dijital Bağımlılığın Günlük Hayattaki Yansımaları",
        },
        {
          id: "D",
          text: "Eğitimde Teknoloji Kullanımının Artan Önemi",
        },
        {
          id: "E",
          text: "Teknoloji Sayesinde Zaman ve Enerji Tasarrufu",
        },
        {
          id: "F",
          text: "Giyilebilir Teknolojilerin Sağlık Sektöründeki Rolü",
        },
        {
          id: "G",
          text: "Kentsel Yaşamda Dijitalleşmenin Getirdiği Kolaylıklar",
        },
        {
          id: "H",
          text: "Teknolojinin Toplumsal Eşitsizlikleri Artırma Riski",
        },
      ],

      questions: [
        {
          id: "T2_B3_Q15",
          type: "matching",
          number: 15,
          text: "I. paragraf",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "A",
        },
        {
          id: "T2_B3_Q16",
          type: "matching",
          number: 16,
          text: "II. paragraf",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "F",
        },
        {
          id: "T2_B3_Q17",
          type: "matching",
          number: 17,
          text: "III. paragraf",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "D",
        },
        {
          id: "T2_B3_Q18",
          type: "matching",
          number: 18,
          text: "IV. paragraf",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "E",
        },
        {
          id: "T2_B3_Q19",
          type: "matching",
          number: 19,
          text: "V. paragraf",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "C",
        },
        {
          id: "T2_B3_Q20",
          type: "matching",
          number: 20,
          text: "VI. paragraf",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "G",
        },
      ],
    },

    /* =====================================================
       BÖLÜM 4
       SORULAR 21-29
       ÇOKTAN SEÇMELİ + DOĞRU/YANLIŞ/VERİLMEMİŞ
    ====================================================== */

    {
      bolumId: 4,

      title: "Geleneksel Türk Mutfağı ve Beslenme Alışkanlıkları",

      instruction:
        "Sorular 21–29. Metni okuyunuz. 21–24. sorularda doğru seçeneği (A, B, C veya D) işaretleyiniz. 25–29. sorularda cümlenin DOĞRU, YANLIŞ veya VERİLMEMİŞ olduğunu belirleyiniz.",

      readingText: `Türk mutfağı, tarih boyunca Orta Asya’dan Anadolu’ya, hatta Balkanlar’dan Orta Doğu’ya kadar uzanan geniş bir coğrafyada oluşmuş, zenginleşmiş ve gelişmiş bir mutfak kültürüdür. Göçebe yaşam tarzı, tarım ve hayvancılıkla uğraşan Türk toplumlarının beslenme alışkanlıklarını da doğrudan etkilemiştir. Özellikle süt ürünleri, et ve buğdaydan yapılan yiyecekler, geleneksel Türk mutfağının temel taşları olmuştur.

Selçuklular ve Osmanlılar döneminde saray mutfağı ile halk mutfağı arasında hem farklar hem de etkileşimler oluşmuştur. Saray mutfağı daha gösterişli, çok çeşitli ve baharatlı yemeklerle öne çıkarken, halk mutfağı sadeliği, doğallığı ve yerel ürünlere dayanan yapısıyla dikkat çekmiştir. Yine de her iki mutfakta da çorba, pilav ve et yemekleri gibi ortak unsurlar yer almıştır. Türk mutfağında yemeklerin hazırlanış şekli kadar sunumu da önemlidir. Yemek, sadece karın doyurmak için değil, aynı zamanda bir sosyalleşme aracıdır.

Türk toplumunda öğünler arasında en önemlisi genellikle akşam yemeğidir. Bu öğünde aile bireyleri bir araya gelir, sohbet edilir ve günün yorgunluğu atılır. Kahvaltı ise geniş ve çeşitli oluşuyla dikkat çeker; peynir, zeytin, yumurta, bal ve kaymak gibi ürünler kahvaltı sofralarının vazgeçilmezidir. Anadolu’nun farklı bölgelerinde farklı kahvaltı alışkanlıkları görmek mümkündür. Örneğin, Güneydoğu’da daha yağlı ve etli ürünler tercih edilirken, Karadeniz’de mısır ekmeği, peynir ve tereyağı öne çıkar.

Zamanla değişen yaşam koşulları, şehirleşme ve modernleşme süreci Türk mutfağını da etkilemiştir. Hazır gıdaların artması, geleneksel yemeklerin günlük yaşamdan biraz uzaklaşmasına neden olmuştur. Ancak son yıllarda yerel mutfağa duyulan ilginin yeniden artmasıyla birlikte, geleneksel tarifler yeniden canlanmakta ve kültürel miras olarak korunmaktadır. Özellikle büyükannelerden öğrenilen yemek tarifleri, sosyal medya ve televizyon programları aracılığıyla genç kuşaklara aktarılmakta, geleneksel lezzetler yeniden değer kazanmaktadır.`,

      questions: [
        {
          id: "T2_B4_Q21",
          type: "multiple-choice",
          number: 21,
          text:
            "Metnin bütününe göre aşağıdaki yargılardan hangisine varılamaz?",
          options: [
            "A) Türk mutfağı tarih boyunca çeşitli kültürlerle etkileşim hâlinde olmuştur.",
            "B) Geleneksel mutfak, günümüzde tamamen unutulmuştur.",
            "C) Yöresel kahvaltı alışkanlıkları Türkiye’nin farklı bölgelerine göre değişiklik gösterebilir.",
            "D) Geleneksel yemek tariflerinin yeni nesillere aktarılması için çeşitli araçlar kullanılmaktadır.",
          ],
          correctAnswer: "B",
        },

        {
          id: "T2_B4_Q22",
          type: "multiple-choice",
          number: 22,
          text:
            "Metne göre, geleneksel Türk mutfağında akşam yemeğinin önemi hangi nedene dayandırılmıştır?",
          options: [
            "A) Daha sağlıklı olması",
            "B) Aile bireylerinin bir araya gelmesi",
            "C) En gösterişli yemeklerin o vakitte yapılması",
            "D) Dini geleneklerle bağlantılı olması",
          ],
          correctAnswer: "B",
        },

        {
          id: "T2_B4_Q23",
          type: "multiple-choice",
          number: 23,
          text:
            "Aşağıdaki bilgilerden hangisi, metne göre saray ve halk mutfağı arasındaki farkı en iyi özetler?",
          options: [
            "A) Her ikisi de tamamen aynı ürünleri kullanır.",
            "B) Saray mutfağı daha gösterişli ve çeşitlidir, halk mutfağı ise sade ve doğaldır.",
            "C) Halk mutfağında hiç et kullanılmazken, saray mutfağında sadece sebze yemekleri vardır.",
            "D) Saray mutfağında yemek sunumu önemli değilken, halk mutfağında çok önemlidir.",
          ],
          correctAnswer: "B",
        },

        {
          id: "T2_B4_Q24",
          type: "multiple-choice",
          number: 24,
          text: "Metne göre aşağıdakilerden hangisi doğrudur?",
          options: [
            "A) Modern yaşam tarzı, geleneksel yemeklerin yaygınlaşmasına katkı sağlamıştır.",
            "B) Türk mutfağında sadece sabah kahvaltısı önemlidir.",
            "C) Geleneksel yemek tarifleri sosyal medya aracılığıyla gençlere ulaşabilmektedir.",
            "D) Tüm Türkiye’de aynı kahvaltı ürünleri tüketilmektedir.",
          ],
          correctAnswer: "C",
        },

        {
          id: "T2_B4_Q25",
          type: "true-false-unknown",
          number: 25,
          text: "Türk mutfağı sadece et yemeklerinden oluşmaktadır.",
          options: ["DOĞRU", "YANLIŞ", "VERİLMEMİŞ"],
          correctAnswer: "YANLIŞ",
        },

        {
          id: "T2_B4_Q26",
          type: "true-false-unknown",
          number: 26,
          text:
            "Geleneksel tariflerin unutulmaması için çeşitli çabalar gösterilmektedir.",
          options: ["DOĞRU", "YANLIŞ", "VERİLMEMİŞ"],
          correctAnswer: "DOĞRU",
        },

        {
          id: "T2_B4_Q27",
          type: "true-false-unknown",
          number: 27,
          text:
            "Karadeniz kahvaltılarında daha çok sütlü tatlılar tercih edilir.",
          options: ["DOĞRU", "YANLIŞ", "VERİLMEMİŞ"],
          correctAnswer: "YANLIŞ",
        },

        {
          id: "T2_B4_Q28",
          type: "true-false-unknown",
          number: 28,
          text:
            "Saray mutfağının halk mutfağını hiç etkilemediği söylenebilir.",
          options: ["DOĞRU", "YANLIŞ", "VERİLMEMİŞ"],
          correctAnswer: "YANLIŞ",
        },

        {
          id: "T2_B4_Q29",
          type: "true-false-unknown",
          number: 29,
          text:
            "Günümüzde genç nesiller geleneksel tariflere internet üzerinden ulaşabilmektedir.",
          options: ["DOĞRU", "YANLIŞ", "VERİLMEMİŞ"],
          correctAnswer: "DOĞRU",
        },
      ],
    },

    /* =====================================================
       BÖLÜM 5
       SORULAR 30-35
       ÇOKTAN SEÇMELİ + PARAGRAF BULMA
    ====================================================== */

    {
      bolumId: 5,

      title: "Sosyal Medyanın Hayatımızdaki Rolü",

      instruction:
        "Sorular 30–35. Metni okuyunuz. 30–32. sorularda doğru seçeneği işaretleyiniz. 33–35. sorularda verilen cümlenin hangi paragrafa (A–E) ait olduğunu bulunuz.",

      readingText: `A) Son yıllarda internet teknolojisinin hızla gelişmesiyle birlikte sosyal medya, bireylerin hayatında önemli bir yer edinmiştir. İlk başlarda yalnızca arkadaşlarla iletişim kurmak amacıyla kullanılan sosyal medya platformları, zamanla çok daha farklı alanlara yayılmıştır. Bugün insanlar sosyal medya üzerinden haber alabilir, ürün satın alabilir, kamu kurumlarıyla iletişime geçebilir hatta siyasal katılımda bile bulunabilir hâle gelmiştir. Özellikle pandemi döneminde sosyal medya, bilgiye ulaşma, sosyal bağları koruma ve boş zamanları değerlendirme aracı olarak öne çıkmıştır.

B) Sosyal medyanın bireyler üzerindeki etkileri oldukça çeşitlidir. Bazı araştırmalar sosyal medyanın bireylerin sosyalleşmesine katkıda bulunduğunu, kimlik gelişimlerini desteklediğini ve bireylerin düşüncelerini özgürce ifade etmelerine olanak sağladığını ortaya koymaktadır. Özellikle gençler için sosyal medya, hem eğlenceli zaman geçirme aracı hem de kendini ifade etme platformu olmuştur. Ancak aynı araştırmalar sosyal medyanın olumsuz etkilerini de göz ardı etmemektedir. Sürekli bildirim alma, başkalarıyla kendini kıyaslama ve dijital zorbalık gibi durumlar bireylerin psikolojik sağlığını olumsuz etkileyebilir.

C) Sosyal medya, toplum yapısını da derinden etkilemektedir. Bir yandan kültürlerarası etkileşimi artırırken diğer yandan bireylerin yüz yüze iletişim becerilerinin zayıflamasına yol açabilir. Sosyal medya sayesinde farklı kültürlerle tanışan bireyler daha hoşgörülü ve açık fikirli olabilmektedir. Ancak sürekli ekran karşısında zaman geçiren bireylerin gerçek yaşamla olan bağları zayıflayabilir. Ayrıca sosyal medyada yayılan yanlış bilgiler ve dezenformasyonlar toplumda panik, güvensizlik ve kutuplaşma yaratabilmektedir.

D) Sosyal medya kullanımının eğitim, iş hayatı ve sağlık gibi alanlarda da önemli etkileri görülmektedir. Eğitimde sosyal medya sayesinde öğrenciler ders içeriklerine daha kolay ulaşabilmekte, öğretmenlerle daha etkin iletişim kurabilmektedir. İş hayatında firmalar sosyal medya üzerinden pazarlama yaparak daha geniş kitlelere ulaşmakta ve marka bilinirliğini artırmaktadır. Sağlık alanında ise uzmanlar sosyal medya aracılığıyla farkındalık kampanyaları yürütebilmekte, bireyler sağlıkla ilgili bilgiye daha hızlı erişebilmektedir. Ancak sosyal medyada sağlıkla ilgili yanlış bilgilerin de hızla yayılabildiği unutulmamalıdır.

E) Sosyal medyanın hayatımızda bu denli yer etmesi, dijital okuryazarlık becerilerinin önemini artırmıştır. Bireylerin sosyal medyada karşılaştıkları bilgilerin doğruluğunu sorgulaması, özel hayatını koruması ve bilinçli bir içerik üreticisi ve tüketicisi olması büyük önem taşımaktadır. Dijital vatandaşlık kavramı bu noktada öne çıkmakta ve bireyleri hem haklarını bilen hem de sorumluluk sahibi kullanıcılar olmaya teşvik etmektedir. Sosyal medya hayatımızın kaçınılmaz bir parçası hâline gelmiş olsa da onunla olan ilişkimizin sağlıklı ve dengeli bir şekilde yürütülmesi gerektiği açıktır.`,

      questions: [
        {
          id: "T2_B5_Q30",
          type: "multiple-choice",
          number: 30,
          text:
            "Aşağıdaki cümlelerden hangisi metinden çıkarılamaz?",
          options: [
            "A) Sosyal medya, sadece bireysel kullanım için tasarlanmıştır ve toplumu etkileme gücüne sahip değildir.",
            "B) Pandemi sürecinde sosyal medya, bireylerin sosyal ilişkilerini sürdürmelerine yardımcı olmuştur.",
            "C) Sosyal medya sayesinde insanlar siyasal konularda da daha aktif olabilmektedir.",
            "D) Dijital vatandaşlık, sosyal medya kullanıcılarının sorumlu bireyler olmalarını amaçlar.",
          ],
          correctAnswer: "A",
        },

        {
          id: "T2_B5_Q31",
          type: "multiple-choice",
          number: 31,
          text:
            "Metne göre aşağıdakilerden hangisine değinilmemiştir?",
          options: [
            "A) Sosyal medyada yayılan yanlış bilgilerin toplum üzerinde oluşturabileceği risklere",
            "B) Gençlerin sosyal medya üzerinden alışveriş yapma davranışlarına",
            "C) Sosyal medyanın eğitim sürecine sağladığı katkılara",
            "D) Kültürlerarası etkileşimde sosyal medyanın oynadığı role",
          ],
          correctAnswer: "B",
        },

        {
          id: "T2_B5_Q32",
          type: "multiple-choice",
          number: 32,
          text:
            "Aşağıdaki yargılardan hangisine metinden ulaşılamaz?",
          options: [
            "A) Sosyal medya, bazı bireylerin psikolojik sorunlar yaşamasına neden olabilmektedir.",
            "B) İnsanların sosyal medya üzerinden kamu kurumlarıyla iletişim kurabildiği belirtilmiştir.",
            "C) Sosyal medya bireylerin dijital becerilerini geliştirmesine yardımcı olur.",
            "D) Sosyal medya kullanımı tüm bireyler üzerinde yalnızca olumlu etkiler bırakmaktadır.",
          ],
          correctAnswer: "D",
        },

        {
          id: "T2_B5_Q33",
          type: "matching",
          number: 33,
          text:
            "“Gerçek yaşamla olan bağların zayıflaması” durumu metnin hangi bölümünde yer almaktadır?",
          options: ["A", "B", "C", "D", "E"],
          correctAnswer: "C",
        },

        {
          id: "T2_B5_Q34",
          type: "matching",
          number: 34,
          text:
            "“Sağlık alanında sosyal medyanın hem olumlu hem olumsuz etkileri olabileceği” fikri metnin hangi bölümünde işlenmiştir?",
          options: ["A", "B", "C", "D", "E"],
          correctAnswer: "D",
        },

        {
          id: "T2_B5_Q35",
          type: "matching",
          number: 35,
          text:
            "“Bireylerin dijital ortamda karşılaştığı bilgilerle ilgili bilinçli bir tutum geliştirmesi gerektiği” fikri metnin hangi bölümünde yer alır?",
          options: ["A", "B", "C", "D", "E"],
          correctAnswer: "E",
        },
      ],
    },
  ],
};