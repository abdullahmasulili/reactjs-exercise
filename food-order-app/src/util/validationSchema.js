import * as Yup from "yup";

export const OrderSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  street: Yup.string().min(5, "Too Short").required("Required"),
  ["postal-code"]: Yup.string().min(3, "Too Short").required("Required"),
  city: Yup.string().min(3, "Too Short").required("Required"),
});
