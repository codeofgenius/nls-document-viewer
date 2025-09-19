'use client';

import { useState, useEffect } from 'react';

import { SplashScreen } from '@/components/animations/splash';
import { Index } from '@/components/page';

import type { SplashControllerProps } from '@/types/page';

const elapsedTime = 5000;

export function SplashControl({ books }: SplashControllerProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(true);
    }, elapsedTime);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Index {...{ books }} />
      {showSplash && <SplashScreen />}
    </>
  );
}
