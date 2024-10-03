import Logo from "../assets/logo.jpg";

export default function Header({ onCartClick }) {
  return (
    <header id="main-header">
      <h1 id="title">
        <img src={Logo} alt="application logo" />
        REACTFOOD
      </h1>
      <button className="text-button" onClick={onCartClick}>
        Cart (0)
      </button>
    </header>
  );
}
