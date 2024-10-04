"use server";


// import User from "@/models/User";
import Post from "@/models/Post";
// import Like from "@/models/Like";
// import { getUserId } from "@/utils/utils";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import { z } from "zod";
// import {
//   BookmarkSchema,
//   CreateComment,
//   CreatePost,
//   DeleteComment,
//   DeletePost,
//   FollowUser,
//   LikeSchema,
//   UpdatePost,
//   UpdateUser,
// } from "./schemas";

import connectDB from "@/config/database";
// import Comment from '@/models/Comment'; // Import the correct model


// MongoDB connection setup
// async function connectDB() {
//   if (!mongoose.connection.readyState) {
//     await mongoose.connect(process.env.MONGODB_URI as string);
//   }
// }

// Create a new post
// export async function createPost(values: z.infer<typeof CreatePost>) {
//   await connectDB();
//   const userId = await getUserId();

//   const validatedFields = CreatePost.safeParse(values);

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing Fields. Failed to Create Post.",
//     };
//   }

//   const { fileUrl, caption } = validatedFields.data;

//   try {
//     await Post.create({
//       caption,
//       fileUrl,
//       user: userId,
//     });
//   } catch (error) {
//     return {
//       message: "Database Error: Failed to Create Post.",
//     };
//   }

//   revalidatePath("/dashboard");
//   redirect("/dashboard");
// }

// Delete a post
// export async function deletePost(formData: FormData) {
//   await connectDB();
//   const userId = await getUserId();

//   const { id } = DeletePost.parse({
//     id: formData.get("id"),
//   });

//   const post = await Post.findOne({
//     _id: id,
//     user: userId,
//   });

//   if (!post) {
//     throw new Error("Post not found");
//   }

//   try {
//     await Post.deleteOne({ _id: id });
//     revalidatePath("/dashboard");
//     return { message: "Deleted Post." };
//   } catch (error) {
//     return { message: "Database Error: Failed to Delete Post." };
//   }
// }

// Like or unlike a post
// export async function likePost(value: FormDataEntryValue | null) {
//   await connectDB();
//   const userId = await getUserId();

//   const validatedFields = LikeSchema.safeParse({ postId: value });

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing Fields. Failed to Like Post.",
//     };
//   }

//   const { postId } = validatedFields.data;

//   const post = await Post.findById(postId);

//   if (!post) {
//     throw new Error("Post not found");
//   }

//   const like = await Like.findOne({
//     post: postId,
//     user: userId,
//   });

//   if (like) {
//     try {
//       await Like.deleteOne({ _id: like._id });
//       revalidatePath("/dashboard");
//       return { message: "Unliked Post." };
//     } catch (error) {
//       return { message: "Database Error: Failed to Unlike Post." };
//     }
//   }

//   try {
//     await Like.create({
//       post: postId,
//       user: userId,
//     });
//     revalidatePath("/dashboard");
//     return { message: "Liked Post." };
//   } catch (error) {
//     return { message: "Database Error: Failed to Like Post." };
//   }
// }

// Bookmark or unbookmark a post
// export async function bookmarkPost(value: FormDataEntryValue | null) {
//   await connectDB();
//   const userId = await getUserId();

//   const validatedFields = BookmarkSchema.safeParse({ postId: value });

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing Fields. Failed to Bookmark Post.",
//     };
//   }

//   const { postId } = validatedFields.data;

//   const post = await Post.findById(postId);

//   if (!post) {
//     throw new Error("Post not found.");
//   }

//   const bookmark = await User.findOne({
//     _id: userId,
//     'savedItems.contentId': postId,
//     'savedItems.contentType': 'Post',
//   });

//   if (bookmark) {
//     try {
//       await User.updateOne(
//         { _id: userId },
//         { $pull: { savedItems: { contentId: postId, contentType: 'Post' } } }
//       );
//       revalidatePath("/dashboard");
//       return { message: "Unbookmarked Post." };
//     } catch (error) {
//       return {
//         message: "Database Error: Failed to Unbookmark Post.",
//       };
//     }
//   }

//   try {
//     await User.updateOne(
//       { _id: userId },
//       { $addToSet: { savedItems: { contentId: postId, contentType: 'Post' } } }
//     );
//     revalidatePath("/dashboard");
//     return { message: "Bookmarked Post." };
//   } catch (error) {
//     return {
//       message: "Database Error: Failed to Bookmark Post.",
//     };
//   }
// }

// Create a comment
// export async function createComment(values: z.infer<typeof CreateComment>) {
//   await connectDB();
//   const userId = await getUserId();

//   const validatedFields = CreateComment.safeParse(values);

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing Fields. Failed to Create Comment.",
//     };
//   }

//   const { postId, body } = validatedFields.data;

//   const post = await Post.findById(postId);

//   if (!post) {
//     throw new Error("Post not found");
//   }

//   try {
//     await User.updateOne(
//       { _id: userId },
//       { $push: { comments: { contentId: postId, contentType: 'Post', comment: body } } }
//     );
//     revalidatePath("/dashboard");
//     return { message: "Created Comment." };
//   } catch (error) {
//     return { message: "Database Error: Failed to Create Comment." };
//   }
// }

// // Delete a comment
// export async function deleteComment(formData: FormData) {
//   await connectDB();
//   const userId = await getUserId();

//   const { id } = DeleteComment.parse({
//     id: formData.get("id"),
//   });

//   const comment = await User.findOne({
//     _id: userId,
//     'comments._id': id,
//   });

//   if (!comment) {
//     throw new Error("Comment not found");
//   }

//   try {
//     await User.updateOne(
//       { _id: userId },
//       { $pull: { comments: { _id: id } } }
//     );
//     revalidatePath("/dashboard");
//     return { message: "Deleted Comment." };
//   } catch (error) {
//     return { message: "Database Error: Failed to Delete Comment." };
//   }
// }

// // Update a post
// export async function updatePost(values: z.infer<typeof UpdatePost>) {
//   await connectDB();
//   const userId = await getUserId();

//   const validatedFields = UpdatePost.safeParse(values);

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing Fields. Failed to Update Post.",
//     };
//   }

//   const { id, fileUrl, caption } = validatedFields.data;

//   const post = await Post.findOne({
//     _id: id,
//     user: userId,
//   });

//   if (!post) {
//     throw new Error("Post not found");
//   }

//   try {
//     await Post.updateOne(
//       { _id: id },
//       {
//         fileUrl,
//         caption,
//       }
//     );
//   } catch (error) {
//     return { message: "Database Error: Failed to Update Post." };
//   }

//   revalidatePath("/dashboard");
//   redirect("/dashboard");
// }

// // Update user profile
// export async function updateProfile(values: z.infer<typeof UpdateUser>) {
//   await connectDB();
//   const userId = await getUserId();

//   const validatedFields = UpdateUser.safeParse(values);

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing Fields. Failed to Update Profile.",
//     };
//   }

//   const { bio, gender, image, name, username, website } = validatedFields.data;

//   try {
//     await User.updateOne(
//       { _id: userId },
//       {
//         username,
//         name,
//         image,
//         bio,
//         gender,
//         website,
//       }
//     );
//     revalidatePath("/dashboard");
//     return { message: "Updated Profile." };
//   } catch (error) {
//     return { message: "Database Error: Failed to Update Profile." };
//   }
// }

// // Follow or unfollow a user
// export async function followUser(formData: FormData) {
//   await connectDB();
//   const userId = await getUserId();

//   const { id } = FollowUser.parse({
//     id: formData.get("id"),
//   });

//   const user = await User.findById(id);

//   if (!user) {
//     throw new Error("User not found");
//   }

//   const follows = await User.findOne({
//     _id: userId,
//     following: id,
//   });

//   if (follows) {
//     try {
//       await User.updateOne(
//         { _id: userId },
//         { $pull: { following: id } }
//       );
//       await User.updateOne(
//         { _id: id },
//         { $pull: { followedBy: userId } }
//       );
//       revalidatePath("/dashboard");
//       return { message: "Unfollowed User." };
//     } catch (error) {
//       return {
//         message: "Database Error: Failed to Unfollow User.",
//       };
//     }
//   }

//   try {
//     await User.updateOne(
//       { _id: userId },
//       { $addToSet: { following: id } }
//     );
//     await User.updateOne(
//       { _id: id },
//       { $addToSet: { followedBy: userId } }
//     );
//     revalidatePath("/dashboard");
//     return { message: "Followed User." };
//   } catch (error) {
//     return {
//       message: "Database Error: Failed to Follow User.",
//     };
//   }
// }


// ------FETCHPOST and OTHER METHODS --------------------------------


// Fetch all posts with related data

export async function fetchPosts() {
  await connectDB();

  try {
    const data = await Post.find({}).sort({ createdAt: -1 });
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch posts");
  }
}

// export async function fetchPosts() {
//   await connectDB();

//   try {
//     const data = await Post.find({})
//       .populate({
//         path: 'user',
//         select: 'username image name',
//       })
//       .populate({
//         path: 'comments.userId',
//         select: 'username image name',
//         options: { sort: { 'comments.timestamp': -1 } },
//       })
//       .populate({
//         path: 'likes.userId',
//         select: 'username image name',
//       })
//       .sort({ createdAt: -1 });

//     return data;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch posts");
//   }
// }

// Fetch a single post by ID with related data




// export async function fetchPostById(postId) {
//   await connectDB();
  
//   try {
//     console.log("Fetching post by ID:", postId);

//     // Fetch the post by its ID and populate the user's information
//     const post = await Post.findById(postId)
//       .populate({
//         path: 'userId',
//         select: 'username image name', // Include only the fields you need
//       })
//       .populate({
//         path: 'comments.userId',
//         select: 'username image name',
//         options: { sort: { 'comments.timestamp': -1 } },
//       })
//       .populate({
//         path: 'likes.userId',
//         select: 'username image name',
//       });

//     if (!post) {
//       throw new Error('Post not found');
//     }

//     console.log("Fetched post:", post);
//     return post;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch post by ID");
//   }
// }





// export async function fetchPostById(id: string) {
//   await connectDB();

//   try {
//     console.log("Fetching post by ID:", id);

//     const post = await Post.findById(id)
//       .populate({
//         path: 'userId', // Populate the userId field
//         select: 'username image', // Only select username and image
//       })
//       .lean(); // Convert Mongoose document to plain JavaScript object

//     if (!post) {
//       throw new Error('Post not found');
//     }

//     const serializedPost = {
//       ...post,
//       _id: post._id.toString(),
//       userId: post?.userId && {
//         ...post.userId,
//         _id: post.userId._id.toString(), // Convert userId's _id to a string
//       },
//       createdAt: post.createdAt.toISOString(), // Serialize date fields
//       updatedAt: post.updatedAt.toISOString(),
//     };

//     console.log("Serialized post:", serializedPost);

//     return serializedPost;
//   } catch (error) {
//     console.error('Database Error in fetchPostById:', error);
//     throw new Error('Failed to fetch post by ID');
//   }
// }



// export async function fetchPostById(id: string) {
//   await connectDB();

//   try {
//     console.log("Fetching post by ID:", id);

//     const post = await Post.findById(id);  // No populate, just fetch the post

//     console.log("Fetched post:", post);

//     if (!post) {
//       throw new Error('Post not found');
//     }

//     return post;
//   } catch (error) {
//     console.error('Database Error in fetchPostById:', error);
//     throw new Error('Failed to fetch post by ID');
//   }
// }





// Fetch posts by a specific user, excluding a specific post ID

// export async function fetchProfile(encodedUsername: string) {
//   await connectDB();

//   const username = decodeURIComponent(encodedUsername);

//   try {
//     console.log("Fetching profile - decoded username:", username);

//     const profile = await User.findOne({ username })
//       .populate('posts')
//       .populate('savedItems.contentId')
//       .populate({
//         path: 'followedBy',
//         select: 'follower following', // Simplified population
//       })
//       .populate({
//         path: 'following',
//         select: 'follower following', // Simplified population
//       })
//       .lean(); // Use lean to avoid Mongoose overhead

//     if (!profile) {
//       throw new Error('Profile not found');
//     }

//     console.log("Fetched profile:", profile);
//     return profile;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch profile");
//   }
// }



// export async function fetchPostsByUsername(encodedUsername: string) {
//   // await connectDB();
//   const username = decodeURIComponent(encodedUsername);
//   try {
//     console.log("Fetching posts by username:", username);

//     // Find the user by username
//       const user = await User.findOne({ username }).select('_id');
//       if (!user) {
//         throw new Error("User not found");
//       }

//       // Fetch all posts by the user
//       const posts = await Post.find({ userId: user._id })
//         .populate({
//           path: 'userId', // Populate 'userId' with user information
//           select: 'username image name',
//         })
//         .populate({
//           path: 'comments.userId', // Populate 'comments.userId' with user information
//           select: 'username image name',
//           options: { sort: { 'comments.timestamp': -1 } },
//         })
//         .populate({
//           path: 'likes.userId', // Populate 'likes.userId' with user information
//           select: 'username image name',
//         })
//         .sort({ createdAt: -1 });

//       if (!posts || posts.length === 0) {
//         console.log('No posts found for this user');
//         return [];
//       }
//        else { console.log("Fetched posts for user:", posts);
//            return posts;
//          }
      
//     } catch (error) {
//         console.error("Database Error:", error);
//         // throw new Error("Failed to fetch posts");
//     }
// }

// export async function fetchPostsByUsername(username: string, postId?: string) {
//   await connectDB();

//   try {
//     const user = await User.findOne({ username }).select('_id');
//     if (!user) throw new Error("User not found");

//     const data = await Post.find({
//       user: user._id,
//       _id: { $ne: postId },
//     })
//       .populate({
//         path: 'user',
//         select: 'username image name',
//       })
//       .populate({
//         path: 'comments.userId',
//         select: 'username image name',
//         options: { sort: { 'comments.timestamp': -1 } },
//       })
//       .populate({
//         path: 'likes.userId',
//         select: 'username image name',
//       })
//       .sort({ createdAt: -1 });

//     return data;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch posts");
//   }
// }

// Fetch a user's profile with related data
// export async function fetchProfile(username) {
//   await connectDB();

//   try {
//     console.log("Fetching profile - username:", username);

//     const profile = await User.findOne({ username })
//       .populate({
//         path: 'posts',
//         select: 'caption fileUrl createdAt', // Only select the fields you need
//         options: { sort: { createdAt: -1 } },
//       })
//       .populate({
//         path: 'savedItems.contentId', // Ensure this path exists in the schema
//         select: 'caption fileUrl createdAt',
//         options: { sort: { createdAt: -1 } },
//       })
//       .populate({
//         path: 'followedBy',
//         select: 'username image name',
//       })
//       .populate({
//         path: 'following',
//         select: 'username image name',
//       });

//     if (!profile) {
//       throw new Error('Profile not found');
//     }

//     console.log("Fetched profile:", profile);
//     return profile;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch profile");
//   }
// }
// export async function fetchProfile(username: string) {
//   const decodedUsername = decodeURIComponent(username);
//   await connectDB();
//   console.log("Fetching profile - decoded username: ", decodedUsername);
//   try {
//     const data = await User.findOne({ username: decodedUsername })
//       .populate({
//         path: 'posts',
//         options: { sort: { createdAt: -1 } },
//       })
//       .populate({
//         path: 'savedItems.contentId',
//       })
//       .populate({
//         path: 'followedBy',
//         model: 'Follows', // Ensure you're referencing the correct model
//         populate: {
//           path: 'following followedBy',
//         },
//       })
//       .populate({
//         path: 'following',
//         model: 'Follows', // Ensure you're referencing the correct model
//         populate: {
//           path: 'following followedBy',
//         },
//       });

//     return data;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch profile");
//   }
// }



// export async function fetchProfile(username: string) {
//   const decodedUsername = decodeURIComponent(username);
//   await connectDB();
//   console.log("Fetching profile - decoded username: ", decodedUsername);
//   try {
//     const data = await User.findOne({ username: decodedUsername }).populate({
//         path: 'posts',
//         options: { sort: { createdAt: -1 } },
//       })
//       .populate({
//         path: 'savedItems.contentId',
//         options: { sort: { createdAt: -1 } },
//       })
//       .populate({
//         path: 'followedBy.userId',
//         populate: {
//           path: 'following followedBy',
//         },
//       })
//       .populate({
//         path: 'following.userId',
//         populate: {
//           path: 'following followedBy',
//         },
//       });

//     return data;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch profile");
//   }
// }

// Fetch saved posts for a user by username
// export async function fetchSavedPostsByUsername(username: string) {
//   await connectDB();

//   try {
//     const user = await User.findOne({ username }).select('_id');
//     if (!user) throw new Error("User not found");

//     const data = await User.findById(user._id)
//       .populate({
//         path: 'savedItems.contentId',
//         match: { contentType: 'Post' },
//         populate: {
//           path: 'comments.userId',
//           select: 'username image name',
//           options: { sort: { 'comments.timestamp': -1 } },
//         },
//         populate: {
//           path: 'likes.userId',
//           select: 'username image name',
//         },
//       })
//       .sort({ 'savedItems.timestamp': -1 });

//     return data;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch saved posts");
//   }
// }



// export async function getCommentCountByPostId(postId: string) {
//   await connectDB();

//   try {
//     console.log("POST_COMMENT_COUTED_START", postId);

//     // Check if postId is being passed correctly
//     if (!postId) {
//       console.error("POST_COMMENT_COUTED_ERROR: postId is undefined");
//       return 0;
//     }

//     // Count documents matching the contentId
//     const count = await Comment.countDocuments({ contentId: postId });
//     console.log("POST_COMMENT_COUTED_backend", count);

//     return count;
//   } catch (error) {
//     console.error('Failed to count comments:', error);
//     throw new Error('Failed to count comments');
//   }
// }


// export async function fetchCommentsByPostId(postId: string) {
//   await connectDB();

//   try {
//     console.log("POST_COMMENT_FETCH_START", postId);

//     // Check if postId is being passed correctly
//     if (!postId) {
//       console.error("POST_COMMENT_FETCH_ERROR: postId is undefined");
//       return [];
//     }

//     // Fetch comments
//     const comments = await Comment.find({ contentId: postId })
//       .sort({ createdAt: -1 }) // Sort by creation date (newest first)
//       .limit(30) // Limit to the last 30 comments
//       .lean(); // Convert to plain JavaScript object

//     console.log("POST_COMMENT_FETCHED_backend", comments);

//     if (!comments || comments.length === 0) {
//       console.log("POST_COMMENT_FETCHED_backend: No comments found");
//     }

//     // Serialize comments before sending them to the client
//     const serializedComments = comments.map(comment => ({
//       ...comment,
//       _id: comment._id.toString(),
//       userId: comment.userId.toString(),
//       createdAt: comment.createdAt.toISOString(),
//       updatedAt: comment.updatedAt.toISOString(),
//       replies: comment.replies.map(reply => ({
//         ...reply,
//         _id: reply._id.toString(),
//         userId: reply.userId.toString(),
//         commentId: reply.commentId.toString(),
//       }))
//     }));

//     console.log("POST_COMMENT_FETCHED_serialized", serializedComments);

//     return serializedComments;
//   } catch (error) {
//     console.error('Failed to fetch comments:', error);
//     throw new Error('Failed to fetch comments');
//   }
// }
