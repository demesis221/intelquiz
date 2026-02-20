import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { QuizSettings } from '../types';

export function Home() {
  const [settings, setSettings] = useLocalStorage<QuizSettings>('quizSettings', {
    randomOrder: false,
    showExplanations: true,
    enableTimer: true,
  });

  const toggleSetting = (key: keyof QuizSettings) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full space-y-8"
      >
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">IntelQuiz</h1>
          <p className="text-base sm:text-lg text-warm-gray px-2">Master concepts through interactive flashcards</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <Link to="/quiz">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-charcoal text-white py-4 rounded-2xl text-lg font-semibold shadow-lg hover:bg-slate transition-colors"
            >
              Start Quiz
            </motion.button>
          </Link>

          <Link to="/decks" className="block mt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-charcoal py-4 rounded-2xl text-lg font-semibold shadow-lg border-2 border-gray-200 hover:border-slate transition-colors"
            >
              Manage Decks
            </motion.button>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold text-charcoal">Quick Settings</h2>
          
          <label className="flex items-center justify-between cursor-pointer py-1">
            <span className="text-slate text-sm sm:text-base">Random Order</span>
            <input
              type="checkbox"
              checked={settings.randomOrder}
              onChange={() => toggleSetting('randomOrder')}
              className="w-5 h-5 accent-charcoal"
            />
          </label>

          <label className="flex items-center justify-between cursor-pointer py-1">
            <span className="text-slate text-sm sm:text-base">Show Explanations</span>
            <input
              type="checkbox"
              checked={settings.showExplanations}
              onChange={() => toggleSetting('showExplanations')}
              className="w-5 h-5 accent-charcoal"
            />
          </label>

          <label className="flex items-center justify-between cursor-pointer py-1">
            <span className="text-slate text-sm sm:text-base">Enable Timer</span>
            <input
              type="checkbox"
              checked={settings.enableTimer}
              onChange={() => toggleSetting('enableTimer')}
              className="w-5 h-5 accent-charcoal"
            />
          </label>
        </div>
      </motion.div>
    </div>
  );
}
