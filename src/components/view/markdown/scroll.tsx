'use client';

import { FaAngleUp } from 'react-icons/fa6';

export function ScrollToTop() {
  function handleClickTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <button
      className="fixed right-8 bottom-8 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-orange-500 text-lg text-white shadow-md transition-colors duration-200 hover:bg-orange-600 dark:bg-orange-800 dark:text-black dark:hover:bg-orange-700"
      onClick={handleClickTop}
    >
      <FaAngleUp className="h-6 w-6" />
    </button>
  );
}
