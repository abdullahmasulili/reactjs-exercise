import { currency } from "../util/formatter";
import Input from "./UI/Input";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export default function Checkout({ onSubmit, children }) {
  const OrderSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long")
      .required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    street: Yup.string().min(5, "Too Short").required("Required"),
    ["postal-code"]: Yup.number("Invalid Input")
      .min(3, "Too Short")
      .required("Required"),
    city: Yup.string().min(3, "Too Short").required("Required"),
  });

  return (
    <>
      <p>Total Amount : {currency.format(84)}</p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          street: "",
          ["postal-code"]: "",
          city: "",
        }}
        validationSchema={OrderSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <Input
              type="text"
              label="Full Name"
              name="name"
              error={errors.name}
              isTouched={touched.name}
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
                name="postal-code"
                inputMode="numeric"
                error={errors["postal-code"]}
                isTouched={touched["postal-code"]}
              />
              <Input
                type="text"
                label="City"
                name="city"
                error={errors.city}
                isTouched={touched.city}
              />
            </div>
            {children}
          </Form>
        )}
      </Formik>
    </>
  );
}
