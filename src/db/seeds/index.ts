import * as fs from 'fs';

import matter from 'gray-matter';

import { prisma } from '@/db/prisma';
import { type BookOptionalDefaults } from '@/lib/schema/generated/zod';

type MdFileInfo = {
  content: string;
  data: Record<string, string>;
};

type FileInfo = {
  path: string;
  type: 'file' | 'directory';
  content?: string;
  data: Record<string, string>;
};

// config setting
const bookSlug = 'sample';
// const bookSlug = 'itpassport-ja';
//////

const fileInfos: FileInfo[] = [];
const baseDir = 'nls-document/document';
const readFileRootPath = `./${baseDir}/${bookSlug}`;

async function main() {
  try {
    console.log('Start');
    let book = await prisma.book.findFirst({
      where: {
        slug: bookSlug,
      },
    });

    if (!book) {
      console.log('Book doe not exists');

      const bookMdFilePath = `${readFileRootPath}/index.md`;
      const result = readMdFile(bookMdFilePath);
      if (!result) {
        throw new Error('book md not found');
      }
      const { content, data } = result;
      const book: BookOptionalDefaults = {
        title: data.title ?? '',
        displayLanguage: data.displayLanguage ?? '',
        description: content,
        slug: data.slug ?? '',
        imageUrl: '',
        difficulty: Number(data.difficulty),
        type: data.type,
      };
      await prisma.book.create({ data: book });
      console.log('Book is created');
    }

    book = await prisma.book.findFirst({
      where: {
        slug: bookSlug,
      },
    });

    if (!book) {
      throw new Error('Book is not found!!!');
    }

    // get book id
    const bookId = book.id;

    // get all works for bok
    const pages = await prisma.page.findMany({
      where: {
        bookId: bookId,
      },
    });

    // get all markdown files
    readFilesRecursive(readFileRootPath, fileInfos);

    for (const file of fileInfos) {
      const slug = file.data.slug;
      const page = pages.find((p) => p.slug === slug);
      const data = {
        title: file.data.title ?? '',
        displayLanguage: file.data.displayLanguage ?? '',
        type: file.data.type ?? '',
        seq: Number(file.data.seq),
        difficulty: Number(file.data.difficulty),
        slug: file.data.slug ?? '',
        bookId: bookId,
        body: file.content ?? '',
      };
      if (page) {
        // work does exists, update
        await prisma.page.update({
          where: {
            id: page.id,
          },
          data: data,
        });
      } else {
        // work does not exists, insert
        await prisma.page.create({
          data: data,
        });
      }
    }
    console.log('Pages are created');
    // console.log(fileInfos[0]);
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

function readMdFile(path: string): MdFileInfo | undefined {
  try {
    const rawContent = fs.readFileSync(path, 'utf8');
    const { content, data } = matter(rawContent);
    return { content, data };
  } catch (error) {
    console.error(`Error reading path: ${path}`, error);
  }
}

function readFilesRecursive(path: string, fileInfos: FileInfo[]): FileInfo[] {
  try {
    if (path.endsWith(`${bookSlug}/index.md`)) {
      return fileInfos;
    }

    const stats = fs.statSync(path);

    if (stats.isDirectory()) {
      const files = fs.readdirSync(path);
      files.forEach((file) => {
        const fullPath = `${path}/${file}`;
        readFilesRecursive(fullPath, fileInfos);
      });
    } else if (stats.isFile()) {
      if (path.endsWith('md')) {
        const rawContent = fs.readFileSync(path, 'utf8');
        const { content, data } = matter(rawContent);

        fileInfos.push({
          type: 'file',
          path,
          content,
          data,
        });
      }
    }
  } catch (error) {
    console.error(`Error reading path: ${path}`, error);
  }
  return fileInfos;
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
