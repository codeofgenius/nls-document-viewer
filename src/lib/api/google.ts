import { GoogleGenAI, Type } from '@google/genai';

import { env } from '@/lib/schema/env/server';
import {
  type GEMINI_RESPONSE_TYPE,
  type GenerateContentParam,
} from '@/types/markdown';

const GEMINI_API_KEY = env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function generateContent(data: GenerateContentParam) {
  const contents = buildContents(data);
  // console.log(contents);

  const response = await generateContentFromGemini(contents);
  // console.log(response.text);

  const result: GEMINI_RESPONSE_TYPE = response.text
    ? JSON.parse(response.text)
    : { status: 'ERROR', result: 'API ERROR' };
  return result;
}

// generate content by Gemini
async function generateContentFromGemini(contents: string) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          status: {
            type: Type.STRING,
          },
          result: {
            type: Type.STRING,
          },
        },
        propertyOrdering: ['status', 'result'],
      },
    },
  });
  return response;
}

function buildContents(data: GenerateContentParam): string {
  switch (data.dataProcessLanguage) {
    case 'en':
      return buildEnglishContents(data);
    case 'ja':
      return getJapaneseContents(data);
    default:
      return getJapaneseContents(data);
  }
}

function buildEnglishContents({
  value,
  dataOk,
  dataQuestion,
  dataProcessLanguage,
}: GenerateContentParam): string {
  const lang = '英語';
  const content = `
  以下のようなプログラムがあります。

  プログラム言語は${dataProcessLanguage}です。

  プログラム内容が文法的に正しく、かつ、
  命題を満たしており、かつ、
  想定される実行結果と等しいかどうかを教えてください。

  半角スペースと大文字小文字を正確に判定してください
  for文の中でconstに再代入するとUncaught TypeErrorが発生することを正確に判定してください

  正解の場合、JSON形式で、statusをOKと、resultに実行結果を返してください
  誤っている場合、JSON形式でstatusをNGと、resultにエラーの理由を${lang}で返してください

  命題は以下の通りです

  ${dataQuestion}

  想定される実行結果

  ${dataOk}

  プログラム内容

  \`\`\`
  ${value}
  \`\`\`

  `;
  return content;
}

function getJapaneseContents({
  value,
  dataOk,
  dataQuestion,
  dataProcessLanguage,
}: GenerateContentParam): string {
  const lang = '日本語';

  const content = `
  以下のようなプログラムがあります。

  プログラム言語は${dataProcessLanguage}です。

  プログラム内容が文法的に正しく、かつ、
  命題を満たしており、かつ、
  想定される実行結果と等しいかどうかを教えてください。

  半角スペースと大文字小文字を正確に判定してください
  for文の中でconstに再代入するとUncaught TypeErrorが発生することを正確に判定してください

  正解の場合、JSON形式で、statusをOKと、resultに実行結果を返してください
  誤っている場合、JSON形式でstatusをNGと、resultにエラーの理由を${lang}で返してください

  命題は以下の通りです

  ${dataQuestion}

  想定される実行結果

  ${dataOk}

  プログラム内容

  \`\`\`
  ${value}
  \`\`\`

  `;
  return content;
}
