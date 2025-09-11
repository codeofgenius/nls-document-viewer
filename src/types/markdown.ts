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

export type DisplayLanguageType = 'ja' | 'en';

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
      title: string;
      frameBorder: string;
      allow: string;
      referrerPolicy: string;
      allowFullScreen: boolean;
      value: string;
      dataOk: string;
      dataQuestion: string;
      dataUrl: string;
      dataProcessLanguage: string;
      dataDisplayLanguage: DisplayLanguageType;
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
export type TextareaActionReturnParam = {
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

export type TextareaActionStatusParam = {
  title: string;
  message: string;
  status: TextareaActionStatus;
};

export type TextareaActionStatusParams = [
  TextareaActionStatusParam,
  TextareaActionStatusParam,
  TextareaActionStatusParam,
];

export type TextareaActionStatusKey = 0 | 1 | 2;

export type TextareaActionParam = {
  value: string; // given value
  dataOk: string; // correct answer
  dataQuestion: string; // given question
  dataUrl: string; // question url
  dataProcessLanguage: string; // computer lang
  dataDisplayLanguage: DisplayLanguageType; // natural lang
};

export type GenerateContentParam = TextareaActionParam;

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
