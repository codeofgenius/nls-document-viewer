import { notFound } from 'next/navigation';

import { BookView } from '@/components/view/bookView';
import { getBookBySlug } from '@/db/book';
import { DESCRIPTION, APP_NAME } from '@/lib/constant';

import type { ViewBookProps } from '@/types/page';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Book View',
    description: `Book | ${DESCRIPTION} | ${APP_NAME}`,
  };
}

export default async function Page({ params }: ViewBookProps) {
  const { bookSlug } = await params;
  const book = await getBookBySlug(bookSlug);
  if (!book) {
    notFound();
  }
  return (
    <div className="p-0 md:p-0 lg:p-4">
      <div className="flex lg:justify-center">
        <div className="mt-0 mb-0 w-[calc(100%)] max-w-4xl rounded-lg border-0 border-gray-300 bg-white px-10 py-10 text-left md:w-[calc(100%)] lg:mt-4 lg:mb-10 lg:w-[calc(100%-100px)] lg:border-2 lg:px-10 lg:py-10 xl:w-[calc(100%-200px)] 2xl:w-[calc(100%-300px)] dark:border-gray-700 dark:bg-black">
          <BookView {...{ book }} />
        </div>
      </div>
    </div>
  );
}
