import { Button } from 'flowbite-react';

import { Heading1, Heading2 } from '@/components/ui/common';

export default function NotFound() {
  return (
    <div className="p-4">
      <Heading1 className="mb-4">Not Found</Heading1>
      <Heading2 className="mb-4">Page does not exist</Heading2>
      <div className="flex justify-center my-4 gap-4">
        <Button color="red" href="/">
          Home
        </Button>
      </div>
    </div>
  );
}
