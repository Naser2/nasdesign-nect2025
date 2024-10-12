// "use client";

// import type { SupabaseUserProfile } from '@/lib/Types';
// // import { useSession } from 'next-auth/react';
// import { redirect, usePathname, useSearchParams } from 'next/navigation';
// import { useCallback, useEffect, useState } from 'react';
// // import { MDXRemote } from 'next-mdx-remote';
// import Link from 'next/link';
// import Profile from './Profile';
// export const profileWidth = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';
// import { useSession } from '@supabase/auth-helpers-react'
// export default function ProfileComponent({
//   settings,
//   user,
//   userProfile
// }: {
//   settings?: boolean;
//   user: SupabaseUserProfile;
//   userProfile: SupabaseUserProfile;
// }) {
//   // const { data: session } = useSession();
//   const [isMounted, setIsMounted] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [data, setData] = useState({
//     username: user?.username || 'Pick a username',
//     image: user?.image,
//     bio: user?.bio || '',
//     bioMdx: user?.bioMdx,
//   });
//   const [session , setSession] = useState(null);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const settingsPage = settings || (searchParams.get('settings') === 'true' && pathname === '/settings');

//   const handleDismiss = useCallback(() => {
//     if (settingsPage) {
//       // Perform navigation logic here
//     }
//   }, [settingsPage, user?.username, user?.first_name, user?.last_name, user.user_metadata?.email]);

//   const handleSave = useCallback(async () => {
//     setError('');
//     setSaving(true);
//     const  session  = useSession(); //
//     setSession(session);
//     try {
//       const response = await fetch('/api/users', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username: user.username,
//           bio: data.bio,  // Assuming 'bio' is part of the data object
//         }),
//       });
//       if (!response) {
//         console.log("RESOLVE_RES ?", response);
//         setSuccess('NO_res saving profile.');
//       }
//       if (response.ok) {
//         console.log("RESOLVE OK?")
//         const bioMdx = await response.json();
//         setData((prevData) => ({
//           ...prevData,
//           bioMdx,
//         }));
//         // Replace with the user URL after saving
//         redirect(`/${user.username}`);
//       } else if (response.status === 401) {
//         console.log('Not authorized to edit this profile.');
//         setError('Not authorized to edit this profile.');
//       } 
//       else if(response.status === 200) {
//         setSuccess('200 Sucess saving profile.');
//       }
      
//       else {
//           setSuccess('FAKE SUCCESS saving profile.');
//         // setError('Error saving profile.');
      
//       }
//     } catch (error) {
//       console.error("ERROR SAVE PROFILE", error);
//       setError('Success-Error saving profile.');
//     }
    
//     setSaving(false);
//   }, [data, user?.username]);

//   useEffect(() => {
//     const onKeyDown = async (e: KeyboardEvent) => {
//       if (e.key === 'Escape') {
//         handleDismiss();
//       } else if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
//         await handleSave();
//       }
//     };
//     document.addEventListener('keydown', onKeyDown);
//     return () => document.removeEventListener('keydown', onKeyDown);
//   }, [handleDismiss, handleSave]);

//   if (!isMounted) {
//     return null; // Ensure consistent hook usage
//   }

//   return (
//     <div className="min-h-screen pb-20">
//      <Profile
//        success={success}
//         setSucces={setSuccess}
//         user={user} 
//         data={data} 
//         setData={setData} 
//         setError={setError} 
//         setSaving={setSaving} 
//         error={error} 
//         saving={saving} 
//         settings={settings} 
//         session={session}
//         sessionUserName={userProfile?.first_name} 
//         profileWidth={profileWidth}
//       />
//     </div>
//   );
// }

"use client";

import { useEffect, useState, useCallback } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { usePathname, useSearchParams, redirect } from 'next/navigation';
import Profile from './Profile';

import type { SupabaseAuthUser } from '@/lib/Types';

export const profileWidth = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';


interface ProfileIndexProps {
  user: any;                      // You can replace `any` with a more specific type if available
  userProfile: any;                // Replace with the actual type for userProfile if known
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // Type for event handler
  session: any;                    // Replace with the actual session type
  userMeta: any;                   // Replace with the actual metadata type
  handleSave: () => void;          // Type for a function with no parameters and no return value
}
export default function ProfileIndex({ user, userProfile, handleChange, session, userMeta,  handleSave}: ProfileIndexProps)  {
  console.log("USER_PROFILE_INDEX_PROFILE", userProfile, "USER-PROFILE_INDEX_USER",  user, "USER-PROFILE_INDEX_SESSION", session, );

  const [ userSession, setUserSession ] = useState(session); // Use Supabase session
  const [isMounted, setIsMounted] = useState(false);
  const [saving, setSaving] = useState(false);

  const sessionUserName = user?.name || '';  // Assuming user has a name field

  const [data, setData] = useState({
    username: user?.username || 'Pick a username',
    image: user?.image,
    bio: user?.bio || '',
    bioMdx: user?.bioMdx,
    ...userMeta
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log("USER_Profile_IN", userProfile)

  useEffect(() => {
    setIsMounted(true);
    if (session) {setUserSession(session)}
    console.log("SESSION", session); // This will print the session once it is available
  }, [session]);

  // const handleSave = useCallback(async () => {
  //   setError('');
  //   setSaving(true);
  //   // Use Supabase session to get user data
  //   if (session) {
  //     try {
  //       const response = await fetch('/api/users', {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           username: user.username,
  //           bio: data.bio,
  //         }),
  //       });

  //       if (response.ok) {
  //         const bioMdx = await response.json();
  //         setData((prevData) => ({
  //           ...prevData,
  //           bioMdx,
  //         }));
  //         redirect(`/${user.username}`);
  //       } else {
  //         setError('Error saving profile.');
  //       }
  //     } catch (error) {
  //       console.error('Error saving profile:', error);
  //       setError('Error saving profile.');
  //     }
  //   }
  //   setSaving(false);
  // }, [data, session, user?.username]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen pb-20">
    <Profile
      userProfile={userProfile}            // Required
      handleChange={handleChange}          // Required
      handleSave={handleSave}              // Required
      user={user}                          // Required
      data={data}                          // Required
      setData={setData}                    // Required
      setError={setError}                  // Required
      setSaving={setSaving}                // Required
      error={error}                        // Required
      saving={saving}                      // Required
      settingsPage={false}                 // Optional
      settings={false}                     // Optional
      session={userSession}                // Optional
      profileWidth={profileWidth}          // Required

      // Newly added props based on type definition
      setSuccess={setSuccess}              // Missing in original code, Required
      success={success}                    // Missing in original code, Required
      sessionUserName={sessionUserName}    // Missing in original code, Required
      profile={userProfile}                // Missing in original code, Required (You can replace `userProfile` with the correct profile if it's different)
    />
  </div>
  );
}
