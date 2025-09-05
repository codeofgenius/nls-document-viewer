'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const noImage = '/noimage.png';

import {
  type CardLinkMetadataType,
  type CardLinkRouteHandlerResultType,
  type ParserType,
} from '@/types/markdown';

export function CardLinkRender({ className, href, id }: ParserType) {
  const [metaData, setMetaData] = useState<CardLinkMetadataType>({
    url: href,
    title: '',
    description: '',
    image: '',
  });
  const idText = id ?? '';

  useEffect(() => {
    void (async () => {
      if (!href) {
        return;
      }
      const res = await fetch(`/api/cardLink/?url=${href}`);
      const data: CardLinkRouteHandlerResultType = await res.json();
      if (!data.success) {
        return;
      }
      setMetaData(data.metaData);
    })();
  }, [href]);

  return href ? (
    <Link
      className={twMerge(
        'h-30 grid grid-cols-5 bg-white dark:bg-gray-950 border border-gray-400 my-4 rounded-md p-3 dark:border-gray-700 hover:bg-gray-50 hover:dark:bg-gray-900 relative',
        className,
      )}
      href={href}
      id={idText}
      target="_blank"
    >
      <div className="col-span-4 flex flex-col justify-start">
        <div className="mb-2 text-md font-bold text-slate-800 dark:text-slate-200">
          {metaData.title}
        </div>
        <div className="text-gray-700 text-xs mb-4 line-clamp-2 dark:text-slate-300">
          {metaData.description}
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-xs absolute bottom-4">
          {new URL(href).hostname}
        </div>
      </div>
      <div className="col-span-1 flex justify-end items-center">
        <img
          alt={metaData.title}
          className="object-contain"
          height="90px"
          src={metaData.image !== '' ? metaData.image : noImage}
          width="90px"
        />
      </div>
    </Link>
  ) : (
    <div>Not Found</div>
  );
}
