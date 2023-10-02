'use-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const RegisterForms = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register!');
  };

  return (
    <form className="space-y-12 w-[400px]">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
      <div className="w-full">
        <Button className="">Register</Button>
      </div>
    </form>
  );
};
