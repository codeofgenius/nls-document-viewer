import { SplashControl } from '@/components/common/splashControl';
import { getBooks } from '@/db/book';

export default async function Page() {
  const books = await getBooks();
  return <SplashControl {...{ books }} />;
}
