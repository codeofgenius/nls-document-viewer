import { twMerge } from 'tailwind-merge';

import { type ParserType } from '@/types/markdown';

export function TableRender({ children, className, node }: ParserType) {
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
  const id = position?.start.line.toString();

  switch (tagName) {
    case 'table':
      return (
        <table
          className="my-4 table-auto border-collapse border border-gray-400 dark:border-gray-500"
          id={id}
        >
          {children}
        </table>
      );
    case 'th':
      return (
        <th
          className={twMerge(
            'border border-gray-400 bg-gray-300 px-4 py-2 font-bold dark:border-gray-500 dark:bg-gray-600',
            className,
          )}
          id={id}
        >
          {children}
        </th>
      );
    case 'td':
      return (
        <td
          className={twMerge(
            'border border-gray-400 px-4 py-2 dark:border-gray-500',
            className,
          )}
          id={id}
        >
          {children}
        </td>
      );
    default:
      return (
        <div className={twMerge('p-4', className)} id={id}>
          {children}
        </div>
      );
  }
}
