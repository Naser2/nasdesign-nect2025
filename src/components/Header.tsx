'use client';
import { useAppContext } from '../app/context';
import DarkMode from '@/components/DarkMode';
import {Logo}from '@/components/logo';
import UserItem from '@/components/UserItem';
import { useRouter } from 'next/navigation';
import { Link } from './link';
import ThemeButton from './ThemeButton';

export default function Header() {
  const { user } = useAppContext();
  const router = useRouter();
  return <header className="px-4 py-3 border-b dark:border-neutral-800 w-full flex items-center justify-between">
    <Link href="/" className="flex gap-6 items-center">
      <Logo  />
    </Link>
    <div className="flex gap-2 items-center">
      <ThemeButton />
      <UserItem {...{ user, onClick: () => router.push('/profile') }} />
    </div>
  </header>;
}