'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

import { GradientBackground } from '../gradient';
import BlurImage from '../blur-image';
import CompanyLogo from '@/components/CompanyLogo'
import Link from 'next/link';
import { Checkbox, Field, Input, Label } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { Button } from '@/components/button'
import { clsx } from 'clsx'
import type { Metadata } from 'next'
import {GoogleButton, AppleButton, MicrosoftButton} from '@/components/auth/auth-buttons'
export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your account to continue.',
}

const AuthPage = () => {
    const [isRegistering, setIsRegistering] = useState(false); // Toggling between login and registration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
  
    const supabase = createClient();
  
    // Handle login
    const handleLogin = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setErrorMessage(error.message);
      } else {
        router.push('/private'); // Redirect on successful login
      }
    };
  
    // Handle registration
    const handleRegister = async (e) => {
      e.preventDefault();
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
          },
        },
      });
  
      if (error) {
        setErrorMessage(error.message);
      } else {
        router.push('/private'); // Redirect on successful registration
      }
    };
    return (
  <main className="overflow-hidden bg-gray-50">
        
        <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
       
    
          <div className="mx-auto max-w-7xl xl:w-full flex-block xl:grid x:grid-cols-12">
            <div className="pb-24 isolate py-4 xl:w-full xl:grid  
                            gap-6 flex-wrap items-center w-full pt-10 
                            sm:pb-32 xl:!col-span-8 lg:px-0 lg:pb-56
                            lg:pt-38 xl:col-span-6"
                            >
             <GradientBackground />
             {/* ------------------- AUTH FORM BEGIN ------------ */}
           
             <div className="relative mx-4 ax-w-md   lg:max-w-2xl   mlg:max-w-[79rem] xl:max-w-[25vw]"> 
                   <div className="px-6 mx-auto lg:mx-0">
                    <div className="max-[600px]:justify-center p-6 mx-2 logo flex gap-x-4">
                        <Link href="/" aria-label="Home">
                            <CompanyLogo  color={"text-black"}/>
                        </Link>
                   </div>
                    <div
                        data-state="active"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r0:-trigger-account"
                        id="radix-:r0:-content-account"
                        tabIndex={0}
                        className="mx-10 max-w-[90vw] mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                     <div className="rounded-xl border bg-card text-card-foreground shadow">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h1 className="text-2xl  font-bold tracking-tight text-gray-700 m:text-3xl py-4">
                                {isRegistering ? 'Register' : 'Login'}
                            </h1>
                            <p className="text-sm text-muted-foreground">
                            {isRegistering
                                ? 'Create a new account. Click save when you are done.'
                                : 'Log into your account here.'}
                            </p>
                        </div>

                        <div className="p-6 pt-0 space-y-2">
                            <form
                            onSubmit={isRegistering ? handleRegister : handleLogin}
                            className="space-y-4"
                            >
                            {isRegistering && (
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="firstName"
                                    >
                                    {/* First Name */}
                                    </label>
                                    <input
                                    className="flex h-10 w-full rounded-md focus:ring-indigo-50 border border-input focus:ring-indigo-500 focus:border-black bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="firstName"
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                    placeholder="John"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="lastName"
                                    >
                                    {/* Last Name */}
                                    </label>
                                    <input
                                    className="flex h-10 w-full rounded-md focus:ring-indigo-50 border border-input focus:ring-indigo-500 focus:border-black bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="lastName"
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    placeholder="Doe"
                                    />
                                </div>
                             </div>
                            )}

                            {isRegistering && (
                                <div className="space-y-1">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="phone"
                                >
                                    {/* Phone Number */}
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md focus:ring-indigo-50 border border-input focus:ring-indigo-500 focus:border-black bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="phone"
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    placeholder="(555) 123-4567"
                                />
                                </div>
                            )}

                            <div className="space-y-1">
                                <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="email"
                                >
                                {/* Email */}
                                </label>
                                <input
                                className="flex h-10 w-full rounded-md focus:ring-indigo-50 border border-input focus:ring-indigo-500 focus:border-black bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="anick@odfit.com"
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="password"
                                >
                                {/* Password */}
                                </label>
                                <input
                                className="flex h-10 w-full rounded-md border focus:ring-black border-input focus:border-indigo-50 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="•••••••"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            >
                                {isRegistering ? 'Get Started' : 'Login'}
                            </button>
                           
                         
                              
                            
                   <div className="px-2 mt-8 flex items-center justify-between text-sm/5">
                     <Field className="flex items-center gap-3">
                         <div>  {isRegistering ? 
                            
                             <Label className={clsx( )}>
                                 Already member?
                               </Label>
                        
                             :   "Don't have an account?"
                             }
                          </div> 
                            <Label  className="text-blue-600 cursor-pointer" onClick={() => setIsRegistering(!isRegistering)}>
                                {isRegistering ? 'Login here' : 'Register here '} <span aria-hidden="true">→</span>
                            </Label>   
                          </Field>
                        </div>
                
                        
                          
                            {isRegistering &&  
                            <div className="block  lg:px-8 py-4 ">
                                  <div className=" divider-wrapper !mt-[-4em] !w-[10px]">
                              {/* <span className="divider">-Or-</span> */}
                            </div>  
                            <div className="flex-block">
                                <GoogleButton /> 
                                <AppleButton /> 
                                <MicrosoftButton />
                                </div>
                            </div>
                          }
                            </form>

                            {errorMessage && <p className="text-red-600">{errorMessage}</p>}

                           
                        </div>
                        </div>
                    </div>
                    </div>
              {!isRegistering &&   
                <div>
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
                </div>}
                    {/* ------------------ AUTH FORM END ---------------- */}
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                        href="/verification"
                        className="rounded-md bg-gray-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Forgot password ?
                        </a>
                        <a href="/reset-password" className="text-sm font-semibold leading-6 text-gray-900">
                        Resend Confirmation ? <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
        
            
            </div>
            <div className="relative bg-black xl:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                <BlurImage
                alt=""
                src="/login_promo_desktop_v20240327.svg"
                className="aspect-[3/2] w-full h-full  xl:h-[100vh] bg-black object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                height={800}
                width={1200}
                />
            </div>
            </div>
    </div>
    </main>
        
    )
  }
  



  export default AuthPage