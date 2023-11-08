import "./Header.css";
import logoImg from "../../images/logo.jpg";


const Header = () => {
 return (
    <header className="header">
        <div className="header__section">
            <img className="header__section-image" src={logoImg} alt="A restaurant" />
            <h1 className="header__section-title"> ReactFood</h1>
        </div>
        <nav>
            <button className="header__button">Cart (0)</button>
        </nav>
    </header>
 )
}

export default Header