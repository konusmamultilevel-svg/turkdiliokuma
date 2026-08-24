
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

export type Question = {
  id: string;
  type: QuestionType;
  number: number;
  text?: string;
  options?: string[];
  correctAnswer: string;

  orderingItems?: string[];
  correctOrder?: string[];

  pairs?: MatchingPair[];
  matchingItems?: string[];
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

export function getScore(
  test: OkumaTest,
  answers: Record<string, string>,
): number {
  let score = 0;

  for (const bolum of test.bolumler) {
    for (const question of bolum.questions) {
      const answer = answers[question.id];

      if (answer === question.correctAnswer) {
        score++;
      }
    }
  }

  return score;
}

export function getCEFRLevel(
  score: number,
  totalQuestions: number,
): string {
  if (totalQuestions <= 0) {
    return "A1";
  }

  const percentage =
    (score / totalQuestions) * 100;

  if (percentage >= 90) return "C1";
  if (percentage >= 75) return "B2";
  if (percentage >= 60) return "B1";
  if (percentage >= 45) return "A2";

  return "A1";
}
