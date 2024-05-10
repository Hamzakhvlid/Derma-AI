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

export const baseUrl = "https://derma-ai-test-7888054d78d5.herokuapp.com/api/v1";

export const signup = baseUrl + "/users/register";

export const loginApi = baseUrl + "/users/login";

export const buyCredits = baseUrl + "/users/buyCredits";

export const resetForgotPassword = baseUrl + "/users/resetForgotPassword";

export const forgotPassword = baseUrl + "/users/forgotPassword";

export const doctor = baseUrl + "/users/getDoctors";
export const uploadImage = baseUrl + "/users/uploadImage";
export const scanNow = baseUrl + "/users/scanNow";
export const bookAppointment = baseUrl + "/users/bookAppointment";