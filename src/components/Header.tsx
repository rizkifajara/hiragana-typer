import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-medium-mocha dark:bg-medium-dark-mocha p-4 flex justify-between items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pale-mocha">HiraganaTyper</h1>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faSun} className="text-pale-mocha w-5 h-5" />
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" className="sr-only" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
              <div className="w-14 h-7 bg-light-mocha dark:bg-light-mocha rounded-full shadow-inner"></div>
              <div className={`absolute left-1 top-1 w-5 h-5 bg-pale-mocha dark:bg-dark-mocha rounded-full transition-transform duration-300 ease-in-out ${darkMode ? 'transform translate-x-7' : ''}`}></div>
            </div>
          </label>
          <FontAwesomeIcon icon={faMoon} className="text-pale-mocha w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;