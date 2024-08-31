import { NavLink } from "react-router-dom";
import Logo from "../Images/bullish.png"; 
import "../Styles/Navbar.css";

const NavbarComponent = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to="/">
                            <img src={Logo} alt="Logo" style={{ height: "40px", marginRight: "10px",marginBottom: "-5px" }} />
                            StockEd TSEC
                        </NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/About">About</NavLink></li>
                            <li><NavLink to="/Courses">Courses</NavLink></li>
                            <li><NavLink to="/Market">Market</NavLink></li>
                            <li><NavLink to="/News">News</NavLink></li>
                            <li><NavLink to="/Register" className="register">Register</NavLink></li>
                            <li><NavLink to="/Login" className="login">Login</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <hr />
        </>
    );
};

export default NavbarComponent;