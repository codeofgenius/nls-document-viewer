import { type AuthorSchema } from '@/lib/schema/db';

import type * as z from 'zod';

// スキーマ定義から型を定義
export type AuthorSchemaType = z.infer<typeof AuthorSchema>;
