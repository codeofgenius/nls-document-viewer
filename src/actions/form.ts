'use server';

import { MyFormSchema } from '@/lib/schema/form';
import { buildZodError } from '@/lib/utils/common';

import type { MyFormSchemaType } from '@/types/form';

// server action
export async function myFormAction(data: MyFormSchemaType) {
  const result = MyFormSchema.safeParse(data);
  if (!result.success) {
    return buildZodError<MyFormSchemaType>(result);
  }
  return result;
}
