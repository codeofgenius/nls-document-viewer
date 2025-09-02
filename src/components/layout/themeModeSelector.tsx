'use client';

import { useEffect, useState, type ReactNode } from 'react';

import {
  Dropdown,
  DropdownItem,
  type ThemeMode,
  useThemeMode,
} from 'flowbite-react';
import { FaCheck, FaArrowsRotate } from 'react-icons/fa6';
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineComputerDesktop,
} from 'react-icons/hi2';

export function ThemeModeSelector() {
  const [mounted, setMounted] = useState(false);
  const { mode, computedMode, setMode } = useThemeMode();
  const themes: { icon: ReactNode; label: ThemeMode }[] = [
    {
      label: 'light',
      icon: <HiOutlineSun className="h-4 w-4" />,
    },
    {
      label: 'dark',
      icon: <HiOutlineMoon className="h-4 w-4" />,
    },
    {
      label: 'auto',
      icon: <HiOutlineComputerDesktop className="h-4 w-4" />,
    },
  ];

  const icon =
    computedMode === 'dark' ? (
      <HiOutlineMoon className="h-6 w-6" />
    ) : (
      <HiOutlineSun className="h-6 w-6" />
    );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex animate-spin cursor-pointer items-center justify-center rounded-full px-2 outline-none">
        <FaArrowsRotate />
      </div>
    );
  }

  return (
    <Dropdown
      label=""
      renderTrigger={() => (
        <div className="flex cursor-pointer items-center justify-center rounded-full px-2 outline-none hover:bg-blue-100 dark:hover:bg-blue-700">
          {icon}
        </div>
      )}
    >
      {themes.map((item) => (
        <DropdownItem
          className={`flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-gray-800 ${
            item.label === mode ? 'bg-gray-100 dark:bg-gray-800' : ''
          }`}
          key={item.label}
          onClick={() => {
            setMode(item.label);
          }}
        >
          {item.icon}
          {item.label}
          {item.label === mode && <FaCheck className="ml-5" />}
        </DropdownItem>
      ))}
    </Dropdown>
  );
}
