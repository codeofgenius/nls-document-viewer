// 'use client';

import React from 'react';

export function SplashScreen() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
        <div className="text-center">
          <img
            alt="ロゴ"
            className="mx-auto mb-6 rounded-full shadow-lg border-4 border-white animate-spin-slow"
            height={150}
            src="https://placehold.co/150x150/000000/FFFFFF?text=Logo"
            width={150}
          />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 animate-pulse">
            読み込み中...
          </h1>
          <p className="text-lg md:text-xl text-gray-400 animate-fadeIn delay-1000">
            アプリケーションを準備しています
          </p>
        </div>
      </div>
    </div>
  );
}
