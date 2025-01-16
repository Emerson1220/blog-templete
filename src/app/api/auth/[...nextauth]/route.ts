import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { User } from 'next-auth';

interface ExtendedUser extends User {
  id: string;
}

interface ExtendedSession extends Session {
  user: {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

interface ExtendedJWT extends JWT {
  id?: string;
}

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async session({ session, token }): Promise<ExtendedSession> {
      if (session?.user) {
        (session.user as ExtendedSession['user']).id = (
          token as ExtendedJWT
        ).id;
      }
      return session as ExtendedSession;
    },
    async jwt({ token, user }): Promise<ExtendedJWT> {
      if (user) {
        token.id = (user as ExtendedUser).id;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
