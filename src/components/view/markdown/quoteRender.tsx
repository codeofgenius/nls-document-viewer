import { twMerge } from 'tailwind-merge';

import { type ParserType } from '@/types/markdown';

export function QuoteRender({ children, className }: ParserType) {
  return (
    <blockquote
      className={twMerge(
        'my-4 border-l-4 border-red-400 bg-gray-200 px-3 py-2 dark:border-red-600 dark:bg-gray-700',
        className,
      )}
    >
      {children}
    </blockquote>
  );
}
