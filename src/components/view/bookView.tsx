import React from 'react';

import { ButtonLink } from '@/components/ui/link';
import { ContentRender } from '@/components/view/markdown/contentRender';
import { MenuRender } from '@/components/view/markdown/menuRender';
import { ScrollToTop } from '@/components/view/markdown/scroll';
import { PageByChapter } from '@/components/view/pageByChapter';

import type { BookWithPartialRelations } from '@/lib/schema/generated/zod';
import type { Chapters } from '@/types/page';

export function BookView({ book }: { book: BookWithPartialRelations }) {
  const pages = book.pages;

  const chapters: Chapters = [];
  if (pages) {
    const chapterOnly = pages.filter(
      (p) => p.slug && p.slug.split('/').length === 1,
    );
    const pageOnly = pages.filter(
      (p) => p.slug && p.slug.split('/').length >= 2,
    );
    chapterOnly.forEach((c) => chapters.push({ chapter: c, pages: [] }));

    for (const p of pageOnly) {
      for (const c of chapters) {
        if (p.slug && c.chapter.slug && p.slug.startsWith(c.chapter.slug)) {
          c.pages.push(p);
        }
      }
    }
  }

  return (
    <div className="my-4">
      <div className="text-left">
        <div className="mr-2 mb-4">
          <MenuRender {...{ content: book.description }} />
          <ContentRender {...{ content: book.description }} />
          <ScrollToTop />
        </div>
        {book.pages && book.pages.length <= 0 ? (
          <div>
            <div className="mb-4 text-lg font-bold text-red-500">No Page</div>
            <ButtonLink className="inline-flex" color="danger" href="/">
              TOP
            </ButtonLink>
          </div>
        ) : (
          // <div className="mt-8 mb-4 border-1 border-gray-300 bg-white dark:border-gray-700 dark:bg-black">
          //   {book.pages?.map((p) => (
          //     <TextLink
          //       className="inline-flex w-full items-center px-4 py-4 hover:bg-gray-200 hover:dark:bg-gray-700"
          //       href={`/view/${book.slug}/${p.slug ?? ''}`}
          //       key={p.id}
          //     >
          //       <HiOutlineChevronRight className="mr-1 h-[18px] w-[18px]" />
          //       {p.title}
          //     </TextLink>
          //   ))}
          // </div>

          <div className="mt-8 mb-4 border-1 border-gray-300 bg-white dark:border-gray-700 dark:bg-black">
            {chapters.map((chapter) => (
              <PageByChapter {...{ book, chapter }} key={chapter.chapter.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
