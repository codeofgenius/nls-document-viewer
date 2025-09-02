import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { type ParserType } from '@/types/markdown';

export function LinkRender({ children, className, href, id }: ParserType) {
  const hrefText = href ?? '/';
  const idText = id ?? '';
  const blank = hrefText.startsWith('http');
  if (hrefText.startsWith('#')) {
    return (
      <a
        className="text-blue-600 underline dark:text-blue-300"
        href={hrefText}
        id={idText}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        className={twMerge(
          'text-blue-600 underline dark:text-blue-300',
          className,
        )}
        href={hrefText}
        id={idText}
        {...(blank && { target: '_blank' })}
      >
        {children}
      </Link>
    );
  }
}
