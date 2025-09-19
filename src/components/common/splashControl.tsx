'use client';

import { useState, useEffect } from 'react';

import { SplashScreen } from '@/components/animations/splash';
import { Index } from '@/components/page';

import type { SplashControllerProps } from '@/types/page';

const DAYS_THRESHOLD_MS = 3 * 24 * 60 * 60 * 1000;
const SPLASH_DURATION_MS = 4000;

export function SplashControl({ books }: SplashControllerProps) {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // get last visit time from local storage
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().getTime();
    let splashTimer: NodeJS.Timeout | null = null;

    // check first visit or 3 days passed
    if (!lastVisit || now - parseInt(lastVisit) > DAYS_THRESHOLD_MS) {
      setShowSplash(true);

      splashTimer = setTimeout(() => {
        // show splash for certain secs
        setShowSplash(false);
      }, SPLASH_DURATION_MS);

      // update last visit to local storage
      localStorage.setItem('lastVisit', now.toString());
    } else {
      // do not show splash screen
      setShowSplash(false);
    }
    return () => {
      if (splashTimer) {
        clearTimeout(splashTimer);
      }
    };
  }, []);

  return (
    <>
      <Index {...{ books }} />
      {showSplash && <SplashScreen />}
    </>
  );
}
