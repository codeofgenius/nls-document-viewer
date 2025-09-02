import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';

import { CodeRender } from '@/components/view/markdown/codeRender';
import { HeadingRender } from '@/components/view/markdown/headingRender';
import { IframeRender } from '@/components/view/markdown/iframeRender';
import { ImageRender } from '@/components/view/markdown/imageRender';
import { LinkRender } from '@/components/view/markdown/linkRender';
import { ListRender } from '@/components/view/markdown/listRender';
import { ParagraphRender } from '@/components/view/markdown/paragraphRender';
import { QuoteRender } from '@/components/view/markdown/quoteRender';
import { TableRender } from '@/components/view/markdown/tableRender';
//import { TextareaRender } from '@/components/view/markdown/textareaRender';
import {
  type MarkdownRenderProps,
  type ComponentParserType,
} from '@/types/markdown';

// TODO
// import rehypeSanitize from 'rehype-sanitize';

const componentProps: Record<string, ComponentParserType> = {
  h1: HeadingRender,
  h2: HeadingRender,
  h3: HeadingRender,
  h4: HeadingRender,
  code: CodeRender,
  table: TableRender,
  th: TableRender,
  td: TableRender,
  a: LinkRender,
  blockquote: QuoteRender,
  img: ImageRender,
  ul: ListRender,
  ol: ListRender,
  li: ListRender,
  //textarea: TextareaRender,
  p: ParagraphRender,
  iframe: IframeRender,
  // p: ({ children }) => <p style={{ marginBottom: '1em' }}>{children}</p>,
};

export function ContentRender({ content }: MarkdownRenderProps) {
  return (
    <ReactMarkdown
      components={componentProps}
      rehypePlugins={[
        rehypeRaw,
        remarkRehype,
        //rehypeSanitize,
        [remarkRehype, { footnoteLabel: 'footnote' }],
      ]}
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </ReactMarkdown>
  );
}
