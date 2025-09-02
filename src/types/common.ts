import { type StaticImageData } from 'next/image';

export type MyImageProps = {
  alt: string;
  className: string;
  errorClassName: string;
  height: number;
  src: string | StaticImageData;
  width: number;
};
