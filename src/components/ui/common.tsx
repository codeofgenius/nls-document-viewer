import { twMerge } from 'tailwind-merge';
//import { tv } from 'tailwind-variants';

import type { HeadingProps } from '@/types/ui';

export function Heading1({ children, className }: HeadingProps) {
  return (
    <h1 className={twMerge('text-center text-4xl font-bold', className)}>
      {children}
    </h1>
  );
}

export function Heading2({ children, className }: HeadingProps) {
  return (
    <h2 className={twMerge('text-center text-2xl', className)}>{children}</h2>
  );
}

export function Heading3({ children, className }: HeadingProps) {
  return (
    <h3 className={twMerge('text-center text-xl', className)}>{children}</h3>
  );
}

export function Heading4({ children, className }: HeadingProps) {
  return (
    <h4 className={twMerge('text-center text-lg', className)}>{children}</h4>
  );
}

export function Heading5({ children, className }: HeadingProps) {
  return (
    <h5 className={twMerge('text-center text-base', className)}>{children}</h5>
  );
}
