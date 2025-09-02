'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { bookDeleteAction } from '@/actions/book';
import { Button } from '@/components/ui/button';

export function BookDeleteButton({ id }: { id: number }) {
  const router = useRouter();
  async function handleClick() {
    await bookDeleteAction(id);
    toast.info('book is deleted');
    router.push('/book');
  }

  return (
    <Button color="danger" label="Delete" onClick={handleClick} size="xs" />
  );
}
