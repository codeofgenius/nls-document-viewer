import { BookList } from '@/components/book/list';
import { Heading1 } from '@/components/ui/common';
import { DESCRIPTION, APP_NAME } from '@/lib/constant';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Book List',
    description: `Book | ${DESCRIPTION} | ${APP_NAME}`,
  };
}

export default function Page() {
  return (
    <div className="p-4">
      <Heading1 className="mb-4">Book List</Heading1>
      <BookList />
    </div>
  );
}
