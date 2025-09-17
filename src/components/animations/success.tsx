'use client';

import React, { useEffect, useRef } from 'react';

import { PixiSuccessParticles } from '@/lib/utils/animations/pixiSuccessParticles';

export function SuccessParticles() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    void (async () => {
      const divTag = divRef.current;
      if (!divTag) {
        return;
      }
      const app = new PixiSuccessParticles(divTag);
      await app.create();
      await app.update();
    })();
  }, [divRef]);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      ref={divRef}
    />
  );
}
