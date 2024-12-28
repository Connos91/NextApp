import { UserProviderSchema } from "@/schemas/userCredentials";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { auth, handlers } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    })
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "github") {
        console.log(account.provider);
        try {
          const validatedUser = UserProviderSchema.parse(user);
          console.log(`Validated ${account.provider} user :`, validatedUser);
          return true;
        } catch (error) {
          console.error(
            `${account.provider} user has failed the validation:`,
            error
          );
          return false;
        }
      }
      return true;
    }
    // async session({ session }) {
    //   console.log(session);
    //   if (session?.user) {
    //     try {
    //       const validatedUser = UserProviderSchema.parse(session.user);

    //       console.log("validatedUser:", validatedUser);
    //     } catch (error) {
    //       console.error("Session user data validation failed:", error);
    //     }
    //   }
    //   return session;
    // }
  }
});
