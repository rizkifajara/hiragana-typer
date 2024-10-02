import { useState, useEffect } from 'react';
import Header from './components/Header';
import HiraganaLetterPractice from './components/HiraganaLetterPractice';
import HiraganaKeyboard from './components/HiraganaKeyboard';

function App() {
  const allHiragana = [
    'あ', 'い', 'う', 'え', 'お',
    'か', 'き', 'く', 'け', 'こ',
    'さ', 'し', 'す', 'せ', 'そ',
    'た', 'ち', 'つ', 'て', 'と',
    'な', 'に', 'ぬ', 'ね', 'の',
    'は', 'ひ', 'ふ', 'へ', 'ほ',
    'ま', 'み', 'む', 'め', 'も',
    'や', 'ゆ', 'よ',
    'ら', 'り', 'る', 'れ', 'ろ',
    'わ', 'を', 'ん'
  ];

  const [hiraganaList, setHiraganaList] = useState(allHiragana);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check initial system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Randomize the hiragana list on initial load
    shuffleHiragana();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const shuffleHiragana = () => {
    const shuffled = [...allHiragana].sort(() => Math.random() - 0.5);
    setHiraganaList(shuffled);
  };

  return (
    <div className="flex flex-col min-h-screen bg-pale-mocha dark:bg-dark-mocha text-dark-mocha dark:text-pale-mocha transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex-grow flex flex-col items-center justify-center p-8">
        <HiraganaLetterPractice hiraganaList={hiraganaList} />
        <HiraganaKeyboard />
      </div>
      <footer className="bg-light-mocha dark:bg-medium-dark-mocha p-4 text-center text-dark-mocha dark:text-pale-mocha">
        <p>Practice your hiragana typing skills!</p>
      </footer>
    </div>
  );
}

export default App;
