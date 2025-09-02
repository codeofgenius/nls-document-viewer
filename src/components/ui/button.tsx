import { useMemo } from 'react';

import { FaSpinner } from 'react-icons/fa6';

import { generateButtonStyle } from '@/components/ui/buttonStyle';
import { type ButtonProps, type LoadingButtonProps } from '@/types/ui';

export function Button({
  type = 'submit',
  label,
  onClick,
  disabled = false,
  color,
  size,
  className,
  outline,
  pill,
  fullSized,
}: ButtonProps) {
  const cn = useMemo(
    () =>
      generateButtonStyle({
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
    <button className={cn} disabled={disabled} onClick={onClick} type={type}>
      {label}
    </button>
  );
}

export function LoadingButton({
  type = 'submit',
  label,
  onClick,
  disabled = false,
  color,
  size,
  className,
  outline,
  pill,
  isProcessing = false,
  fullSized,
}: LoadingButtonProps) {
  const cn = useMemo(
    () =>
      generateButtonStyle({
        color,
        size,
        fullSized,
        pill,
        outline,
        className,
        disabled,
      }),
    [color, size, fullSized, pill, outline, className, disabled],
  );

  return (
    <button className={cn} disabled={disabled} onClick={onClick} type={type}>
      {label}
      {isProcessing && <FaSpinner className="ml-2 h-6 w-6 animate-spin" />}
    </button>
  );
}
