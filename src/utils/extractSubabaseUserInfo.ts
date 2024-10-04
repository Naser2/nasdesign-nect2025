// utils/extractUserInfo.ts

import { User } from '@supabase/supabase-js';

interface UserInfo {
  userId: string;
  email: string | null;
  name: string;
  username?: string;
  gender?: string;
  phone?: string;
  image?: string | null;
  emailVerified: boolean;
  role: string;
  // Include other properties as needed
}

export function extractSubabaseUserInfo(
  user: User | null
): UserInfo | null {
  if (!user) {
    return null;
  }

  const userId = user.id;
  const email = user.email ?? null; // Use null if email is undefined
  const role = user.app_metadata?.role || 'unauthenticated';

  const userMetadata = user.user_metadata || {};

  // Extract fields from user metadata or provide defaults
  const name = userMetadata.first_name || userMetadata.name || email || '';
  const username = userMetadata.username || '';
  const gender = userMetadata.gender || '';
  const phone = userMetadata.phone || '';
  const image = userMetadata.image ?? null; // Use null if image is undefined

  const emailVerified = user.email_confirmed_at !== null;

  return {
    userId,
    email,
    name,
    username,
    gender,
    phone,
    image,
    emailVerified,
    role,
    // Include other properties as needed
  };
}
