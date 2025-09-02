'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { bookEditAction } from '@/actions/book';
import { LoadingButton } from '@/components/ui/button';
import { TextInput } from '@/components/ui/input';
import { BookSchema, type Book } from '@/lib/schema/generated/zod';
import { getKeys } from '@/lib/utils/common';

export function BookEditForm({ book }: { book: Book }) {
  const router = useRouter();
  const { register, handleSubmit, formState, clearErrors, setError } = useForm({
    resolver: zodResolver(BookSchema),
    defaultValues: book,
  });
  const { errors, isDirty, isValid, isSubmitting } = formState;

  async function onSubmit(data: Book) {
    clearErrors();
    // サーバアクションを起動
    const result = await bookEditAction(data);
    if (!result.success) {
      // サーバー側バリデーション失敗なら、エラーを表示する
      getKeys(result.error).map((key) => {
        const message = result.error[key] ? result.error[key][0] : '';
        setError(key, { message });
      });
    } else {
      toast.info('book is updated');
      router.push('/book');
    }
  }

  return (
    <div className="w-full md:w-2xl mx-auto">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          errorMessage={errors.title?.message}
          formState={formState}
          full
          label="title"
          name="title"
          register={register}
        />
        <LoadingButton
          disabled={!isDirty || !isValid || isSubmitting}
          fullSized
          isProcessing={isSubmitting}
          label="create"
        />
      </form>
    </div>
  );
}
