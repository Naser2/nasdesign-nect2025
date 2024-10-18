import { Button } from '@/components/button'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Mark } from '@/components/logo'
import { Checkbox, Field, Input, Label } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import type { Metadata } from 'next'
import type { Dispatch, SetStateAction, FormEvent } from 'react'
import { AppleButton, GoogleButton, MicrosoftButton } from '../auth-buttons'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account to continue.',
}

interface LoginProps {
  isRegistering: boolean;
  setIsRegistering: Dispatch<SetStateAction<boolean>>;
  handleLogin: (event: FormEvent<HTMLFormElement>) => void;  //
  handleGoogleLogin: (event: FormEvent<HTMLFormElement>) => void;  //
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  email: string;
  password: string;
  errorMessage?: string;
  loading: boolean;
}


export default function Login( {
  isRegistering,
  loading: boolean,
  handleLogin,
  setEmail,
  email,
  password,
  errorMessage,
  setPassword,
  setIsRegistering,
  handleGoogleLogin,
  loading
}: LoginProps) {
  return (
    <main className="overflow-hidden bg-gray-50">
      <GradientBackground />
      <div className="isolate flex min-h-dvh items-center justify-center lg:p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
        <form  onSubmit={handleLogin}  action="#" method="POST" className="p-7  sm:p-11">
            <div className="flex items-start">
              <Link href="/" title="Home">
                <Mark className="h-9 fill-black" />
              </Link>
            </div>
            <h1 className="mt-8 text-base/6 font-medium">Welcome back!</h1>
            <p className="mt-1 text-sm/5 text-gray-600">
              {metadata.description}
            </p>
            <div className="flex flex-col space-y-1.5 p-6">
                <h1 className="text-2xl  text-center font-bold tracking-tight text-gray-700 m:text-3xl py-4">
                    {isRegistering ? 'Register' : 'Login'}
                </h1>
            </div>
            
            <p className="text-red-600">{errorMessage && errorMessage}</p>
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
            <GoogleButton loading={loading}  handleLogin={handleGoogleLogin} /> 
            <AppleButton loading={loading}  handleLogin={handleGoogleLogin} /> 
            <MicrosoftButton loading={loading}  handleLogin={handleGoogleLogin} />
            </div>
          </form>
           <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
            Not a member?{' '}
            <Link href="#" type="button" onClick={() => setIsRegistering(true)}  className="font-medium hover:text-gray-600">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
