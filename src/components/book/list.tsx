import {
  Table,
  TableHead,
  TableRow,
  TableHeadCell,
  TableBody,
  TableCell,
} from 'flowbite-react';

import { BookDeleteButton } from '@/components/book/deleteButton';
import { ButtonLink } from '@/components/ui/link';
import { getBooks } from '@/db/book';

export async function BookList() {
  const list = await getBooks();

  return (
    <div className="my-4  w-full md:w-2xl mx-auto">
      <div className="mb-4 flex justify-end">
        <ButtonLink href="/book/create">Create</ButtonLink>
      </div>
      {list.length === 0 ? (
        <div className="mb-4 text-lg font-bold text-red-500">No Data</div>
      ) : (
        <div className="relative overflow-x-auto w-full md:w-2xl mx-auto">
          <Table hoverable>
            <TableHead>
              <TableRow>
                <TableHeadCell className="bg-primary-200 text-slate-950 dark:text-slate-50 dark:bg-primary-800">
                  id
                </TableHeadCell>
                <TableHeadCell className="bg-primary-200 text-slate-950 dark:text-slate-50 dark:bg-primary-800">
                  title
                </TableHeadCell>
                <TableHeadCell className="bg-primary-200 text-slate-950 dark:text-slate-50 dark:bg-primary-800">
                  Control
                </TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y">
              {list.map((e, i) => (
                <TableRow
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={i}
                >
                  <TableCell className="py-2 px-6 font-medium text-gray-900 dark:text-white">
                    {e.id}
                  </TableCell>
                  <TableCell className="py-2 px-6 text-nowrap font-medium text-gray-900 dark:text-white">
                    {e.title}
                  </TableCell>
                  <TableCell className="py-2 px-6 flex gap-4">
                    <ButtonLink
                      href={`/book/${e.id.toString()}/view`}
                      size="xs"
                    >
                      View
                    </ButtonLink>
                    <ButtonLink
                      href={`/book/${e.id.toString()}/edit`}
                      size="xs"
                    >
                      Edit
                    </ButtonLink>
                    <BookDeleteButton {...{ id: e.id }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
