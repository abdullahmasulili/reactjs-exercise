import Logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <h1 id="title">
        <img src={Logo} alt="application logo" />
        REACTFOOD
      </h1>
      <button className="text-button">Cart (0)</button>
    </header>
  );
}
