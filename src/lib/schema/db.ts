import * as z from 'zod';

// スキーマ定義
export const AuthorSchema = z.object({
  id: z.number().optional(),
  name: z.string().nonempty({ message: 'name is required' }),
});
