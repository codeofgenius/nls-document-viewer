import { ThemeModeScript, ThemeProvider } from 'flowbite-react';

import { CookieToaster } from '@/components/common/toast/cookieToaster';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ToastProvider } from '@/components/states/providers/toastProvider';
import { mPlus } from '@/components/ui/font';
import { MainTheme } from '@/components/ui/theme';
import { APP_NAME, DESCRIPTION } from '@/lib/constant';

import type { LayoutProps } from '@/types/page';
import type { Metadata } from 'next';

import '@/styles/globals.css';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: APP_NAME,
      template: `%s | ${DESCRIPTION}`,
    },
    description: `${DESCRIPTION} | ${APP_NAME}`,
  };
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${mPlus.className} scrollbar bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100`}
        suppressHydrationWarning
      >
        <ThemeProvider theme={MainTheme}>
          <ToastProvider>
            <Header />
            <div className="min-h-[calc(100vh-60px-28px)]">{children}</div>
            <Footer />
            <CookieToaster />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
