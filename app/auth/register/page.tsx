import { FormInput } from 'lucide-react';
import { RegisterForms } from './form';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="shadow-xl px-8 py-8 pt-12 bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl">Bli En Medlem!</h1>
        <RegisterForms />
        <p className="text-center">
          Redan Medlem?
          <Link className="text-indigo-500 hover:underline" href="/auth/login">
            {' '}
            Logga in!
          </Link>
        </p>
      </div>
    </div>
  );
}
