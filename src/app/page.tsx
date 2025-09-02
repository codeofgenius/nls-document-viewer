import { Heading1, Heading2 } from '@/components/ui/common';
import { APP_NAME } from '@/lib/constant';

export default function Page() {
  return (
    <div className="p-4">
      <Heading1 className="mb-4">Hello, this is {APP_NAME}</Heading1>
      <Heading2 className="mb-4">This is home page</Heading2>
      <div className="m-4">{'Hello, '.repeat(100)}</div>
    </div>
  );
}
