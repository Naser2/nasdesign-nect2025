import { Button } from '@/components/button'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Mark } from '@/components/logo'
import { Checkbox, Field, Input, Label } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import type { Metadata } from 'next'
import type { FormEvent } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { GoogleButton, MicrosoftButton } from '../auth-buttons'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Log in to your account to continue.',
}
interface LoginProps {
  isRegistering: boolean;
  setIsRegistering: Dispatch<SetStateAction<boolean>>;
  handleLogin: (event: FormEvent<HTMLFormElement>) => void;  //
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  email: string;
  password: string;
  errorMessage?: string;
}


export default function Login( {
  isRegistering,
  handleLogin,
  setEmail,
  email,
  password,
  errorMessage,
  setPassword,
  setIsRegistering
}: LoginProps) {
  return (
    <main className="overflow-hidden bg-gray-50">
      <GradientBackground />
      <div className="isolate flex items-center justify-center p-2 lg:pt-2 lg:px-6  xl:p-8">
        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
          <form  onSubmit={handleLogin}  action="#" method="POST" className="p-7  sm:p-11">
            <div className="flex items-start">
              <Link href="/" title="Home">
                <Mark className="h-9 fill-black" />
              </Link>
            </div>
            <h1 className="mt-8 text-base/6 font-medium">Welcome back!</h1>
            <p className="mt-1 text-sm/5 text-gray-600">
              Sign in to your account to continue.
            </p>
            <div className="flex flex-col space-y-1.5 p-6">
                <h1 className="text-2xl  text-center font-bold tracking-tight text-gray-700 m:text-3xl py-4">
                    {isRegistering ? 'Register' : 'Login'}
                </h1>
            </div>
            {errorMessage && errorMessage}
            <Field className="mt-0 space-y-3">
              <Label className="text-sm/5 font-medium">Email</Label>
              <Input  onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                type="email"
                name="email"
                value={email}
                className={clsx(
                  'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                  'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                  'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                )}
              />
            </Field>
            <Field className="mt-8 space-y-3">
              <Label className="text-sm/5 font-medium">Password</Label>
              <Input  onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                value={password}
                className={clsx(
                  'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                  'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                  'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                )}
              />
            </Field>
            <div className="mt-8 flex items-center justify-between text-sm/5">
              <Field className="flex items-center gap-3">
                <Checkbox
                  name="remember-me"
                  className={clsx(
                    'group block size-4 rounded border border-transparent shadow ring-1 ring-black/10 focus:outline-none',
                    'data-[checked]:bg-black data-[checked]:ring-black',
                    'data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-black',
                  )}
                >
                  <CheckIcon className="fill-white opacity-0 group-data-[checked]:opacity-100" />
                </Checkbox>
                <Label>Remember me</Label>
              </Field>
              <Link href="#" className="font-medium hover:text-gray-600">
                Forgot password?
              </Link>
            </div>
            <div className="mt-8">
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </div>
            <div className="flex-block py-6">
                <GoogleButton /> 
                <MicrosoftButton />
            </div>
          </form>
          <div className="flex px-4 m-1.5 justify-between rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
            Not a member?{' '}
            <Button  type="button" onClick={() => setIsRegistering(true)} 
            href="#" className="bg-blue-600 font-medium hover:!text-white">
              Create an account
          </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
