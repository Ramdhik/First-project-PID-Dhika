import { Button, Input, Link } from '@nextui-org/react';
export default function Login() {
  return (
    <main className="flex flex-col items-center object-center justify-center min-h-screen ">
      <h1 className="text-3xl font-bold mb-5 text-white ">Login</h1>
      <div className="flex flex-col gap-4 mb-40 w-80">
        <Input type="email" label="Email" />
        <Input type="password" label="Password" />
        <Button className="bg-gradient-to-tl from-pink-500 to-yellow-500 ">Login</Button>
        <p>
          If you dont have an account, please{' '}
          <Link className="bg-gradient-to-t from-pink-500 to-yellow-500 text-transparent bg-clip-text" href="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
