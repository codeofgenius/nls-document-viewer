'use client';

import { useForm } from 'react-hook-form';

import { TextInput } from '@/components/ui/input';
import { ButtonLink } from '@/components/ui/link';

import type { Book } from '@/db/prisma';

export function BookViewForm({ book }: { book: Book }) {
  const { register, formState } = useForm<Book>({
    defaultValues: book,
  });

  return (
    <div className="w-full md:w-2xl mx-auto">
      <div className="flex justify-end mb-4">
        <ButtonLink href={`/book/${book.id.toString()}/edit`}>Edit</ButtonLink>
      </div>
      <form className="space-y-4">
        <TextInput
          disabled
          formState={formState}
          full
          label="title"
          name="title"
          readonly
          register={register}
        />
        <TextInput
          disabled
          formState={formState}
          full
          label="createdAt"
          name="createdAt"
          readonly
          register={register}
        />
        <TextInput
          disabled
          formState={formState}
          full
          label="modifiedAt"
          name="modifiedAt"
          readonly
          register={register}
        />
      </form>
    </div>
  );
}
