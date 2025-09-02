'use client';

import { useEffect, useState } from 'react';

import { Popover, useThemeMode } from 'flowbite-react';
import { FaRegCopy } from 'react-icons/fa6';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { vs } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { timeout } from '@/lib/utils/common';
import { type ParserType } from '@/types/markdown';

export function CodeRender({ children, className, node }: ParserType) {
  const { mode } = useThemeMode();
  const [codeStyle, setCodeStyle] = useState(vscDarkPlus);
  const [open, setOpen] = useState(false);

  const { position } = node ?? {
    start: {
      line: 0,
      column: 0,
      offset: 0,
    },
    end: {
      line: 0,
      column: 0,
      offset: 0,
    },
  };
  const id = position?.start.line.toString();

  const match = /language-(\w+)/.exec(className ?? '');
  const codeTagProps = {
    id,
    style: {
      display: 'block',
      width: '100%',
      maxWidth: '200px',
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      // whiteSpace: 'pre-wrap',
    },
  };

  async function handleClickCopyBtn(code: string) {
    setOpen(true);
    await navigator.clipboard.writeText(code);
    await timeout(800);
    setOpen(false);
  }

  useEffect(() => {
    setCodeStyle(mode === 'light' ? vscDarkPlus : vs);
  }, [mode]);

  return match ? (
    <div className="relative">
      <span className="absolute top-[1rem] right-[1rem]">
        <Popover
          content={<div className="px-4 py-2">Copied</div>}
          onOpenChange={setOpen}
          open={open}
          placement="top"
        >
          <button
            id={id}
            onClick={async () => {
              await handleClickCopyBtn(children);
            }}
          >
            <FaRegCopy className="cursor-pointer text-2xl text-white active:text-gray-400 dark:text-black" />
          </button>
        </Popover>
      </span>
      <SyntaxHighlighter
        PreTag="div"
        codeTagProps={codeTagProps}
        customStyle={{
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          marginTop: '1rem',
          marginBottom: '1rem',
          borderRadius: '0.5rem',
        }}
        language={match[1]}
        style={codeStyle}
        wrapLines={false}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  ) : (
    <SyntaxHighlighter
      PreTag="div"
      codeTagProps={codeTagProps}
      customStyle={{
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        marginTop: '1rem',
        marginBottom: '1rem',
        borderRadius: '0.5rem',
      }}
      style={codeStyle}
      wrapLines={false}
    >
      {children}
    </SyntaxHighlighter>
  );
}
