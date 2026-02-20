import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDecks } from '../hooks/useDecks';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Deck } from '../types';
import { Link } from 'react-router-dom';

export function Decks() {
  const { decks, addDeck, deleteDeck } = useDecks();
  const [selectedDeckId, setSelectedDeckId] = useLocalStorage<string>('selectedDeckId', 'default-deck');
  const [showImport, setShowImport] = useState(false);
  const [importText, setImportText] = useState('');

  const handleSelectDeck = (id: string) => {
    setSelectedDeckId(id);
  };

  const handleCreateDeck = () => {
    const newDeck: Deck = {
      id: `deck-${Date.now()}`,
      name: 'New Deck',
      description: '',
      cards: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    addDeck(newDeck);
  };

  const handleExport = (deck: Deck) => {
    const json = JSON.stringify(deck, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${deck.name.replace(/\s+/g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    try {
      const deck = JSON.parse(importText) as Deck;
      if (!deck.id || !deck.name || !Array.isArray(deck.cards)) {
        alert('Invalid deck format');
        return;
      }
      deck.id = `deck-${Date.now()}`;
      deck.createdAt = new Date().toISOString();
      deck.updatedAt = new Date().toISOString();
      addDeck(deck);
      setShowImport(false);
      setImportText('');
      alert('Deck imported successfully!');
    } catch {
      alert('Invalid JSON format');
    }
  };

  const handleResetData = () => {
    if (confirm('Reset all data? This cannot be undone.')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen p-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal">Manage Decks</h1>
          <Link to="/" className="text-slate hover:text-charcoal underline text-sm sm:text-base">
            Back to Home
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCreateDeck}
            className="bg-charcoal text-white px-4 sm:px-6 py-3 rounded-xl hover:bg-slate transition-colors text-sm sm:text-base"
          >
            Create New Deck
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowImport(!showImport)}
            className="bg-white text-charcoal px-4 sm:px-6 py-3 rounded-xl border-2 border-gray-300 hover:border-slate transition-colors text-sm sm:text-base"
          >
            Import Deck
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleResetData}
            className="bg-red-600 text-white px-4 sm:px-6 py-3 rounded-xl hover:bg-red-700 transition-colors text-sm sm:text-base"
          >
            Reset All Data
          </motion.button>
        </div>

        {showImport && (
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-charcoal">Import Deck JSON</h2>
            <textarea
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="Paste deck JSON here..."
              className="w-full h-40 p-4 border-2 border-gray-300 rounded-xl focus:border-charcoal focus:outline-none"
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleImport}
                className="bg-charcoal text-white px-4 sm:px-6 py-2 rounded-xl hover:bg-slate transition-colors text-sm sm:text-base"
              >
                Import
              </button>
              <button
                onClick={() => setShowImport(false)}
                className="bg-white text-slate px-4 sm:px-6 py-2 rounded-xl border-2 border-gray-300 hover:border-slate transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {decks.map((deck) => (
            <motion.div
              key={deck.id}
              whileHover={{ scale: 1.01 }}
              className={`bg-white rounded-2xl shadow-lg p-4 sm:p-6 cursor-pointer border-2 ${
                selectedDeckId === deck.id ? 'border-charcoal' : 'border-transparent'
              }`}
              onClick={() => handleSelectDeck(deck.id)}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-charcoal break-words">{deck.name}</h3>
                  {deck.description && (
                    <p className="text-warmGray mt-1 text-sm sm:text-base break-words">{deck.description}</p>
                  )}
                  <p className="text-xs sm:text-sm text-slate mt-2">{deck.cards.length} cards</p>
                </div>
                <div className="flex flex-row sm:flex-row gap-2 shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExport(deck);
                    }}
                    className="px-3 sm:px-4 py-2 bg-gray-100 text-slate rounded-lg hover:bg-gray-200 transition-colors text-xs sm:text-sm"
                  >
                    Export
                  </button>
                  {deck.id !== 'default-deck' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm('Delete this deck?')) {
                          deleteDeck(deck.id);
                        }
                      }}
                      className="px-3 sm:px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors text-xs sm:text-sm"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
