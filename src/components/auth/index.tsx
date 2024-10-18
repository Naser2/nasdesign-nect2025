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
import Login from '@/components/auth/login/Login';
import Register from './register/Register';
import { syncUserProfile } from '@/auth';
export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your account to continue.',
}

const AuthComponent = () => {
  const [loading, setLoading] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false); // Toggling between login and registration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

 const supabase = createClient();
  const router = useRouter();

  
    // Handle login
    const handleLogin = async (event: FormEvent<HTMLFormElement>) =>  {
      setLoading(true);
     event.preventDefault();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setLoading(false);
        setErrorMessage(error.message);
      } else {
        setLoading(false);
        router.push('/profile'); // Redirect on successful login
      }
    
    };
  
    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
      setLoading(true);
      event.preventDefault();
    
      // Destructure data and error from the response
      const { data, error } = await supabase.auth.signUp({
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
        setLoading(false);
        setErrorMessage(error.message);
      } else {
        // If email confirmation is disabled, you'll have a session, otherwise only user
        if (data.session) {
          await syncUserProfile(data.user);  // Sync the profile for the newly registered user
          setLoading(false);
          router.push('/private');  // Redirect to the private page
        } else {
          // If session is null, confirmation email has been sent
          setLoading(false);
          setErrorMessage('Please check your email to confirm registration.');
        }
      }
    };

    
    const handleGoogleAuth = async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
    
      if (error) {
        console.error('Google login failed:', error.message);
        return { error };
      }
    
      // Supabase redirects to Google OAuth, no need to handle session here
    };

    return (
        <main className="overflow-hidden bg-gray-50">
        {/* <GradientBackground /> */}
        <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
          {/* <h1>HELLO AUTH</h1> */}
          <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
         { !isRegistering 
            ? 
            <Login
            loading={loading}
            isRegistering={isRegistering}
            setIsRegistering={setIsRegistering}
            handleLogin={handleLogin}
            setEmail={setEmail}
            setPassword={setPassword}
            email={email}
            password={password}
            errorMessage={errorMessage}
            handleGoogleLogin={handleGoogleAuth}
           /> 
           : 
           <Register
           loading={loading}
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
           handleGoogleLogin={handleGoogleAuth}
       />}
        

          </div>
       </div>
    </main>
        
    )
  }
  



  export default AuthComponent