import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

import bookImage from '@/assets/image/book.jpg';
import { MyImage } from '@/components/common/myImage';

import type { Book } from '@/db/prisma';

export function BookItem({ book }: { book: Book }) {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/view/${book.slug}`}>
        <MyImage
          alt="book image"
          className="rounded-t-lg"
          errorClassName=""
          height={630}
          src={bookImage}
          width={920}
        />
      </Link>
      <div className="p-5">
        <Link href={`/view/${book.slug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {book.title}
          </h5>
        </Link>
        {/* <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <ul>
            <li>Language: {book.displayLanguage}</li>
            <li>Difficulty: {book.difficulty}</li>
            <li>Type: {book.type}</li>
          </ul>
        </div> */}
        <Link
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          href={`/view/${book.slug}`}
        >
          Book
          <HiArrowRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
