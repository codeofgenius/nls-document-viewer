import React from 'react';

import { BookItem } from '@/components/view/boomItem';
import { getBooks } from '@/db/book';

export async function BookList() {
  const list = await getBooks();

  return (
    <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {list.length === 0 ? (
        <div className="mb-4 text-lg font-bold text-red-500">No Data</div>
      ) : (
        list.map((b, i) => (
          <React.Fragment key={i}>
            <BookItem {...{ book: b }} />
          </React.Fragment>
        ))
      )}
    </div>
  );
}
