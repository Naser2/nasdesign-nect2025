// "use server";

// import connectDB from "@/config/database";
// import User from "@/models/User";
// import Post from "@/models/Post";
// import Like from "@/models/Like";
// import { getUserId } from "./utils";
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
//   CreateTodo,
// } from "./schemas";

// import Comment from '@/models/Comment'; // Assuming your Comment model is imported

// import { unstable_noStore as noStore } from "next/cache";
// import { use } from "react";

// // Create a new TODO


// import TaskList from "@/models/TaskList"; // Ensure this is the correct model for TodoList
// import Notification from '@/models/Notification';
// import { getSession } from "next-auth/react";
// import twilio from 'twilio';

// export async function createTodo(values: z.infer<typeof CreateTodo>, username: string) {
//   await connectDB();

//   const validatedFields = CreateTodo.safeParse(values);
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing Fields. Failed to Create Todo.",
//     };
//   }

//   const { title, description, assignedTo, tasks } = validatedFields.data;

//   const session = await getSession();
//   if (!session) {
//     return {
//       message: "Unauthorized",
//       status: 401,
//     };
//   }

//   const userId = await getUserId(); // Assuming this retrieves user ID from the session

//   // Find the users by email
//   const assignedUsers = await User.find({ email: { $in: assignedTo } });

//   if (assignedUsers.length === 0) {
//     return {
//       message: "No users found with the provided emails",
//       status: 404,
//     };
//   }

//   const taskList = new TaskList({
//     tasks: tasks.map(task => ({
//       title,
//       description,
//       createdBy: userId,
//       assignedTo: assignedUsers.map(user => user._id),
//     })),
//   });

//   try {
//     await taskList.save();

//     // Send notification and text message via Twilio
//     const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
//     assignedUsers.forEach(async user => {
//       const notification = new Notification({
//         type: 'task_assigned',
//         message: `A new task has been assigned to you: ${title}`,
//         user: user._id,
//       });

//       await notification.save();

//       await twilioClient.messages.create({
//         body: `You have been assigned a new task: ${title}.`,
//         from: process.env.TWILIO_PHONE_NUMBER,
//         to: user.phone, // Ensure the user model includes a phone number field
//       });
//     });

//     // Optimistically revalidate the user's profile page or a relevant path
//     revalidatePath(`/${username}`);

//     // Return success status
//     return {
//       success: true,
//       message: "Task and notifications created successfully.",
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       message: "Internal server error",
//       status: 500,
//     };
//   }
// }

// // --------TODO ACTIONS END ----

// // Create a new post
// export async function createPost(values: z.infer<typeof CreatePost>, username: string) {
//   await connectDB();
//   const userId = await getUserId(); // Assuming this retrieves user ID from the session

//   console.log(`Creating post for user:`, userId);

//   const validatedFields = CreatePost.safeParse(values);

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing Fields. Failed to Create Post.",
//     };
//   }

//   const { fileUrl, caption } = validatedFields.data;
//   console.log(`Creating post1:`, caption, fileUrl);

//   try {
//     await Post.create({
//       caption,
//       fileUrl,
//       userId,
//       user: userId, // Populate both
//     });
//   } catch (error) {
//     return {
//       message: "Database Error: Failed to Create Post.",
//     };
//   }

//   revalidatePath(`/${username}`); // Revalidate the user's profile page

//   // Return success status
//   return {
//     success: true,
//     message: "Post created successfully.",
//   };
// }

// // Delete a post
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
//      noStore(); // Prevent caching
//     revalidatePath(`/${userId}`);
//     return { message: "Deleted Post." };
//   } catch (error) {
//     return { message: "Database Error: Failed to Delete Post." };
//   }
// }

// // Like or unlike a post
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
//       noStore(); // Prevent caching
//       revalidatePath(`/${userId}`);
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

// // Bookmark or unbookmark a post
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
//       noStore(); // Prevent caching
//       revalidatePath(`/${userId}`);
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
//     noStore(); // Prevent caching
//   revalidatePath(`/${postId}`);
//     return { message: "Bookmarked Post." };
//   } catch (error) {
//     return {
//       message: "Database Error: Failed to Bookmark Post.",
//     };
//   }
// }


// export async function createComment(values: z.infer<typeof CreateComment>) {
//   try {
//     console.log("CONNECTING TO DATABASE");
//     await connectDB();
//     console.log("DATABASE CONNECTED");

//     const userId = await getUserId(); // Fetch the user's ID
//     console.log("POSTING_COMMENT", userId);

//     const validatedFields = CreateComment.safeParse(values);
//     console.log("VALIDATING_FIELDS", validatedFields);

//     if (!validatedFields.success) {
//       console.error("VALIDATION_ERROR", validatedFields.error.flatten().fieldErrors);
//       return {
//         errors: validatedFields.error.flatten().fieldErrors,
//         message: "Missing Fields. Failed to Create Comment.",
//       };
//     }

//     const { postId, body } = validatedFields.data;
//     console.log("POSTING COMMENT_FOR POST_ID_AND_BODY", postId, body);

//     const post = await Post.findById(postId);
//     if (!post) {
//       throw new Error("Post not found");
//     }

//     console.log("POST_FOUND", postId);

//     // Fetch user's avatar and username
//     const avatar = await getAvatarForUser(userId); 
//     const username = await getUsernameForUser(userId); 
//     console.log("POST_COMMENTATOR_AVATAR", avatar);
//     console.log("POST_COMMENTATOR_USEERNAME", username);
//     // Save the comment to the Comment collection
//     const newComment = new Comment({
//       userId: userId,
//       contentId: postId,
//       contentType: 'Post', // Assuming you're commenting on a post
//       comment: body,
//       avatar: avatar || 'default-avatar-url', // Fallback in case avatar is null
//       username: username || 'Anonymous', // Fallback in case username is null
//     });

//     await newComment.save();

//     console.log("COMMENT_SAVED_TO_COMMENT_COLLECTION", newComment);

//     // Prevent caching and revalidate the page
//     noStore(); // Prevent caching
//     revalidatePath(`/${postId}`);

//     return { message: "Created Comment." };

//   } catch (error) {
//     console.error("COMMENT_CREATION_ERROR", error);
//     return { message: "Database Error: Failed to Create Comment.", error: error.message };
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
//     noStore(); // Prevent caching
//     revalidatePath(`/${userId}`);
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

//   noStore(); // Prevent caching
//   revalidatePath(`/${post.id}`);
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
//     noStore(); // Prevent caching
//     revalidatePath(`/${username}`);
//     return { message: "Updated Profile." };
//   } catch (error) {
//     return { message: "Database Error: Failed to Update Profile." };
//   }
// }

// // Follow or unfollow a user
export async function followUser(formData: FormData) {
  await connectDB();
  const userId = await getUserId();

  const { id } = FollowUser.parse({
    id: formData.get("id"),
  });

  const user = await User.findById(id);

  if (!user) {
    throw new Error("User not found");
  }

  const follows = await User.findOne({
    _id: userId,
    following: id,
  });

  if (follows) {
    try {
      await User.updateOne(
        { _id: userId },
        { $pull: { following: id } }
      );
      await User.updateOne(
        { _id: id },
        { $pull: { followedBy: userId } }
      );
      revalidatePath(`/${user.username}`);
      noStore(); // Prevent caching
      return { message: "Unfollowed User." };
    } catch (error) {
      return {
        message: "Database Error: Failed to Unfollow User.",
      };
    }
  }

  try {
    await User.updateOne(
      { _id: userId },
      { $addToSet: { following: id } }
    );
    await User.updateOne(
      { _id: id },
      { $addToSet: { followedBy: userId } }
    );
    revalidatePath(`/${user.username}`);
    noStore(); // Prevent caching
    return { message: "Followed User." };
  } catch (error) {
    return {
      message: "Database Error: Failed to Follow User.",
    };
  }
}





// export async function getUsernameForUser(userId: string): Promise<string | null> {
//   try {
//     const user = await User.findById(userId).select('username'); // Fetch only the username field
//     if (!user || !user.username) {
//       console.log("User not found or username not available");
//       return null; // Return null if the user or username is not found
//     }
//     return user.username;
//   } catch (error) {
//     console.error("Error fetching username for user", error);
//     return null; // Handle error by returning null
//   }
// }

// // Assuming the User model is available

// export async function getAvatarForUser(userId: string): Promise<string | null> {
//   try {
//     const user = await User.findById(userId).select('avatar'); // Fetch only the avatar field
//     if (!user || !user.avatar) {
//       console.log("User not found or avatar not available");
//       return null; // Return null if the user or avatar is not found
//     }
//     return user.avatar;
//   } catch (error) {
//     console.error("Error fetching avatar for user", error);
//     return null; // Handle error by returning null
//   }
// }
