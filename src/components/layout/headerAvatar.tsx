'use client';

import { useState } from 'react';

import { Drawer, DrawerHeader, DrawerItems } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { FaCircleUser } from 'react-icons/fa6';
import { HiArrowRightEndOnRectangle } from 'react-icons/hi2';
import { HiOutlineUserPlus } from 'react-icons/hi2';
import { MdSchool } from 'react-icons/md';

import { APP_NAME } from '@/lib/constant';

export function AvatarDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function handleClose() {
    setIsOpen(false);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClick(url: string) {
    router.push(url);
    setIsOpen(false);
  }

  return (
    <>
      <div className="cursor-pointer rounded-full">
        <FaCircleUser
          className="h-[36px] w-[36px] rounded-full bg-gray-400 text-gray-100 hover:bg-gray-100 hover:text-gray-400 dark:bg-gray-100 dark:text-gray-400 hover:dark:bg-gray-400 hover:dark:text-gray-100"
          onClick={handleOpen}
        />
      </div>
      <Drawer onClose={handleClose} open={isOpen} position="right">
        <DrawerHeader
          title={APP_NAME}
          titleIcon={() => <MdSchool className="mr-1 h-[24px] w-[24px]" />}
        />
        <DrawerItems>
          <div className="grid grid-cols-1 gap-2">
            <button
              className="rounded-sm bg-white px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              onClick={() => {
                handleClick('/signin');
              }}
            >
              <HiArrowRightEndOnRectangle className="mr-1 inline-block h-[20px] w-[20px]" />
              SIGNIN
            </button>
            <button
              className="rounded-sm bg-white px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              onClick={() => {
                handleClick('/signup');
              }}
            >
              <HiOutlineUserPlus className="mr-1 inline-block h-[20px] w-[20px]" />
              SIGNUP
            </button>
          </div>
        </DrawerItems>
      </Drawer>
    </>
  );
}
