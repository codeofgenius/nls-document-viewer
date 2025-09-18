'use client';

import { useState, useEffect } from 'react';

import { SplashScreen } from '@/components/animations/splash';
import { Index } from '@/components/page';

import type { SplashControllerProps } from '@/types/page';

export function SplashControl({ books }: SplashControllerProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // 3秒後にスプラッシュ画面を非表示にするタイマー
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3000ms = 3秒

    // コンポーネントがアンマウントされる際にタイマーをクリア
    return () => {
      clearTimeout(timer);
    };
  }, []); // 最初のレンダリング時のみ実行

  // showSplashの状態に応じて表示するコンポーネントを切り替える
  return (
    <>
      <Index {...{ books }} />
      {showSplash && <SplashScreen />}
    </>
  );
}
