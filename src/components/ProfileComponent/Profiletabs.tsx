// import { auth } from "@/auth";
import FollowButton from "@/components/ProfileComponent/FollowButton";
import ProfileAvatar from "./ProfileAvatar";
import ProfileHeader from "./ProfileHeader";
import InstagramTabs from "./InstagramTabs";
import UserAvatar from "./UserAvatar";
import { Button} from "../button";
import buttonVariants  from "../ButtonComponent";
import type { SupabaseUserProfile } from "../../lib/Types";
// import { fetchProfile } from "@/lib/data";
import { MoreHorizontal, Settings} from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import { unstable_noStore } from "next/cache";
import {PopoverList} from "./PopoverList";
import Link from "next/link";
import { notFound } from "next/navigation";
// import  LoadingDots  from "@/components/ProfileComponent/";
import { useState } from "react";
import { signIn } from "next-auth/react";
import TaskForm from "./TaskForm";

// import TestSliderComponent from "@/components/mindConnect/Modals/TestSliderComponent"
type Props = {
   username: string;
   children: React.ReactNode;
   profile: SupabaseUserProfile; // Use the defined `UserProfile` type here
   session: {
     user: {
       id: string;
       name: string;
       email: string;
       image: string;
     };
   };
};

export async function generateMetadata(
  profile: SupabaseUserProfile,
  { username }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const userName = username;
  unstable_noStore()


  return {
    title: `${profile?.name} (@${profile?.username})`,
  };
}

 const ProfiletabsCustom=({ children, profile, session }: Props)=> {
  const [showTodoForm, setShowTodoForm] = useState(false);
//   const profile = await fetchProfile(username);
//   const session = await auth();
const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);
const [loading, setLoading] = useState(false);
  // const isCurrentUser = session?.user.id === profile?.id;
  const isCurrentUser =  profile?.id;
  console.log("IS_CURRENT_USER", isCurrentUser, "SESSION_ID", session, "USER_PROFILE", profile);
  //   the followerId here is the id of the user who is following the profile
  const isFollowing = (profile?.followedBy || []).some( (follower) => follower?.followerId === session?.user.id);

  console.log("IS_FOLLOWING", isFollowing);
  console.log("POFILE_TABS_CUSTOM", profile);
  if (!profile) {
    notFound();
  }
  const handleAddClick = () => {
    setShowTodoForm((prevState) => !prevState);
  };
const handlesetIsHeadlessModal = () => {
  setIsHeadlessOpen(!isHeadlessOpen)
  // alert("Modal is not yet implemented")
}
  console.log("showTodoForm", showTodoForm)
  return (
    <>
      {/* <ProfileHeader username={profile?.username} /> */}
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-x-5 md:gap-x-10 px-4">
          {/* <ProfileAvatar user={profile}>
            <UserAvatar
              user={profile}
              className="w-20 h-20 md:w-36 md:h-36 cursor-pointer"
            />
          </ProfileAvatar> */}

          <div className="md:px-10 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-3">
              
              {isCurrentUser ? (
                <>
                  {/* <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="md:order-last"
                  >
                    <Settings />
                  </Button>
                  <Link
                    href={`/dashboard/edit-profile`}
                    className={buttonVariants({
                      className: "!font-bold",
                      variant: "secondary",
                      size: "sm",
                    })}
                  >
                    Edit profile
                  </Link> */}
                  {/* <Button
                    variant={"secondary"}
                    className="font-bold"
                    size={"sm"}
                  >
                    View archive
                  </Button> */}
                  {/* <button 
                    type="button"
                    onClick={handleAddClick}
                    className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <span className='text-md font-bold '>+ </span> Add 
                  </button> */}
                  {/* <PopoverList /> */}
                  {/* <TestSliderComponent session={session}  navigationOpen={isHeadlessOpen} handlesetIsHeadlessModal={handlesetIsHeadlessModal} /> */}
                </>
              ) : (
                <>
                  {/* <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="md:order-last"
                  >
                    <MoreHorizontal />
                  </Button>
                  <FollowButton
                    isFollowing={isFollowing}
                    profileId={profile.id}
                  /> */}
                  <Button
                    variant={"secondary"}
                    className="font-bold"
                    size={"sm"}
                  >
                    Message
                  </Button>
                </>
              )}
            </div>

            <div className="flex items-center gap-x-7">
              <p className="font-medium">
                <strong>{profile.posts?.length || 0} posts</strong>
              </p>

              <Link
                href={`/dashboard/${profile?.username}/followers`}
                className="font-medium"
              >
                <strong>{profile.followedBy?.length || 0}</strong> followers 
             </Link>

              <Link
                href={`/dashboard/${profile?.username}/following`}
                className="font-medium"
              >
                <strong>{profile.following?.length || 6 }</strong> following
              </Link>
            </div>

             {/*   <div className="text-sm">
              <div className="font-bold">{profile?.name}</div>
            <p>{profile.bio}</p> 
            </div>*/}
          </div>
        </div>

        <InstagramTabs profile={profile} isCurrentUser={isCurrentUser} />
 {/* {CLIDREN} */}
 {/* {showTodoForm && <TaskForm userId={session?.user?.id} showTodoForm={showTodoForm} setShowTodoForm={setShowTodoForm}/>} */}
        {/* <div class="rounded-[16px] bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 w-11/12 sm:w-[581px] h-[160px] sm:h-[80px] p-0.5 absolute z-10 bottom-10 left-0 right-0 mx-auto">
          <div class="rounded-[14px] w-full h-full bg-[#111111] flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-3 sm:space-y-0 px-5">
            <p class="text-white text-[13px] font-mono w-[304px] h-[40px] flex items-center justify-center p-3">Get started by loggin in to Like Mind Connect. 
         
        <button    disabled={loading}  onClick={() => {
           setLoading(true);
           signIn('google', { callbackUrl: `/admin/users` });
         }}
         className={`${
          loading
            ? 'bg-gray-200 border-gray-300'
            : 'bg-black hover:bg-white border-black'
        } w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all`}
      >Dismiss →</button></p>
      <a class="text-white text-[13px] font-mono bg-black border border-[#333333] hover:border-white transition-all rounded-md w-[220px] h-[40px] flex items-center justify-center whitespace-nowrap"
       target="_blank" rel="noreferrer">
                  {loading ? <LoadingDots color="gray" /> : 'Log in with Google'}
                  </a></div>
        </div> */}
      </div>
    </>
  );
}

export default ProfiletabsCustom;
