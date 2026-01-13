
export interface Expression {
  english: string;
  vietnamese: string;
  category: string;
}

export interface Category {
  id: number;
  name: string;
  translation: string;
}

export enum QuizStatus {
  IDLE = 'IDLE',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED'
}

export interface Question {
  expression: Expression;
  options: string[];
}
