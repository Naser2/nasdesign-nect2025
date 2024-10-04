// import { useRouter } from 'next/router';
// import { useCallback, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useCallback, useEffect } from 'react';
import type { UserProps } from '@/api/apiHelper';
import {
CheckInCircleIcon,
CheckIcon,
EditIcon,
GitHubIcon,
LoadingDots,
UploadIcon,
XIcon
} from '@/components/icons';
// import TextareaAutosize from 'react-textarea-autosize';
import Link from "next/link";
 import BlurImage from '@/components/blur-image';
import { getGradient } from '../../lib/gradients';
// import { MDXRemote } from 'next-mdx-remote';
import Profiletabs from './Profiletabs';
import {TabsDemo }from '../tabs/tabs';
// import ProfileTabs from '../tabs/ProfileTabs';
import { extractSubabaseUserInfo } from '@/utils/extractSubabaseUserInfo';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function Profile({
  user,
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
  
  handleSave,

  setSuccess
}: {
  user: UserProps;
  data: any;
  setData: (data: any) => void;
  setError: (error: string) => void;
  setSuccess: (success: string) => void;
  setSaving: (saving: boolean) => void;
  error: string;
  saving: boolean;
  settings?: boolean;
  session?:object;
  sessionUserName: string;
  profileWidth: string;
  settingsPage?: boolean;
  editProfile?: boolean;
  editProfilePage?: boolean;
  handleSave: Function;
  success: string;
  
}) {
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);


  // DATABASE DATA {
  //   user: {
  //     id: '7c7e26cc-7735-41ac-b82a-606df0c46101',
  //     aud: 'authenticated',
  //     role: 'authenticated',
  //     email: 'nassersanou23@gmail.com',
  //     email_confirmed_at: '2024-10-02T17:49:00.497704Z',
  //     phone: '',
  //     confirmation_sent_at: '2024-10-02T17:47:31.431684Z',
  //     confirmed_at: '2024-10-02T17:49:00.497704Z',
  //     last_sign_in_at: '2024-10-02T20:55:51.244757Z',
  //     app_metadata: { provider: 'email', providers: [Array] },
  //     user_metadata: {
  //       email: 'nassersanou23@gmail.com',
  //       email_verified: false,
  //       first_name: 'Nasser ',
  //       last_name: 'Sanou',
  //       phone: '1646575-3555',
  //       phone_verified: false,
  //       sub: '7c7e26cc-7735-41ac-b82a-606df0c46101'
  //     },
  //     identities: [ [Object] ],
  //     created_at: '2024-10-02T17:47:31.392599Z',
  //     updated_at: '2024-10-02T20:55:51.248391Z',
  //     is_anonymous: false
  //   }
  // }
  console.log("USER-Profile-IN Dynamic", user)
  console.log(CheckInCircleIcon, GitHubIcon, LoadingDots, UploadIcon);
  console.log("DYNAMIC_PROFILE_SESSION", session)
  const userattr = extractSubabaseUserInfo(user);
  // console.log("DYNAMIC_PROFILE_SESSION", user?.username === session?.user?.username)
  return ( <div className="min-h-screen pb-20">
           <div>
            <div className={`h-48 w-full lg:h-64  ${getGradient(user.username)}`}
              />
            <div className={`${profileWidth} -mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5`}>
              <div className="relative group h-24 w-24 rounded-full overflow-hidden sm:h-32 sm:w-32">
                {settingsPage && (
                  <button
                    className="absolute bg-gray-800 bg-opacity-50 hover:bg-opacity-70 w-full h-full z-10 transition-all flex items-center justify-center"
                    onClick={() =>
                      alert('Image upload has been disabled for demo purposes.')
                    }
                  >
                    <UploadIcon className="h-6 w-6 text-white" />
                  </button>
                )}
                <BlurImage
                  src={user?.image ||'https://lh3.googleusercontent.com/a/ACg8ocK8u7goFLEyN64th7_pVzvLB9S_oc2nUizijmSc_6voqn0ryxUw=s96-c'}
                  alt={user?.name}
                  width={300}
                  height={300}
                />
              </div>
              <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="flex min-w-0 flex-1 items-center space-x-2 mt-1">
                  <h1 className="text-2xl font-semibold darrk:text-white truncate">
                    {user?.username  && user.username  || user.user_metadata?.first_name &&  user.user_metadata.first_name}
                  </h1>
                  {user?.verified && (
                    <CheckInCircleIcon className="w-6 h-6 text-[#0070F3]" />
                  )}
                </div>
                {user?.last_sign_in_at ? (
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
                      {/* <GitHubIcon /> */}
                      <span>LinkedIn Account</span>
                     </Link>
                      <Link
                        href={`https://github.com/${user?.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center px-4 py-2 border border-gray-800 hover:border-white shadow-sm text-sm font-medium rounded-md text-white font-mono bg-black focus:outline-none focus:ring-0 transition-all"
                      >
                        {/* <GitHubIcon className="mr-3 h-5 w-5 text-white" /> */}
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
                        {/* <GitHubIcon className="mr-3 h-5 w-5 text-white" /> */}
                        <span className="text-white flex">Mistery Box</span>
                      </a>

                    </div>
                  )}
              </div>
            </div>
          </div>
        {/* <ProfileTabs username={user.username} profile={user} session={session} /> */}
        <Profiletabs username={user.username} profile={user} session={session} />      
          <TabsDemo />
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
            {settingsPage ? (
              <>
                <TextareaAutosize
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
                />
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
              <a href={`/${user.username}`} shallow replace scroll={false}>
                <div className="rounded-full border border-gray-800 hover:border-white w-12 h-12 flex justify-center items-center transition-all">
                  <XIcon className="h-4 w-4 text-white" />
                </div>
              </a>
            </div>
            //  ) : user.username === session?.user?.username ?  (
          ) : user.username  ?  (
            <a
              href={{ query: { settings: true } }}
              as="/settings"
              shallow
              replace
              scroll={false}
            >
              <div className="rounded-full border border-gray-800 hover:border-white w-12 h-12 flex justify-center items-center transition-all">
                <EditIcon className="h-4 w-4 text-white" />
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
