import type { UserMetadata } from '@supabase/supabase-js';
import clientPromise from './apiHelpers/mongodb';
// import { remark } from 'remark';
// import remarkMdx from 'remark-mdx';
// import { serialize } from 'next-mdx-remote/serialize';
// import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ObjectId } from 'mongodb'; // Import ObjectId for MongoDB fields

import { revalidatePath, unstable_noStore as noStore, unstable_noStore } from 'next/cache';

// import { ObjectId } from 'mongodb';
// import clientPromise from '@/lib/mongodb'; //


export interface UserProps {
  user_id(arg0: string, user_id: any, arg2: string, id: string | undefined): unknown;
  id: string | undefined;
  name: string;
  username: string;
  user_metadata: UserMetadata;
  email: string;
  _id: string;
  image: string;
  bio: string;
  followers: number;
  verified: boolean;
  website?: string;
  gender?: string;
  emailVerified?: Date;
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



export interface ResultProps {
  _id: string;
  users: UserProps[];
}


export const placeholderBio = `
Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.

Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.`;


export async function getUser(email: string) {
  const client = await clientPromise;
  const db = client.db('property-pulse');
  const collection = db.collection('users');

  const user = await collection.findOne({ email });
  if (!user) return null;

  const parsedUser = {
    _id: user._id.toString(),
    id: user._id.toString(),
    email: user.email,
    username: user.username,
    image: user.image,
    bookmarks: user.bookmarks, // Assuming this is a plain array
    projectsStarted: user.projectsStarted, // Assuming this is a plain array
    createdAt: user.createdAt ? user.createdAt.toISOString() : null,
    updatedAt: user.updatedAt ? user.updatedAt.toISOString() : null,
    followedBy: user.followedBy.map((id: ObjectId) => id.toString()), // Fixed type for ObjectId
    following: user.following.map((id: ObjectId) => id.toString()),  // Fixed type for ObjectId
    phone: user.phone,
    bio: user.bio,
    website: user.website,
    emailVerified: user.emailVerified ? user.emailVerified.toString() : null,
    posts: user.posts?.map((id: ObjectId) => id.toString()),  // Fixed type for ObjectId
    savedPosts: user.savedPosts?.map((id: ObjectId) => id.toString()), // Fixed type for ObjectId
    savedItems: user.savedItems?.map((item: { contentId: ObjectId; contentType: string }) => ({
      contentId: item.contentId.toString(),
      contentType: item.contentType
    })),
    likes: user.likes?.map((id: ObjectId) => id.toString()), // Fixed type for ObjectId
    accounts: user.accounts?.map((id: ObjectId) => id.toString()),
    sessions: user.sessions?.map((id: ObjectId) => id.toString()),
    goalsCreatedForSelf: user.goalsCreatedForSelf?.map((id: ObjectId) => id.toString()),
    goalsCreatedForOthers: user.goalsCreatedForOthers?.map((id: ObjectId) => id.toString()),
    taskListsCreatedForSelf: user.taskListsCreatedForSelf?.map((id: ObjectId) => id.toString()),
    taskListsCreatedForOthers: user.taskListsCreatedForOthers?.map((id: ObjectId) => id.toString()),
    badges: user.badges?.map((badge: { icon: string; title: string }) => ({
      icon: badge.icon,
      title: badge.title
    })),
    payments: user.payments?.map((id: ObjectId) => id.toString()),
    plan: user.plan ? user.plan.toString() : null,
  };

  const userData = {
    ...parsedUser,
    _id: user._id.toString(),
    id: user._id.toString(),
    createdAt: user.createdAt ? user.createdAt.toISOString() : null,
    updatedAt: user.updatedAt ? user.updatedAt.toString() : null,
    followedBy: user.followedBy.map((id: ObjectId) => id.toString()),
    following: user.following.map((id: ObjectId) => id.toString()),
  };

  // Revalidate the path before returning the user data
  noStore();
  revalidatePath(`/${user.username}`);

  return userData;
}



export async function getFirstUser(): Promise<UserProps | null> {
  const client = await clientPromise;
  const collection = client.db('property-pulse').collection('users');
  const results = await collection.findOne<UserProps>(
    {},
    {
      projection: { _id: 0, emailVerified: 0 }
    }
  );
  if (results) {
    return {
      ...results,
      // bioMdx: placeholderBio
    };
  } else {
    return null;
  }
}

export async function getAllUsers(): Promise<ResultProps[]> {
  const client = await clientPromise;
  const collection = client.db('property-pulse').collection('users');
  console.log("COLLECTION_OF_USERS",  collection)
  unstable_noStore()
  revalidatePath(`/`);
  return await collection.aggregate<ResultProps>([
      {
        //sort by follower count
        $sort: {
          followers: -1
        }
      },
      {
        $limit: 100
      },
      {
        $group: {
          _id: {
            $toLower: { $substrCP: ['$name', 0, 1] }
          },
          users: {
            $push: {
              name: '$name',
              username: '$username',
              email: '$email',
              image: '$image',
              followers: '$followers',
              verified: '$verified'
            }
          },
          count: { $sum: 1 }
        }
      },
      {
        //sort alphabetically
        $sort: {
          _id: 1
        }
      }
    ])
    .toArray();
  
}


export async function searchUser(query: string): Promise<UserProps[]> {
  const client = await clientPromise;
  const collection = client.db('test').collection('users');
  return await collection
    .aggregate<UserProps>([
      {
        $search: {
          index: 'name-index',
          /* 
          name-index is a search index as follows:

          {
            "mappings": {
              "fields": {
                "followers": {
                  "type": "number"
                },
                "name": {
                  "analyzer": "lucene.whitespace",
                  "searchAnalyzer": "lucene.whitespace",
                  "type": "string"
                },
                "username": {
                  "type": "string"
                }
              }
            }
          }

          */
          text: {
            query: query,
            path: {
              wildcard: '*' // match on both name and username
            },
            fuzzy: {},
            score: {
              // search ranking algorithm: multiply relevance score by the log1p of follower count
              function: {
                multiply: [
                  {
                    score: 'relevance'
                  },
                  {
                    log1p: {
                      path: {
                        value: 'followers'
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      },
      {
        // filter out users that are not verified
        $match: {
          verified: true
        }
      },
      // limit to 10 results
      {
        $limit: 20
      },
      {
        $project: {
          _id: 0,
          emailVerified: 0,
          score: {
            $meta: 'searchScore'
          }
        }
      }
    ])
    .toArray();
}

export async function getUserCount(): Promise<number> {
  const client = await clientPromise;
  const collection = client.db('property-pulse').collection('users');
  return await collection.countDocuments();
}

export async function updateUser(username: string, bio: string) {
  const client = await clientPromise;
  const collection = client.db('property-pulse').collection('users');
  return await collection.updateOne({ username }, { $set: { bio } });
}
