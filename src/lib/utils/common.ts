import { decodeHTML } from 'entities';

import type { SafeParseError } from 'zod';

// sec秒待機する
export async function timeout(sec: number) {
  await new Promise((resolve) => setTimeout(resolve, sec));
}

// minからmaxの範囲の乱数を返す
export function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Promiseの配列を受け取り、直列実行を行う
export async function sequential<T>(
  promises: (() => Promise<T>)[],
): Promise<T[]> {
  return promises.reduce(
    async (res, next) => {
      const r = await res;
      r.push(await next());
      return r;
    },
    Promise.resolve([] as T[]),
  );
}

// HTMLエンティティを文字列に変換する
export function htmlDecode(input: string) {
  const html: string = decodeHTML(input);
  return html;
}

// オブジェクトから、キーのみを返す
export function getKeys<T extends Record<string, unknown>>(
  obj: T,
): (keyof T)[] {
  return Object.keys(obj);
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function buildZodError<T>(result: SafeParseError<T>) {
  return {
    success: result.success,
    error: result.error.flatten().fieldErrors,
  };
}
