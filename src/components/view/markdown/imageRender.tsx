import { MyImage } from '@/components/common/myImage';
import { type ParserType } from '@/types/markdown';

export function ImageRender({ src, alt }: ParserType) {
  return (
    <MyImage
      alt={alt ?? ''}
      className="w-[75%]"
      errorClassName="border border-1"
      height={2000}
      src={src ?? ''}
      width={3000}
    />
  );
}
