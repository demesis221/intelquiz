import { motion } from 'framer-motion';
import type { Card } from '../types';

type FlashcardProps = {
  card: Card;
  isFlipped: boolean;
  isCorrect?: boolean;
  userAnswer?: string;
  showExplanation: boolean;
  children: React.ReactNode;
  onNext?: () => void;
};

export function Flashcard({ card, isFlipped, isCorrect, userAnswer, showExplanation, children, onNext }: FlashcardProps) {
  const correctAnswer = card.type === 'mcq' ? card.choices[card.answerIndex] : card.answers[0];

  return (
    <div className="perspective-1000 w-full max-w-2xl mx-auto">
      <motion.div
        className="relative w-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 min-h-[350px] sm:min-h-[400px] flex flex-col"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {children}
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 min-h-[350px] sm:min-h-[400px] flex flex-col"
          style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
        >
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <div className={`text-center text-xl sm:text-2xl font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
            </div>

            {userAnswer && (
              <div className="space-y-2">
                <p className="text-sm text-warmGray">Your answer:</p>
                <p className="text-sm sm:text-base font-medium text-slate break-words">{userAnswer}</p>
              </div>
            )}

            <div className="space-y-2">
              <p className="text-sm text-warmGray">Correct answer:</p>
              <p className="text-sm sm:text-base font-medium text-green-700 break-words">{correctAnswer}</p>
            </div>

            {showExplanation && card.explanation && (
              <div className="space-y-2 pt-4 border-t border-gray-200">
                <p className="text-sm text-warmGray">Explanation:</p>
                <p className="text-sm sm:text-base text-charcoal">{card.explanation}</p>
              </div>
            )}
          </div>

          <button
            onClick={onNext}
            className="mt-6 w-full bg-charcoal text-white py-3 rounded-xl hover:bg-slate transition-colors"
          >
            Next
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
