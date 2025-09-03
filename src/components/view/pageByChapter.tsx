'use client';

import React, { useRef, useState } from 'react';

import { HiOutlineChevronRight } from 'react-icons/hi2';

import { TextLink } from '@/components/ui/link';
import { classNames } from '@/lib/utils/common';
import { type PageByChapterProps } from '@/types/page';

export function PageByChapter({ book, chapter }: PageByChapterProps) {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const childElement = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  function handleClickOpen(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();

    if (!childElement.current) return;
    const childHeight = childElement.current.clientHeight;
    setContentHeight(childHeight);
    setOpen((e) => !e);
  }

  return (
    <>
      <TextLink
        className="flex w-full items-center px-4 py-4 hover:bg-gray-200 hover:dark:bg-gray-700"
        href={`/view/${book.slug}/${chapter.chapter.slug ?? ''}`}
      >
        <div
          className="me-2 inline-flex cursor-pointer items-center rounded-full bg-gray-300 p-2 text-center text-sm font-medium text-white hover:bg-gray-400 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-blue-800"
          onClick={handleClickOpen}
        >
          <HiOutlineChevronRight
            className={classNames(
              open ? 'animate-spin-90' : 'animate-spin-90-0',
              'h-[16px] w-[16px]',
            )}
          />
        </div>
        {chapter.chapter.title}
      </TextLink>
      <div
        className="accordionBody bg-gray-100 dark:bg-gray-800"
        style={{
          height: open ? `${contentHeight.toString()}px` : '0px',
          opacity: open ? 1 : 0,
        }}
      >
        <div className="" ref={childElement}>
          {chapter.pages.map((e2) => (
            <TextLink
              className="inline-flex w-full items-center py-4 pl-14 hover:bg-gray-200 hover:dark:bg-gray-700"
              href={`/view/${book.slug}/${e2.slug ?? ''}`}
              key={e2.id}
            >
              <HiOutlineChevronRight className="mr-1 h-[18px] w-[18px]" />
              {e2.title}
            </TextLink>
          ))}
        </div>
      </div>
    </>
  );
}
