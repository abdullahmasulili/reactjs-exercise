import Logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={Logo} alt="header_logo" />
      <h1>Investmen Calculator</h1>
    </header>
  );
}
