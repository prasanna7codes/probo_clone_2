{/*import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../../lib/dbConnect";
import {UserModel} from "../../../models/User";
import bcrypt from "bcrypt";

// Auth handler using NextAuth
const handler = NextAuth({
  // Enable credentials-based login
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" }
      },

      // Login logic
      async authorize(credentials,req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        await dbConnect();

        const user = await UserModel.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found with this email");
        }

        const isValidPassword = await bcrypt.compare(
          credentials.password as string,
          user.password as string
        );
        if (!isValidPassword) {
          throw new Error("Incorrect password");
        }

        // Return minimal user info for the session
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email
        };
      }
    })
  ],

  // Use JWT instead of a database session
  session: {
    strategy: "jwt"
  },

  // Custom login page
  pages: {
    signIn: "/login"
  },

  // Callbacks to include user info in token and session
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user;
      }
      return session;
    }
  }
});

// Required exports for Next.js App Router
export { handler as GET, handler as POST };
*/}