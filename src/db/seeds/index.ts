import { handleDatabaseError } from '@/db/common';
import { prisma } from '@/db/prisma';
//import { authors, books } from '@/db/seeds/seedData';

async function main() {
  try {
    // for (const { id, name } of authors) {
    //   // update or insert
    //   await prisma.author.upsert({
    //     where: { id },
    //     update: {},
    //     create: {
    //       id,
    //       name,
    //     },
    //   });
    // }
    // for (const { id, title, authorId } of books) {
    //   // update or insert
    //   await prisma.book.upsert({
    //     where: { id },
    //     update: {},
    //     create: {
    //       id,
    //       title,
    //       authorId,
    //     },
    //   });
    // }
    // const data = await prisma.author.findMany({
    //   include: {
    //     books: {
    //       orderBy: {
    //         id: 'asc',
    //       },
    //     },
    //   },
    //   orderBy: {
    //     id: 'asc',
    //   },
    // });
    // console.dir(data, { depth: null });
  } catch (error) {
    handleDatabaseError(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e: unknown) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
