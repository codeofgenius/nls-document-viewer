import React, { useState } from 'react';

import { type FieldValues } from 'react-hook-form';
import { HiEye, HiEyeSlash, HiChevronUpDown } from 'react-icons/hi2';

import {
  generateTextInputStyle,
  generateLabelStyle,
  generateHelpStyle,
  generateSelectLabelStyle,
  generateSelectStyle,
  generateSelectIconStyle,
} from '@/components/ui/inputStyle';
import { classNames } from '@/lib/utils/common';
import {
  type PasswordInputProps,
  type SelectIconPosition,
  type SelectProps,
  type SelectSize,
  type TextInputColor,
  type TextInputProps,
} from '@/types/ui';

export function TextInput<T extends FieldValues>({
  label,
  name,
  placeholder = '',
  type = 'text',
  errorMessage,
  register,
  formState,
  size = 'md',
  full = false,
  readonly = false,
  disabled = false,
}: TextInputProps<T>) {
  const { submitCount } = formState;

  const color: TextInputColor =
    submitCount === 0
      ? 'default'
      : errorMessage !== undefined
        ? 'failure'
        : 'success';

  const inputCn = generateTextInputStyle({ color, full, size });
  const labelCn = generateLabelStyle({ color, size });
  const helpCn = generateHelpStyle({ color, size });

  return (
    <div className="relative">
      <input
        className={inputCn}
        id={name}
        placeholder={placeholder}
        type={type}
        {...register(name)}
        disabled={disabled}
        readOnly={readonly}
      />
      <label className={labelCn} htmlFor={name}>
        {label}
      </label>
      {errorMessage && <div className={helpCn}>{errorMessage}</div>}
    </div>
  );
}

export function PasswordInput<T extends FieldValues>({
  label,
  name,
  placeholder = '',
  errorMessage,
  register,
  formState,
  size = 'md',
  full = false,
}: PasswordInputProps<T>) {
  const [visible, setVisible] = useState(false);

  const { submitCount } = formState;

  const color: TextInputColor =
    submitCount === 0
      ? 'default'
      : errorMessage !== undefined
        ? 'failure'
        : 'success';

  const inputCn = generateTextInputStyle({ color, full, size });
  const labelCn = generateLabelStyle({ color, size });
  const helpCn = generateHelpStyle({ color, size });

  function handleToggle() {
    setVisible((e) => !e);
  }

  return (
    <div className="relative">
      <input
        className={inputCn}
        id={name}
        placeholder={placeholder}
        type={visible ? 'text' : 'password'}
        {...register(name)}
      />
      <label className={labelCn} htmlFor={name}>
        {label}
      </label>
      <button
        className="absolute top-[20px] right-3 cursor-pointer"
        onClick={handleToggle}
        type="button"
      >
        {visible ? <HiEye size="1.5em" /> : <HiEyeSlash size="1.5em" />}
      </button>
      {errorMessage && <div className={helpCn}>{errorMessage}</div>}
    </div>
  );
}

export function Select<T extends FieldValues>({
  label,
  name,
  options,
  errorMessage,
  register,
  formState,
  size = 'md',
  full = false,
  displayLabel = true,
  registerOptions = {},
  empty = false,
  emptyLabel = 'select',
  disabled = false,
}: SelectProps<T>) {
  const { submitCount } = formState;

  const color: TextInputColor =
    submitCount === 0
      ? 'default'
      : errorMessage !== undefined
        ? 'failure'
        : 'success';

  const position: SelectIconPosition = buildPosition({ size, displayLabel });

  const selectCn = generateSelectStyle({ color, full, size });
  const labelCn = generateSelectLabelStyle({ color, size });
  const helpCn = generateHelpStyle({ color, size });
  const iconCn = generateSelectIconStyle({ position });

  return (
    <div className={classNames(!full ? 'inline-block' : '', 'relative')}>
      {displayLabel && (
        <div className={labelCn}>
          <label htmlFor={name}>{label}</label>
        </div>
      )}
      <select
        className={selectCn}
        id={name}
        {...register(name, registerOptions)}
        disabled={disabled}
      >
        {empty && <option>{emptyLabel}</option>}
        {options.map((e, i) => (
          <option key={i} value={e.value}>
            {e.label}
          </option>
        ))}
      </select>
      <HiChevronUpDown className={iconCn} />
      {errorMessage && <div className={helpCn}>{errorMessage}</div>}
    </div>
  );
}

function buildPosition({
  size,
  displayLabel,
}: {
  size: SelectSize;
  displayLabel: boolean;
}): SelectIconPosition {
  let position: SelectIconPosition = 'md_label';
  if (size == 'sm' && displayLabel) {
    position = 'sm_label';
  } else if (size == 'sm' && !displayLabel) {
    position = 'sm_label_no';
  } else if (size == 'md' && displayLabel) {
    position = 'md_label';
  } else if (size == 'md' && !displayLabel) {
    position = 'md_label_no';
  } else if (size == 'lg' && displayLabel) {
    position = 'lg_label';
  } else if (size == 'lg' && !displayLabel) {
    position = 'lg_label_no';
  }
  return position;
}
