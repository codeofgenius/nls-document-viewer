'use server';

import { revalidatePath } from 'next/cache';

import { createBook, deleteBook, updateBook } from '@/db/book';
import {
  BookOptionalDefaultsSchema,
  BookSchema,
  type Book,
  type BookOptionalDefaults,
} from '@/lib/schema/generated/zod';
import { buildZodError } from '@/lib/utils/common';

// create Book action
export async function bookCreateAction(data: BookOptionalDefaults) {
  const result = BookOptionalDefaultsSchema.safeParse(data);
  if (!result.success) {
    return buildZodError<BookOptionalDefaults>(result);
  }
  await createBook(result.data);
  revalidatePath('/book');
  return result;
}

export async function bookDeleteAction(id: number) {
  await deleteBook(id);
  revalidatePath('/book');
}

export async function bookEditAction(data: Book) {
  const result = BookSchema.safeParse(data);
  if (!result.success) {
    return buildZodError<Book>(result);
  }

  await updateBook(result.data);
  revalidatePath('/book');
  return result;
}
