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
  
    <main className="overflow-hidden bg-gray-50">
    <GradientBackground />
        <div className="isolate flex min-h-[85vh] items-center justify-center lg:p-6 lg:p-8">
        {/* <Note/> */}
      <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
          <form action="#" method="POST" className="px-7 py-7 lg:p-7 sm:p-11"   onSubmit={handleRegister}>
            <div className="flex items-start">
              <Link href="/" title="Home">
                <Mark className="h-9 fill-black" />
              </Link>
            </div>

                <h1 className="mt-8 text-base/6 font-medium">Good to see you!</h1>
                 <p className="mt-1 text-sm/5 text-gray-600">
                 Cet started and Click register when you are done.
                </p>
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          
                  <div className="flex flex-col space-y-1.5 p-6">
                      <h1 className="text-2xl text-center  font-bold tracking-tight text-gray-700 m:text-3xl py-4">
                          {isRegistering ? 'Register' : 'Login'}
                      </h1>
                      
                  </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                           <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="firstName"
                            >
                            {/* First Name */}
                            </label>
                         <Field className="mt-0 space-y-3">
                          <Label className="text-sm/5 font-medium">First Name</Label>
                            <Input    onChange={(e) => setFirstName(e.target.value)}
                              required
                              autoFocus
                              id="firstName"
                              type="text"
                              value={firstName}
                              className={clsx(
                                'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                                'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                                'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                              )}
                            />
                          </Field>
                            {/* <input
                            className="flex h-10 w-full rounded-md focus:ring-indigo-50 border border-input focus:ring-indigo-500 focus:border-black bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            placeholder="John"
                            /> */}
                        </div>
                        <div className="space-y-2">
                          
                            <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="lastName"
                            >
                            {/* Last Name */}
                            </label>
                            <Field className="mt-0 space-y-3">
                          <Label className="text-sm/5 font-medium">Last Name</Label>
                            <Input    onChange={(e) => setLastName(e.target.value)}
                              required
                              autoFocus
                              id="lastName"
                              type="text"
                              value={lastName}
                              className={clsx(
                                'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                                'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                                'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                              )}
                            />
                          </Field>
                           {/* <input
                            className="flex h-10 w-full rounded-md focus:ring-indigo-50 border border-input focus:ring-indigo-500 focus:border-black bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="lastName"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            placeholder="Doe"
                            /> */}
                        </div>
                      </div>
                        

                    
                        <div className="space-y-2">
                          <label  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              htmlFor="phone" >
                              {/* Phone Number */}
                          </label>
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
                          <Field className="mt-0 space-y-3">
                          <Label className="text-sm/5 font-medium">Phone</Label>
                            <Input    onChange={(e) => setPhone(e.target.value)}
                              required
                              autoFocus
                              id="phone"
                              type="text"
                              value={phone}
                              className={clsx(
                                'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                                'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                                'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                              )}
                            />
                          </Field>
                          {/* <input
                              className="flex h-10 w-full rounded-md focus:ring-indigo-50 border border-input focus:ring-indigo-500 focus:border-black bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              id="phone"
                              type="text"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              required
                              placeholder="(555) 123-4567"
                          /> */}
                        </div>
                    

                        <div className="space-y-2">
                            <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="email"
                            >
                            {/* Email */}
                            </label>
                         <Field className="mt-0 space-y-3">
                           <Label className="text-sm/5 font-medium">Password</Label>
                            <Input 
                             autoFocus
                             id="password"
                             type="password"
                             onChange={(e) => setPassword(e.target.value)}
                             required
                             placeholder="•••••••"
                             className={clsx(
                               'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                               'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                               'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                             )}
                            />
                          </Field>
                        </div>

                          <div className="space-y-4">
                            <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="password"
                            >
                            {/* Password */}
                            </label>
                         {/* <Field className="mt-0 space-y-3">
                           <Label className="text-sm/5 font-medium">Password</Label>
                            <Input
                              autoFocus
                              id="password"
                              type="password"
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              placeholder="•••••••"
                              className={clsx(
                                'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                                'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                                'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                              )}
                            />
                          </Field> */}
                            {/* <input
                            className="flex h-10 w-full rounded-md border focus:ring-black border-input focus:border-indigo-50 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="•••••••"
                            /> */}
                        </div>

                        
                        <div className="mt-6">
                          <Button type="submit" className="w-full">
                              Register
                          </Button>
                        </div>
                          
                      
                      
                    <div className="block lg:px-6">  
                    
                    <Field className="flex justify-between pt-6 pb-10 p-4 items-center gap-3">
                        <div> 
                          <Label className={clsx( )}>
                              Already member?
                            </Label>
                        </div> 
                          <Label  className="text-blue-600 cursor-pointer" onClick={() => setIsRegistering(!isRegistering)}>
                              Login here <span aria-hidden="true">→</span>
                          </Label>   
                      </Field>
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
          
                <div>
                 {/* <div className="mt-8 flex items-center justify-between text-sm/5">
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
                </div> */}
                
                </div>
                    {/* ------------------ AUTH FORM END ---------------- */}
               
            
{/* 
            <div className="relative bg-black xl:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                <BlurImage
                alt=""
                src="/login_promo_desktop_v20240327.svg"
                className="aspect-[3/2] w-full h-full  xl:h-[100vh] bg-black object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                height={800}
                width={1200}
                />
            </div>
           */}
          
        
        </form>
       </div>
       </div>
     </main>


  )
}

export const Note =function() {
    return (  <div  style={{'position': 'fixed', 'left': '0px', top: '0px', transform: 'translate(272px, 60px)',
     minWidth: 'max-content', willChange: 'transform', zIndex: 10}}><div dataSide="bottom" dataAlign="start" 
     dataState="open" role="dialog" id="radix-:r10:" className="relative z-10 animate-slideLeftAndFade select-none rounded-xl p-4 text-sm shadow-sm bg-blue-400 text-white">
      <div className="flex max-w-xs flex-col gap-1"><div className="mb-0.5 flex gap-2"><span className="rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase leading-normal bg-white text-blue-selection">New</span><div className="grow font-semibold text-start">You&apos;ve got access to canvas</div><button type="button" className="-my-1 -mr-1 p-1 opacity-70 transition hover:opacity-100"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-sm"><path fillRule="evenodd" clipRule="evenodd" d="M5.63603 5.63604C6.02656 5.24552 6.65972 5.24552 7.05025 5.63604L12 10.5858L16.9497 5.63604C17.3403 5.24552 17.9734 5.24552 18.364 5.63604C18.7545 6.02657 18.7545 6.65973 18.364 7.05025L13.4142 12L18.364 16.9497C18.7545 17.3403 18.7545 17.9734 18.364 18.364C17.9734 18.7545 17.3403 18.7545 16.9497 18.364L12 13.4142L7.05025 18.364C6.65972 18.7545 6.02656 18.7545 5.63603 18.364C5.24551 17.9734 5.24551 17.3403 5.63603 16.9497L10.5858 12L5.63603 7.05025C5.24551 6.65973 5.24551 6.02657 5.63603 5.63604Z" fill="currentColor" /></svg></button></div><div className="text-start"><span>Collaborate with ChatGPT to write and code in a dedicated space.<a rel="noopener" className="cursor-pointer font-normal underline ml-1" target="_blank" href="https://openai.com/index/introducing-canvas/">Learn more</a></span></div></div><span style={{position: 'absolute', top: '0px', transformOrigin: 'center 0px', transform: 'rotate(180deg)', left: '68.0625px'}}><div className="relative top-[-6px] h-3 w-3 rotate-45 transform rounded-br-sm bg-blue-400" width={10} height={5} viewbox="0 0 30 10" preserveaspectratio="none" style={{display: 'block'}} /></span></div></div>
    )
 }
