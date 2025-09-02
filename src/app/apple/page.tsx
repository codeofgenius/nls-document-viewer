import { Heading1, Heading2 } from '@/components/ui/common';

export default function Page() {
  return (
    <div className="p-4">
      <Heading1 className="mb-4 text-red-400 dark:text-red-600">Apple</Heading1>
      <Heading2 className="mb-4">This is Apple page</Heading2>
      <div className="my-4">{'apple, '.repeat(100)}</div>
    </div>
  );
}
