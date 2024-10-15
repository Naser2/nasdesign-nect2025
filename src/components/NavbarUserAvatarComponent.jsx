import React from 'react';
import { BellIcon} from '@heroicons/react/24/outline'
import Link from 'next/link';
import NotificationIcon from '@/components/icons//NotificationIcon';


const NavbarUserAvatarComponent = ({ user }) => {
    if (!user) {
      return null; // Return null if userProfile is not provided
    }
  
    const { user_metadata } = user;
    // const identityData = identities[0]?.identity_data || {};
    const firstName = user_metadata.first_name || '';
    const lastName = user_metadata.last_name || '';
  
    return (
      <div className="flex items-center px-5 sm:px-6">
        <Link href="/profile" className="flex-shrink-0">
          {user_metadata.imageUrl ? (
            <img alt="User Avatar" src={user_metadata.imageUrl } className="h-10 w-10 rounded-full" />
          ) : (
            <img alt="Default Avatar" src={'/erica.jpeg'} className="h-16 w-16 rounded-full" />
          )}
        </Link>
        <div className="ml-3 pl-4">
          {firstName && lastName ? (
            <div className="text-lg font-medium text-white/70">{`${firstName}`}</div>
          ) : (
            <div className="text-lg font-medium text-white/70 ">User</div>
          )}
        </div>
        <div className='flex-end ml-[34vw]'>
         <Link href="/messages"
           type="button"
             className="relative ml-auto flex-shrink-0 rounded-full p-1 mainText hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <Link href="/profile/notifications">
            <NotificationIcon/>
              {/* <BellIcon aria-hidden="true" className="h-6 w-6 bell_btn__yil2q"/> */}
            </Link>

     
         </Link>

            {/* <button  type="button"className="bell_statusIcon__XjZwm relative rounded-full bg-gray-100 p-1 text-gray-600  
            hover:text-pink-800 hover:text-black focus:outline-black focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-pink-800"
            >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            
              </button> */}
        
            
         </div>  
      </div>
    );
  };
  
  export default NavbarUserAvatarComponent;




       
// components/NotificationIcon.js

;

