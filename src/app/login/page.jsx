'use client'

// import { syncUserProfile } from '@/auth';
import AuthComponent from '@/components/auth';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthPage = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        console.log('User signed in:', session);

        // Sync user profile after sign-in
        if (session) {
          // syncUserProfile(session.user);  // Call your syncUserProfile function
          router.push('/profile');        // Redirect after successful sign-in
        }
      }
      else if (event === 'SIGNED_OUT') {
        // Handle user sign out
        console.log('User signed out');
      }
    });

    // Cleanup auth listener
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase, router]);


    return (  <AuthComponent />)
  }
  



  export default AuthPage