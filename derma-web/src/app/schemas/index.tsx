import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required(),
  last_name: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required(),
  email: Yup.string().email("Invalid email").required(),
  username: Yup.string().min(5, "Too Short!").max(25, "Too Long!").required(),
  password: Yup.string()
    .min(8, "Too Short!")
    .required(),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Required"),
});

export const resetPasswordSchema = Yup.object().shape({  password: Yup.string()
  .min(8, "Too Short!")
  .required(),
confirm_password: Yup.string()
  .oneOf([Yup.ref("password"), ""], "Passwords must match")
  .required("Required"),})
  export const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(),
  })
export const loginSchema = Yup.object().shape({
  identifier: Yup.string().min(5, "Too Short!").required("Required"),
  password: Yup.string().min(8, "Too Short!").required(),
})

