import { ContentRender } from '@/components/view/markdown/contentRender';
import { MenuRender } from '@/components/view/markdown/menuRender';
import { ScrollToTop } from '@/components/view/markdown/scroll';
import { type MarkdownRenderProps } from '@/types/markdown';

export function MarkdownRender({ content }: MarkdownRenderProps) {
  return (
    <>
      <MenuRender {...{ content }} />
      <ContentRender {...{ content }} />
      <ScrollToTop />
      {/* <BookmarkButton /> */}
    </>
  );
}
