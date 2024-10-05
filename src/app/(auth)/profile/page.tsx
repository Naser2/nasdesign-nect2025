'use client';
import { useAppContext } from '../../context';
import ButtonComponent from '@/components/ButtonComponent';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { useHelpers } from '@/hooks/useHelpers';
import clientSupabase from '@/lib/supabase/client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useSession } from '@supabase/auth-helpers-react'


import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import ProfileComponent from '@/components/ProfileComponent'



// const supabase = createClient()

//   const { data, error } = await supabase.auth.getUser()
//   if (error || !data?.user) {
//     redirect('/login')
//   }

export default  function PrivatePage() {
  const { user, setUser } = useAppContext();
  const { loading, setLoading } = useHelpers();
  const [userSession, setUserSession] = useState()
  const [profile, setProfile] = useState<any>(null);

  const session = useSession();

  console.log("USER_SESSION: ", session)
  const [userData, setUserData] = useState({
    display_name: "",
    username: "",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (session?.user?.id) {

        const { data, error } = await clientSupabase
          .from("user_profiles")
          .select("*")
          .eq("user_id", session.user.id)
          .single();

        if (data) {
          setUserData(data);
        } else if (error) {
          toast.error("Failed to fetch user profile.");
        }
      }
    };

    fetchUserProfile();
  }, [session]);

  const [data, setData] = useState<any>({
    display_name: "",
    username: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setData({
      display_name: "",
      username: ""
    })
  }, [])

  useEffect(() => {
    if (user) {
      console.log("USER-Profile-IN PROFILE", user)
      const { user_metadata } = user;
      setData(user_metadata)
      setUser(user)
    }
  
  }, [user]);

  return ( <ProfileComponent user={user} handleChange={handleChange}/>)

}


export const saveUser = async ({ metadata, setLoading, setUser }: any) => {
  try {
    if (setLoading) setLoading(true);
    const { data, error } = await clientSupabase
      .auth
      .updateUser({
        data: {
          ...metadata
        }
      })
      
     if (data) {
      if (setUser) {
        const { user } = data;
        setUser(user);
      }
      if(data.user){
           
         const { error: profileError } = await clientSupabase
        .from("users_profile")
        .update({
          display_name: metadata.display_name,
          username: metadata.username,
          email_notifications: metadata.email_notifications,
        })
        .eq("user_id", data.user.id);

      if (profileError) {
        throw new Error(profileError.message);
      }
      }
     
      toast.success('Profile saved successfully!')
      return data;
    }

    
  } catch (error: any) {
    toast.error('Sorry, something wrong happened. Please try again.')
    throw new Error(error);
  } finally {
    if (setLoading) setLoading(false);
  }
};