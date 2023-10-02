import { FormInput } from 'lucide-react';
import { RegisterForms } from './form';

export default function RegisterPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="shadow-xl p-4 bg-white rounded-xl">
        <h1>Register Page</h1>
        <RegisterForms />
      </div>
    </div>
  );
}
