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
import { AppleButton, GoogleButton, MicrosoftButton } from '../auth-buttons'
import BlurImage from '@/components/blur-image'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your account to continue.',
}

interface RegisterProps {
  isRegistering: boolean;
  setIsRegistering: Dispatch<SetStateAction<boolean>>;
  handleRegister: (event: FormEvent<HTMLFormElement>) => void;  //
  setEmail: Dispatch<SetStateAction<string>>;
  setFirstName: Dispatch<SetStateAction<string>>;
  setLastName: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setPhone: Dispatch<SetStateAction<string>>;
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  errorMessage?: string;
}

export default function Register({
  isRegistering,
  handleRegister,
  setIsRegistering,
  setEmail,
  setFirstName,
  setLastName,
  setPassword,
  setPhone,
  phone,
  firstName,
  lastName,
  email,
  password,
  errorMessage,}: RegisterProps) {

 

  return (
  
     
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
          <form action="#" method="POST" className="p-7 sm:p-11"   onSubmit={handleRegister}>
            <div className="flex items-start">
              <Link href="/" title="Home">
                <Mark className="h-9 fill-black" />
              </Link>
            </div>

                <h1 className="mt-8 text-base/6 font-medium">Welcome back!</h1>
                 <p className="mt-1 text-sm/5 text-gray-600">
                   Sign in to your account to continue.
                </p>
             
                          
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
                       
             
             
             
                 <div className="relative mx-4 ax-w-md lg:max-w-2xl  mlg:max-w-[79rem] xl:max-w-[25vw]"> 
               
                    {/* <div className="max-[600px]:justify-center p-6 mx-2 logo flex gap-x-4">
                        <Link href="/" aria-label="Home">
                            <CompanyLogo  color={"text-black"}/>
                        </Link>
                   </div> */}
                  <div  data-state="active"
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
                            Create a new account. Click save when you are done.
                              
                            </p>
                        </div>

                        <div className="p-6 pt-0 space-y-2">
                        
                          
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
                              <div> 
                                  <Label className={clsx( )}>
                                      Already member?
                                    </Label>
                                </div> 
                                  <Label  className="text-blue-600 cursor-pointer" onClick={() => setIsRegistering(!isRegistering)}>
                                      {isRegistering ? 'Login here' : 'Register here '} <span aria-hidden="true">→</span>
                                  </Label>   
                                </Field>
                             </div>
                
                        
                          
                          
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
                          

                            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      
                       
                     </div>
                  </div>
              
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
                </div>
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

            <div className="relative bg-black xl:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                <BlurImage
                alt=""
                src="/login_promo_desktop_v20240327.svg"
                className="aspect-[3/2] w-full h-full  xl:h-[100vh] bg-black object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                height={800}
                width={1200}
                />
            </div>
          
          
            
            <div className="mt-8">
              <Button type="submit" className="w-full">
               Register
              </Button>
            </div>
            </div>
        </form>
       </div>
       
  </div>

  )
}
