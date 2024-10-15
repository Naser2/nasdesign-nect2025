import type { Document, ObjectId } from 'mongoose';

// Assuming you have a `User` type or model defined somewhere in your codebase.
import type {SupabaseUserProfile} from "@/lib/Types";

export interface CommentWithExtras extends Document {
  user: SupabaseUserProfile | ObjectId; // Populate with User or ObjectId type
  body: string;
  postId: string;
}

export interface LikeWithExtras extends Document {
  user: SupabaseUserProfile | ObjectId; // Populate with User or ObjectId type
  postId: string;
}

export interface PostWithExtras extends Document {
  comments: CommentWithExtras[];
  likes: LikeWithExtras[];
  savedBy: SupabaseUserProfile[]; // Populate with User
  user: SupabaseUserProfile | ObjectId; // Populate with User or ObjectId type
}

export interface UserWithFollows extends Document {
  following: SupabaseUserProfile[]; // Populate with User
  followedBy: SupabaseUserProfile[]; // Populate with User
}

export interface FollowerWithExtras extends Document {
  follower: UserWithFollows;
}

export interface FollowingWithExtras extends Document {
  following: UserWithFollows;
}

export interface UserWithExtras extends Document {
  posts: PostWithExtras[];
  saved: SupabaseUserProfile[]; // Populate with User
  followedBy: FollowerWithExtras[];
  following: FollowingWithExtras[];
}
