import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Uncomment other providers if needed
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        try {
          console.log("Connecting to DB...");
          await connectDb();
          console.log("Connected to DB");

          const currentUser = await User.findOne({ email: user.email });
          if (!currentUser) {
            console.log("Creating new user...");
            const newUser = await User.create({
              email: user.email,
              username: user.email.split("@")[0],
            });
          } 
        } catch (error) {
          console.error("Error during sign-in:", error);
        }
      }
      return true;
    },

    async session({ session, user, token }) {
      const dbUser = await User.findOne({email:session.user.email})
      console.log(dbUser)
      session.user.name = dbUser.username
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Add this line if not already present
});

export { authoptions as GET, authoptions as POST };
