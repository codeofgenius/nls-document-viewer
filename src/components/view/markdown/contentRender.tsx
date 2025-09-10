import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';

import { CardLinkRender } from '@/components/view/markdown/cardLinkRender';
import { CodeRender } from '@/components/view/markdown/codeRender';
import { DefinitionRender } from '@/components/view/markdown/definitionRender';
import { HeadingRender } from '@/components/view/markdown/headingRender';
import { HrRender } from '@/components/view/markdown/hrRender';
import { IframeRender } from '@/components/view/markdown/iframeRender';
import { ImageRender } from '@/components/view/markdown/imageRender';
import { LinkRender } from '@/components/view/markdown/linkRender';
import { ListRender } from '@/components/view/markdown/listRender';
import { MessageRender } from '@/components/view/markdown/messageRender';
import { ParagraphRender } from '@/components/view/markdown/paragraphRender';
import { QuoteRender } from '@/components/view/markdown/quoteRender';
import { TableRender } from '@/components/view/markdown/tableRender';
//import { TextareaRender } from '@/components/view/markdown/textareaRender';
import {
  type MarkdownRenderProps,
  type ComponentParserType,
} from '@/types/markdown';

//import 'katex/dist/katex.min.css'; // `rehype-katex` does not import the CSS for you
//import 'rehype-katex/dist/katex.min.css';
import '@/styles/katex/dist/katex.min.css';

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
  textarea: TextareaRender,
  p: ParagraphRender,
  iframe: IframeRender,
  hr: HrRender,
  dl: DefinitionRender,
  dt: DefinitionRender,
  dd: DefinitionRender,
  cardlink: CardLinkRender,
  message: MessageRender,
  // p: ({ children }) => <p style={{ marginBottom: '1em' }}>{children}</p>,
};

export function ContentRender({ content }: MarkdownRenderProps) {
  return (
    <ReactMarkdown
      components={componentProps}
      rehypePlugins={[
        rehypeRaw,
        remarkRehype,
        [remarkRehype, { footnoteLabel: '脚注' }],
        rehypeKatex,
      ]}
      remarkPlugins={[
        remarkGfm,
        remarkDirective,
        remarkDirectiveRehype,
        remarkMath,
      ]}
    >
      {content}
    </ReactMarkdown>
  );
}
