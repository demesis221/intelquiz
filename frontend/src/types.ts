export type MCQCard = {
  id: string;
  type: 'mcq';
  question: string;
  choices: string[];
  answerIndex: number;
  explanation?: string;
  tags?: string[];
};

export type FITBCard = {
  id: string;
  type: 'fitb';
  prompt: string;
  answers: string[];
  explanation?: string;
  tags?: string[];
};

export type Card = MCQCard | FITBCard;

export type Deck = {
  id: string;
  name: string;
  description?: string;
  cards: Card[];
  createdAt: string;
  updatedAt: string;
};

export type QuestionResult = {
  cardId: string;
  status: 'correct' | 'wrong' | 'skipped';
  userAnswer?: string;
  correctAnswer: string;
  timeSpentMs?: number;
};

export type QuizSettings = {
  randomOrder: boolean;
  showExplanations: boolean;
  enableTimer: boolean;
};

export type QuizState = {
  deckId: string;
  currentIndex: number;
  results: QuestionResult[];
  startTime: number;
};
