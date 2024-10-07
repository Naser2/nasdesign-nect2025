'use client';
import Header from '@/components/Header';
// import AuthComponent from '@/components/auth';

import clientSupabase from '@/lib/supabase/client';
import { Loader2 } from 'lucide-react';
// import { redirect } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';
import { extractSubabaseUserInfo } from '@/utils/extractSubabaseUserInfo';
import { extractSessionUserInfo } from '@/utils/extractSessionUserInfo';

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<any>(undefined);
  let [profile, setProfile] = useState<any>(null);
  let [session, setSession] = useState<any>(null);  // Add session state
  let [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCurrentUserAndSession = async () => {
      try {
        setLoading(true);

        // Fetch session
        const { data: sessionData, error: sessionError } = await clientSupabase.auth.getSession();
        if (sessionError) throw sessionError;
         const userMetadata = extractSessionUserInfo(sessionData.session);
        setSession(sessionData.session);

        // Fetch user
        const { data: userData, error: userError } = await clientSupabase.auth.getUser();
        console.log("APP_CONTEXT_USER_AUTH", sessionData);
        if (userError) throw userError;
     
        // console.log("APP_CONTEXT_EXTRACTED_USER_METADATA_FROM_SESSION", userMetadata);
        // console.log("APP_CONTEXT_USER_DATA_DOT_USER", userData.user);
    
  
        setUser(userData.user);

        // Fetch profile
        const { data: profileData, error: profileError } = await clientSupabase
          .from('user_profiles')
          .select('*')
          .eq('user_id', userData.user.id)
          .single();
        
        if (profileError) throw profileError;
        console.log("APP_CONTEXT_USER_PROFILE", profileData);
        setProfile(profileData);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUserAndSession();  // Fetch both session and user
  }, []);

  return (
    <AppContext.Provider value={{ user, profile, session, setUser, setProfile, setSession }}>  {/* Pass session and setSession */}
      {loading ? <Loader2 className="animate-spin" /> : children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
