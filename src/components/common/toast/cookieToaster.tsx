import { getToastCookie } from '@/actions/cookies';
import { ToastEmitter } from '@/components/common/toast/toastEmitter';

export async function CookieToaster() {
  const result = await getToastCookie();

  return result ? <ToastEmitter {...result} /> : null;
}
