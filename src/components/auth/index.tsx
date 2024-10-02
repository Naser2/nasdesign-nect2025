'use client';

import { useState, type FormEvent } from 'react';
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
import Login from './login/Login';
import Register from './register/Register';
export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your account to continue.',
}

const AuthComponent = () => {
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
    const handleLogin = async (event: FormEvent<HTMLFormElement>) =>  {
        event.preventDefault();
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
    const handleRegister = async (event: FormEvent<HTMLFormElement>) =>  {
        event.preventDefault();
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
        <GradientBackground />
        <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
          <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
           <Login
            isRegistering={isRegistering}
            setIsRegistering={setIsRegistering}
            handleLogin={handleLogin}
            setEmail={setEmail}
            setPassword={setPassword}
            email={email}
            password={password}
            errorMessage={errorMessage}
           />
           <Register
                isRegistering={isRegistering}
                setIsRegistering={setIsRegistering}
                handleRegister={handleRegister}
                setEmail={setEmail}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setPassword={setPassword}
                setPhone={setPhone}
                phone={phone}
                firstName={firstName}
                lastName={lastName}
                email={email}
                password={password}
                errorMessage={errorMessage}
            />

          </div>
       </div>
    </main>
        
    )
  }
  



  export default AuthComponent