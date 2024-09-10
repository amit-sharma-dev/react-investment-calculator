import logo from '../assets/investment-calculator-logo.png'
export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="Logo of Investemnt Calculator" />
            <h1>Investemtnt Calculator</h1>
        </header>
    );
}