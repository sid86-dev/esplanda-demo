// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Custom id field
      email?: string;
      name?: string;
      image?: string;
    };
  }

  interface JWT {
    id: string; // Custom id field
    email?: string;
    name?: string;
    picture?: string;
  }
}
