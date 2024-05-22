import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  first_name: Yup.string().min(2, "Too Short!").max(25, "Too Long!").required(),
  last_name: Yup.string().min(2, "Too Short!").max(25, "Too Long!").required(),
  email: Yup.string().email("Invalid email").required(),
  username: Yup.string().min(5, "Too Short!").max(25, "Too Long!").required(),
  password: Yup.string().min(8, "Too Short!").required(),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Required"),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string().min(8, "Too Short!").required(),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Required"),
});
export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required(),
});
export const loginSchema = Yup.object().shape({
  identifier: Yup.string().min(5, "Too Short!").required("Required"),
  password: Yup.string().min(8, "Too Short!").required(),
});

export const scanNowDisease = Yup.object().shape({
  additionalInfo: Yup.string()
    .test(
      "wordCount",
      "Please enter atleast 20 and maximum 60 words.",
      (value) => {
        if (!value) return true; // Allow empty values to be handled by required validation
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount >= 20 && wordCount <= 60;
      }
    )
    .required("Additional information is required."),
});

export const scanNowTips = Yup.object().shape({
  additionalInfo: Yup.string().test(
    "wordCount",
    " maximum 60 words.",
    (value) => {
      if (!value) return true; // Allow empty values to be handled by required validation
      const wordCount = value.trim().split(/\s+/).length;
      return wordCount <= 60;
    }
  ),
});

export const FormDataSchema = Yup.object().shape({
  nic: Yup.string()
    .min(13, "NIC is short")
    .max(13, "NIC is Long")
    .required("NIC is required"),
  phone: Yup.string()
    .min(11, "03000000000")
    .max(11, "03000000000")
    .required("Phone is required"),
  hospital: Yup.string()
    .min(10, "Hospital is Short")
    .max(100, "Hospital is Long")
    .required("Hospital is required"),
  detailed_role: Yup.string()
    .min(1, "Role is short")
    .max(100, "Role is Long")
    .required("Role is required"),
  services_offered: Yup.string()
    .min(10, "Services offered is Short")
    .max(100, "Services offered is Long")
    .required("Services offered is required"),
  special_services: Yup.string()
    .min(10, "Special services is Short")
    .max(100, "Special services is Long")
    .required("Special services is required"),
  specialization: Yup.string()
    .min(10, "Specialization is Short")
    .max(100, "Specialization is Long")
    .required("Specialization is required"),
  description: Yup.string()
    .min(10, "Description is Short")
    .max(100, "Description is Long")
    .required("Description is required"),
  city: Yup.string().min(3, "City is Short").required("City is Required"),
  years_exp: Yup.string()
    .min(1, "Years of Experience is Short")
    .required("Years of Experience is Required"),
  promotional_headline: Yup.string()
    .min(10, "Promotional Headline is Short")
    .max(100, "Promotional Headline is Long")
    .required("Promotional Headline is required"),
  // qualifications: Yup.array()
  //   .of(
  //     Yup.object().shape({
  //       institution: Yup.string()
  //         .min(10, "Institution is Short")
  //         .max(100, "Institution is Long")
  //         .required("Institution is required"),
  //       program: Yup.string()
  //         .min(10, "Program is Short")
  //         .max(100, "Program is Long")
  //         .required("Program is required"),
  //     })
  //   )
  //   .required("At least one qualification is required"),
  // experience: Yup.array()
  //   .of(
  //     Yup.object().shape({
  //       institution: Yup.string()
  //         .min(10, "Institution is Short")
  //         .max(100, "Institution is Long")
  //         .required("Institution is required"),
  //       designation: Yup.string()
  //         .min(10, "Designation is Short")
  //         .max(100, "Designation is Long")
  //         .required("Designation is required"),
  //     })
  //   )
  //   .required("At least one experience is required"),
  // availability: Yup.array()
  //   .of(
  //     Yup.object().shape({
  //       from: Yup.string()
  //         .required("From Time is required")
  //         .matches(
  //           /^(?:[01]\d|2[0-3]):[0-5]\d$/,
  //           "Invalid time format (HH:MM)"
  //         ),
  //       to: Yup.string()
  //         .required("To Time is required")
  //         .matches(
  //           /^(?:[01]\d|2[0-3]):[0-5]\d$/,
  //           "Invalid time format (HH:MM)"
  //         ),
  //       location: Yup.string()
  //         .min(10, "Location is Short")
  //         .max(100, "Location is Long")
  //         .required("Location is required"),
  //       price: Yup.number()
  //         .min(1, "Price is Short")
  //         .required("Price is required"),
  //     })
  //   )
  //   .required("At least one availability is required"),
  // online_consultation: Yup.object().shape({
  //   from: Yup.string()
  //     .required("From Time is required")
  //     .matches(/^(?:[01]\d|2[0-3]):[0-5]\d$/, "Invalid time format (HH:MM)"),
  //   to: Yup.string()
  //     .required("To Time is required")
  //     .matches(/^(?:[01]\d|2[0-3]):[0-5]\d$/, "Invalid time format (HH:MM)"),
  //   price: Yup.number().min(1, "Price is Short").required("Price is required"),
  // }),
});
