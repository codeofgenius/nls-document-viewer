'use client';

import { useState } from 'react';

import { FaAngleDown } from 'react-icons/fa6';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';

import { HeadingMenuRender } from '@/components/view/markdown/headingRender';
import {
  type ComponentParserType,
  type MarkdownMenuRenderProps,
} from '@/types/markdown';

// TODO
// import rehypeSanitize from 'rehype-sanitize';

const menuProps: Record<string, ComponentParserType> = {
  h1: HeadingMenuRender,
  h2: HeadingMenuRender,
  h3: HeadingMenuRender,
  h4: HeadingMenuRender,
};

export function MenuRender({ content }: MarkdownMenuRenderProps) {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(!open);
  }

  return (
    <div className="mb-10">
      <div
        className="flex cursor-pointer items-center justify-between bg-gray-300 p-2 px-4 text-sm text-black dark:bg-gray-700 dark:text-white"
        onClick={handleClickOpen}
      >
        Menu
        <FaAngleDown
          className={` ${open ? 'animate-spin-180' : 'animate-spin-0'}`}
        />
      </div>
      {open && (
        <div className="border-2 border-gray-300 p-4 dark:border-gray-700">
          <ReactMarkdown
            allowedElements={['h1', 'h2', 'h3', 'h4']}
            components={menuProps}
            rehypePlugins={[
              rehypeRaw,
              remarkRehype,
              //rehypeSanitize,
              [remarkRehype, { footnoteLabel: 'footnote' }],
            ]}
            remarkPlugins={[remarkGfm]}
          >
            {content}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}
