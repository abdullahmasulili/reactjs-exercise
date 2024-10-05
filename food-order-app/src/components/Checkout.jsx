import { useContext } from "react";
import { Form, Formik } from "formik";

import { UserProgressContext } from "../context/user-progress-context";

import { currency } from "../util/formatter";
import { OrderSchema } from "../util/validationSchema";

import Modal from "./Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { CartContext } from "../context/products-cart-context";
import { addOrder } from "../api/products";

export default function Checkout() {
  const { hideModal: hideCheckout, progress } = useContext(UserProgressContext);
  const { cartTotal, products } = useContext(CartContext);

  async function handleSubmit(values) {
    const order = {
      customer: values,
      items: products,
    };

    try {
      await addOrder(order);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Modal open={progress === "checkout"} onClose={hideCheckout}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          street: "",
          ["postal-code"]: "",
          city: "",
        }}
        validationSchema={OrderSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <h2>Checkout</h2>
            <p>Total Amount : {currency.format(cartTotal)}</p>
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
                type="text"
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
            <div className="modal-actions">
              <Button textOnly type="button" onClick={hideCheckout}>
                Close
              </Button>
              <Button type="submit">Submit Order</Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
