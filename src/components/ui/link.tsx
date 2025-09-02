import { useMemo } from 'react';

import Link from 'next/link';

import {
  generateButtonLinkStyle,
  generateTextLinkStyle,
} from '@/components/ui/linkStyle';
import { type ButtonLinkProps, type TextLinkProps } from '@/types/ui';

export function ButtonLink({
  color,
  href,
  size,
  className,
  outline,
  pill,
  fullSized,
  children,
}: ButtonLinkProps) {
  const cn = useMemo(
    () =>
      generateButtonLinkStyle({
        color,
        size,
        fullSized,
        pill,
        outline,
        className,
      }),
    [color, size, fullSized, pill, outline, className],
  );
  return (
    <Link className={cn} href={href}>
      {children}
    </Link>
  );
}

export function TextLink({
  color,
  href,
  size,
  className,
  children,
  title,
}: TextLinkProps) {
  const cn = useMemo(
    () =>
      generateTextLinkStyle({
        color,
        size,
        className,
      }),
    [color, size, className],
  );
  return (
    <Link className={cn} href={href} title={title}>
      {children}
    </Link>
  );
}
