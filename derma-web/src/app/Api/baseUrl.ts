import exp from "constants";

export class API_ROUTES {
 static  USER = {
    ME: "/users/me",
    LOGIN: "/users/login",
    REGISTER: "/users/register",
    FORGOT_PASSWORD: "/users/forgotPassword",
    RESET_FORGOT_PASSWORD: "/users/resetForgotPassword",
  };
}

export const baseUrl = "https://derma-ai-test-7888054d78d5.herokuapp.com/api/v1/users/";

export const signup = baseUrl + "register";

export const loginApi = baseUrl + "login";

export const buyCredits = baseUrl + "buyCredits";

export const resetForgotPassword = baseUrl + "resetForgotPassword";

export const forgotPassword = baseUrl + "forgotPassword";

export const doctor = baseUrl + "getDoctors";
export const uploadImage = baseUrl + "uploadScanImage";
export const scanNow = baseUrl + "scanNow";
export const bookAppointment = baseUrl + "bookAppointment";

export const getDoctorDetail = baseUrl + "getDetailedDoctor";
export const googleSignin= baseUrl+"googleSignup"