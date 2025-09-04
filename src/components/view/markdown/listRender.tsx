import { twMerge } from 'tailwind-merge';

import { type ParserType } from '@/types/markdown';

export function ListRender({ children, className, node, id }: ParserType) {
  const { tagName } = node ?? { tagName: 'div' };
  const { position } = node ?? {
    start: {
      line: 0,
      column: 0,
      offset: 0,
    },
    end: {
      line: 0,
      column: 0,
      offset: 0,
    },
  };
  const idText = id ?? position?.start.line.toString();

  switch (tagName) {
    case 'ul':
      return (
        <ul className="my-1 list-disc" id={idText}>
          {children}
        </ul>
      );
    case 'ol':
      return (
        <ul className="my-1 list-decimal" id={idText}>
          {children}
        </ul>
      );
    case 'li':
      return (
        <li className="ml-6" id={idText}>
          {children}
        </li>
      );
    default:
      return (
        <div className={twMerge('p-4', className)} id={idText}>
          {children}
        </div>
      );
  }
}
