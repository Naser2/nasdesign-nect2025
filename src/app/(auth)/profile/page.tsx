'use client';

import { useAppContext } from '../../context';
import ProfileComponent from '@/components/ProfileComponent';
import { useHelpers } from '@/hooks/useHelpers';
import { useEffect, useState } from 'react';

export default function PrivatePage() {
  const { user, profile, session } = useAppContext(); // Access from AppContext
  const { loading, setLoading, setError, setSuccess } = useHelpers(); // Use helpers for error, success, etc.
  const [userData, setUserData] = useState({
    display_name: '',
    username: '',
  });

  useEffect(() => {
    if (user && profile) {
      const { user_metadata } = user; // Assuming user contains user_metadata
      setUserData({
        display_name: user_metadata.display_name,
        username: user_metadata.username,
      });
      setLoading(false); // Stop loading after data is set
    } else {
      setLoading(true);
    }
  }, [user, profile, setLoading]);

  // Render a loading spinner or a fallback until the data is ready
  if (loading) {
    return <div>Loading...</div>; // Add your spinner component here
  }

  return (
    <ProfileComponent
      user={userData}
      handleChange={(e: any) => {
        const { name, value } = e.target;
        setUserData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }}
      userProfile={profile}
      session={session}
    />
  );
}

// 'use client';
// import { useAppContext } from '../../context';
// import ButtonComponent from '@/components/ButtonComponent';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle
// } from "@/components/ui/card";
// import { Input } from '@/components/ui/input';
// import { useHelpers } from '@/hooks/useHelpers';
// import clientSupabase from '@/lib/supabase/client';
// import { useEffect, useState } from 'react';
// import { toast } from 'sonner';
// import { useSession } from '@supabase/auth-helpers-react'


// import { redirect } from 'next/navigation'

// import { createClient } from '@/utils/supabase/server'
// import ProfileComponent from '@/components/ProfileComponent'
// import { Session } from 'inspector/promises';

// export default function PrivatePage() {
//   const { user, setUser } = useAppContext();
//   const { loading, setLoading } = useHelpers();
//   const [userSession, setUserSession] = useState();
//   const [profile, setProfile] = useState<any>(null);

//   // const session = useSession()

//   const [userData, setUserData] = useState({
//     display_name: "",
//     username: "",
//   });

//   // Loading state to prevent rendering components until data is fetched
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const { data, error } = await clientSupabase.auth.getSession();
//       const { session, user } = data
//   // Helper function to check if session is expired
//   const isSessionExpired = (expires_at: number) => {
//     const currentTime = Math.floor(Date.now() / 1000); // Current time in UNIX timestamp (seconds)
//     return currentTime > expires_at;
//   };
//       console.log("USER_SESSION", session);

//       if (session?.user?.id && session?.expires_at) {
//           const { expires_at } = session;
//           setUserSession(session);

//         // Check if session is expired
//         if (isSessionExpired(expires_at)) {
//           toast.error('Session has expired. Please log in again.');
//           setIsLoading(false);
//           return;
//         }

//         try {
//           console.log("USER_SESSION_USER_ID",  session.user.id);
//           const userId = session.user.id;
//           const { data: profileData, error: profileError } = await clientSupabase
//           .from('user_profiles')
//           .select('*')
//           .eq('user_id', '7c7e26cc-7735-41ac-b82a-606df0c46101')
//           .maybeSingle();  // This returns null if the profile is not found instead of throwing an error

//           // const { data: profileData, error: profileError } = await clientSupabase
//           //   .from('user_profiles')
//           //   .select('*')
//           //   .eq('user_id', '7c7e26cc-7735-41ac-b82a-606df0c46101')
//           //   // .single();

//           console.log("USER_PROFILE_DATA_1", profileData);

//           if (profileData) {
//             console.log("USER_PROFILE_DATA_2", profileData);
//             setUserData(profileData);
//             setProfile(profileData);
//             setIsLoading(false); 
//           } else if (profileError) {
//             console.log("PROFILE_FETCH_ERROR", profileError); // More detailed error logging
//             toast.error('Failed to fetch user profile.');
//             setIsLoading(false); 
//           }
//         } catch (error) {
//           console.error("Error fetching user profile:", error);
//           setIsLoading(false);
//         }
//       } else {
//         setIsLoading(false); // No session, stop loading
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const [data, setData] = useState({
//     display_name: "",
//     username: ""
//   });

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     setData({
//       display_name: "",
//       username: ""
//     });
//   }, []);

//   useEffect(() => {
//     if (!user) {
//       setLoading(true);
//     } else {
//       const { user_metadata } = user;
//       setData(user_metadata);
//       setUser(user);
//       setLoading(false);
//     }
//   }, [user]);

//   // Render a loading spinner or a fallback until the data is ready
//   if (isLoading) {
//     return <div>Loading...</div>; // Add your spinner component here
//   }

//   // Render your component once user data is available
//   return (
//     <ProfileComponent user={userData} handleChange={handleChange} userProfile={profile} session={userSession}/>
//   );
// }