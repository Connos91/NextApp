import { NextAuthOptions, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { UserProviderSchema } from "@/schemas/userCredentials";

import * as C from "./constants";

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (
        account?.provider === C.GOOGLE_PROVIDER ||
        account?.provider === C.GITHUB_PROVIDER
      ) {
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
    },
    async session({ session }) {
      if (session?.user) {
        try {
          const validatedUser = UserProviderSchema.parse(session.user);
          session.user = validatedUser;

          console.log("validatedUser:", validatedUser);
        } catch (error) {
          console.error("Session user data validation failed:", error);
        }
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET as string
};

export const loginIsRequiredServer = async () => {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
};
