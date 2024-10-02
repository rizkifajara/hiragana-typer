import React, { useState, useEffect } from 'react';
import * as wanakana from 'wanakana';

interface HiraganaLetterPracticeProps {
  hiraganaList: string[];
}

const HiraganaLetterPractice: React.FC<HiraganaLetterPracticeProps> = ({ hiraganaList }) => {
  const [currentHiraganaIndex, setCurrentHiraganaIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentHiragana = hiraganaList[currentHiraganaIndex];

  const moveToNextHiragana = () => {
    setCurrentHiraganaIndex((prevIndex) => (prevIndex + 1) % hiraganaList.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setUserInput(input);
    
    const hiraganaInput = wanakana.toHiragana(input);
    
    if (hiraganaInput === currentHiragana) {
      setIsCorrect(true);
      setUserInput(''); // Clear the input immediately
      setTimeout(() => {
        moveToNextHiragana();
        setIsCorrect(null);
      }, 1000); // Wait for 1 second before moving to the next hiragana
    } else {
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    setIsCorrect(null);
    setUserInput('');
  }, [currentHiragana]);

  return (
    <main className="flex-grow flex flex-col items-center justify-center p-8">
      <div className="hiragana-display bg-very-light-mocha dark:bg-medium-dark-mocha rounded-full w-48 h-48 flex items-center justify-center mb-8 shadow-lg">
        <p className="text-8xl text-dark-mocha dark:text-pale-mocha">{currentHiragana}</p>
      </div>
      <div className="input-area relative">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type here..."
          className="text-2xl p-3 w-64 border-2 border-light-mocha dark:border-medium-mocha rounded-lg bg-pale-mocha dark:bg-dark-mocha text-dark-mocha dark:text-pale-mocha focus:outline-none focus:border-medium-dark-mocha focus:ring-2 focus:ring-medium-dark-mocha dark:focus:ring-medium-mocha transition-all duration-300 shadow-md font-bold font-sans placeholder-medium-mocha dark:placeholder-medium-dark-mocha"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <span className="text-medium-mocha dark:text-medium-dark-mocha">あ</span>
        </div>
      </div>
      {isCorrect !== null && (
        <p className={`mt-4 text-lg ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {isCorrect ? 'Correct!' : 'Try again!'}
        </p>
      )}
    </main>
  );
};

export default HiraganaLetterPractice;