import * as Yup from "yup";

export const ContactYup = Yup.object({
  yourName: Yup.string()
    .required("Required")
    .max(15, "Must be 15 characters or less."),

  subject: Yup.string()
    .required("Required")
    .max(20, "Must be 20 characters or less."),

  email: Yup.string()
    .required("Required")
    .email("Invalid email address.")
    .max(50, "Must be 50 characters or less."),

  message: Yup.string().max(50, "Must be 50 characters or less."),
});