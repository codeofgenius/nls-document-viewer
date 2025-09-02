export type HeadingProps = {
  className?: string;
  children: React.ReactNode;
};

import { type FlowbiteColors } from 'flowbite-react/types';
import {
  type UseFormRegister,
  type FieldValues,
  type Path,
  type FormState,
  type RegisterOptions,
} from 'react-hook-form';

export const colors = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
] as const;

export const flowbiteColors = [
  'blue',
  'cyan',
  'dark',
  'gray',
  'green',
  'indigo',
  'light',
  'lime',
  'pink',
  'purple',
  'red',
  'teal',
  'yellow',
  'default',
] as const;

export const size = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type MyColorThemeType = (typeof colors)[number];

export type FlowbiteColorType = (typeof flowbiteColors)[number];

export type ColorType = keyof Pick<
  FlowbiteColors,
  MyColorThemeType | FlowbiteColorType
>;

export type SizeType = (typeof size)[number];

export type ButtonLinkProps = {
  color?: ColorType;
  href: string;
  size?: SizeType;
  className?: string;
  outline?: boolean;
  pill?: boolean;
  fullSized?: boolean;
  children: React.ReactNode;
};

export type TextLinkProps = {
  color?: ColorType;
  href: string;
  size?: SizeType;
  className?: string;
  children: React.ReactNode;
  title?: string;
};

export type ButtonLinkStyleArgsType = {
  color?: ColorType;
  size?: SizeType;
  fullSized?: boolean;
  outline?: boolean;
  pill?: boolean;
  className?: string;
};

export type TextLinkStyleArgsType = {
  color?: ColorType;
  size?: SizeType;
  className?: string;
};

export type ButtonProps = {
  type?: 'button' | 'submit';
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  color?: ColorType;
  size?: SizeType;
  className?: string;
  outline?: boolean;
  pill?: boolean;
  fullSized?: boolean;
};

export type LoadingButtonProps = ButtonProps & { isProcessing: boolean };

export type ButtonStyleArgsType = ButtonLinkStyleArgsType & {
  disabled?: boolean;
};

export type TextInputColor = 'default' | 'success' | 'failure';
export type TextInputSize = 'sm' | 'md' | 'lg';
export type TextInputFull = 'default' | 'full';
export type SelectSize = TextInputSize;
export type SelectIconPosition =
  | 'sm_label'
  | 'sm_label_no'
  | 'md_label'
  | 'md_label_no'
  | 'lg_label'
  | 'lg_label_no';

export type TextInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  errorMessage?: string;
  register: UseFormRegister<T>;
  formState: FormState<T>;
  size?: TextInputSize;
  full?: boolean;
  readonly?: boolean;
  disabled?: boolean;
};

export type PasswordInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  placeholder?: string;
  errorMessage?: string;
  register: UseFormRegister<T>;
  formState: FormState<T>;
  size?: TextInputSize;
  full?: boolean;
};

export type InputStyleArgsType = {
  color?: TextInputColor;
  size?: TextInputSize;
  full?: boolean;
  className?: string;
};

export type LabelStyleArgsType = {
  color?: TextInputColor;
  size?: TextInputSize;
  className?: string;
};

export type HelpStyleArgsType = {
  color?: TextInputColor;
  size?: TextInputSize;
  className?: string;
};

export type SelectIconStyleArgsType = {
  position?: SelectIconPosition;
  className?: string;
};

export type SelectProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  options: { value: number | string; label: string }[];
  errorMessage?: string;
  register: UseFormRegister<T>;
  formState: FormState<T>;
  size?: SelectSize;
  full?: boolean;
  displayLabel?: boolean;
  registerOptions?: RegisterOptions<T>;
  empty?: boolean;
  emptyLabel?: string;
  disabled?: boolean;
};
