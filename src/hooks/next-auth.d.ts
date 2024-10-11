// src/types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add your custom fields here
      username?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface JWT {
    id: string; // Add custom fields to the token as well
    username?: string | null;
    name?: string | null;
    email?: string | null;
  }
}
