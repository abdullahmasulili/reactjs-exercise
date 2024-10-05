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
import useFetch from "../hooks/useFetch";
import Error from "./Error";

export default function Checkout() {
  const { hideModal: hideCheckout, progress } = useContext(UserProgressContext);
  const { cartTotal, products, clearCart } = useContext(CartContext);
  const {
    isLoading: isSubmitting,
    error,
    fetchData,
  } = useFetch(addOrder, undefined, "POST");

  async function handleSubmit(values) {
    const order = {
      customer: values,
      items: products,
    };

    await fetchData(order);
  }

  function handleFinishSubmit() {
    hideCheckout();
    clearCart();
  }

  let actions = (
    <>
      <Button textOnly type="button" onClick={hideCheckout}>
        Close
      </Button>
      <Button type="submit">Submit Order</Button>
    </>
  );

  if (isSubmitting) {
    actions = <span>Submitting order, please wait...</span>;
  }

  if (fetchData && !error) {
    return (
      <Modal open={progress === "checkout"} onClose={handleFinishSubmit}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <div className="modal-actions">
          <Button onClick={handleFinishSubmit}>Okay</Button>
        </div>
      </Modal>
    );
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
            {error && (
              <Error title="Failed to submit order" message={error.message} />
            )}
            <div className="modal-actions">{actions}</div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
