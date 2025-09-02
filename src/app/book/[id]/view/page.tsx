import { notFound } from 'next/navigation';

import { BookViewForm } from '@/components/book/viewForm';
import { Heading1 } from '@/components/ui/common';
import { getBook } from '@/db/book';
import { DESCRIPTION, APP_NAME } from '@/lib/constant';

import type { ViewPageProps } from '@/types/page';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Book View',
    description: `Book | ${DESCRIPTION} | ${APP_NAME}`,
  };
}

export default async function Page({ params }: ViewPageProps) {
  const { id } = await params;
  const numId = Number(id);
  const book = await getBook(numId);
  if (!book) {
    notFound();
  }

  return (
    <div className="p-4">
      <Heading1 className="mb-4">Author View</Heading1>
      <BookViewForm {...{ book }} />
    </div>
  );
}
