import { type JSX } from 'react';

import { type getBookBySlug } from '@/db/book';

import type { Page } from '@/db/prisma';

export type BookPageReturnType = Awaited<ReturnType<typeof getBookBySlug>>;

export type MarkdownParserProps = {
  bookSlug: string;
  pageSlug: string;
  book: BookPageReturnType;
  page: Page;
};

export type MarkdownPagerProps = {
  bookSlug: string;
  pageSlug: string;
  nextPage: Page | false;
  previousPage: Page | false;
};

export type MarkdownRenderProps = {
  content: string;
  frontMatter?: Record<string, string>;
};

export type MarkdownMenuRenderProps = {
  content: string;
};

export type ParserType = {
  children: string;
  className?: string;
  href?: string;
  id?: string;
  src?: string;
  alt?: string;
  node?: {
    tagName: string;
    position: {
      start: {
        line: number;
        column: number;
        offset: number;
      };
      end: {
        line: number;
        column: number;
        offset: number;
      };
    };
    properties: {
      dataOk: string;
      dataQuestion: string;
      dataUrl: string;
      dataLanguage: string;
      dataDisplaylanguage: string;
      title: string;
      frameBorder: string;
      allow: string;
      referrerPolicy: string;
      allowFullScreen: boolean;
    };
  };
};

export type ComponentParserType = ({
  children,
  className,
  href,
  id,
  node,
}: ParserType) => JSX.Element;

export type TextareaActionStatus = 'PROC' | 'OK' | 'NG' | 'ERROR';
export type TextareaActionParam = {
  mainText: string;
  status: TextareaActionStatus;
}[];

export type GEMINI_RESPONSE_TYPE = {
  status: TextareaActionStatus;
  result: string;
};

export type TextareaModalProps = {
  okButtonText?: string;
  closeAction: () => void;
  param: {
    mainText: string;
    status: TextareaActionStatus;
  };
};

export type Textarea2ActionParam = {
  title: string;
  message: string;
  status: TextareaActionStatus;
}[];

export type TextareaModal2Props = {
  okButtonText?: string;
  closeAction: () => void;
  param: {
    title: string;
    message: string;
    status: TextareaActionStatus;
  };
  result?: string;
};

export type CardLinkMetadataType = {
  url?: string;
  title: string;
  description: string;
  image: string;
};

export type CardLinkRouteHandlerResultType = {
  success: boolean;
  metaData: CardLinkMetadataType;
};
