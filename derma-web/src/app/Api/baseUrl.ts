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

export const baseUrl = "https://dermai-dd2f29260512.herokuapp.com/api/v1";

export const signup = baseUrl + "/users/register";

export const loginApi = baseUrl + "/users/login";

export const resetForgotPassword = baseUrl + "/users/resetForgotPassword";

export const forgotPassword = baseUrl + "/users/forgotPassword";