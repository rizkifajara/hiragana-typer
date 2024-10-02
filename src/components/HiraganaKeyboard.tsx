import React from 'react';

const HiraganaKeyboard: React.FC = () => {
  const keyboardLayout = [
    ['ぬ', 'ふ', 'あ', 'う', 'え', 'お', 'や', 'ゆ', 'よ', 'わ', 'ほ', 'へ', 'ー'],
    ['た', 'て', 'い', 'す', 'か', 'ん', 'な', 'に', 'ら', 'せ', 'む'],
    ['ち', 'と', 'し', 'は', 'き', 'く', 'ま', 'の', 'り', 'れ', 'け'],
    ['つ', 'さ', 'そ', 'ひ', 'こ', 'み', 'も', 'ね', 'る', 'め']
  ];

  return (
    <div className="mt-8 bg-very-light-mocha dark:bg-medium-dark-mocha p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Hiragana Keyboard Layout</h2>
      <div className="flex flex-col items-center">
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex mb-1">
            {row.map((char, charIndex) => (
              <div 
                key={`${rowIndex}-${charIndex}`} 
                className="w-10 h-10 flex items-center justify-center border border-light-mocha dark:border-medium-mocha rounded mx-0.5 bg-pale-mocha dark:bg-dark-mocha"
              >
                <span className="text-sm">{char}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiraganaKeyboard;