import { Heading1, Heading2 } from '@/components/ui/common';

export default function Page() {
  return (
    <div className="p-4">
      <Heading1 className="mb-4 underline font-normal">About</Heading1>
      <Heading2 className="mb-4">This is About page</Heading2>
      <div className="my-4">{'about, '.repeat(100)}</div>
    </div>
  );
}
