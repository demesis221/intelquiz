import { useEffect } from 'react';

const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes

export function useClearCacheOnInactive() {
  useEffect(() => {
    let inactivityTimer: NodeJS.Timeout;

    const clearCache = () => {
      localStorage.removeItem('quizResults');
      localStorage.removeItem('selectedDeckId');
    };

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(clearCache, INACTIVITY_TIMEOUT);
    };

    const handleBeforeUnload = () => {
      clearCache();
    };

    // Track user activity
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keypress', resetTimer);
    window.addEventListener('click', resetTimer);
    window.addEventListener('scroll', resetTimer);
    
    // Clear on window close
    window.addEventListener('beforeunload', handleBeforeUnload);

    resetTimer();

    return () => {
      clearTimeout(inactivityTimer);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keypress', resetTimer);
      window.removeEventListener('click', resetTimer);
      window.removeEventListener('scroll', resetTimer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
}
