'use client'

import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import NotificationIcon from '@/components/icons//NotificationIcon';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'
import LoadingDots from '@/components/icons/loading-dots'

// import { useRouter } from 'next/navigation'
import { useAppContext } from '../app/context'
// import { NavigationLeft } from './navigationMenu/navigation'
import { MessageCircle } from 'lucide-react'
import  NavbarUserAvatarComponent  from '@/components/NavbarUserAvatarComponent'

import { usePathname } from "next/navigation";
import clsx from 'clsx';


  

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, count: '5', current: false },
  { name: 'Home', href: '/profile', icon: UsersIcon, current: false },
  { name: 'Projects', href: '/dashboard/projects', icon: FolderIcon, count: '12', current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Home', href: '/profile', icon: ChartPieIcon, current: false },
  { name: 'Blogs', href: '/blogs', current: false,icon: ChartPieIcon, current: false  },
  // { name: 'Community Leads', href: '/community-leads', current: false },
  // { name: 'Vitual Tours', href: '/virtual-tours', current: false },
  // { name: 'Contact', href: '/contact', current: false },

  // { name: 'Terms', href: '/terms', current: false },

]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Messages', href: '/messages' },
  { name: 'Settings', href: '/settings' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Sign out', href: '#' },
]

const localuser = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
export default function Navbar({}) {
  // const [isScrollingUp, setIsScrollingUp] = useState(false);
  // const [isTop, setIsTop] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // const [isSocialVisible, setIsSocialVisible] = useState(true);
  // const [open, setIsNavOpen] = useState(false); // New state for managing the nav checkbox


  const { user, profile, openMobileNav, setOpenMobileNav, handleLinkClick, navRef } = useAppContext();
  const userProfile = profile
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

 
  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      // setIsScrollingUp(st < lastScrollTop);
      setLastScrollTop(st);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  if (loading) return <LoadingDots />; // Show loading spinner while loading

  const pathname = usePathname()

  // flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600  z-50 pt-2 max-w-[600px]:!min-h-[60vh] lg:bg-[white] dark:bg-black


  //  const baseStyle = 'h-[4.1em] sm:h-[4em] lg:!h-[8em] z-50 mt-0 !z-50';
  // const applyStyle = '!sticky bg-black !top-0 !z-30 !inset-x-0 lg:h-[5em] lg:pl-[1em] lg:pt-[0%] z-50';

  console.log("NAVIGATION STARTS HERE", userProfile, "USER", user)
  return (
    <Disclosure as="nav"  className={clsx(`${pathname === '/tasks' ? "!hidden" : "flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600  z-50 pt-2 max-w-[600px]:!min-h-[60vh] lg:bg-[white] dark:bg-black"}`)}>
    {/* // className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 
    // z-50 pt-2 max-w-[600px]:!min-h-[60vh] lg:bg-[white] dark:bg-black "> */}
      <div className="max-w-screen px-4 sm:px-6 lg:px-8 xl:px-12 ">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 mainText hover:bg-pink-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {/* <Bars3Icon aria-hidden="true" className={`block h-6 w-6 group-data-[${open}]:hidden`} />
                <XMarkIcon aria-hidden="true" className={`hidden h-6 w-6 group-data-[${open}]:block`} /> */}
                <Bars3Icon aria-hidden="true" className={`block h-6 w-6 group-data-[open]:hidden`} />
                <XMarkIcon aria-hidden="true" className={`hidden h-6 w-6 group-data-[open]:block`} />
              </DisclosureButton>
            </div>
            <Link href="/" className="flex flex-shrink-0 items-center  min-w-44 py-6">
              {/* <img
                alt="Proxy Logo"
                src="/logo.png"
                className="h-8 w-auto"
              /> */}
            </Link>
            <div className="hidden z-50 md:ml-6 md:flex md:items-center md:space-x-4">
             {/* <NavigationLeft /> */}
              {/* {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-100 text-[#da1f88]' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  )}
                >
                  {item.name}
                </a>
              ))} */}
            </div>
            
          </div>
          <div className="flex flex-end  items-center">
           {/* { userProfile && <div className="flex-shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-black hover:bg-sky-500 px-3 py-2 text-sm 
                font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500
                hover:!text-white hover:!bg-blue-500 rounded-md max-lg:rounded-[0px]"
              >
                <PlusIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
                  New Project
              </button>
            </div>
            } */}
      
           <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
            <Menu as="div" className="relative mx-12 justify-center content-center flex">
              <MenuButton>
              <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:rea:"
                  data-state="closed"
                  aria-label="681 unseen notifications"
                  className="bell_btn__yil2q bell_shadow__1T7KD " 
                  data-testid="notifications/bell"
                >
                 <div className="relative z-0 flex flex-1 items-center justify-center px-2  sm:inset-0">
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative mx-auto">
                      <div className="pointer-events-auto lg:w-[2rem] flex items-center pl-3">
                        <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                      </div>
                      
                    </div>
                  </div>
                </div>
                </button>
            </MenuButton>
            </Menu>  
              <button type="button"
                // className="relative rounded-full bg-gray-100 p-1 text-gray-600  hover:text-pink-800 hover:text-black focus:outline-black focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-pink-800"
              >
                {/* <span className="absolute -inset-1.5" /> */}
                <span className="sr-only">View notifications</span>
                <NotificationIcon/>
                {/* <BellIcon aria-hidden="true" className="h-6 w-6" /> */}
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div className=''>
           
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <button
                          type="button"
                          className="inline-flex z-50 items-center justify-center rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-0"
                          onClick={() => setSidebarOpen(true)}>
                          <span className="sr-only">Open sidebar</span>
                        {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                        </button>
                      
                   {  user ?
                     <button
                        disabled={loading}
                        onClick={() => {
                          setLoading(true);
                          signOut()
                        }}
                        className={`${
                          loading
                            ? 'bg-gray-200/20 border-gray-300'
                            : 'bg-white !text-black  border-black hover:bg-[var(--secondary-color)] hover:!text-white hover:border-pink-400'
                        } w-36  h-8 lg:h-[3em] py-1 text-white border rounded-full text-sm transition-all`}
                      >
                        {loading ? <LoadingDots color="gray" /> : 'Logout'}
                      </button>
                       :
                      <button
                        disabled={loading}
                        onClick={() => {
                          setLoading(true);
                          signIn("Google", {redirect: "/properties"})
                        }}
                        className={`${
                          loading
                            ? 'bg-gray-200 border-gray-300'
                            : 'bg-black hover:bg-white border-black'
                        } w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all`}
                      >
                        {loading ? <LoadingDots color="gray" /> : 'Login'}
                      </button>
                    }
                </MenuButton>  
         

                </div>
      
     
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden p-4 mt-6 z-50">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 max-w-[24em]">
        <ul role="list" className="flex flex-1 flex-col gap-y-4">
        {navigation.map((item) => (
                 <DisclosureButton key={item.name} className="block">
                  <Link
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                        'h-6 w-6 shrink-0',
                      )}
                    />
                    {item.name}
                    {item.count ? (
                      <span
                        aria-hidden="true"
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </Link>
                </DisclosureButton>
              ))}
              </ul>

        </div>
        <hr class="text-gray-400"/>
        <div className="border-t border-gray-700 pb-3 pt-4 mt-4">
          <NavbarUserAvatarComponent userProfile={userProfile}/>
          {/* <div className="flex items-center px-5 sm:px-6">
            <div className="flex-shrink-0">
            { userProfile !== null && userProfile?.image ?  <img alt="" src={userProfile.image} className="h-10 w-10 rounded-full" /> :
            <div className='inline-flex gap-x-4'><img alt="proxy-admin-avatar" src={'/assets/ryan_user_profile.png'} className="h-16 w-16 rounded-full" />
            <h1>{userProfile.user.identities[0]?.identity_data.last_name}</h1>
            </div> }
            </div>
            <div className="ml-3">
             {userProfile !== null &&  userProfile?.username ? <div className="text-lg font-medium text-white">{userProfile?.first_name}</div> : <><div className="text-lg font-medium text-white">{userProfile?.name}</div>
              <div className="text-sm font-medium text-gray-400">{userProfile?.last_name}</div>
             </>}
            </div>
            <button
              type="button"
              className="relative ml-auto flex-shrink-0 rounded-full p-1 mainText hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
           <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            <button  type="button"
                className="relative rounded-full bg-gray-100 p-1 text-gray-600  hover:text-pink-800 hover:text-black focus:outline-black focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-pink-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
              
              </button>
          </div> */}
         {userProfile !== null &&  <div className="mt-3 space-y-1 px-2 sm:px-3">
            {userNavigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                href={item.href}
                className="block rounded-md px-3 py-2 text-lg font-medium text-white/70 hover:bg-gray-700 hover:text-white"
              >
                {item.name !== "Messages" ? item.name  
                : <div className="inline-flex gap-x-4">{item.name} <MessageCircle aria-hidden="true" className="h-6 w-6" />  </div> }
              </DisclosureButton>
            ))}
          </div>}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}


export  function SiteNavigation() {

  return (
    // <div className={clsx(`${pathname === '/tasks' ? "!hidden" : "sidenav-with-history-container.expanded[_ngcontent-ng-c1631036836] flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 dark:bg-black  px-6 max-w[300px]"}`)}>
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 dark:bg-black  px-6 max-w[300px]">
      <div className="flex h-16 shrink-0 items-center">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
          className="h-8 w-auto"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                        'h-6 w-6 shrink-0',
                      )}
                    />
                    {item.name}
                    {item.count ? (
                      <span
                        aria-hidden="true"
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {teams.map((team) => (
                <li key={team.name}>
                  <a
                    href={team.href}
                    className={classNames(
                      team.current
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    )}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                      {team.initial}
                    </span>
                    <span className="truncate">{team.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
            >
              <img
                alt=""
                src={userProfile.avatar_rul ?? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                className="h-8 w-8 rounded-full bg-indigo-700"
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
