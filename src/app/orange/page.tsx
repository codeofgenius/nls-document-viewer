import { Heading1, Heading2 } from '@/components/ui/common';

export default function Page() {
  return (
    <div className="p-4">
      <Heading1 className="mb-4 text-amber-400 dark:text-amber-600">
        Orange
      </Heading1>
      <Heading2 className="mb-4">This is Orange page</Heading2>
      <div className="my-4">{'orange, '.repeat(100)}</div>
    </div>
  );
}
