import connectDB from "@/config/database";
import User from "@/models/User";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      if (!profile) {
        return false;
      }
      await connectDB();
      const userExists = await User.findOne({ email: profile.email });

      if (!userExists) {
        await User.create({
          email: profile.email,
          name: profile.name,
          image: JSON.parse(JSON.stringify(profile))["picture"] || "",
        });
      }
      return true;
    },
    async session({ session }) {
      await User.findOne({ email: session!.user!.email });
      return session;
    },
  },
};
