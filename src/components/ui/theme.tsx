import { createTheme } from 'flowbite-react';

export const MainTheme = createTheme({
  button: {
    color: {
      primary:
        'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      secondary:
        'bg-amber-700 text-white hover:bg-amber-800 focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800',
      success:
        'bg-green-700 text-white hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
      info: 'bg-cyan-700 text-white hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800',
      warning:
        'bg-yellow-700 text-white hover:bg-yellow-800 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800',
      danger:
        'bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800',
    },
  },
  navbar: {
    root: {
      base: 'bg-blue-200 dark:bg-blue-800 shadow-lg',
    },
    collapse: {
      base: 'bg-slate-100 md:bg-blue-200 dark:bg-gray-800 dark:md:bg-blue-800',
    },
  },
});
