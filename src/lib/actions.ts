// import clientSupabase from "./supabase/client";

// export const followUser = async (profileId: string, isFollowing: boolean) => {
//   try {
//     const method = isFollowing ? 'DELETE' : 'POST';

//     const { data, error } = await clientSupabase
//       .from('follows')
//       .insert([{ followerId: user.id, followingId: profileId }]);

//     if (error) throw error;

//     toast.success(isFollowing ? "Unfollowed User" : "Followed User");
//     return data;
//   } catch (error: any) {
//     toast.error("Sorry, something went wrong. Please try again.");
//     throw new Error(error);
//   }
// };