'use client';

import { useEffect } from 'react';

import { toast, type TypeOptions } from 'react-toastify';

import { deleteToastCookie } from '@/actions/cookies';

const toastId = 'redirectToast';

export function ToastEmitter({
  type,
  message,
}: {
  type: TypeOptions;
  message: string;
}) {
  useEffect(() => {
    void (async () => {
      if (!toast.isActive(toastId)) {
        toast(message, { type, toastId });
      }
      await deleteToastCookie();
    })();
  }, [type, message]);
  return null;
}
