'use client';

import { useState } from 'react';

import Image, { type StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';

//import noImage from '@/assets/image/noimage.png';
import { type MyImageProps } from '@/types/common';

const noImage = '/noimage.png';

export function MyImage({
  src,
  alt,
  className,
  errorClassName,
  width,
  height,
}: MyImageProps) {
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(src);
  const [cn, setCn] = useState(className);

  function handleImageError() {
    setImageSrc(noImage);
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
