import { notFound } from 'next/navigation';

import { BookEditForm } from '@/components/book/editForm';
import { Heading1 } from '@/components/ui/common';
import { getBook } from '@/db/book';
import { DESCRIPTION, APP_NAME } from '@/lib/constant';

import type { EditPageProps } from '@/types/page';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Book Edit',
    description: `Book | ${DESCRIPTION} | ${APP_NAME}`,
  };
}

export default async function Page({ params }: EditPageProps) {
  const { id } = await params;
  const numId = Number(id);
  const book = await getBook(numId);
  if (!book) {
    notFound();
  }
  return (
    <div className="p-4">
      <Heading1 className="mb-4">Author Edit</Heading1>
      <BookEditForm {...{ book }} />
    </div>
  );
}
