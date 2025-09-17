'use client';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BiSolidError } from 'react-icons/bi';
import { FaCircleInfo } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

import { SuccessParticles } from '@/components/animations/success';
import { classNames } from '@/lib/utils/common';
import {
  type TextareaModal2Props,
  type TextareaModalProps,
} from '@/types/markdown';

export function TextAreaModal({
  okButtonText = 'OK',
  closeAction,
  param: { mainText, status },
}: TextareaModalProps) {
  return (
    <div
      className="fixed top-0 right-0 left-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-500/80 md:inset-0"
      id="popup-modal"
      // onClick={closeAction}
      tabIndex={-1}
    >
      <div
        className="relative top-2/4 left-1/2 max-h-full w-full max-w-md -translate-x-1/2 -translate-y-1/2 transform p-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="relative rounded-lg bg-gray-200 shadow-sm dark:bg-gray-700">
          <button
            className="absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
            data-modal-hide="popup-modal"
            onClick={closeAction}
            type="button"
          >
            <IoMdClose className="text-md h-5 w-5" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 text-center md:p-5">
            {status === 'OK' ? (
              <FaCircleInfo className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            ) : status === 'NG' ? (
              <BiSolidError className="mx-auto mb-4 h-12 w-12 text-red-500" />
            ) : (
              <AiOutlineLoading3Quarters className="mx-auto mb-4 h-12 w-12 animate-spin text-gray-400" />
            )}

            <h3 className="mb-5 text-center text-lg font-normal text-gray-500 dark:text-white">
              {mainText}
            </h3>
            {status === 'NG' ? (
              <button
                className="inline-flex cursor-pointer items-center rounded-lg bg-red-600 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none"
                data-modal-hide="popup-modal"
                onClick={closeAction}
                type="button"
              >
                {okButtonText}
              </button>
            ) : (
              <button
                className="inline-flex cursor-pointer items-center rounded-lg bg-blue-600 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                data-modal-hide="popup-modal"
                onClick={closeAction}
                type="button"
              >
                {okButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TextAreaModal2({
  okButtonText = 'OK',
  closeAction,
  param: { title, message, status },
  result,
}: TextareaModal2Props) {
  return (
    <div
      className="fixed top-0 right-0 left-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-500/80 md:inset-0"
      id="popup-modal"
      // onClick={closeAction}
      tabIndex={-1}
    >
      <div
        className="relative top-2/4 left-1/2 max-h-full w-sm -translate-x-1/2 -translate-y-1/2 transform p-4 md:w-md lg:w-2xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="relative rounded-xl bg-white dark:bg-gray-700">
          <div
            className={classNames(
              status === 'NG'
                ? 'bg-red-500 text-white dark:bg-red-800 dark:text-gray-300'
                : 'bg-blue-500 text-white dark:bg-blue-800 dark:text-gray-300',
              'flex items-center justify-between rounded-t-xl p-4 md:p-5',
            )}
          >
            <h3 className="text-xl font-medium">{title}</h3>
            <button
              className={classNames(
                status === 'NG'
                  ? 'text-white hover:bg-red-400 hover:text-gray-900 dark:hover:bg-red-600 dark:hover:text-white'
                  : 'text-white hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-600 dark:hover:text-white',
                'ms-auto inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-transparent text-sm',
              )}
              data-modal-hide="small-modal"
              onClick={closeAction}
              type="button"
            >
              <IoMdClose className="text-md h-5 w-5" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="space-y-4 p-4 md:p-5">
            <p className="text-center text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {message}
            </p>
            <div className="scrollbar h-60 overflow-auto text-base text-gray-500 dark:text-gray-400">
              {status === 'OK' || status === 'NG' ? (
                <pre className="whitespace-pre-wrap">{result}</pre>
              ) : (
                <div className="flex h-60 items-center">
                  <AiOutlineLoading3Quarters className="mx-auto mb-4 h-12 w-12 animate-spin text-gray-400" />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center border-t border-gray-200 p-4 md:p-5 dark:border-gray-600">
            {status === 'NG' ? (
              <button
                className="inline-flex cursor-pointer items-center rounded-lg bg-red-500 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none"
                data-modal-hide="popup-modal"
                onClick={closeAction}
                type="button"
              >
                {okButtonText}
              </button>
            ) : (
              <button
                className="inline-flex cursor-pointer items-center rounded-lg bg-blue-500 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                data-modal-hide="popup-modal"
                onClick={closeAction}
                type="button"
              >
                {okButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
      {status === 'OK' && <SuccessParticles />}
    </div>
  );
}
