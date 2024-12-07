import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { auth, handlers } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    })
  ],
  secret: process.env.NEXTAUTH_SECRET!
});
