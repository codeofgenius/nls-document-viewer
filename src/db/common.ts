import { z } from 'zod';

import { Prisma } from '@/db/prisma';

export function handleDatabaseError(error: unknown): never {
  if (error instanceof z.ZodError) {
    // in case of ZodError, throw again as it is.
    throw error;
  } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
    throw new Error(`Database Error: ${error.message}`);
  }
  throw new Error(
    `Unknown Error: ${error instanceof Error ? error.message : String(error)}`,
  );
}
