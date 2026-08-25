export type QuestionType =
  | "drag-drop"
  | "multiple-choice"
  | "true-false-unknown"
  | "matching"
  | "ordering";

export type DragDropWord = {
  id: string;
  word: string;
};

export type DragDropContext = {
  textWithBlanks: string;
  words: DragDropWord[];
};

export type MatchingPair = {
  id: string;
  left: string;
  right: string;
};

export type MatchingOption = {
  id: string;
  text: string;
};

export type MatchingAnnouncement = {
  id: string;
  title?: string;
  company?: string;
  position?: string;
  location?: string;
  body: string;
  requirements?: string[];
  contact?: string;
  phone?: string;
};

export type Question = {
  id: string;
  type: QuestionType;
  number: number;
  text?: string;
  options?: string[];
  correctAnswer: string;

  pairs?: MatchingPair[];

  matchingItems?: string[];

  orderingItems?: string[];
  correctOrder?: string[];
};

export type OkumaBolum = {
  bolumId: number;
  title: string;
  instruction?: string;
  readingText?: string;
  dragDropContext?: DragDropContext;

  questions: Question[];

  matchingOptions?: MatchingOption[];
  matchingAnnouncements?: MatchingAnnouncement[];
};

export type OkumaTest = {
  id: number;
  title: string;
  description: string;
  duration: number;
  bolumler: OkumaBolum[];
};

/* =========================================================
   TO'G'RI JAVOBLAR SONI → BALL
========================================================= */

export function getReadingScore(correctCount: number): number {
  if (correctCount <= 0) return 0;

  if (correctCount === 1) return 20;
  if (correctCount === 2) return 24;
  if (correctCount === 3) return 27;
  if (correctCount === 4) return 29;
  if (correctCount === 5) return 32;
  if (correctCount === 6) return 34;
  if (correctCount === 7) return 36;
  if (correctCount === 8) return 38;
  if (correctCount === 9) return 39;
  if (correctCount === 10) return 41;
  if (correctCount === 11) return 42;
  if (correctCount === 12) return 44;
  if (correctCount === 13) return 45;
  if (correctCount === 14) return 46;
  if (correctCount === 15) return 48;
  if (correctCount === 16) return 49;
  if (correctCount === 17) return 51;
  if (correctCount === 18) return 52;
  if (correctCount === 19) return 54;
  if (correctCount === 20) return 55;
  if (correctCount === 21) return 57;
  if (correctCount === 22) return 58;
  if (correctCount === 23) return 60;
  if (correctCount === 24) return 61;
  if (correctCount === 25) return 63;
  if (correctCount === 26) return 65;
  if (correctCount === 27) return 66;
  if (correctCount === 28) return 68;
  if (correctCount === 29) return 70;
  if (correctCount === 30) return 71;
  if (correctCount === 31) return 73;

  // 32, 33, 34, 35
  return 75;
}

/* =========================================================
   TO'G'RI JAVOBLAR SONI
========================================================= */

export function getCorrectCount(
  test: OkumaTest,
  answers: Record<string, string>,
): number {
  let correctCount = 0;

  for (const bolum of test.bolumler) {
    for (const question of bolum.questions) {
      const answer = answers[question.id];

      if (
        answer !== undefined &&
        answer !== "" &&
        answer === question.correctAnswer
      ) {
        correctCount++;
      }
    }
  }

  return correctCount;
}

/* =========================================================
   TEST NATIJASI
========================================================= */

export function getScore(
  test: OkumaTest,
  answers: Record<string, string>,
): number {
  const correctCount = getCorrectCount(test, answers);

  return getReadingScore(correctCount);
}

/* =========================================================
   CEFR DARAJASI
========================================================= */

export function getCEFRLevel(score: number): string {
  // 38 balldan kam
  if (score < 38) {
    return "YETERSİZ";
  }

  // B1: 38–50
  if (score <= 50) {
    return "B1";
  }

  // B2: 51–64
  if (score <= 64) {
    return "B2";
  }

  // C1: 65–75
  if (score <= 75) {
    return "C1";
  }

  return "YETERSİZ";
}

/* =========================================================
   SERTIFIKAT
========================================================= */

export function canReceiveCertificate(score: number): boolean {
  return score >= 38;
}