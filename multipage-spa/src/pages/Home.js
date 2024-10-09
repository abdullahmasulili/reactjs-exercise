import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Go to <Link to="/products">products page</Link>
      </p>
    </>
  );
}
