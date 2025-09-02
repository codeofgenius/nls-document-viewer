'use client';

import { useEffect } from 'react';

import { Button } from 'flowbite-react';

import { Heading1, Heading2 } from '@/components/ui/common';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // log error
    console.error(error);
  }, [error]);

  return (
    <div className="p-4">
      <Heading1 className="mb-4">Error</Heading1>
      <Heading2 className="mb-4">Error has occurred</Heading2>
      <div className="flex justify-center my-4 gap-4">
        <Button
          color="red"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => {
              reset();
            }
          }
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
