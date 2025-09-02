import { withAccelerate } from '@prisma/extension-accelerate';

import { env } from '@/lib/schema/env/server';
import { PrismaClient } from '@/lib/schema/generated/prisma';

function createPrismaClient() {
  return new PrismaClient({
    log:
      env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  }).$extends(withAccelerate());
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
export * from '@/lib/schema/generated/prisma';
