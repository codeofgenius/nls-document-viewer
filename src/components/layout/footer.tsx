import { APP_NAME, FOOTER1, FOOTER2 } from '@/lib/constant';

export function Footer() {
  return (
    <div className="sticky bottom-0 bg-slate-200 dark:bg-slate-800">
      <h3 className="p-1 text-center text-sm">
        {APP_NAME}
        <span className="mx-2">|</span>
        {FOOTER1}
        <span className="mx-2">|</span>
        {FOOTER2}
      </h3>
    </div>
  );
}
