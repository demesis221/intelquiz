import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useDecks } from '../hooks/useDecks';
import type { QuestionResult } from '../types';

export function Results() {
  const navigate = useNavigate();
  const [results, setResults] = useLocalStorage<QuestionResult[]>('quizResults', []);
  const [selectedDeckId] = useLocalStorage<string>('selectedDeckId', 'default-deck');
  const { getDeck } = useDecks();

  const deck = getDeck(selectedDeckId);

  if (!deck || results.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <p className="text-xl text-warmGray">No results to display</p>
          <Link to="/" className="text-charcoal underline">Go Home</Link>
        </div>
      </div>
    );
  }

  const correct = results.filter(r => r.status === 'correct').length;
  const wrong = results.filter(r => r.status === 'wrong').length;
  const skipped = results.filter(r => r.status === 'skipped').length;
  const total = results.length;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  const mistakes = results.filter(r => r.status === 'wrong');

  const handleRetryWrong = () => {
    setResults([]);
    navigate('/quiz');
  };

  const handleRestart = () => {
    setResults([]);
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen p-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal">Quiz Complete!</h1>
          <p className="text-base sm:text-lg text-warmGray break-words px-2">{deck.name}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">{correct}</div>
              <div className="text-xs sm:text-sm text-warmGray">Correct</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-red-600">{wrong}</div>
              <div className="text-xs sm:text-sm text-warmGray">Wrong</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-600">{skipped}</div>
              <div className="text-xs sm:text-sm text-warmGray">Skipped</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-charcoal">{accuracy}%</div>
              <div className="text-xs sm:text-sm text-warmGray">Accuracy</div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-center text-warmGray text-sm sm:text-base">
              You answered {total} out of {deck.cards.length} questions
            </p>
          </div>
        </div>

        {mistakes.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-charcoal">Review Mistakes</h2>
            <div className="space-y-4">
              {mistakes.map((result, index) => {
                const card = deck.cards.find(c => c.id === result.cardId);
                if (!card) return null;

                return (
                  <div key={index} className="p-3 sm:p-4 bg-gray-50 rounded-xl space-y-3">
                    <p className="font-semibold text-charcoal text-sm sm:text-base break-words">
                      {card.type === 'mcq' ? card.question : card.prompt}
                    </p>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div>
                        <span className="text-warmGray">Your answer: </span>
                        <span className="text-red-600 font-medium break-words">{result.userAnswer}</span>
                      </div>
                      <div>
                        <span className="text-warmGray">Correct answer: </span>
                        <span className="text-green-600 font-medium break-words">{result.correctAnswer}</span>
                      </div>
                      {card.explanation && (
                        <div className="pt-2 border-t border-gray-200">
                          <span className="text-warmGray">Explanation: </span>
                          <span className="text-slate break-words">{card.explanation}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          {mistakes.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleRetryWrong}
              className="flex-1 bg-charcoal text-white py-3 rounded-xl hover:bg-slate transition-colors text-sm sm:text-base"
            >
              Retry Wrong Only
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRestart}
            className="flex-1 bg-white text-charcoal py-3 rounded-xl border-2 border-gray-300 hover:border-slate transition-colors text-sm sm:text-base"
          >
            Restart Full Quiz
          </motion.button>
          <Link to="/" className="flex-1">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-charcoal py-3 rounded-xl border-2 border-gray-300 hover:border-slate transition-colors text-sm sm:text-base"
            >
              Back to Home
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
