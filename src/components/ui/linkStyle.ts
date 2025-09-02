import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

import {
  type TextLinkStyleArgsType,
  type ButtonLinkStyleArgsType,
} from '@/types/ui';

export const buttonLinkStyle = tv({
  base: 'relative flex items-center justify-center rounded-lg text-center font-medium focus:outline-none focus:ring-4',
  variants: {
    color: {
      base: '',
      default:
        'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
      alternative:
        'border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700',
      blue: 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      cyan: 'bg-cyan-700 text-white hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800',
      dark: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
      gray: 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800',
      green:
        'bg-green-700 text-white hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
      indigo:
        'bg-indigo-700 text-white hover:bg-indigo-800 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800',
      light:
        'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
      lime: 'bg-lime-700 text-white hover:bg-lime-800 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800',
      pink: 'bg-pink-700 text-white hover:bg-pink-800 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800',
      purple:
        'bg-purple-700 text-white hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800',
      red: 'bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800',
      teal: 'bg-teal-700 text-white hover:bg-teal-800 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800',
      yellow:
        'bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-400 dark:focus:ring-yellow-900',
      primary:
        'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      secondary:
        'bg-amber-400 text-white hover:bg-amber-500 focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-400 dark:focus:ring-amber-900',
      success:
        'bg-green-700 text-white hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
      info: 'bg-cyan-700 text-white hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800',
      warning:
        'bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-400 dark:focus:ring-yellow-900',
      danger:
        'bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800',
    },
    size: {
      xs: 'h-8 px-3 text-xs',
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-5 text-sm',
      lg: 'h-12 px-5 text-base',
      xl: 'h-[52px] px-6 text-base',
    },
    outlineColor: {
      base: '',
      default:
        'border border-primary-700 text-primary-700 hover:border-primary-800 hover:bg-primary-800 hover:text-white focus:ring-primary-300 dark:border-primary-600 dark:text-primary-500 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:hover:text-white dark:focus:ring-primary-800',
      blue: 'border border-blue-700 text-blue-700 hover:border-blue-800 hover:bg-blue-800 hover:text-white focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:border-blue-700 dark:hover:bg-blue-700 dark:hover:text-white dark:focus:ring-blue-800',
      cyan: 'border border-cyan-700 text-cyan-700 hover:border-cyan-800 hover:bg-cyan-800 hover:text-white focus:ring-cyan-300 dark:border-cyan-500 dark:text-cyan-500 dark:hover:border-cyan-700 dark:hover:bg-cyan-700 dark:hover:text-white dark:focus:ring-cyan-800',
      dark: 'border border-gray-800 text-gray-800 hover:border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800',
      gray: 'border border-gray-700 text-gray-700 hover:border-gray-800 hover:bg-gray-800 hover:text-white focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-800',
      green:
        'border border-green-700 text-green-700 hover:border-green-800 hover:bg-green-800 hover:text-white focus:ring-green-300 dark:border-green-600 dark:text-green-500 dark:hover:border-green-700 dark:hover:bg-green-700 dark:hover:text-white dark:focus:ring-green-800',
      indigo:
        'border border-indigo-700 text-indigo-700 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white focus:ring-indigo-300 dark:border-indigo-600 dark:text-indigo-400 dark:hover:border-indigo-700 dark:hover:bg-indigo-700 dark:hover:text-white dark:focus:ring-indigo-800',
      light:
        'border border-gray-400 text-gray-900 hover:bg-gray-100 focus:ring-gray-100 dark:border-gray-600 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
      lime: 'border border-lime-700 text-lime-700 hover:border-lime-800 hover:bg-lime-800 hover:text-white focus:ring-lime-300 dark:border-lime-600 dark:text-lime-500 dark:hover:border-lime-700 dark:hover:bg-lime-700 dark:hover:text-white dark:focus:ring-lime-800',
      pink: 'border border-pink-700 text-pink-700 hover:border-pink-800 hover:bg-pink-800 hover:text-white focus:ring-pink-300 dark:border-pink-600 dark:text-pink-500 dark:hover:border-pink-700 dark:hover:bg-pink-700 dark:hover:text-white dark:focus:ring-pink-800',
      purple:
        'border border-purple-700 text-purple-700 hover:border-purple-800 hover:bg-purple-800 hover:text-white focus:ring-purple-300 dark:border-purple-600 dark:text-purple-400 dark:hover:border-purple-700 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-purple-800',
      red: 'border border-red-700 text-red-700 hover:border-red-800 hover:bg-red-800 hover:text-white focus:ring-red-300 dark:border-red-600 dark:text-red-500 dark:hover:border-red-700 dark:hover:bg-red-700 dark:hover:text-white dark:focus:ring-red-800',
      teal: 'border border-teal-700 text-teal-700 hover:border-teal-800 hover:bg-teal-800 hover:text-white focus:ring-teal-300 dark:border-teal-600 dark:text-teal-400 dark:hover:border-teal-700 dark:hover:bg-teal-700 dark:hover:text-white dark:focus:ring-teal-800',
      yellow:
        'border border-yellow-400 text-yellow-400 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-white dark:focus:ring-yellow-900',
      primary:
        'border border-blue-700 text-blue-700 hover:border-blue-800 hover:bg-blue-800 hover:text-white focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:border-blue-700 dark:hover:bg-blue-700 dark:hover:text-white dark:focus:ring-blue-800',
      secondary:
        'border border-amber-400 text-amber-400 hover:border-amber-500 hover:bg-amber-500 hover:text-white focus:ring-amber-300 dark:border-amber-300 dark:text-amber-300 dark:hover:border-amber-400 dark:hover:bg-amber-400 dark:hover:text-white dark:focus:ring-amber-900',
      success:
        'border border-green-700 text-green-700 hover:border-green-800 hover:bg-green-800 hover:text-white focus:ring-green-300 dark:border-green-600 dark:text-green-500 dark:hover:border-green-700 dark:hover:bg-green-700 dark:hover:text-white dark:focus:ring-green-800',
      info: 'border border-cyan-700 text-cyan-700 hover:border-cyan-800 hover:bg-cyan-800 hover:text-white focus:ring-cyan-300 dark:border-cyan-500 dark:text-cyan-500 dark:hover:border-cyan-700 dark:hover:bg-cyan-700 dark:hover:text-white dark:focus:ring-cyan-800',
      warning:
        'border border-yellow-400 text-yellow-400 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-white dark:focus:ring-yellow-900',
      danger:
        'border border-red-700 text-red-700 hover:border-red-800 hover:bg-red-800 hover:text-white focus:ring-red-300 dark:border-red-600 dark:text-red-500 dark:hover:border-red-700 dark:hover:bg-red-700 dark:hover:text-white dark:focus:ring-red-800',
    },
    fullSized: {
      base: '',
      fullSized: 'w-full',
    },
    pill: {
      base: '',
      pill: 'rounded-full',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    outlineColor: 'base',
    fullSized: 'base',
    pill: 'base',
  },
});

export function generateButtonLinkStyle({
  color,
  size,
  fullSized,
  outline,
  pill,
  className,
}: ButtonLinkStyleArgsType) {
  const base = buttonLinkStyle({
    color: outline ? 'base' : color,
    size,
    fullSized: fullSized ? 'fullSized' : 'base',
    pill: pill ? 'pill' : 'base',
    outlineColor: outline ? color : 'base',
  });
  // Merge the base class with the additional className
  return twMerge(base, className);
}

export const textLinkStyle = tv({
  base: 'font-medium self-center',

  variants: {
    color: {
      default:
        'text-primary-500 outline-primary-600 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-100 dark:outline-primary-300',
      blue: 'text-blue-500 outline-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100 dark:outline-blue-300',
      cyan: 'text-cyan-500 outline-cyan-600 hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-100 dark:outline-cyan-300',
      dark: 'text-dark-500 outline-dark-600 hover:text-dark-800 dark:text-dark-300 dark:hover:text-dark-100 dark:outline-dark-300',
      gray: 'text-gray-500 outline-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:outline-gray-300',
      green:
        'text-green-500 outline-green-600 hover:text-green-800 dark:text-green-300 dark:hover:text-green-100 dark:outline-green-300',
      indigo:
        'text-indigo-500 outline-indigo-600 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-100 dark:outline-indigo-300',
      light:
        'text-light-500 outline-light-600 hover:text-light-800 dark:text-light-300 dark:hover:text-light-100 dark:outline-light-300',
      lime: 'text-lime-500 outline-lime-600 hover:text-lime-800 dark:text-lime-300 dark:hover:text-lime-100 dark:outline-lime-300',
      pink: 'text-pink-500 outline-pink-600 hover:text-pink-800 dark:text-pink-300 dark:hover:text-pink-100 dark:outline-pink-300',
      purple:
        'text-purple-500 outline-purple-600 hover:text-purple-800 dark:text-purple-300 dark:hover:text-purple-100 dark:outline-purple-300',
      red: 'text-red-500 outline-red-600 hover:text-red-800 dark:text-red-300 dark:hover:text-red-100 dark:outline-red-300',
      teal: 'text-teal-500 outline-teal-600 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-100 dark:outline-teal-300',
      yellow:
        'text-yellow-500 outline-yellow-600 hover:text-yellow-800 dark:text-yellow-300 dark:hover:text-yellow-100 dark:outline-yellow-300',
      primary:
        'text-blue-500 outline-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100 dark:outline-blue-300',
      secondary:
        'text-amber-500 outline-amber-600 hover:text-amber-800 dark:text-amber-300 dark:hover:text-amber-100 dark:outline-amber-300',
      success:
        'text-green-500 outline-green-600 hover:text-green-800 dark:text-green-300 dark:hover:text-green-100 dark:outline-green-300',
      info: 'text-cyan-500 outline-cyan-600 hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-100 dark:outline-cyan-300',
      warning:
        'text-yellow-500 outline-yellow-600 hover:text-yellow-800 dark:text-yellow-300 dark:hover:text-yellow-100 dark:outline-yellow-300',
      danger:
        'text-red-500 outline-red-600 hover:text-red-800 dark:text-red-300 dark:hover:text-red-100 dark:outline-red-300',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
});

export function generateTextLinkStyle({
  color,
  size,
  className,
}: TextLinkStyleArgsType) {
  const base = textLinkStyle({
    color,
    size,
  });
  // Merge the base class with the additional className
  return twMerge(base, className);
}
