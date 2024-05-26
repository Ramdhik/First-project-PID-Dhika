import { Button, Input, Link } from '@nextui-org/react';

export default function Register() {
  return (
    <main className="flex flex-col items-center object-center justify-center min-h-screen ">
      <h1 className="text-3xl font-bold mb-10">Register</h1>
      <div className="flex flex-col gap-4 mb-20 w-80">
        <Input type="email" label="Email" />
        <Input type="text" label="Name" />
        <Input type="password" label="Password" />
        <Input type="password" label="Confirm Password" />
        <Button className="bg-gradient-to-tl from-pink-500 to-yellow-500 ">Register</Button>
        <p className="text-center">
          If have an account, please{' '}
          <Link className="bg-gradient-to-t from-pink-500 to-yellow-500 text-transparent bg-clip-text" href="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
