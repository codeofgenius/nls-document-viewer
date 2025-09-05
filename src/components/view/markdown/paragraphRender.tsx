import { twMerge } from 'tailwind-merge';

import { type ParserType } from '@/types/markdown';

export function ParagraphRender({ children, className, node }: ParserType) {
  // const { tagName } = node ?? { tagName: 'p' };
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
  const cn = className ?? '';
  return (
    <p className={twMerge('mb-4', cn)} id={id}>
      {children}
    </p>
  );
}
