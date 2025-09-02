import * as z from 'zod';

// スキーマ定義
export const MyFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'invalid email type' })
    .min(1, { message: 'email is required' }),
  password: z
    .string()
    .min(1, { message: 'password is required' })
    .min(8, 'password is too short'),
});
