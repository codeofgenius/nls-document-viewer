'use server';

import { cookies } from 'next/headers';
import { type TypeOptions } from 'react-toastify';

export async function setCookieByKey(key: string, value: string) {
  (await cookies()).set(key, value);
}

export async function getCookieByKey(key: string) {
  const cookie = (await cookies()).get(key);
  if (!cookie) {
    return null;
  }
  return cookie.value;
}

export async function deleteCookieByKey(key: string) {
  (await cookies()).delete(key);
}

export async function setToastCookie(value: {
  type: TypeOptions;
  message: string;
}) {
  (await cookies()).set('toast', JSON.stringify(value));
}

export async function getToastCookie(): Promise<{
  type: TypeOptions;
  message: string;
} | null> {
  const cookie = (await cookies()).get('toast');
  if (!cookie || cookie.value === '') {
    return null;
  }
  const result: { type: TypeOptions; message: string } = JSON.parse(
    cookie.value,
  );
  return result;
}

export async function deleteToastCookie() {
  (await cookies()).delete('toast');
}
