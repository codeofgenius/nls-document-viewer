'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { Editor, useMonaco } from '@monaco-editor/react';
import { Button, useThemeMode } from 'flowbite-react';
import { type editor } from 'monaco-editor';

import { textareaAction } from '@/actions/markdown';
import { TextAreaModal2 } from '@/components/view/markdown/modal';
import {
  type ParserType,
  type GEMINI_RESPONSE_TYPE,
  type TextareaActionStatusParams,
  type TextareaActionStatusKey,
} from '@/types/markdown';

const param: TextareaActionStatusParams = [
  {
    title: '実行中',
    message: '実行中',
    status: 'PROC',
  },
  {
    title: '正解',
    message: 'おめでとう、正解です',
    status: 'OK',
  },
  {
    title: '間違い',
    message: '残念、間違いがあります。もう一度挑戦しよう',
    status: 'NG',
  },
];

const monacoLanguage: Record<string, string> = {
  nodejs: 'javascript',
  javascript: 'javascript',
  python: 'python',
};

export function TextareaRender({ children, node }: ParserType) {
  const [value, setValue] = useState(children);
  const [openModal, setOpenModal] = useState(false);
  // 0 => PROC, 1 => OK, 2 => NG
  const [status, setStatus] = useState<TextareaActionStatusKey>(0);
  const [result, setResult] = useState('');
  const { computedMode } = useThemeMode();
  const monaco = useMonaco();
  const [codeStyle, setCodeStyle] = useState<'light' | 'vs-dark'>('light');

  const {
    properties: {
      dataOk,
      dataQuestion,
      dataUrl,
      dataProcessLanguage,
      dataDisplayLanguage,
    },
  } = node ?? {
    properties: {
      dataOk: '',
      dataQuestion: '',
      dataUrl: '',
      dataProcessLanguage: '',
      dataDisplayLanguage: 'ja',
    },
  };

  // function handleChangeValue(e: React.ChangeEvent<HTMLTextAreaElement>) {
  //   setValue(e.target.value);
  // }

  function handleChangeValue(
    value: string | undefined,
    _event: editor.IModelContentChangedEvent,
  ) {
    setValue(value ?? '');
  }

  const handleSubmit = useCallback(async () => {
    // console.log('start running');
    preActon();
    const response = await textareaAction({
      dataOk,
      dataQuestion,
      dataUrl,
      dataProcessLanguage,
      dataDisplayLanguage,
      value,
    });
    // console.log(response);
    // console.log('end running');
    postAction(response);
  }, [
    dataOk,
    dataQuestion,
    dataUrl,
    dataProcessLanguage,
    dataDisplayLanguage,
    value,
  ]);

  function preActon() {
    setStatus(0);
    setResult('');
    setOpenModal(true);
  }

  function postAction(response: GEMINI_RESPONSE_TYPE) {
    if (response.status === 'OK') {
      setStatus(1);
    } else {
      setStatus(2);
    }
    setResult(response.result);
  }

  function closeAction() {
    setOpenModal(false);
  }

  const submitDescriptor = useMemo(() => {
    if (monaco) {
      return {
        id: 'xxx',
        label: 'aaa',
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],
        run: async function () {
          await handleSubmit();
        },
      };
    }
  }, [monaco, handleSubmit]);

  useEffect(() => {
    if (monaco && submitDescriptor) {
      monaco.editor.addEditorAction(submitDescriptor);
    }
    setCodeStyle(computedMode === 'light' ? 'light' : 'vs-dark');
  }, [computedMode, monaco, submitDescriptor]);

  return (
    <>
      <form className="my-4">
        {/* <textarea
          className={`${inconsolata.className} block min-h-[300px] w-[100%] resize-none rounded-md border-2 border-gray-600 bg-gray-800 p-3 text-lg tracking-wide text-white dark:border-gray-400 dark:bg-gray-200 dark:text-black`}
          defaultValue={value}
          onChange={handleChangeValue}
        /> */}
        <Editor
          className="h-[300px] border-1 border-gray-400 rounded-md w-[100%] py-3 px-0 bg-[#fffffe] dark:bg-[#1e1e1e]"
          defaultLanguage={
            monacoLanguage[dataProcessLanguage.toLowerCase()] ?? ''
          }
          defaultValue={value}
          height="100%"
          onChange={(value, event) => {
            handleChangeValue(value, event);
          }}
          options={{
            fontSize: 18,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            fontFamily: 'inconsolata MPlus',
            minimap: { enabled: false },
            wordWrap: 'on',
            copyWithSyntaxHighlighting: true,
          }}
          theme={codeStyle}
        />
        <div className="my-4">
          <Button
            className="cursor-pointer"
            onClick={handleSubmit}
            type="button"
          >
            実行 / Ctrl + Enter
          </Button>
        </div>
      </form>
      <div />
      {result && (
        <div className="my-4">
          <h4 className="my-4 bg-pink-200 p-2 dark:bg-pink-800">実行結果</h4>
          <div className="my-4">実行結果は以下のようになりました</div>
          <div className="rounded-md border-2 border-gray-300 bg-gray-100 p-3 text-lg dark:border-gray-600 dark:bg-gray-800">
            <pre className="whitespace-pre-wrap">{result}</pre>
          </div>
        </div>
      )}
      {openModal && (
        <TextAreaModal2
          closeAction={closeAction}
          param={param[status]}
          result={result}
        />
      )}
    </>
  );
}
