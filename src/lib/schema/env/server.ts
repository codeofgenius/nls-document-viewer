import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    DATABASE_URL: z.string().url(),
    GEMINI_API_KEY: z.string(),
    //DEBUG_TEST2: z.string(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    // DEBUG_TEST2: process.env.DEBUG_TEST2,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
