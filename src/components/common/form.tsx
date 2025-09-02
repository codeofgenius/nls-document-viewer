import { Label, TextInput, Checkbox, Button } from 'flowbite-react';

export function FlowbiteForm() {
  return (
    <div className="mb-4 grid grid-cols-1 gap-4 p-4 md:grid-cols-12">
      <form className="md:col-span-6 md:col-start-4 space-y-4">
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput
          id="email1"
          placeholder="name@flowbite.com"
          required
          type="email"
        />
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        <TextInput id="password1" required type="password" />
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button fullSized type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
