import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import { ButtonLink } from '@/components/ui/link';
import { MarkdownRender } from '@/components/view/markdown/render';
import { type Page } from '@/db/prisma';
import {
  type MarkdownPagerProps,
  type BookPageReturnType,
  type MarkdownParserProps,
} from '@/types/markdown';

export async function MarkdownParser({
  bookSlug,
  pageSlug,
  book,
  page,
}: MarkdownParserProps) {
  // const t = await getTranslations('common');
  // const [_bookName, chapterName, workName] = slug;

  const nextPage = getNext({ ...{ book, page } });
  const previousPage = getPrevious({ ...{ book, page } });

  return (
    <>
      <div className="mb-4 text-right text-base">
        {/* {book?.title} / {chapterName} {workName && `/ ${workName}`} */}
        {book?.title}
      </div>
      <MarkdownRender {...{ content: page.body }} />
      <Pager {...{ bookSlug, pageSlug, nextPage, previousPage }} />
    </>
  );
}

function Pager({ bookSlug, nextPage, previousPage }: MarkdownPagerProps) {
  // work pager
  return (
    <div className="mt-8 mb-8 flex justify-center gap-8">
      {previousPage ? (
        <ButtonLink
          color="secondary"
          href={`/view/${bookSlug}/${previousPage.slug}`}
          size="xl"
        >
          <FaAngleLeft className="mr-1" />
          pre
        </ButtonLink>
      ) : (
        <div />
      )}
      {nextPage ? (
        <ButtonLink
          color="secondary"
          href={`/view/${bookSlug}/${nextPage.slug}`}
          size="xl"
        >
          next
          <FaAngleRight className="ml-1" />
        </ButtonLink>
      ) : (
        <div />
      )}
    </div>
  );
}

function getNext({
  book,
  page,
}: {
  page: Page;
  book: BookPageReturnType;
}): Page | false {
  // get next work in book
  if (!book) {
    return false;
  }
  const index = book.pages.findIndex((e) => e.slug === page.slug);
  if (index !== -1 && index + 1 < book.pages.length) {
    const nextWork = book.pages[index + 1];
    return nextWork ?? false;
  } else {
    return false;
  }
}

function getPrevious({
  book,
  page,
}: {
  page: Page;
  book: BookPageReturnType;
}): Page | false {
  // get previous work in book
  if (!book) {
    return false;
  }
  const index = book.pages.findIndex((e) => e.slug === page.slug);
  if (index > 0) {
    const previousWork = book.pages[index - 1];
    return previousWork ?? false;
  } else {
    return false;
  }
}
