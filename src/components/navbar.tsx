'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { Link } from './link';
import { Logo } from './logo';
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid';
import { useSession } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import LogoutButton from '@/components/auth/logout/Logout'; // New LogoutButton component
import { usePathname } from 'next/navigation';


const links = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/company', label: 'Company' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/login', label: 'Login' },
];

const authedLinks = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/company', label: 'Company' },
  { href: '/blog', label: 'Blog' },
  { href: '/profile', label: 'Profile' },
];

function DesktopNav() {
  const session = useSession(); // Use session directly
  const isAuthenticated = session?.user !== null;
  console.log("SESSION IN NAVE", session)

  return (
    <nav className="relative hidden lg:flex">
      {isAuthenticated
        ? authedLinks.map(({ href, label }) => (
            <PlusGridItem key={href} className="relative flex">
              <Link
                href={href}
                className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-[hover]:bg-black/[2.5%]"
              >
                {label}
              </Link>
            </PlusGridItem>
          ))
        : links.map(({ href, label }) => (
            <PlusGridItem key={href} className="relative flex">
              <Link
                href={href}
                className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-[hover]:bg-black/[2.5%]"
              >
                {label}
              </Link>
            </PlusGridItem>
          ))}
      {isAuthenticated && (
        <LogoutButton />
        // <button className="ml-4 px-4 py-3" onClick={LogoutButton}>Logout</button> // Use new LogoutButton
      )}
    </nav>
  );
}

function MobileNav() {
  const session = useSession(); // Use session directly
  const isAuthenticated = session?.user !== null;
  const pathname = usePathname(); // Get the current pathname to apply 'selected' class

  const PROFILE_OPTIONS = [
    {
      title: "Profile",
      route: "/profile"
    },
    {
      title: "General",
      route: "/profile/general"
    },
    {
      title: "Invoices",
      route: "/profile/invoices"
    },
    {
      title: "Notifications",
      route: "/profile/notifications"
    },
    {
      title: "Edit Profile",
      route: "/profile/edit-profile"
    },
    
    {
      title: "Settings",
      route: "/profile/settings"
    },
    {
      title: "Appearance",
      route: "/profile/appearance"
    },
  ];
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {/* Use PROFILE_OPTIONS for authenticated users */}
        {isAuthenticated && pathname.startsWith('/profile')
          ? PROFILE_OPTIONS.map(({ route, title }, linkIndex) => (
              <motion.div
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{
                  duration: 0.15,
                  ease: 'easeInOut',
                  rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
                }}
                key={route}
              >
                <Link
                  href={route}
                  className={`text-base font-medium text-gray-950 item ${
                    pathname === route ? 'selected' : ''
                  }`}
                >
                  {title}
                </Link>
              </motion.div>
            ))
            :isAuthenticated 
            ? authedLinks.map(({ href, label }, linkIndex) => (
                <motion.div
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.15,
                    ease: 'easeInOut',
                    rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
                  }}
                  key={label}
                >
                  <Link
                    href={href}
                    className={`text-base font-medium text-gray-950 item ${
                      pathname === href ? 'selected' : ''
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))
          : // Show regular links for unauthenticated users
            links.map(({ href, label }, linkIndex) => (
              <motion.div
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{
                  duration: 0.15,
                  ease: 'easeInOut',
                  rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
                }}
                key={href}
              >
                <Link
                  href={href}
                  className={`text-base font-medium text-gray-950 item ${
                    pathname === href ? 'selected' : ''
                  }`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
        {/* Show logout button if authenticated */}
        {isAuthenticated && <LogoutButton />}
      </div>

      {/* Bottom border design */}
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  );
}

export default MobileNav;
// function MobileNav() {
 
//   const session = useSession(); // Use session directly
//   const isAuthenticated = session?.user !== null

//   return (
//     <DisclosurePanel className="lg:hidden">
//       <div className="flex flex-col gap-6 py-4">
//      { isAuthenticated ? authedLinks.map(({ href, label }, linkIndex) =>  (
//           <motion.div
//           initial={{ opacity: 0, rotateX: -90 }}
//           animate={{ opacity: 1, rotateX: 0 }}
//           transition={{
//             duration: 0.15,
//             ease: 'easeInOut',
//             rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
//           }}
//           key={href}
//         >
//           <Link href={href} className="text-base font-medium text-gray-950">
//             {label}
//           </Link>
//         </motion.div>
//       )) : links.map(({ href, label }, linkIndex) => (
//             <motion.div
//             initial={{ opacity: 0, rotateX: -90 }}
//             animate={{ opacity: 1, rotateX: 0 }}
//             transition={{
//               duration: 0.15,
//               ease: 'easeInOut',
//               rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
//             }}
//             key={href}
//           >
//             <Link href={href} className="text-base font-medium text-gray-950">
//               {label}
//             </Link>
//           </motion.div>
              
//           ))}
//       {isAuthenticated && (
//         <LogoutButton />
       
//       )}
     
//       </div>
//       <div className="absolute left-1/2 w-screen -translate-x-1/2">
//         <div className="absolute inset-x-0 top-0 border-t border-black/5" />
//         <div className="absolute inset-x-0 top-2 border-t border-black/5" />
//       </div>
//     </DisclosurePanel>
//   )
// }
function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                <div className="inline-flex max-w-[10vw] bg-white rounded-full px-1.5 py-1 pr-2 ">
                  <Logo className="h-9" />
                  <motion.g
                    variants={{
                      idle: { scale: 1, opacity: 1 },
                      active: {
                        scale: [1, 1.1, 1],
                        opacity: [1, 0.75, 1],
                        transition: { duration: 0.5, ease: 'easeInOut', delay: 0.45 },
                      },
                    }}
                  >
                    <h3 className="-ml-[5.5em] mt-1.5 text-black font-bold">NasDesign</h3>
                  </motion.g>
                </div>
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  );
}


// 'use client'

// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from '@headlessui/react'
// import { Bars2Icon } from '@heroicons/react/24/solid'
// import { motion } from 'framer-motion'
// import { Link } from './link'
// import { Logo } from './logo'
// import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'
// // import CompanyLogo from './CompanyLogo'
// import { useAppContext } from '@/app/(auth)/context'
// import { useHelpers } from '@/hooks/useHelpers'
// import { useEffect, useState } from 'react'
// import { useSession } from '@supabase/auth-helpers-react'
// import clientSupabase from '@/lib/supabase/client';
// import Logout from './auth/logout/Logout'

// const links = [
//   { href: '/pricing', label: 'Pricing' },
//   { href: '/company', label: 'Company' },
//   { href: '/blog', label: 'Blog' },
//   { href: '/login', label: 'Login' },
// ]

// const authedLinks = [
//   { href: '/pricing', label: 'Pricing' },
//   { href: '/company', label: 'Company' },
//   { href: '/blog', label: 'Blog' },
//   { href: '/profile', label: 'Profile' },
//   { href: '/login', label: 'Logout' },
// ]

// function DesktopNav({user}) {
//   console.log("DESKTO_NAV", user);
//   return (
//     <nav className="relative hidden lg:flex">
//       {user !== null ?
//        authedLinks.map(({ href, label }) => (
//         label !== "Logout" ? <PlusGridItem key={href} className="relative flex">
//           <Link
//             href={href}
//             className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-[hover]:bg-black/[2.5%]"
//           >
//             {label}
//           </Link>
//         </PlusGridItem> : <button type="submit"  onClick={()=>Logout()}> Logout</button>
//        ))
//        : (links.map(({ href, label }) => (
//         <PlusGridItem key={href} className="relative flex">
//           <Link
//             href={href}
//             className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-[hover]:bg-black/[2.5%]"
//           >
//             {label}
//           </Link>
//         </PlusGridItem>
//       )))
//     }
//     </nav>
//   )
// }

// function MobileNavButton() {
//   return (
//     <DisclosureButton
//       className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
//       aria-label="Open main menu"
//     >
//       <Bars2Icon className="size-6" />
//     </DisclosureButton>
//   )
// }

// function MobileNav() {


//   return (
//     <DisclosurePanel className="lg:hidden">
//       <div className="flex flex-col gap-6 py-4">
//         {links.map(({ href, label }, linkIndex) => (
//           <motion.div
//             initial={{ opacity: 0, rotateX: -90 }}
//             animate={{ opacity: 1, rotateX: 0 }}
//             transition={{
//               duration: 0.15,
//               ease: 'easeInOut',
//               rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
//             }}
//             key={href}
//           >
//             <Link href={href} className="text-base font-medium text-gray-950">
//               {label}
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//       <div className="absolute left-1/2 w-screen -translate-x-1/2">
//         <div className="absolute inset-x-0 top-0 border-t border-black/5" />
//         <div className="absolute inset-x-0 top-2 border-t border-black/5" />
//       </div>
//     </DisclosurePanel>
//   )
// }

// export function Navbar({ banner }: { banner?: React.ReactNode }) {
//   let transition = {
//     duration: 0.5,
//     ease: 'easeInOut',
//   }

//  const { user, setUser } = useAppContext();
//   const { loading, setLoading } = useHelpers();
//   const [userSession, setUserSession] = useState()
//   const [profile, setProfile] = useState<any>(null);

//   const [userData, setUserData] = useState({
//     display_name: "",
//     username: "",
//   });

//   const session = useSession();
//   console.log("USER_SESSION: ", session)

//   useEffect(() => { 
//     const fetchUserProfile = async () => {
//       if (session?.user?.id) {

//         const { data, error } = await clientSupabase
//           .from("user_profiles")
//           .select("*")
//           .eq("user_id", session.user.id)
//           .single();

//         if (data) {
//           setUserData(data);
//         } else if (error) {
//           toast.error("Failed to fetch user profile.");
//         }
//       }
//     };

//     fetchUserProfile();
//   }, [session]);

//   const [data, setData] = useState<any>({
//     display_name: "",
//     username: ""
//   });
//   return (
//     <Disclosure as="header" className="pt-12 sm:pt-16">
//       <PlusGrid>
//         <PlusGridRow className="relative flex justify-between">
//           <div className="relative flex gap-6">
//             <PlusGridItem className="py-3">
//               <Link href="/" title="Home">
//                <div className="inline-flex max-w-[10vw] bg-white rounded-full px-1.5 py-1 pr-2 ">
//                  <Logo className="h-9" />
//                  <motion.g
//                      variants={{
//                       idle: { scale: 1, opacity: 1 },
//                       active: {
//                       scale: [1, 1.1, 1],
//                       opacity: [1, 0.75, 1],
//                       transition: {
//                         ...transition,
//                         delay: 0.45,
//                       },
//                     },
//                    }}><h3 className='-ml-[5.5em] mt-1.5 text-black font-bold'>NasDesign</h3>
//                      </motion.g>
//                   {/* <motion.g
//                      variants={{
//                       idle: { scale: 1, opacity: 1 },
//                       active: {
//                       scale: [1, 1.1, 1],
//                       opacity: [1, 0.75, 1],
//                       transition: {
//                         ...transition,
//                         delay: 0.45,
//                       },
//                     },
//                    }}><CompanyLogo color={"black"} />
//                      </motion.g> */}
//                {/* <h5 className='text-black'>NasDesign</h5> */}
//                </div>
//               </Link>
//             </PlusGridItem>
//             {banner && (
//               <div className="relative hidden items-center py-3 lg:flex">
//                 {banner}
//               </div>
//             )}
//           </div>
//           <DesktopNav user={user}/>
//           <MobileNavButton />
//         </PlusGridRow>
//       </PlusGrid>
//       <MobileNav />
//     </Disclosure>
//   )
// }
