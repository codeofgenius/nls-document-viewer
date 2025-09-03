import { twMerge } from 'tailwind-merge';

import { type ParserType } from '@/types/markdown';

export function DefinitionRender({ children, className, node }: ParserType) {
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
    case 'dl':
      return (
        <dl className={twMerge('my-4', className)} id={id}>
          {children}
        </dl>
      );
    case 'dt':
      return (
        <dt className={twMerge('font-bold', className)} id={id}>
          {children}
        </dt>
      );
    case 'dd':
      return (
        <dd className={twMerge('mb-6', className)} id={id}>
          {children}
        </dd>
      );
    default:
      return (
        <div className={twMerge('p-4', className)} id={id}>
          {children}
        </div>
      );
  }
}
