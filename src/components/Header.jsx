import FoodFireLogo from "../assets/FoodFireLogo.png";
import "../styles/LoginButton.css"
import { useState } from "react";
import { Link } from "react-router-dom";
// import SignUpButton from "./SignUpButton";
// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [buttonText, setButtonText] = useState('Login')

  function alignButtonText() {
    const newButtonText = buttonText === 'Login' ? 'Logout' : 'Login';
    setButtonText(newButtonText);
  }

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul style={{ cursor: 'pointer' }}>
          <li><Link to="/">Home</Link></li>
          <li ><Link to="/about">About</Link></li>
          <li ><Link to="/contact">Contact</Link></li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <button className="login-button" onClick={() => alignButtonText()}>
            {buttonText}
          </button>
          {/* <div>
           <SignUpButton></SignUpButton>
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
