
import type { UserProps } from '@/api/apiHelper';
import XIcon
 from '@/components/icons/x';

import  LoadingDots from '@/components/icons/loading-dots';
import UploadIcon from '@/components/icons/upload';
import CheckInCircleIcon from '@/components/icons/check-in-circle';

import Link from "next/link";
 import BlurImage from '@/components/blur-image';
import { getGradient } from '../../lib/gradients';

import { useState, useEffect } from 'react';

import { Button} from "../button";
import type { SupabaseUserProfile } from "../../lib/Types";
// import { MoreHorizontal, Settings} from "lucide-react";
// import TaskForm from './TaskForm';
// import {PopoverList} from "./PopoverList";

import UserNavPopup from '../UserNavPopup';

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CreateProjectModal from './CreateProjectModal';
import type { Metadata, ResolvingMetadata } from 'next';
import { unstable_noStore } from 'next/cache';
import { useEffectOnce } from 'react-use';
import InstagramTabs from './InstagramTabs';
import { CheckIcon } from '@radix-ui/react-icons';



export async function generateMetadata(
  profile: SupabaseUserProfile): Promise<Metadata> {
  unstable_noStore()


  return {
    title: `${profile?.first_name} (@${profile?.username})`,
  };
}


// interface SupabaseUserProfile {
//   id: string;
//   user_id: string;
//   username: string;
//   display_name: string;
//   first_name: string | null;
//   last_name: string | null;
//   bio: string | null;
//   email_notifications: boolean;
//   user_role: string;
//   created_at: string;
//   updated_at: string;
//   image: string | null;
//   website: string | null;
// }

export default function Profile({
  user,
  userProfile,
  handleChange,
  data,
  setData,
  setError,
  setSaving,
  error, 
  success,
  saving,
  settings,
  settingsPage,
  editProfile,
  editProfilePage, 
  sessionUserName,
  profileWidth,
  session,
  profile,
  handleSave,
  setSuccess
}: {
  user: UserProps;
  userProfile: SupabaseUserProfile;
  data: any;
  handleChange: (e: any) => void;
  setData: (data: any) => void;
  setError: (error: string) => void;
  setSuccess: (success: string) => void;
  setSaving: (saving: boolean) => void;
  error: string;
  saving: boolean;
  settings?: boolean;
  session?: {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
    };
  };
  sessionUserName: string;
  profileWidth: string;
  settingsPage?: boolean;
  editProfile?: boolean;
  editProfilePage?: boolean;
  handleSave: Function;
  success: string;
  profile: SupabaseUserProfile; // Type is updated here
}) {
  console.log("USER-PROFILES_USER", user, "USER-PROFILE_DATA", data ,"USER-PROFILES_SESSION", session, "USER-PROFILES_PROFILE", profile, "USER-PROFILES_SESSION_USER_NAME", sessionUserName);
  const [loading, setLoading] = useState(false);
  // const [userProfile, setUserProfile] = useState<SupabaseUserProfile | null>(null); // Ensure type safety
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showTodoForm, setShowTodoForm] = useState(false);
 const [showUserNav, setShowUserNav] = useState(true);
  // Set the profile if it's available
  // useEffect(() => {
  //   if (profile) {
  //     setUserProfile(profile); // This is now typed correctly
  //   }
  // }, [profile]);

  // const handleAddClick = () => {
  //   setShowTodoForm((prevState) => !prevState);
  // };
  const handleAddClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setShowTodoForm((prevState) => !prevState);
  };
  const isCurrentUser = userProfile?.user_id == session?.user?.id && String(userProfile.user_id) === String(session.user.id);

  console.log("USER-Profile-USER_ID", userProfile.user_id, "USER-Profile-SESSION.id", session?.user?.id);
  console.log("DYNAMIC_PROFILE_SESSION", isCurrentUser);


  return ( <div className="min-h-screen  mb-4 lg:mb-24">
            <div>
              <div className={`h-48 w-full lg:h-64  ${getGradient(user?.username)}`}/>
               <div className={`${profileWidth} -mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5`}>
                <div className="relative group h-24 w-24 rounded-full overflow-hidden sm:h-32 sm:w-32">
                  {isCurrentUser && userProfile.image  == null  &&  (
                    <button
                    className="not-visible hover:not-invisible absolute bg-gray-800 bg-opacity-10 hover:bg-opacity-70 w-full h-full z-10 transition-all flex items-center justify-center"
                      onClick={() =>
                        alert('Image upload has been disabled for dev purposes.')
                      }
                    >
                      <UploadIcon className="h-6 w-6 text-white" />
                    </button>
                  )}

                  { user?.image 
                      ? 
                    <BlurImage
                      src={user.image}
                      alt={user?.name}
                      width={300}
                      height={300}
                      /> 
                      :  
                    <DefaultAvatar/>
                    }
               
                  <div className="flex min-w-0 flex-1 items-center space-x-2">
                    <h1 className="text-2xl font-semibold darrk:text-white truncate">
                      {user?.username  && user.username  || user?.user_metadata?.first_name &&  user.user_metadata.first_name}
                    </h1>
                    {!user?.verified && (
                      <CheckInCircleIcon className="w-6 h-6 text-[#0070F3]" />
                    )}
                  </div>
                </div>
                <div className="mt-2 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div className="flex min-w-0 flex-1 items-center space-x-2">
                    <h1 className="text-2xl font-semibold darrk:text-white truncate">
                      {user?.username  && user.username  || user?.user_metadata?.first_name &&  user.user_metadata.first_name}
                    </h1>
                    {!user?.verified && (
                      <CheckInCircleIcon className="w-6 h-6 text-[#0070F3]" />
                    )}
                  </div>
                  {isCurrentUser && (
                  <>
                 <div className="inline-flex space-x-6">
                  <Button href='/archive'
                    variant={"secondary"}
                    className="max-[1100px]:hidden font-bold text-[#333] hover:!text-white hover:!bg-blue-500 rounded-md"
                   
                  >
                    See dashboard
                  </Button>
                  <CreateProjectModal />

                  <div className="flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                      
                      <a
                        href="https://github.com/vercel/mongodb-starter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center px-4 py-2 border border-gray-800 hover:border-white shadow-sm text-sm font-medium rounded-md text-white font-mono bg-black focus:outline-none focus:ring-0 transition-all"
                      >
                        {/* <GitHubIcon className="mr-3 h-5 w-5 text-white" /> */}
                        <span className="text-white flex">Mistery Box</span>
                      </a>

                    </div>
                    </div>
              
                  <UserNavPopup userProfile={userProfile}/>
                  {/* <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="md:order-last"
                  >
                    <Settings />
                  </Button> */}
                  {/* <Link
                    href={`/profile/edit-profile`}
                    className={buttonVariants({
                      className: "!font-bold",
                      variant: "secondary",
                      size: "sm",
                    })}
                  >
                    Edit profile
                  </Link> */}
                  
                  {/* <button 
                    type="button"
                    onClick={() =>handleAddClick}
                    className="inline-flex justify-center gap-x-1.5  border-1 border-black !bg-gray-200 
                    rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 
                    shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <span className='text-md font-bold '>+ </span> Create project 
                  </button> */}
                
                  {/* <PopoverList /> */}
                  </>)
              }
                {/* {user?.last_sign_in_at ? (
                  <div className="div">
                      <button
                        disabled={loading}
                        onClick={() => {
                          setLoading(true);
                          signIn('google', { callbackUrl: `/properties` });
                        }}
                        className={`${
                          loading
                            ? 'bg-gray-200 border-gray-300'
                            : 'bg-black hover:bg-white border-black'
                        } w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all`}
                      >
                        {loading ? <LoadingDots color="gray" /> : 'Log in with Google'}
                      </button> 
                 
                    <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                     <Link target="_blank" rel="noopener noreferrer" className="inline-flex justify-center px-4 py-2 border border-gray-800 hover:border-white shadow-sm text-sm font-medium rounded-md text-white font-mono bg-black focus:outline-none focus:ring-0 transition-all" href="https://github.com/vercel/mongodb-starter">
                      <GitHubIcon />
                      <span>LinkedIn Account</span>
                     </Link>
                      <Link
                        href={`https://github.com/${user?.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center px-4 py-2 border border-gray-800 hover:border-white shadow-sm text-sm font-medium rounded-md text-white font-mono bg-black focus:outline-none focus:ring-0 transition-all"
                      >
                        <GitHubIcon className="mr-3 h-5 w-5 text-white" />
                        <h3 className='text-white flex'>Instagram Account</h3>
                      </Link>
                    </div> </div>
                  ) : ( 
                    <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                      
                      <a
                        href="https://github.com/vercel/mongodb-starter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center px-4 py-2 border border-gray-800 hover:border-white shadow-sm text-sm font-medium rounded-md text-white font-mono bg-black focus:outline-none focus:ring-0 transition-all"
                      >
                        <GitHubIcon className="mr-3 h-5 w-5 text-white" />
                        <span className="text-white flex">Mistery Box</span>
                      </a>

                    </div>
                  )} */}
              </div>
            </div>
          </div>

         
          <InstagramTabs profile={profile} isCurrentUser={isCurrentUser} />
           {/* {showTodoForm && <TaskForm userId={session?.user?.id ?? user?._id} showTodoForm={showTodoForm} setShowTodoForm={setShowTodoForm}/>} */}
        {/* <ProfileTabs username={user.username} profile={user} session={session} /> */}
        {/* <Profiletabs username={user.username} profile={userProfile} session={session} />       */}
          {/* <TabsDemo /> */}
          {/* Tabs */}
          <div className="mt-6 sm:mt-2 2xl:mt-5">
            <div className="border-b border-gray-800">
              <div className={`${profileWidth} mt-10`}>
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.name}
                      disabled={tab.name !== 'Profile'}
                      className={`${
                        tab.name === 'Profile'
                          ? 'border-white text-white'
                          : 'border-transparent text-gray-400 cursor-not-allowed'
                      }
                        whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm font-mono`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div> 
            </div>
          </div>

          {/* Bio */}
          <div className={`${profileWidth} mt-16`}>
            <h2 className="font-semibold font-mono text-2xl text-white">Bio</h2>
            <article className="mt-3 max-w-2xl text-sm tracking-wider leading-6 text-white font-mono prose prose-headings:text-white prose-a:text-white">
                {/* <MDXRemote {...data.bioMdx} /> */}
              {data?.bio} 
              </article>
            {!settingsPage ? (
              <>
                {/* <TextareaAutosize
                  name="description"
                  onInput={(e) => {
                    setData({
                      ...data,
                      bio: (e.target as HTMLTextAreaElement).value
                    });
                  }}
                  className="mt-1 w-full max-w-2xl px-0 text-sm tracking-wider leading-6 text-white bg-black font-mono border-0 border-b border-gray-800 focus:border-white resize-none focus:outline-none focus:ring-0"
                  placeholder="Enter a short bio about yourself... (Markdown supported)"
                  value={data?.bio ? data?.bio :  "Update your bio"}
                /> */}
                <div className="flex justify-end w-full max-w-2xl">
                  <p className="text-gray-400 font-mono text-sm">
                    {data?.bio?.length}/256
                  </p>
                </div>
              </>
            ) : (
              <article className="mt-3 max-w-2xl text-sm tracking-wider leading-6 text-white font-mono prose prose-headings:text-white prose-a:text-white">
            
              {data?.bio} 
              </article>
            )}
          </div>

          {/* Edit buttons */}
          {settingsPage ? (
            <div className="fixed bottom-10 right-10 flex items-center space-x-3">
              <p className="text-sm text-gray-500">{error && error }</p>
              <p className="text-sm !text-white">{ success && success}</p>
              <button
                className={`${
                  saving ? 'cursor-not-allowed' : ''
                } rounded-full border border-[#0070F3] hover:border-2 w-12 h-12 flex justify-center items-center transition-all`}
                disabled={saving}
                 onClick={handleSave}
              >
                {saving ? (
                  <LoadingDots color="white" />
                ) : (
                  <CheckIcon className="h-4 w-4 text-white" />
                )}
              </button>
              <a href={`/${user.username}`}
              //  shallow replace 
              //  scroll={false}
               >
                <div className="rounded-full border border-gray-800 hover:border-white w-12 h-12 flex justify-center items-center transition-all">
                  <XIcon className="h-4 w-4 text-white" />
                </div>
              </a>
            </div>
            //  ) : user.username === session?.user?.username ?  (
          ) : user.username  ?  (
            <a href='/settings'
              // href={{ query: { settings: settings } }}
              // as="/settings"
              // shallow
              // replace
              // scroll={false}
            >
              <div className="rounded-full border border-gray-800 hover:border-white w-12 h-12 flex justify-center items-center transition-all">
              Edit  {/* <EditIcon className="h-4 w-4 text-white" /> */}
              </div>
            </a>
        ) : null}
      </div>
  );
}
const tabs = [
  { name: 'Profile' },
  { name: 'Work History' },
  { name: 'Contact' }
];





export function SelectProjectType() {
  const projectTypes = [
    { label: "E-commerce Website", value: "ecommerce" },
    { label: "Social Media App", value: "socialMedia" },
    { label: "Blog Website", value: "blog" },
    { label: "Portfolio Website", value: "portfolio" },
    { label: "Booking App", value: "booking" },
    { label: "Fitness App", value: "fitness" },
    { label: "Real Estate Platform", value: "realEstate" },
    { label: "Streaming Service", value: "streaming" },
    { label: "Educational Platform", value: "education" }
  ];

  return (
    <Select>
      <SelectTrigger className="min-w-[180px] max-w-[200px]">
        <SelectValue placeholder="Select a project type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Project Types</SelectLabel>
          {projectTypes.map((type) => (
            <SelectItem key={type.value} value={type.value} className='data-[focus]:bg-indigo-600 data-[focus]:text-white'>
              {type.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}






export const DefaultAvatar = ()=> {
  return (   <BlurImage
    src={'/67038775.png'}
    alt={'Default Avatar'}
    width={300}
    height={300}
  /> 
  
  )
}