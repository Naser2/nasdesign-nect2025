'use client';
import Header from '@/components/Header';
import clientSupabase from '@/lib/supabase/client';
import { Loader2 } from 'lucide-react';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ConvertToHumanReadableTime } from '@/lib/ConvertToHumanReadableTime';

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<any>(undefined);
  let [profile, setProfile] = useState<any>(null);
  let [session, setSession] = useState<any>(null);
  let [loading, setLoading] = useState<boolean>(false);
  let [isCurrentUser, setIsCurrentUser] = useState<any>(null);
  let [projects, setProjects] = useState<any>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMobileNav(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setOpenMobileNav(false);
  };

  useEffect(() => {
    const fetchCurrentUserAndSession = async () => {
      try {
        setLoading(true);

        // Check if session data exists in localStorage
        const storedSession = JSON.parse(localStorage.getItem('supabaseSession') || 'null');
        const storedProfile = JSON.parse(localStorage.getItem('userProfile') || 'null');
        const storedProjects = JSON.parse(localStorage.getItem('userProjects') || 'null');

        // Validate session expiration
        const isSessionValid = storedSession && (storedSession.expires_at * 1000) > Date.now();

        // Log session details for debugging
        console.log("SESSION_IN_LOCAL_STORAGE_EXPIRES_AT", storedSession?.expires_at);
        console.log("SESSION_IN_LOCAL_STORAGE_TODAYS_DATE", Date.now());
        const humanReadableTime = ConvertToHumanReadableTime(storedSession?.expires_at, storedSession?.expires_in);
        console.log("HUMAN_Expires At (Human Readable):", humanReadableTime.expiresAtReadable);
        console.log("HUMAN_Current Time (Human Readable):", humanReadableTime.currentReadable);
        console.log("HUMAN_Remaining Time:", humanReadableTime.remainingTime);
        console.log("SESSION_IN_LOCAL_STORAGE_storedSession", storedSession);
        console.log("SESSION_IN_LOCAL_STORAGE_isSessionValid", isSessionValid);

        if (isSessionValid && storedProfile && storedProjects) {
          // Use cached data from localStorage
          setSession(storedSession);
          setUser(storedSession.user);
          setProfile(storedProfile);
          setProjects(storedProjects);
          setLoading(false);
          return; // Skip fetching from Supabase
        }

        // Fetch session from Supabase if not available or expired
        const { data: sessionData, error: sessionError } = await clientSupabase.auth.getSession();
        if (sessionError) {
          console.error("Session fetch error:", sessionError);
          throw sessionError;
        }

        localStorage.setItem('supabaseSession', JSON.stringify(sessionData.session));
        setSession(sessionData.session);
        if (sessionData.session?.user) {
          setUser(sessionData.session.user);
        } else {
          return; // No user present, skip further fetches
        }

        // Fetch user profile from Supabase
        let { data: profileData, error: profileFetchError } = await clientSupabase
          .from('user_profiles')
          .select('*')
          .eq('user_id', sessionData.session.user.id)
          .single();

        if (profileFetchError) {
          if (profileFetchError.message === 'JSON object requested, multiple (or no) rows returned') {
            // Create a new profile if not found
            const fullNameParts = sessionData.session.user.user_metadata?.full_name.split(' ') || [];
            const firstName = fullNameParts[0] || '';
            const lastName = fullNameParts[1] || '';

            const { error: insertError } = await clientSupabase
              .from('user_profiles')
              .insert({
                user_id: sessionData.session.user.id,
                first_name: firstName,
                last_name: lastName,
                email: sessionData.session.user.user_metadata?.email || sessionData.session.user.email,
                avatar_url: sessionData.session.user.user_metadata?.avatar_url || null,
                phone: sessionData.session.user.phone || null,
                display_name: sessionData.session.user.user_metadata?.full_name || sessionData.session.user.email,
                email_verified: sessionData.session.user.user_metadata?.email_verified || false,
                phone_verified: sessionData.session.user.user_metadata?.phone_verified || false,
                email_notifications: sessionData.session.user.user_metadata?.email_notifications || true,
                user_role: 'user',
              });

            if (insertError) {
              console.error('Error creating new user profile:', insertError.message);
            } else {
              const { data: newProfileData, error: newProfileFetchError } = await clientSupabase
                .from('user_profiles')
                .select('*')
                .eq('user_id', sessionData.session.user.id)
                .single();
              if (newProfileFetchError) {
                console.error('Error fetching newly created profile:', newProfileFetchError.message);
              } else {
                profileData = newProfileData;
              }
            }
          } else {
            throw profileFetchError;
          }
        } else {
          // Update existing profile if needed
          const fullNameParts = sessionData.session.user.user_metadata?.full_name.split(' ') || [];
          const firstName = fullNameParts[0] || '';
          const lastName = fullNameParts[1] || '';

          const { error: updateError } = await clientSupabase
            .from('user_profiles')
            .update({
              first_name: firstName,
              last_name: lastName,
              email: sessionData.session.user.user_metadata?.email || sessionData.session.user.email,
              avatar_url: sessionData.session.user.user_metadata?.avatar_url || null,
              phone: sessionData.session.user.phone || null,
              display_name: sessionData.session.user.user_metadata?.full_name || sessionData.session.user.email,
              email_verified: sessionData.session.user.user_metadata?.email_verified || false,
              phone_verified: sessionData.session.user.user_metadata?.phone_verified || false,
              email_notifications: sessionData.session.user.user_metadata?.email_notifications || true,
            })
            .eq('user_id', sessionData.session.user.id);

          if (updateError) {
            console.error('Error updating user profile:', updateError.message);
          }
        }

        // Cache profile in localStorage and update state
        localStorage.setItem('userProfile', JSON.stringify(profileData));
        setProfile(profileData);

        // Fetch projects from Supabase
        const { data: projectsData, error: projectsError } = await clientSupabase
          .from('projects')
          .select('*')
          .eq('project_owner', profileData.id);

        if (projectsError) {
          throw projectsError;
        }

        // Cache projects in localStorage and update state
        localStorage.setItem('userProjects', JSON.stringify(projectsData));
        setProjects(projectsData);
      } catch (error) {
        console.error("Error during user fetch:", error);
      } finally {
        setLoading(false);
      }
    };

    // Determine if the current user is valid
    if (profile !== null && session?.user !== null) {
      const isCurrentUser = profile?.user_id === session.user.id && String(profile.user_id) === String(session.user.id);
      setIsCurrentUser(isCurrentUser);
    } else {
      setIsCurrentUser(false);
    }

    fetchCurrentUserAndSession();
  }, []);

  return (
    <AppContext.Provider value={{
      user,
      profile,
      session,
      isCurrentUser,
      setUser,
      setProfile,
      projects,
      setProjects,
      setSession,
      openMobileNav,
      setOpenMobileNav,
      handleLinkClick,
      unreadCount,
      setUnreadCount,
    }}>
      {loading ? <Loader2 className="animate-spin" /> : children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}




// 'use client';
// import Header from '@/components/Header';
// // import AuthComponent from '@/components/auth';

// import clientSupabase from '@/lib/supabase/client';
// import { Loader2 } from 'lucide-react';

// // import { redirect } from 'next/navigation';
// import { createContext, useContext, useEffect, useRef, useState } from 'react';
// import { extractSubabaseUserInfo } from '@/utils/extractSubabaseUserInfo';
// import { extractSessionUserInfo } from '@/utils/extractSessionUserInfo';
// import {ConvertToHumanReadableTime } from '@/lib/ConvertToHumanReadableTime';
// // import { syncUserProfile } from '@/auth';
// // import { syncUserProfile } from '@/auth';

// const AppContext = createContext<any>(undefined);

// export function AppWrapper({ children }: { children: React.ReactNode }) {
//   let [user, setUser] = useState<any>(undefined);
//   let [profile, setProfile] = useState<any>(null);
//   let [session, setSession] = useState<any>(null);  // Add session state
//   let [loading, setLoading] = useState<boolean>(false);
//   let [isCurrentUser,  setIsCurrentUser] = useState<any>(null);
//   let [projects, setProjects] = useState<any>([]); // New state for user's projects
//   const [unreadCount, setUnreadCount] = useState(0);
//   const [openMobileNav, setOpenMobileNav] = useState<boolean>(false); // Added openMobileNav state
//   const navRef = useRef<HTMLDivElement>(null);
//    useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (navRef.current && !navRef.current.contains(event.target as Node)) {
//         setOpenMobileNav(false); // Close mobile nav if clicked outside
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Handle link clicks inside the DisclosurePanel
//   const handleLinkClick = () => {
//     console.log("LINK_CLKICKED,  nav.",openMobileNav);
//     setOpenMobileNav(false); // Close the Disclosure when any link is clicked
//   };


//   useEffect(() => {
//     const fetchCurrentUserAndSession = async () => {
//       try {
//         setLoading(true);
  
//         // Check if session data exists in localStorage
//         const storedSession = JSON.parse(localStorage.getItem('supabaseSession') || 'null');
//         const isSessionValid = storedSession && storedSession.expires_at > Date.now();
//         console.log("SESSION_IN_LOCAL_STORAGE_EXPIRES_AT", storedSession.expires_at)
//         console.log("SESSION_IN_LOCAL_STORAGE_ETODAYS_DATE",  Date.now())
//         console.log("SESSION_EXPIRY_DATE")
//         const humanReadableTime = ConvertToHumanReadableTime(storedSession.expires_at, storedSession.expires_in, )
   
//         console.log("HUMAN_ Expires At (Human Readable):", humanReadableTime.expiresAtReadable);
//         console.log("HUMAN_ Current Time (Human Readable):", humanReadableTime.currentReadable);
//         console.log("HUMAN_ Remaining Time:", humanReadableTime.remainingTime);
        

//         console.log("SESSION_IN_LOCAL_STORAGE_storedSession", storedSession)
//         console.log("SESSION_IN_LOCAL_STORAGE_sisSessionValid", isSessionValid)
//         if (isSessionValid) {
//           setSession(storedSession);
//           setUser(storedSession.user);
//           console.log("SESSION_IsetSession", storedSession)
//           console.log("SESSION_setUser", storedSession.user)
  
//           // Optionally load profile and projects from localStorage if cached
//           const storedProfile = JSON.parse(localStorage.getItem('userProfile') || 'null');
//           const storedProjects = JSON.parse(localStorage.getItem('userProjects') || 'null');


//           if (storedProfile) setProfile(storedProfile);
//           if (storedProjects) setProjects(storedProjects);
//           console.log("SESSION_IN_LOCAL_STORAGE_storedProfile", storedProfile)
//           console.log("SESSION_IN_LOCAL_STORAGE_storedProjects", storedProjects)
//           setLoading(false);
//           return;
//         }
  
//         // Fetch session from Supabase if not available or expired
//         const { data: sessionData, error: sessionError } = await clientSupabase.auth.getSession();

//         if (sessionError) {
//           console.error("Session fetch error:", sessionError);
//           throw sessionError;
//         }
  
//         localStorage.setItem('supabaseSession', JSON.stringify(sessionData.session));
//         console.log("SESSION_IN_LOCAL_STORAGE", sessionData.session)
//         setSession(sessionData.session);
//         if (sessionData.session?.user){
//           console.log("ESSION_USER_PRESENT", sessionData.session.user)
//           setUser(sessionData.session.user);
//         }
//         else {
//           console.log("SESSION_USER_NOT_PRESENT", sessionData.session)
//           return 
//         }
    
  
//         // Fetch user profile
//         let { data: profileData, error: profileFetchError } = await clientSupabase
//           .from('user_profiles')
//           .select('*')
//           .eq('user_id', sessionData.session.user.id)
//           .single();
  
//         if (profileFetchError) {
//           if (profileFetchError.message === 'JSON object requested, multiple (or no) rows returned') {
//             // Handle profile creation logic here
//             const fullNameParts = sessionData.session.user.user_metadata?.full_name.split(' ') || [];
//             const firstName = fullNameParts[0] || '';
//             const lastName = fullNameParts[1] || '';
            
//             const { error: insertError } = await clientSupabase
//               .from('user_profiles')
//               .insert({
//                 user_id: sessionData.session.user.id,
//                 first_name: firstName,
//                 last_name: lastName,
//                 email: sessionData.session.user.user_metadata?.email || sessionData.session.user.email,
//                 avatar_url: sessionData.session.user.user_metadata?.avatar_url || null,
//                 phone: sessionData.session.user.phone || null,
//                 display_name: sessionData.session.user.user_metadata?.full_name || sessionData.session.user.email,
//                 email_verified: sessionData.session.user.user_metadata?.email_verified || false,
//                 phone_verified: sessionData.session.user.user_metadata?.phone_verified || false,
//                 email_notifications: sessionData.session.user.user_metadata?.email_notifications || true,
//                 user_role: 'user',
//               });
  
//             if (insertError) {
//               console.error('Error creating new user profile:', insertError.message);
//             } else {
//               // Fetch the newly created profile
//               const { data: newProfileData, error: newProfileFetchError } = await clientSupabase
//                 .from('user_profiles')
//                 .select('*')
//                 .eq('user_id', sessionData.session.user.id)
//                 .single();
  
//               if (newProfileFetchError) {
//                 console.error('Error fetching newly created profile:', newProfileFetchError.message);
//               } else {
//                 profileData = newProfileData;
//               }
//             }
//           } else {
//             throw profileFetchError;
//           }
//         } else {
//           // Update existing profile if necessary
//           const fullNameParts = sessionData.session.user.user_metadata?.full_name.split(' ') || [];
//           const firstName = fullNameParts[0] || '';
//           const lastName = fullNameParts[1] || '';
  
//           const { error: updateError } = await clientSupabase
//             .from('user_profiles')
//             .update({
//               first_name: firstName,
//               last_name: lastName,
//               email: sessionData.session.user.user_metadata?.email || sessionData.session.user.email,
//               avatar_url: sessionData.session.user.user_metadata?.avatar_url || null,
//               phone: sessionData.session.user.phone || null,
//               display_name: sessionData.session.user.user_metadata?.full_name || sessionData.session.user.email,
//               email_verified: sessionData.session.user.user_metadata?.email_verified || false,
//               phone_verified: sessionData.session.user.user_metadata?.phone_verified || false,
//               email_notifications: sessionData.session.user.user_metadata?.email_notifications || true,
//             })
//             .eq('user_id', sessionData.session.user.id);
  
//           if (updateError) {
//             console.error('Error updating user profile:', updateError.message);
//           }
//         }
  
//         localStorage.setItem('userProfile', JSON.stringify(profileData));
//         setProfile(profileData);
  
//         // Fetch projects
//         const { data: projectsData, error: projectsError } = await clientSupabase
//           .from('projects')
//           .select('*')
//           .eq('project_owner', profileData.id);
  
//         if (projectsError) {
//           throw projectsError;
//         }
  
//         localStorage.setItem('userProjects', JSON.stringify(projectsData));
//         setProjects(projectsData);
//       } catch (error) {
//         console.error("Error during user fetch:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (profile !== null && session?.user !== null) {
//       const isCurrentUser =
//         profile?.user_id === session.user.id &&
//         String(profile.user_id) === String(session.user.id);
//       setIsCurrentUser(isCurrentUser);
//     } else {
//       setIsCurrentUser(false);
//     }
//     fetchCurrentUserAndSession();
//   }, []);


  

//   return (
//     <AppContext.Provider value={{ 
//               user,
//               profile, 
//               session, 
//               isCurrentUser,
//               setUser, 
//               setProfile,
//               projects, 
//               setProjects, // Pass projects state
//               setSession, 
//               openMobileNav, // Pass mobile nav state
//               setOpenMobileNav, 
//               handleLinkClick, 
//               unreadCount,
//               setUnreadCount,
//         }}>  {/* Pass session and setSession */}
//       {loading ? <Loader2 className="animate-spin" /> : children}
//     </AppContext.Provider>
//   );
// }

// export function useAppContext() {
//   return useContext(AppContext);
// }
