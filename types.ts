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

export type Question = {
  id: string;
  type: QuestionType;
  number: number;
  text?: string;
  options?: string[];
  correctAnswer: string;

  pairs?: {
    left: string;
    right: string;
  }[];

  matchingItems?: string[];

  correctOrder?: string[];

  orderingItems?: string[];
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