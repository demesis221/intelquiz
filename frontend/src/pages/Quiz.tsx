import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flashcard } from '../components/Flashcard';
import { MCQOptions } from '../components/MCQOptions';
import { FillBlankInput } from '../components/FillBlankInput';
import { ProgressBar } from '../components/ProgressBar';
import { useDecks } from '../hooks/useDecks';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Card, QuestionResult, QuizSettings } from '../types';
import { normalizeAnswer, shuffle } from '../utils';

export function Quiz() {
  const navigate = useNavigate();
  const { getDeck } = useDecks();
  const [settings] = useLocalStorage<QuizSettings>('quizSettings', {
    randomOrder: false,
    showExplanations: true,
    enableTimer: true,
  });
  const [selectedDeckId] = useLocalStorage<string>('selectedDeckId', 'default-deck');

  const deck = getDeck(selectedDeckId);
  const [cards, setCards] = useState<Card[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useLocalStorage<QuestionResult[]>('quizResults', []);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedMCQ, setSelectedMCQ] = useState<number | null>(null);
  const [fillAnswer, setFillAnswer] = useState('');
  const [startTime] = useState(Date.now());
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    if (!deck) {
      navigate('/');
      return;
    }
    const shuffled = settings.randomOrder ? shuffle(deck.cards) : deck.cards;
    setCards(shuffled);
  }, [deck, settings.randomOrder, navigate]);

  useEffect(() => {
    if (!settings.enableTimer) return;
    const interval = setInterval(() => {
      setTimeElapsed(Date.now() - startTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime, settings.enableTimer]);

  if (!deck || cards.length === 0) return null;

  const currentCard = cards[currentIndex];
  const isAnswered = results.some(r => r.cardId === currentCard.id);

  const handleSubmit = () => {
    if (isFlipped || isAnswered) return;

    let isCorrect = false;
    let userAnswer = '';

    if (currentCard.type === 'mcq') {
      if (selectedMCQ === null) return;
      isCorrect = selectedMCQ === currentCard.answerIndex;
      userAnswer = currentCard.choices[selectedMCQ];
    } else {
      if (!fillAnswer.trim()) return;
      const normalized = normalizeAnswer(fillAnswer);
      isCorrect = currentCard.answers.some(a => normalizeAnswer(a) === normalized);
      userAnswer = fillAnswer;
    }

    const correctAnswer = currentCard.type === 'mcq' 
      ? currentCard.choices[currentCard.answerIndex]
      : currentCard.answers[0];

    const result: QuestionResult = {
      cardId: currentCard.id,
      status: isCorrect ? 'correct' : 'wrong',
      userAnswer,
      correctAnswer,
      timeSpentMs: Date.now() - startTime,
    };

    setResults([...results, result]);
    setIsFlipped(true);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setSelectedMCQ(null);
      setFillAnswer('');
    } else {
      navigate('/results');
    }
  };

  const handleSkip = () => {
    if (!isAnswered && !isFlipped) {
      if (!confirm('Skip this question?')) return;
      
      const correctAnswer = currentCard.type === 'mcq' 
        ? currentCard.choices[currentCard.answerIndex]
        : currentCard.answers[0];

      const result: QuestionResult = {
        cardId: currentCard.id,
        status: 'skipped',
        correctAnswer,
      };
      setResults([...results, result]);
    }
    handleNext();
  };

  const currentResult = results.find(r => r.cardId === currentCard.id);

  return (
    <div className="min-h-screen p-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <ProgressBar 
          current={currentIndex + 1} 
          total={cards.length}
          timeElapsed={settings.enableTimer ? timeElapsed : undefined}
        />

        <Flashcard
          card={currentCard}
          isFlipped={isFlipped}
          isCorrect={currentResult?.status === 'correct'}
          userAnswer={currentResult?.userAnswer}
          showExplanation={settings.showExplanations}
          onNext={handleNext}
        >
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-charcoal break-words">
              {currentCard.type === 'mcq' ? currentCard.question : currentCard.prompt}
            </h2>

            {currentCard.type === 'mcq' ? (
              <MCQOptions
                choices={currentCard.choices}
                selectedIndex={selectedMCQ}
                onSelect={setSelectedMCQ}
                disabled={isFlipped}
              />
            ) : (
              <FillBlankInput
                value={fillAnswer}
                onChange={setFillAnswer}
                onSubmit={handleSubmit}
                disabled={isFlipped}
              />
            )}

            {currentCard.type === 'mcq' && !isFlipped && (
              <button
                onClick={handleSubmit}
                disabled={selectedMCQ === null}
                className="w-full bg-charcoal text-white py-4 px-4 rounded-xl hover:bg-slate transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base min-h-[52px] active:bg-slate"
              >
                Submit
              </button>
            )}
          </div>
        </Flashcard>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSkip}
            className="flex-1 bg-white text-slate py-3 rounded-xl border-2 border-gray-300 hover:border-slate transition-colors text-sm sm:text-base"
          >
            {isFlipped ? 'Next' : 'Skip'}
          </button>
          <button
            onClick={() => navigate('/')}
            className="sm:px-6 bg-white text-slate py-3 rounded-xl border-2 border-gray-300 hover:border-slate transition-colors text-sm sm:text-base"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}
