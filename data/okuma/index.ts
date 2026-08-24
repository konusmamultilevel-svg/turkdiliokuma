export {
  test1,
} from "./test1";

export {
  test2,
} from "./test2";

export {
  test3,
} from "./test3";

export {
  test4,
} from "./test4";

export {
  test5,
} from "./test5";

export {
  test6,
} from "./test6";

export {
  test7,
} from "./test7";

export {
  test8,
} from "./test8";

export {
  test9,
} from "./test9";

export {
  test10,
} from "./test10";

export type {
  QuestionType,
  Question,
  DragDropWord,
  DragDropContext,
  OkumaBolum,
  OkumaTest,
} from "../../types";

/* =====================================================
   TÜM OKUMA TESTLERİ
===================================================== */

import { test1 } from "./test1";
import { test2 } from "./test2";
import { test3 } from "./test3";
import { test4 } from "./test4";
import { test5 } from "./test5";
import { test6 } from "./test6";
import { test7 } from "./test7";
import { test8 } from "./test8";
import { test9 } from "./test9";
import { test10 } from "./test10";

export const okumaData = [
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
  test7,
  test8,
  test9,
  test10,
];

/* =====================================================
   SCORE
===================================================== */

const SCORE_TABLE: Record<number, number> = {
  0: 0,
  1: 20,
  2: 24,
  3: 27,
  4: 29,
  5: 32,
  6: 34,
  7: 36,
  8: 38,
  9: 39,
  10: 41,
  11: 42,
  12: 44,
  13: 45,
  14: 46,
  15: 48,
  16: 49,
  17: 51,
  18: 52,
  19: 54,
  20: 55,
  21: 57,
  22: 58,
  23: 60,
  24: 61,
  25: 63,
  26: 65,
  27: 66,
  28: 68,
  29: 70,
  30: 71,
  31: 73,
  32: 75,
  33: 75,
  34: 75,
  35: 75,
};

export function getScore(correctCount: number): number {
  const count = Math.max(
    0,
    Math.min(35, Math.floor(correctCount))
  );

  return SCORE_TABLE[count] ?? 0;
}

/* =====================================================
   CEFR LEVEL
===================================================== */

export function getCEFRLevel(score: number): string {
  if (score >= 65) {
    return "C1";
  }

  if (score >= 51) {
    return "B2";
  }

  if (score >= 38) {
    return "B1";
  }

  return "YETERSİZ";
}