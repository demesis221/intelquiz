import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { Results } from './pages/Results';
import { Decks } from './pages/Decks';
import { useClearCacheOnInactive } from './hooks/useClearCache';

function App() {
  useClearCacheOnInactive();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/decks" element={<Decks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
