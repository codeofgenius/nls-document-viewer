import { type ParserType } from '@/types/markdown';

export function IframeRender({ src, node }: ParserType) {
  const title = node?.properties.title ?? 'Movie';
  const allow = node?.properties.allow ?? '';
  const allowFullScreen = node?.properties.allowFullScreen ?? true;
  return (
    <iframe
      allow={allow}
      allowFullScreen={allowFullScreen}
      className="my-4 aspect-video w-full"
      referrerPolicy="strict-origin-when-cross-origin"
      src={src}
      title={title}
    />
  );
}
