'use client';
import Header from '@/components/Header';
// import AuthComponent from '@/components/auth';

import clientSupabase from '@/lib/supabase/client';
import { Loader2 } from 'lucide-react';

// import { redirect } from 'next/navigation';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { extractSubabaseUserInfo } from '@/utils/extractSubabaseUserInfo';
import { extractSessionUserInfo } from '@/utils/extractSessionUserInfo';
// import { syncUserProfile } from '@/auth';
// import { syncUserProfile } from '@/auth';

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<any>(undefined);
  let [profile, setProfile] = useState<any>(null);
  let [session, setSession] = useState<any>(null);  // Add session state
  let [loading, setLoading] = useState<boolean>(false);
  let [isCurrentUser,  setIsCurrentUser] = useState<any>(null);
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
        console.log("User data fetched from Supabase Auth:", userData);
  
        if (userError) {
          console.error("User fetch error:", userError);
          throw userError;
        }
  
        setUser(userData.user);
  
        // Fetch profile
        console.log("Fetching profile for user ID:", userData.user.id);
        let { data: profileData, error: profileFetchError } = await clientSupabase
          .from('user_profiles')
          .select('*')
          .eq('user_id', userData.user.id)
          .single();
  
        if (profileFetchError) {
          console.error("Profile fetch error:", profileFetchError);
  
          if (profileFetchError.message === 'JSON object requested, multiple (or no) rows returned') {
            console.log('No profile found, creating a new one...');
            const fullNameParts = userData.user.user_metadata?.full_name.split(' ') || [];
            const firstName = fullNameParts[0] || '';
            const lastName = fullNameParts[1] || '';
  
            // Insert new profile with all available fields from auth.users
            const { error: insertError } = await clientSupabase
              .from('user_profiles')
              .insert({
                user_id: userData.user.id,
                first_name: firstName,
                last_name: lastName,
                email: userData.user.user_metadata?.email || userData.user.email,
                avatar_url: userData.user.user_metadata?.avatar_url || null,
                phone: userData.user.phone || null,
                display_name: userData.user.user_metadata?.full_name || userData.user.email,
                email_verified: userData.user.user_metadata?.email_verified || false,
                phone_verified: userData.user.user_metadata?.phone_verified || false,
                email_notifications: userData.user.user_metadata?.email_notifications || true,
                user_role: 'user', // Default role as 'user', can be changed later
              });
  
            if (insertError) {
              console.error('Error creating new user profile:', insertError.message);
            } else {
              console.log('Profile created successfully for the new user:', userData.user.id);
  
              // Fetch the newly created profile to update the state
              const { data: newProfileData, error: newProfileFetchError } = await clientSupabase
                .from('user_profiles')
                .select('*')
                .eq('user_id', userData.user.id)
                .single();
  
              if (newProfileFetchError) {
                console.error('Error fetching newly created profile:', newProfileFetchError.message);
              } else {
                profileData = newProfileData; // Update profileData with the newly fetched profile
                console.log('Newly created profile data fetched:', profileData);
              }
            }
          } else {
            throw profileFetchError;
          }
        } else {
          console.log('Profile exists, updating if necessary...');
          const fullNameParts = userData.user.user_metadata?.full_name.split(' ') || [];
          const firstName = fullNameParts[0] || '';
          const lastName = fullNameParts[1] || '';
  
          // Update the existing profile
          const { error: updateError } = await clientSupabase
            .from('user_profiles')
            .update({
              first_name: firstName,
              last_name: lastName,
              email: userData.user.user_metadata?.email || userData.user.email,
              avatar_url: userData.user.user_metadata?.avatar_url || null,
              phone: userData.user.phone || null,
              display_name: userData.user.user_metadata?.full_name || userData.user.email,
              email_verified: userData.user.user_metadata?.email_verified || false,
              phone_verified: userData.user.user_metadata?.phone_verified || false,
              email_notifications: userData.user.user_metadata?.email_notifications || true,
            })
            .eq('user_id', userData.user.id);
  
          if (updateError) {
            console.error('Error updating user profile:', updateError.message);
          } else {
            console.log('Profile successfully updated for user:', userData.user.id);
          }
        }
  
        // Set the profile state with the fetched or newly created data
        if (profileData) {
          console.log('USER_SUPA_PROFILE_CONTEXT _160:', profileData)
          setProfile(profileData);
  
          // Fetch user's projects if profile data is available
          console.log("Fetching user projects:");
          const { data: projectsData, error: projectsError } = await clientSupabase
            .from('projects')
            .select('*')
            .eq('project_owner', profileData.id);
  
          if (projectsError) {
            console.error("Error during projects fetch:", projectsError);
            throw projectsError;
          }
          setProjects(projectsData);
        }
      } catch (error) {
        console.error("Error during user fetch:", error);
      } finally {
        console.log("Fetch completed, setting loading to false.");
        setLoading(false);
      }
    };
    if (profile !== null && session?.user !== null) {
      const isCurrentUser =
        profile?.user_id === session.user.id &&
        String(profile.user_id) === String(session.user.id);
      setIsCurrentUser(isCurrentUser);
    } else {
      setIsCurrentUser(false);
    }
    fetchCurrentUserAndSession();
  }, []);
  
  

  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (navRef.current && !navRef.current.contains(event.target as Node)) {
  //       setOpenMobileNav(false); // Close mobile nav if clicked outside
  //     }
  //   }

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  // // Handle link clicks inside the DisclosurePanel
  // const handleLinkClick = () => {
  //   console.log("LINK_CLKICKED,  nav.",openMobileNav);
  //   setOpenMobileNav(false); // Close the Disclosure when any link is clicked
  // };

  // useEffect(() => {
  //   const fetchCurrentUserAndSession = async () => {
  //     try {
  //       console.log("Fetching session and user data...");
  //       setLoading(true);
  
  //       // Fetch session
  //       const { data: sessionData, error: sessionError } = await clientSupabase.auth.getSession();

  //       if (sessionError) {
  //         console.error("Session fetch error:", sessionError);
  //         throw sessionError;
  //       }
      
  //       // syncUserProfile(sessionData); // Sync user profile data

  //       console.log("Session data fetched:", sessionData);

  //       setSession(sessionData.session);
  //       // syncUserProfile(sessionData.session.user); // Sync user profile data
  //       // Fetch user
  //       const { data: userData, error: userError } = await clientSupabase.auth.getUser();
  //         console.log("User from SupaBase AUTH USER TABLE data fetched:", userData);

  //       if (userError) {
  //         console.error("User fetch error:", userError);
  //         throw userError;
  //       }

  //       setUser(userData.user);
  
  //       // Fetch profile
  //       console.log("Fetching profile for user ID:", userData.user.id);
  //       const { data: profileData, error: profileError } = await clientSupabase
  //         .from('user_profiles')
  //         .select('*')
  //         .eq('user_id', userData.user.id)
  //         .single();
          
        
  //       if (profileError) {
  //         console.error("Profile fetch error:", profileError);
  //         // throw profileError;

  //           if (profileError.message === 'JSON object requested, multiple (or no) rows returned') {
  //               console.log('SYNCH_USER_PROFILE_No profile found, creating a new one...');
  //               const fullNameParts = userData.user.user_metadata?.full_name.split(' ');
  //               const first_name  =  fullNameParts[0];
  //               const last_name  = fullNameParts[1]
  //             // Insert new profile with all available fields from auth.users
  //             const { error: insertError } = await clientSupabase
  //               .from('user_profiles')
  //               .insert({
  //                 user_id: userData.user.id,
  //                 first_name: first_name,
  //                 last_name: last_name,
  //                 email: userData.user.user_metadata?.email || userData.user.email,
  //                 avatar_url: userData.user.user_metadata?.avatar_url || null,
  //                 phone: userData.user.phone || null,
  //                 display_name: userData.user.user_metadata?.first_name || userData.user.app_metadata.display_name || null,
  //                 email_verified: userData.user.app_metadata.email_verified || false,
  //                 phone_verified: userData.user.app_metadata.phone || false,
  //                 email_notifications: userData.user.user_metadata.email_notifications || true,
  //                 // provider: userData.user.app_metadata?.provider ? userData.user.app_metadata.provider : 'email',
  //                 user_role: 'user',  // Default role as 'user', can be changed later
  //               });

  //             if (insertError) {
  //               console.error('Error creating new user profile:', insertError.message);
  //             } else {
  //               console.log('Profile_Created for NEW USER:', userData);
  //             }
  //           }

  //           else {
  //             console.log('Profile_Created already exists, updating if necessary...');
  //             const fullNameParts = userData.user.user_metadata?.full_name.split(' ');
  //             const first_name  =  fullNameParts[0];
  //             const last_name  = fullNameParts[1]
  //             // Update the profile if it exists
  //             const { error: updateError } = await clientSupabase
  //               .from('user_profiles')
  //               .update({
  //                 user_id: userData.user.id,
  //                 first_name: first_name,
  //                 last_name:last_name,
  //                 email: userData.user.user_metadata?.email || userData.user.email,
  //                 avatar_url: userData.user.user_metadata?.avatar_url || null,
  //                 phone: userData.user.phone || null,
  //                 display_name: userData.user.user_metadata?.first_name || userData.user.app_metadata.display_name || null,
  //                 email_verified: userData.user.app_metadata.email_verified || false,
  //                 phone_verified: userData.user.app_metadata.phone || false,
  //                 email_notifications: userData.user.user_metadata.email_notifications || true,
  //                 // provider: data.session.user.app_metadata?.provider || 'email',
  //                 // user_role: 'user',  // Default role as 'user', can be changed later
  //               })
  //               .eq('user_id', userData.user.id,);
          
  //             if (updateError) {
  //               console.error('Profile_Created Error updating user profile:', updateError.message);
  //             } else {
  //               console.log('Profile_Created_successfully updated for user:', userData);
  //             }
  //           }
  //             //  FETCH PROFILE FOR NEW USER 
  //         const { data: profileData, error: profileError } = await clientSupabase
  //         .from('user_profiles')
  //         .select('*')
  //         .eq('user_id', userData.user.id)
  //         .single();

  //         console.log("Profile data fetched:", profileData);
  //         if(profileData)  setProfile(profileData);
  //         else console.log("ERROR - FETCHING PORFILE DATA FOR NEW USER:");
        
  //       }
    
    
  //       if (profileData){
  //         setProfile(profileData);
  //       // Fetch user's projects
  //       console.log("Fetching user projects:");
  //       const { data: projectsData, error: projectsError } = await clientSupabase
  //         .from('projects')
  //         .select('*')
  //         .eq('project_owner', profileData.id);  
          
  //         // Assuming the 'projects' table has a 'user_id' column
  //         console.log("FETCHED USER_PROJECTS: " , profileData.id);

  //         if (projectsError){ 

  //           console.error("Error during fetch:", projectsError);
  //           throw projectsError;
  //       }
  //       setProjects(projectsData);
  //     }
  //       // Store projects in state

  //     } catch (error) {
  //       console.error("Error during user fetch:", error);
  //     } finally {
  //       console.log("Fetch completed, setting loading to false.");
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchCurrentUserAndSession();
  // }, []);

  return (
    <AppContext.Provider value={{ 
              user,
              profile, 
              session, 
              isCurrentUser,
              setUser, 
              setProfile,
              projects, 
              setProjects, // Pass projects state
              setSession, 
              openMobileNav, // Pass mobile nav state
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
