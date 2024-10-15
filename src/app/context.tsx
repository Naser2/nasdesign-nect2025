'use client';
import Header from '@/components/Header';
// import AuthComponent from '@/components/auth';

import clientSupabase from '@/lib/supabase/client';
import { Loader2 } from 'lucide-react';

// import { redirect } from 'next/navigation';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { extractSubabaseUserInfo } from '@/utils/extractSubabaseUserInfo';
import { extractSessionUserInfo } from '@/utils/extractSessionUserInfo';

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<any>(undefined);
  let [profile, setProfile] = useState<any>(null);
  let [session, setSession] = useState<any>(null);  // Add session state
  let [loading, setLoading] = useState<boolean>(false);
  let [projects, setProjects] = useState<any>([]); // New state for user's projects
  const [unreadCount, setUnreadCount] = useState(0);
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false); // Added openMobileNav state
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMobileNav(false); // Close mobile nav if clicked outside
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle link clicks inside the DisclosurePanel
  const handleLinkClick = () => {
    console.log("LINK_CLKICKED,  nav.",openMobileNav);
    setOpenMobileNav(false); // Close the Disclosure when any link is clicked
  };

  useEffect(() => {
    const fetchCurrentUserAndSession = async () => {
      try {
        console.log("Fetching session and user data...");
        setLoading(true);
  
        // Fetch session
        const { data: sessionData, error: sessionError } = await clientSupabase.auth.getSession();
        if (sessionError) {
          console.error("Session fetch error:", sessionError);
          throw sessionError;
        }
        console.log("Session data fetched:", sessionData);
        setSession(sessionData.session);
  
        // Fetch user
        const { data: userData, error: userError } = await clientSupabase.auth.getUser();
        if (userError) {
          console.error("User fetch error:", userError);
          throw userError;
        }
        console.log("User data fetched:", userData);
        setUser(userData.user);
  
        // Fetch profile
        console.log("Fetching profile for user ID:", userData.user.id);
        const { data: profileData, error: profileError } = await clientSupabase
          .from('user_profiles')
          .select('*')
          .eq('user_id', userData.user.id)
          .single();
        
        if (profileError) {
          console.error("Profile fetch error:", profileError);
          throw profileError;
        }
        console.log("Profile data fetched:", profileData);
        setProfile(profileData);
        // Fetch user's projects
        const { data: projectsData, error: projectsError } = await clientSupabase
          .from('projects')
          .select('*')
          .eq('project_owner', profileData.id);  
          
          // Assuming the 'projects' table has a 'user_id' column
          console.log("USER_PROJECTS: " , profileData.id);
        if (projectsError){ 
          throw projectsError;
        }
   
        setProjects(projectsData); // Store projects in state

      } catch (error) {
        console.error("Error during fetch:", error);
      } finally {
        console.log("Fetch completed, setting loading to false.");
        setLoading(false);
      }
    };
  
    fetchCurrentUserAndSession();
  }, []);

  return (
    <AppContext.Provider value={{ 
              user, profile, session, 
              setUser, setProfile,
              projects, setProjects, // Pass projects state
              setSession, openMobileNav, // Pass mobile nav state
              setOpenMobileNav, 
              handleLinkClick, 
              unreadCount,
              setUnreadCount,
        }}>  {/* Pass session and setSession */}
      {loading ? <Loader2 className="animate-spin" /> : children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
