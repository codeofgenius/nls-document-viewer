import { Heading1, Heading2, Heading3 } from '@/components/ui/common';
import { TextLink } from '@/components/ui/link';
import { APP_NAME } from '@/lib/constant';
import { colors, flowbiteColors, size } from '@/types/ui';

// Sample for Link
export default function Page() {
  return (
    <div className="p-4">
      <Heading1 className="mb-4">{APP_NAME}</Heading1>
      <Heading2 className="mb-4">UI / Sample / Link</Heading2>
      <Heading3 className="mb-4">TextLink Theme Color</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {colors.map((e, i) => (
          <TextLink color={e} href="/" key={i}>
            {e}
          </TextLink>
        ))}
      </div>
      <Heading3 className="mb-4">TextLink Theme Flowbite Color</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {flowbiteColors.map((e, i) => (
          <TextLink color={e} href="/" key={i}>
            {e}
          </TextLink>
        ))}
      </div>
      <Heading3 className="mb-4">TextLink Theme Size</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {size.map((e, i) => (
          <TextLink color="default" href="/" key={i} size={e}>
            {e}
          </TextLink>
        ))}
      </div>
    </div>
  );
}
