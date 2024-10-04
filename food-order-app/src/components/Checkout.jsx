import { currency } from "../util/currency";
import Input from "./Input";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export default function Checkout() {
  const OrderSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long")
      .required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    street: Yup.string().min(5, "Too Short").required("Required"),
    postalCode: Yup.number("Invalid Input")
      .min(3, "Too Short")
      .required("Required"),
    city: Yup.string().min(3, "Too Short").required("Required"),
  });

  return (
    <>
      <p>Total Amount : {currency.format(84)}</p>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          street: "",
          postalCode: "",
          city: "",
        }}
        validationSchema={OrderSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Input
              type="text"
              label="Full Name"
              name="fullName"
              error={errors.fullName}
              isTouched={touched.fullName}
            />
            <Input
              type="email"
              label="E-mail Address"
              inputMode="email"
              name="email"
              error={errors.email}
              isTouched={touched.email}
            />
            <Input
              type="address"
              label="Street"
              name="street"
              error={errors.street}
              isTouched={touched.street}
            />
            <div className="control-row">
              <Input
                type="number"
                label="Postal Code"
                name="postalCode"
                inputMode="numeric"
                error={errors.postalCode}
                isTouched={touched.postalCode}
              />
              <Input
                type="text"
                label="City"
                name="city"
                error={errors.city}
                isTouched={touched.city}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
