import React, {useState} from 'react';
import Logo from '../assets/img/download.png';
import { Link } from 'react-router-dom';
const Title = () => (
    <Link to="/">
        <img 
            className="logo" alt="logo"
            src={Logo}
        />
    </Link>
)

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li>Cart</li>
                {isLoggedIn ? (<button onClick={() => {
                    setIsLoggedIn(false);
                }}>Logout</button>) : (<button onClick={() => {
                    setIsLoggedIn(true);
                }}>Login</button>)}
                </ul>
            </div>
        </div>
    )
}

export default Header;