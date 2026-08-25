useEffect(() => {
  const calculateResult = async () => {
    try {
      const saved = sessionStorage.getItem(
        "okuma_test_1_answers"
      );

      const answers: Record<string, string> = saved
        ? JSON.parse(saved)
        : {};

      const questions = test1.bolumler.flatMap(
        (bolum) => bolum.questions
      );

      let correct = 0;
      let blank = 0;

      const wrongAnswers: WrongAnswer[] = [];

      questions.forEach(
        (question: any, index: number) => {
          const answer = answers[question.id];

          if (!answer || answer.trim() === "") {
            blank++;
            return;
          }

          if (checkQuestion(question, answer)) {
            correct++;
            return;
          }

          wrongAnswers.push({
            number: index + 1,
            questionId: question.id,
            questionText: getQuestionText(
              question,
              index + 1
            ),
            userAnswer: formatAnswer(
              question,
              answer
            ),
            correctAnswer: formatAnswer(
              question,
              question.correctAnswer ?? ""
            ),
          });
        }
      );

      const total = questions.length;

      const incorrect =
        total - correct - blank;

      const percentage =
        total > 0
          ? Math.round((correct / total) * 100)
          : 0;

      const score = getScore(correct);

      const cefr = getCEFRLevel(score);

      // ================================
      // SUPABASEGA TEST NATIJASINI YOZISH
      // ================================

      let visitorId =
        localStorage.getItem(
          "turkdili_visitor_id"
        );

      if (!visitorId) {
        visitorId = crypto.randomUUID();

        localStorage.setItem(
          "turkdili_visitor_id",
          visitorId
        );
      }

      const { error: attemptError } =
        await supabase
          .from("test_attempts")
          .insert({
            visitor_id: visitorId,
            test_id: "1",
          });

      if (attemptError) {
        console.error(
          "Test attempt yozilmadi:",
          attemptError
        );
      } else {
        console.log(
          "Test attempt Supabasega yozildi"
        );
      }

      // ================================
      // NATIJANI EKRANGA CHIQARISH
      // ================================

      setResult({
        total,
        correct,
        incorrect,
        blank,
        percentage,
        score,
        cefr,
        wrongAnswers,
      });
    } catch (error) {
      console.error(
        "Natija hisoblash xatosi:",
        error
      );

      const total =
        test1.bolumler.reduce(
          (sum, bolum) =>
            sum + bolum.questions.length,
          0
        );

      setResult({
        total,
        correct: 0,
        incorrect: 0,
        blank: total,
        percentage: 0,
        score: 0,
        cefr: "Sertifika Yok",
        wrongAnswers: [],
      });
    }
  };

  calculateResult();
}, []);