'use server';

import { generateContent } from '@/lib/api/google';
import { timeout } from '@/lib/utils/common';

import type {
  GEMINI_RESPONSE_TYPE,
  TextareaActionParam,
} from '@/types/markdown';

export async function textareaAction(
  data: TextareaActionParam,
): Promise<GEMINI_RESPONSE_TYPE> {
  // 実際にはここでDB処理
  // DBから問題ごとの質問文と正解を取得する
  // 疑似的な待機
  await timeout(1000);

  // API処理で送信データを実行
  return await generateContent(data);
  /*
  {
    status: OK | NG,
    result: string
  }
  */
  /*
  return {
    status: 'NG',
    result: `this is NG
this is NG1
this is NG2
this is NG3
this is NG4
this is NG5
this is NG6
this is NG7
this is NG8
this is NG9
this is NG10
this is NG11
this is NG12
this is NG13
this is NG14
this is NG15`,
  };
  */
  // return {
  //   status: 'OK',
  //   result: `
  //     this is OK\n
  //     this is OK\n
  //     this is OK\n
  //     this is OK\n
  //     this is OK\n
  //     this is OK\n
  //     this is OK\n
  //     `,
  // };
}
