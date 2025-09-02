import { FlowbiteForm } from '@/components/common/form';
import { MyForm } from '@/components/common/myForm';
import { Heading1, Heading2, Heading3 } from '@/components/ui/common';
import { APP_NAME } from '@/lib/constant';

// Sample for Form
export default function Page() {
  return (
    <div className="p-4">
      <Heading1 className="mb-4">{APP_NAME}</Heading1>
      <Heading2 className="mb-4">UI / Sample / Form</Heading2>
      <Heading3 className="mb-4">Text Field</Heading3>
      <FlowbiteForm />
      <Heading3 className="mb-4">My Form</Heading3>
      <MyForm />
    </div>
  );
}
