import { handleDatabaseError } from '@/db/common';
import { prisma } from '@/db/prisma';

import type { BookOptionalDefaults } from '@/lib/schema/generated/zod';
import type { Book } from '@/lib/schema/generated/zod';

export async function getBooks() {
  try {
    const books = await prisma.book.findMany({
      include: {
        pages: true,
      },
    });
    return books;
  } catch (error) {
    handleDatabaseError(error);
  }
}

export async function getBook(id: number) {
  try {
    // const orange = await prisma.book.findMany({
    //   include: {
    //     pages: true,
    //   },
    // });
    const book = await prisma.book.findFirst({
      where: {
        id,
      },
      include: {
        pages: {
          orderBy: {
            seq: 'asc',
          },
        },
      },
    });
    return book;
  } catch (error) {
    handleDatabaseError(error);
  }
}

export async function getBookBySlug(slug: string) {
  try {
    const book = await prisma.book.findFirst({
      where: {
        slug,
      },
      include: {
        pages: {
          orderBy: {
            seq: 'asc',
          },
        },
      },
    });
    return book;
  } catch (error) {
    handleDatabaseError(error);
  }
}

export async function createBook(data: BookOptionalDefaults) {
  try {
    const book = await prisma.book.create({ data });
    return book;
  } catch (error) {
    handleDatabaseError(error);
  }
}

export async function deleteBook(id: number) {
  try {
    const book = await prisma.book.delete({ where: { id } });
    return book;
  } catch (error) {
    handleDatabaseError(error);
  }
}

export async function updateBook(data: Book) {
  try {
    const book = await prisma.book.update({
      where: {
        id: data.id,
      },
      data: data,
    });
    return book;
  } catch (error) {
    handleDatabaseError(error);
  }
}
