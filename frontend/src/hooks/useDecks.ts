import { useLocalStorage } from './useLocalStorage';
import type { Deck } from '../types';
import { defaultDeck } from '../data/defaultDeck';

export function useDecks() {
  // Force refresh the default deck to ensure all 40 questions
  const updatedDefaultDeck = { ...defaultDeck, updatedAt: new Date().toISOString() };
  
  // Check if we need to update the cached deck
  const [decks, setDecks] = useLocalStorage<Deck[]>('decks', [updatedDefaultDeck]);
  
  // Force update if the default deck has fewer than 40 cards
  const currentDefaultDeck = decks.find(d => d.id === 'default-deck');
  if (currentDefaultDeck && currentDefaultDeck.cards.length < 40) {
    const updatedDecks = decks.map(d => d.id === 'default-deck' ? updatedDefaultDeck : d);
    setDecks(updatedDecks);
  }

  const addDeck = (deck: Deck) => {
    setDecks([...decks, deck]);
  };

  const updateDeck = (id: string, updates: Partial<Deck>) => {
    setDecks(decks.map(d => d.id === id ? { ...d, ...updates, updatedAt: new Date().toISOString() } : d));
  };

  const deleteDeck = (id: string) => {
    setDecks(decks.filter(d => d.id !== id));
  };

  const getDeck = (id: string) => {
    return decks.find(d => d.id === id);
  };

  return { decks, addDeck, updateDeck, deleteDeck, getDeck };
}
