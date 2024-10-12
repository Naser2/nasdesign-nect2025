// Define the User type based on Supabase auth data
// Define the User type based on Supabase auth data
import type { UserMetadata } from '@supabase/supabase-js';

export type SupabaseAuthUser = {
    id: string;
    aud: string;
    role: string;
    email: string;
    email_confirmed_at: string | null;
    phone: string;
    confirmed_at: string | null;
    last_sign_in_at: string | null;
    app_metadata: {
      provider: string;
      providers: string[];
    };
    user_metadata: {
      email: string;
      email_verified: boolean;
      first_name: string;
      last_name: string;
      phone: string;
      phone_verified: boolean;
      sub: string;
    };
    identities: {
      id: string;
      provider: string;
      identity_data: any;
      created_at: string;
      updated_at: string;
    }[];
    created_at: string;
    updated_at: string;
    is_anonymous: boolean;
  };
  


export interface UserProps {
  id: string; // Supabase's user ID
  email: string;
  name: string;
  username: string;
  user_metadata: UserMetadata; // Supabase's metadata for the user
  image: string;
  bio: string;
  followers: number;
  verified: boolean;
  createdAt: string | null;
  updatedAt: string | null;
  posts: string[];
  savedPosts: string[];
  savedItems: {
    contentId: string;
    contentType: 'Blog' | 'Project' | 'EntrepreneurProject' | 'Post';
  }[];
  likes: string[];
  followedBy: string[];
  following: string[];
  accounts: string[];
  sessions: string[];
  messages: {
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: string;
  }[];
  tickets: {
    userId: string;
    projectId: string;
    status: 'open' | 'accepted' | 'resolved';
    requestDetails: string;
    responses: {
      adminId?: string;
      responseContent?: string;
      timestamp: string;
    }[];
  }[];
  bookmarks: string[];
  projectsStarted: string[];
  plans: string[];
  payments: string[];
  entrepreneurProjects: string[];
}

  // Define the UserProfile type based on the profile data
  export type SupabaseUserProfile = {
    user_name: string;
    // name: string;
    id: string;
    user_id: string;
    username: string | null;
    bio: string | null;
    website: string | null;
    gender: string | null;
    image: string | null;
    badges: string[] | null;
    saved_items: string[] | null;
    plan_id: string;
    track_id: string;
    total_sessions: number;
    created_at: string;
    updated_at: string;
    first_name: string;
    last_name: string;
  };
  
  // Define types for user activities, such as Likes, Comments, etc.
  export type UserLike = {
    id: string;
    user_id: string;
    content_id: string;
    created_at: string;
  };
  
  export type UserComment = {
    id: string;
    user_id: string;
    content_id: string;
    content: string;
    created_at: string;
  };
  
  // Define type for posts with associated data like comments and likes
  export type UserPost = {
    id: string;
    content: string;
    created_at: string;
    user_id: string;
    comments: UserComment[];
    likes: UserLike[];
    savedBy: string[]; // Array of user IDs who saved the post
  };
  
  // Define a comprehensive UserProfileWithExtras type for using in your components
  export type UserProfileWithExtras = SupabaseUserProfile & {
    posts: UserPost[];
    savedPosts: UserPost[];
    likes: UserLike[];
    comments: UserComment[];
  };
  