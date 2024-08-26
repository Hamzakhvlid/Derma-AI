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
export const backendUrl="http://localhost:8080";
export const baseUrl = "http://localhost:8080/api/v1/users/";

export const signup = baseUrl + "register";

export const loginApi = baseUrl + "login";

export const buyCredits = baseUrl + "buyCredits";

export const resetForgotPassword = baseUrl + "resetForgotPassword";

export const forgotPassword = baseUrl + "forgotPassword";

export const doctor = baseUrl + "getDoctors";
export const uploadImage = baseUrl + "uploadScanImage";
export const uploadSimpleImage = baseUrl + "uploadImage";
export const scanNow = baseUrl + "scanNow";
export const bookAppointment = baseUrl + "bookAppointment";

export const getDoctorDetail = baseUrl + "getDetailedDoctor";
export const getAdminDoctor= baseUrl + "getAdminDoctor";
export const googleSignin= baseUrl+"googleSignup"
export const regitserDoctor = baseUrl + "regitserDoctor";
export const getCompleteDoctorDetailsForDashboard = baseUrl + "getCompleteDoctor";
export const updateProfile = baseUrl + "updateProfile";
export const getProfile = baseUrl + "getProfile";
export const getAppointments = baseUrl + "getAppointment";