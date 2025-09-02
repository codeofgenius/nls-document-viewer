import { type MyFormSchema } from '@/lib/schema/form';

import type * as z from 'zod';

// スキーマ定義から型を定義
export type MyFormSchemaType = z.infer<typeof MyFormSchema>;
