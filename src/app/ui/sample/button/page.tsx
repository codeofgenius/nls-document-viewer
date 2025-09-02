'use client';

import { Button } from 'flowbite-react';

import { Button as MyButton, LoadingButton } from '@/components/ui/button';
import { Heading1, Heading2, Heading3 } from '@/components/ui/common';
import { APP_NAME } from '@/lib/constant';
import { colors, flowbiteColors, size } from '@/types/ui';

// Sample for Button
export default function Page() {
  return (
    <div className="p-4">
      <Heading1 className="mb-4">{APP_NAME}</Heading1>
      <Heading2 className="mb-4">UI / Sample / Button</Heading2>
      <Heading3 className="mb-4">Button flowbite color</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {flowbiteColors.map((e, i) => (
          <Button color={e} key={i}>
            {e}
          </Button>
        ))}
      </div>
      <Heading3 className="mb-4">MyButton Button color</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {colors.map((e, i) => (
          <MyButton
            color={e}
            key={i}
            label={e}
            onClick={() => {
              alert(e);
            }}
            type="button"
          />
        ))}
      </div>
      <Heading3 className="mb-4">MyButton Button flowbite color</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {flowbiteColors.map((e, i) => (
          <MyButton
            color={e}
            key={i}
            label={e}
            onClick={() => {
              alert(e);
            }}
            type="button"
          />
        ))}
      </div>
      <Heading3 className="mb-4">MyButton Button outline color</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {colors.map((e, i) => (
          <MyButton
            color={e}
            key={i}
            label={e}
            onClick={() => {
              alert(e);
            }}
            outline
            type="button"
          />
        ))}
      </div>
      <Heading3 className="mb-4">
        MyButton Button outline flowbite color
      </Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {flowbiteColors.map((e, i) => (
          <MyButton
            color={e}
            key={i}
            label={e}
            onClick={() => {
              alert(e);
            }}
            outline
            type="button"
          />
        ))}
      </div>
      <Heading3 className="mb-4">MyButton Button size</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {size.map((e, i) => (
          <MyButton
            key={i}
            label={e}
            onClick={() => {
              alert(e);
            }}
            size={e}
            type="button"
          />
        ))}
      </div>
      <Heading3 className="mb-4">MyButton Button pill</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {colors.map((e, i) => (
          <MyButton
            color={e}
            key={i}
            label={e}
            onClick={() => {
              alert(e);
            }}
            pill
            type="button"
          />
        ))}
      </div>
      <Heading3 className="mb-4">MyButton Button fullSized</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {colors.map((e, i) => (
          <MyButton
            color={e}
            fullSized
            key={i}
            label={e}
            onClick={() => {
              alert(e);
            }}
            type="button"
          />
        ))}
      </div>
      <Heading3 className="mb-4">MyButton Loading Button</Heading3>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {colors.map((e, i) => (
          <LoadingButton
            color={e}
            isProcessing
            key={i}
            label={e}
            onClick={() => {
              alert(e);
            }}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
