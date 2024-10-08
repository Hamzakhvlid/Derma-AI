

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
            clientId: process.env.GOOGLE_CLIENT_ID ,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
                session.user.status = res.data.user.status;
                session.user.role = res.data.user.role;
                session.user.doctorId = res.data.user.doctorId;
                session.user._id = res.data.user._id;
                session.user.doctorId=res.data.user.doctorId;   
                session.user.role=res.data.user.role;
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