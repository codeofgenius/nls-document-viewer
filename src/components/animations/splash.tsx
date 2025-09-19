import { useEffect, useRef } from 'react';

import { PixiSplashScreen } from '@/lib/utils/animations/pixiSplashScreen';

export function SplashScreen() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    void (async () => {
      const divTag = divRef.current;
      if (!divTag) {
        return;
      }
      const app = new PixiSplashScreen(divTag);
      await app.create();
      await app.update();
    })();
  }, [divRef]);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-50"
      ref={divRef}
    />
  );
}
