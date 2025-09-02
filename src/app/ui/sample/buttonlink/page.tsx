import { Heading1, Heading2, Heading3 } from '@/components/ui/common';
import { ButtonLink } from '@/components/ui/link';
import { APP_NAME } from '@/lib/constant';
import { colors, flowbiteColors, size } from '@/types/ui';

// Sample for ButtonLink
export default function Page() {
  return (
    <div className="p-4">
      <Heading1 className="mb-4">{APP_NAME}</Heading1>
      <Heading2 className="mb-4">UI / Sample / ButtonLink</Heading2>
      <Heading3 className="mb-4">TextLink Theme Color</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {colors.map((e, i) => (
          <ButtonLink color={e} href="/" key={i}>
            {e}
          </ButtonLink>
        ))}
      </div>
      <Heading3 className="mb-4">TextLink Theme Flowbite Color</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {flowbiteColors.map((e, i) => (
          <ButtonLink color={e} href="/" key={i}>
            {e}
          </ButtonLink>
        ))}
      </div>
      <Heading3 className="mb-4">TextLink Theme Size</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {size.map((e, i) => (
          <ButtonLink color="default" href="/" key={i} size={e}>
            {e}
          </ButtonLink>
        ))}
      </div>
      <Heading3 className="mb-4">TextLink Theme Outline Color</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {colors.map((e, i) => (
          <ButtonLink color={e} href="/" key={i} outline>
            {e}
          </ButtonLink>
        ))}
      </div>
      <Heading3 className="mb-4">
        TextLink Theme Outline Flowbite Color
      </Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {flowbiteColors.map((e, i) => (
          <ButtonLink color={e} href="/" key={i} outline>
            {e}
          </ButtonLink>
        ))}
      </div>
      <Heading3 className="mb-4">TextLink Theme Pill Flowbite Color</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {flowbiteColors.map((e, i) => (
          <ButtonLink color={e} href="/" key={i} pill>
            {e}
          </ButtonLink>
        ))}
      </div>
      <Heading3 className="mb-4">
        TextLink Theme Fullsize Flowbite Color
      </Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {flowbiteColors.map((e, i) => (
          <ButtonLink color={e} fullSized href="/" key={i}>
            {e}
          </ButtonLink>
        ))}
      </div>
    </div>
  );
}
