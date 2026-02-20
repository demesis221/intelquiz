import { useLocalStorage } from './useLocalStorage';
import type { Deck } from '../types';
import { defaultDeck } from '../data/defaultDeck';

export function useDecks() {
  const [decks, setDecks] = useLocalStorage<Deck[]>('decks', [defaultDeck]);

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
