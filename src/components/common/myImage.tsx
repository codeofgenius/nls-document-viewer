'use client';

import { useState } from 'react';

import Image, { type StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';

import { type MyImageProps } from '@/types/common';

export function MyImage({
  src,
  alt,
  className,
  errorClassName,
  width,
  height,
}: MyImageProps) {
  // const [imageSrc, setImageSrc] = useState<string | StaticImageData>(src);
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(src);
  const [cn, setCn] = useState(className);

  function handleImageError() {
    // setImageSrc(noImage);
    setImageSrc(src);
    setCn((cn) => twMerge(cn, errorClassName));
  }

  return (
    <Image
      alt={alt}
      className={cn}
      height={height}
      onError={handleImageError}
      src={imageSrc}
      width={width}
    />
  );
}
