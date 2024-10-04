// src/auth.ts
import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createClient } from "@/utils/supabase/server"; // Using your already configured Supabase client

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || "your-secret-here",
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Use the existing client, no need to pass environment variables again
        const supabase = createClient();

        // Check if the user profile already exists in Supabase
        const { data: profileData, error } = await supabase
          .from("users_profile")
          .select("*")
          .eq("user_id", user.id)
          .single();

        if (!profileData) {
          // Create a new profile if it doesn't exist
          const { error: insertError } = await supabase
            .from("users_profile")
            .insert({
              user_id: user.id,
              display_name: user.name,
              username: user.name?.split(" ").join("").toLowerCase(),
              email_notifications: true,
            });

          if (insertError) {
            console.error("Error creating user profile:", insertError.message);
          }
        } else {
          // Update profile information if needed
          const { error: updateError } = await supabase
            .from("users_profile")
            .update({
              display_name: user.name,
              username: user.name?.split(" ").join("").toLowerCase(),
            })
            .eq("user_id", user.id);

          if (updateError) {
            console.error("Error updating user profile:", updateError.message);
          }
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.username = token.username;
      return session;
    },
  },
};

export default NextAuth(authOptions);
