import { BookCreateForm } from '@/components/book/createForm';
import { Heading1 } from '@/components/ui/common';
import { DESCRIPTION, APP_NAME } from '@/lib/constant';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Book Create',
    description: `Book | ${DESCRIPTION} | ${APP_NAME}`,
  };
}

export default async function Page() {
  return (
    <div className="p-4">
      <Heading1 className="mb-4">Book Create</Heading1>
      <BookCreateForm />
    </div>
  );
}
