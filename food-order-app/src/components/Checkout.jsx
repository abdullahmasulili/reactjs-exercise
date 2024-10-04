import { currency } from "../util/currency";
import Input from "./Input";

export default function Checkout() {
  return (
    <>
      <p>Total Amount : {currency.format(84)}</p>
      <form>
        <Input type="text" label="Full Name" />
        <Input type="email" label="E-mail Address" inputMode="email" />
        <Input type="address" label="Street" />
        <div className="control-row">
          <Input type="text" label="Postal Code" />
          <Input type="text" label="City" />
        </div>
      </form>
    </>
  );
}
