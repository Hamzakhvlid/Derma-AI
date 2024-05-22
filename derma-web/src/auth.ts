

import axios from "axios";

import  NextAuth  from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { googleSignin } from "./app/api/baseUrl";


export const {
   handlers,
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "358039047057-4gcqda9vsmfm2ms495hkgermi9acnbhb.apps.googleusercontent.com",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "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",
            authorization: {
                params: {
                    access_type: "offline",
                    prompt: "consent",
                    response_type: "code",
                },
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    debug: true,
    callbacks: {
     async  session({session, token})  {

       

         if(token.access_token)
            {
                const res = await axios.post(googleSignin, {   token: token.access_token });
                 
              
                session.user.accessToken=res.data.token;
                session.user.email=res.data.user.email;
                session.user.first_name=res.data.user.first_name;
                session.user.last_name=res.data.user.last_name;
                session.user.imageUrl=res.data.user.imageUrl;
                session.user.scanCredits=res.data.user.scanCredits;
            }
       
          
         
            return session
        },
       async jwt({token, account, profile}) {
          
            const response=JSON.stringify(account?.id_token)
          
           
            if (account) {
                token.access_token = account.id_token; // Store the provider's access token in the token so that we can put it in the session in the session callback above
            }
            

            return token
        },
        authorized({ request, auth }) {
         
            const { pathname } = request.nextUrl
       
            if (pathname === "/middleware-example") return !!auth
            return true
        },
    }
   

});