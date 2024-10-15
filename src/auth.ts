// // src/auth.ts
// import NextAuth, { type NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { createClient } from "@/utils/supabase/server"; // Using your already configured Supabase client

// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET || "your-secret-here",
//   pages: {
//     signIn: "/",
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       const supabase = createClient();

//       if (user) {
//         // Add user info to the token
//         token.id = user.id; // This is now valid with the extended JWT type
//         token.name = user.name || "";
//         token.email = user.email || "";

//         const username = user.name?.split(" ").join("").toLowerCase() || "";

//         // Check if the user profile already exists in Supabase
//         const { data: profileData, error } = await supabase
//           .from("users_profile")
//           .select("*")
//           .eq("user_id", user.id)
//           .single();

//         if (!profileData && !error) {
//           // Create a new profile if it doesn't exist
//           const { error: insertError } = await supabase
//             .from("users_profile")
//             .insert({
//               user_id: user.id,
//               display_name: user.name,
//               username: username,
//               email_notifications: true,
//             });

//           if (insertError) {
//             console.error("Error creating user profile:", insertError.message);
//           }
//         } else if (profileData && !error) {
//           // Update profile information if needed
//           const { error: updateError } = await supabase
//             .from("users_profile")
//             .update({
//               display_name: user.name,
//               username: username,
//             })
//             .eq("user_id", user.id);

//           if (updateError) {
//             console.error("Error updating user profile:", updateError.message);
//           }
//         } else if (error) {
//           console.error("Error fetching user profile:", error.message);
//         }
//       }

//       return token;
//     },
//     async session({ session, token }) {
//       // Safely check for session.user before assigning token data
//       if (session?.user) {
//         session.user.id = token.id ?? ""; // Ensure it's a string by defaulting to ""
//         session.user.name = token.name ?? ""; // Default to an empty string
//         session.user.email = token.email ?? ""; // Default to an empty string
//         session.user.username = token.username ?? ""; // Default to an empty string
//       }

//       return session;
//     },
//   },
// };

// export default NextAuth(authOptions);
