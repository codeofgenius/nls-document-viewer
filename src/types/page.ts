import type { getBooks } from '@/db/book';
import type { Book } from '@/db/prisma';
import type { PagePartialWithRelations } from '@/lib/schema/generated/zod';

export type LayoutProps = {
  children: React.ReactNode;
};

export type PageProps = {
  children: React.ReactNode;
};

export type ViewPageProps = {
  params: Promise<{ id: string }>;
};

export type EditPageProps = ViewPageProps;

export type ViewBookProps = {
  params: Promise<{ bookSlug: string }>;
};

export type ViewBookPageProps = {
  params: Promise<{ bookSlug: string; pageSlugs: string[] }>;
};

export type Chapter = {
  chapter: PagePartialWithRelations;
  pages: PagePartialWithRelations[];
};

export type Chapters = Chapter[];

export type PageByChapterProps = {
  book: Book;
  chapter: Chapter;
};

export type BooksReturnType = Awaited<ReturnType<typeof getBooks>>;

export type IndexPageProps = {
  books: BooksReturnType;
};

export type SplashControllerProps = IndexPageProps;
