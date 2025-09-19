'use client';

import { useState, useEffect } from 'react';

import { SplashScreen } from '@/components/animations/splash';
import { Index } from '@/components/page';

import type { SplashControllerProps } from '@/types/page';

const DAYS_THRESHOLD_MS = 3 * 24 * 60 * 60 * 1000 * 0;
const SPLASH_DURATION_MS = 4000;

export function SplashControl({ books }: SplashControllerProps) {
  const [showSplash, setShowSplash] = useState(false);
  // const [isInitialLoad, setIsInitialLoad] = useState(false);

  useEffect(() => {
    // ローカルストレージから前回の訪問日時を取得
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().getTime();

    // 初回アクセス、または3日以上経過しているかを判定
    if (!lastVisit || now - parseInt(lastVisit) > DAYS_THRESHOLD_MS) {
      // setIsInitialLoad(true);
      setShowSplash(true);

      // スプラッシュ画面を一定時間表示
      setTimeout(() => {
        setShowSplash(false);
      }, SPLASH_DURATION_MS);

      // 前回の訪問日時を更新
      localStorage.setItem('lastVisit', now.toString());
    } else {
      // 初回アクセスではない場合、スプラッシュ画面をスキップ
      setShowSplash(false);
    }
    // const timer = setTimeout(() => {
    //   setShowSplash(true);
    // }, elapsedTime);

    // return () => {
    //   clearTimeout(timer);
    // };
  }, []);

  return (
    <>
      <Index {...{ books }} />
      {showSplash && <SplashScreen />}
    </>
  );
}
