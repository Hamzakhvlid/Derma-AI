import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required(),
  lastName: Yup.string()
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


