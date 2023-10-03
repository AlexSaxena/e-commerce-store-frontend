'use client';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const RegisterForms = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // API REQUEST HERE
    try {
      const res = await fetch('hakim/product/db', {
        method: 'post',
        body: JSON.stringify({
          email,
          username,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        // Redirect or something
      }
    } catch (error) {
      console.error(error);
    }

    console.log(
      'Email: ',
      email,
      '\nUsername: ',
      username,
      '\nPassword: ',
      password,
    );
  };

  return (
    <form onSubmit={onSubmit} className="space-y-12 w-[400px]">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="username">Användarnamn</Label>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          type="text"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Lösenord</Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      <div className="w-full">
        <Button className="w-full bg-purple-800" size="lg">
          Registrera
        </Button>
      </div>
    </form>
  );
};
