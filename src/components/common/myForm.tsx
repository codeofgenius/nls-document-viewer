'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { myFormAction } from '@/actions/form';
import { LoadingButton } from '@/components/ui/button';
import { PasswordInput, TextInput } from '@/components/ui/input';
import { MyFormSchema } from '@/lib/schema/form';
import { getKeys } from '@/lib/utils/common';

import type { MyFormSchemaType } from '@/types/form';

export function MyForm() {
  const { register, handleSubmit, formState, clearErrors, setError } =
    useForm<MyFormSchemaType>({
      resolver: zodResolver(MyFormSchema),
    });
  const { errors, isDirty, isValid, isSubmitting } = formState;

  async function onSubmit(data: MyFormSchemaType) {
    clearErrors();
    // サーバアクションを起動
    const result = await myFormAction(data);
    console.log(result);
    if (!result.success) {
      // サーバー側バリデーション失敗なら、エラーを表示する
      getKeys(result.error).map((key) => {
        const message = result.error[key] ? result.error[key][0] : '';
        setError(key, { message });
      });
    } else {
      alert(JSON.stringify(result.data));
    }
  }

  return (
    <div className="mb-4 grid grid-cols-1 gap-4 p-4 md:grid-cols-12">
      <form
        className="md:col-span-6 md:col-start-4 space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          errorMessage={errors.email?.message}
          formState={formState}
          full
          label="email"
          name="email"
          register={register}
          type="email"
        />
        <PasswordInput
          errorMessage={errors.password?.message}
          formState={formState}
          full
          label="password"
          name="password"
          register={register}
        />
        <LoadingButton
          color="primary"
          disabled={!isDirty || !isValid || isSubmitting}
          fullSized
          isProcessing={isSubmitting}
          label="Submit"
        />
      </form>
    </div>
  );
}
