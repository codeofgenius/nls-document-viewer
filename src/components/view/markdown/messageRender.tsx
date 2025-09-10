import { HiInformationCircle } from 'react-icons/hi2';
import { twMerge } from 'tailwind-merge';

import { type ParserType } from '@/types/markdown';

export function MessageRender({ children, className, node }: ParserType) {
  // const { tagName } = node ?? { tagName: 'div' };
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
  const idText = position?.start.line.toString();

  switch (className) {
    case 'info':
      return (
        <div
          className={twMerge(
            'my-4 flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800',
            className,
          )}
          id={idText}
        >
          <div className="alert-message flex items-center">
            <HiInformationCircle className="w-8 h-8 mr-2" />
            {children}
          </div>
        </div>
      );
    case 'success':
      return (
        <div
          className={twMerge(
            'my-4 flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800',
            className,
          )}
          id={idText}
        >
          <div className="alert-message flex items-center">
            <HiInformationCircle className="w-8 h-8 mr-2" />
            {children}
          </div>
        </div>
      );
    case 'warning':
      return (
        <div
          className={twMerge(
            'my-4 flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800',
            className,
          )}
          id={idText}
        >
          <div className="alert-message flex items-center">
            <HiInformationCircle className="w-8 h-8 mr-2" />
            {children}
          </div>
        </div>
      );
    case 'danger':
      return (
        <div
          className={twMerge(
            'my-4 flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800',
            className,
          )}
          id={idText}
        >
          <div className="alert-message flex items-center">
            <HiInformationCircle className="w-8 h-8 mr-2" />
            {children}
          </div>
        </div>
      );
    default:
      return (
        <div
          className={twMerge(
            'my-4 flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800',
            className,
          )}
          id={idText}
        >
          <div className="alert-message flex items-center">
            <HiInformationCircle className="w-8 h-8 mr-2" />
            {children}
          </div>
        </div>
      );
  }
}
