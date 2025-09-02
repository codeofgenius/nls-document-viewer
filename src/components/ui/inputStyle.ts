import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

import {
  type InputStyleArgsType,
  type LabelStyleArgsType,
  type HelpStyleArgsType,
  type SelectIconStyleArgsType,
} from '@/types/ui';

export const textInputStyle = tv({
  base: 'peer block appearance-none border-1',
  variants: {
    color: {
      default:
        'border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500',
      success:
        'border-green-300 bg-gray-50 text-gray-900 focus:border-green-600 focus:ring-0 focus:outline-none dark:border-green-600 dark:bg-gray-700 dark:text-white dark:focus:border-green-500',
      failure:
        'border-red-300 bg-gray-50 text-gray-900 focus:border-red-600 focus:ring-0 focus:outline-none dark:border-red-600 dark:bg-gray-700 dark:text-white dark:focus:border-red-500',
    },
    size: {
      sm: 'text-sm rounded-sm px-2.5 pt-5 pb-2.5',
      md: 'text-base rounded-md px-2.5 pt-5 pb-2.5',
      lg: 'text-lg rounded-lg px-2.5 pt-5 pb-2.5',
    },
    full: {
      default: '',
      full: 'w-full',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    full: 'default',
  },
});

export const labelStyle = tv({
  base: 'absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75',
  variants: {
    color: {
      default:
        'text-gray-500 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500',
      success:
        'text-gray-500 peer-focus:text-green-600 dark:text-gray-400 peer-focus:dark:text-green-500',
      failure:
        'text-gray-500 peer-focus:text-red-600 dark:text-gray-400 peer-focus:dark:text-red-500',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
});

export const helpStyle = tv({
  base: 'my-2 pl-2',
  variants: {
    color: {
      default: 'text-gray-600',
      success: 'text-green-600',
      failure: 'text-red-600',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
});

export function generateTextInputStyle({
  color,
  size,
  full,
  className,
}: InputStyleArgsType) {
  const base = textInputStyle({ color, size, full: full ? 'full' : 'default' });
  return twMerge(base, className);
}

export function generateLabelStyle({
  color,
  size,
  className,
}: LabelStyleArgsType) {
  const base = labelStyle({ color, size });
  return twMerge(base, className);
}

export function generateHelpStyle({
  color,
  size,
  className,
}: HelpStyleArgsType) {
  const base = helpStyle({ color, size });
  return twMerge(base, className);
}

export const selectStyle = tv({
  base: 'peer block appearance-none border-1 relative',
  variants: {
    color: {
      default:
        'border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500',
      success:
        'border-green-300 bg-gray-50 text-gray-900 focus:border-green-600 focus:ring-0 focus:outline-none dark:border-green-600 dark:bg-gray-700 dark:text-white dark:focus:border-green-500',
      failure:
        'border-red-300 bg-gray-50 text-gray-900 focus:border-red-600 focus:ring-0 focus:outline-none dark:border-red-600 dark:bg-gray-700 dark:text-white dark:focus:border-red-500',
    },
    size: {
      sm: 'text-sm rounded-sm px-2.5 pt-2.5 pb-2.5',
      md: 'text-base rounded-md px-2.5 pt-2.5 pb-2.5',
      lg: 'text-lg rounded-lg px-2.5 pt-2.5 pb-2.5',
    },
    full: {
      default: 'min-w-[50px] pr-13',
      full: 'w-full',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    full: 'default',
  },
});

export const selectLabelStyle = tv({
  base: 'mb-2 block',
  variants: {
    color: {
      default:
        'text-gray-500 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500',
      success:
        'text-green-500 peer-focus:text-green-600 dark:text-green-400 peer-focus:dark:text-green-500',
      failure:
        'text-red-500 peer-focus:text-red-600 dark:text-red-400 peer-focus:dark:text-red-500',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
});

export const selectIconStyle = tv({
  base: 'h-5 w-5 ml-1 absolute text-slate-900 dark:text-slate-100',
  variants: {
    position: {
      sm_label: 'top-10 right-2.5',
      sm_label_no: 'top-3 right-2.5',
      md_label: 'top-11 right-2.5',
      md_label_no: 'top-3.5 right-2.5',
      lg_label: 'top-13 right-2.5',
      lg_label_no: 'top-4 right-2.5',
    },
  },
  defaultVariants: {
    position: 'md_label',
  },
});

export function generateSelectStyle({
  color,
  size,
  full,
  className,
}: InputStyleArgsType) {
  const base = selectStyle({
    color,
    size,
    full: full ? 'full' : 'default',
  });
  return twMerge(base, className);
}

export function generateSelectLabelStyle({
  color,
  size,
  className,
}: LabelStyleArgsType) {
  const base = selectLabelStyle({ color, size });
  return twMerge(base, className);
}

export function generateSelectIconStyle({
  position,
  className,
}: SelectIconStyleArgsType) {
  const base = selectIconStyle({ position });
  return twMerge(base, className);
}
