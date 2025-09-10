'use client';

import { useState } from 'react';

import { Button } from 'flowbite-react';

import { textareaAction } from '@/actions/markdown';
import { inconsolata } from '@/components/ui/font';
import { TextAreaModal2 } from '@/components/view/markdown/modal';
import {
  type ParserType,
  type GEMINI_RESPONSE_TYPE,
  type Textarea2ActionParam,
  type Textarea2ActionParamStatus,
} from '@/types/markdown';

const names: string[] = ['bob', 'tom', 'john'];
console.log(names[1]);

export function TextareaRender({ children, node }: ParserType) {
  const [value, setValue] = useState(children);
  const [openModal, setOpenModal] = useState(false);
  // 0 => PROC, 1 => OK, 2 => NG
  const [status, setStatus] = useState<Textarea2ActionParamStatus>(0);
  const [result, setResult] = useState('');

  const param: Textarea2ActionParam = [
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

  const {
    properties: {
      dataOk,
      dataQuestion,
      dataUrl,
      dataLanguage,
      dataDisplaylanguage,
    },
  } = node ?? {
    properties: {
      dataOk: '',
      dataQuestion: '',
      dataUrl: '',
      dataLanguage: '',
      dataDisplaylanguage: '',
    },
  };

  function handleChangeValue(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  async function handleSubmit() {
    // console.log('start running');
    preActon();
    const response = await textareaAction({
      dataOk,
      dataQuestion,
      dataUrl,
      dataLanguage,
      dataDisplaylanguage,
      value,
    });
    // console.log(response);
    // console.log('end running');
    postAction(response);
  }

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

  return (
    <>
      <form className="my-4">
        <textarea
          className={`${inconsolata.className} block min-h-[300px] w-[100%] resize-none rounded-md border-2 border-gray-600 bg-gray-800 p-3 text-lg tracking-wide text-white dark:border-gray-400 dark:bg-gray-200 dark:text-black`}
          defaultValue={value}
          onChange={handleChangeValue}
        />
        <div className="my-4">
          <Button
            className="cursor-pointer"
            onClick={handleSubmit}
            type="button"
          >
            実行
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
