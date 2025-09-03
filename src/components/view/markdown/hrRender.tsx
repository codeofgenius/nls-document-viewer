import { twMerge } from 'tailwind-merge';

import { type ParserType } from '@/types/markdown';

export function HrRender({ className }: ParserType) {
  return (
    <hr
      className={twMerge(
        'h-px my-8 bg-gray-400 border-0 dark:bg-gray-600',
        className,
      )}
    />
  );
}
