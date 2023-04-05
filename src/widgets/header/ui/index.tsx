import logo from "assets/logo.png"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <NavLink to={"/"}>
                    <img src={logo} alt="" />
                </NavLink>
            </div>
        </header>
    )
}

export default Header;