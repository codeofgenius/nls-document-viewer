import { type ParserType } from '@/types/markdown';

export function HeadingRender({ children, node }: ParserType) {
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
    case 'h1':
      return (
        <h1
          className="mt-4 mb-8 bg-blue-500 p-5 text-2xl text-white dark:bg-blue-900 dark:text-white"
          id={id}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className="mt-4 mb-8 bg-blue-200 p-5 text-2xl text-black dark:bg-blue-800 dark:text-white"
          id={id}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className="my-4 border-l-4 border-l-blue-800 bg-blue-200 p-2 dark:border-l-blue-500 dark:bg-blue-800"
          id={id}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className="my-4 bg-pink-200 p-2 dark:bg-pink-800" id={id}>
          {children}
        </h4>
      );
    default:
      return (
        <div className="my-4 p-4" id={id}>
          {children}
        </div>
      );
  }
}

export function HeadingMenuRender({ children, node }: ParserType) {
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

  const hrefText = `#${position?.start.line.toString() ?? ''}`;

  switch (tagName) {
    case 'h1':
      return (
        <a
          className="bullet-link my-1 ml-0 text-blue-600 underline dark:text-blue-300"
          href={hrefText}
        >
          {children}
        </a>
      );
    case 'h2':
      return (
        <div>
          <a
            className="bullet-link my-1 ml-2 text-blue-600 underline dark:text-blue-300"
            href={hrefText}
          >
            {children}
          </a>
        </div>
      );
    case 'h3':
      return (
        <div>
          <a
            className="bullet-link my-1 ml-4 text-blue-600 underline dark:text-blue-300"
            href={hrefText}
          >
            {children}
          </a>
        </div>
      );
    case 'h4':
      return (
        <div>
          <a
            className="bullet-link my-1 ml-6 text-blue-600 underline dark:text-blue-300"
            href={hrefText}
          >
            {children}
          </a>
        </div>
      );
    default:
      return (
        <div>
          <a
            className="bullet-link my-1 text-blue-600 underline dark:text-blue-300"
            href={hrefText}
          >
            {children}
          </a>
        </div>
      );
  }
}
