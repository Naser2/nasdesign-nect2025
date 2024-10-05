'use client';
import Header from '@/components/Header';
// import AuthComponent from '@/components/auth';

import clientSupabase from '@/lib/supabase/client';
import { Loader2 } from 'lucide-react';
import { redirect } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';


const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: {
  children: React.ReactNode
}) {
  let [user, setUser] = useState<any>(undefined);
  let [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        setLoading(true);

        const { data, error } = await clientSupabase.auth.getUser();

        if (data) setUser(data.user)
          else redirect('/')
        // (!user) return <AuthComponent />  // This works in server-side context
          
      
      } catch (error) {
        setLoading(false);
        console.log(error);
        // Handle error here
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  if (loading) return <div className="dark:bg-black w-full h-screen flex items-center justify-center">
    <Loader2 className="animate-spin" />
  </div>

  // if (!user) return <AuthComponent />
  // if (!user) redirect('/(auth)/login');
    // Prevent redirect if already on login page
   
   
  return (
    <AppContext.Provider value={{
      user,
      setUser
    }}>
      {/* <Header /> */}
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}