"use server"



import { signIn} from '@/auth';
export async function doSocialLogin(prop:any) {

        const data = await signIn(prop, { redirectTo: "/" });
        console.log(data);

     
   

    
  
}
