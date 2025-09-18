import { Heading1, Heading2 } from '@/components/ui/common';
import { BookList } from '@/components/view/bookList';
import { APP_NAME } from '@/lib/constant';

import type { IndexPageProps } from '@/types/page';

export function Index({ books }: IndexPageProps) {
  return (
    <div className="p-4">
      <Heading1 className="mb-4">{APP_NAME}</Heading1>
      <Heading2 className="mb-4">Book List</Heading2>
      <BookList {...{ books }} />
    </div>
  );
}
