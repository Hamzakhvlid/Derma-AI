import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module 'next-auth' {
    interface Session extends DefaultSession {
     accessToken: string;
      user: {
        // Existing properties...
        accessToken: string;
        backendToken: string;
        // Add custom properties...
        imageUrl: string;
        username: string,
        first_name: string,
       last_name: string,
        email: string
        scanCredits: number,
        status: string,
        role: string
        doctorId: string
        _id: string
        doctorId: String
        role: String
      };
    }
    interface Jwt extends DefaultJWT {
        backendToken: string;
    }
  }

  