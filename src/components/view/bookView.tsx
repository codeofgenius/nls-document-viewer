import React from 'react';

import { HiOutlineChevronRight } from 'react-icons/hi2';

import { ButtonLink, TextLink } from '@/components/ui/link';
import { ContentRender } from '@/components/view/markdown/contentRender';
import { MenuRender } from '@/components/view/markdown/menuRender';
import { ScrollToTop } from '@/components/view/markdown/scroll';

import type { BookWithPartialRelations } from '@/lib/schema/generated/zod';

export function BookView({ book }: { book: BookWithPartialRelations }) {
  // const works = book ? book.Work : [];

  // const chapters: Chapters = [];
  // const chapterOnly = works.filter((w) => w.url.split('/').length <= 2);
  // const worksOnly = works.filter((w) => w.url.split('/').length >= 3);
  // chapterOnly.forEach((c) => chapters.push({ chapter: c, works: [] }));

  // for (const w of worksOnly) {
  //   for (const c of chapters) {
  //     if (w.url.startsWith(c.chapter.url)) {
  //       c.works.push(w);
  //     }
  //   }
  // }

  return (
    <div className="my-4">
      <div className="text-left">
        {/* <h2 className="mb-4 border-b-2 border-b-gray-300 p-2 text-lg font-bold">
          {book.title}
        </h2> */}
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
          <div className="mt-8 mb-4 border-1 border-gray-300 bg-white dark:border-gray-700 dark:bg-black">
            {book.pages?.map((p) => (
              <TextLink
                className="inline-flex w-full items-center px-4 py-4 hover:bg-gray-200 hover:dark:bg-gray-700"
                href={`/view/${book.slug}/${p.slug ?? ''}`}
                key={p.id}
              >
                <HiOutlineChevronRight className="mr-1 h-[18px] w-[18px]" />
                {p.title}
              </TextLink>
            ))}
          </div>

          // <div className="mt-8 mb-4 border-1 border-gray-300 bg-white dark:border-gray-700 dark:bg-black">
          //   {chapters.map((chapter) => (
          //     <ChapterWork {...{ book, chapter }} key={chapter.chapter.id} />
          //   ))}
          // </div>
        )}
      </div>
    </div>
  );
}
