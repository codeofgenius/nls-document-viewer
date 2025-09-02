'use client';

import { useThemeMode } from 'flowbite-react';
import { Slide, ToastContainer } from 'react-toastify';

import { type PageProps } from '@/types/page';

export function ToastProvider({ children }: PageProps) {
  const { mode } = useThemeMode();
  const theme = mode === 'light' ? 'light' : 'dark';

  return (
    <>
      {children}
      <ToastContainer
        autoClose={2000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="top-right"
        rtl={false}
        theme={theme}
        transition={Slide}
      />
    </>
  );
}
