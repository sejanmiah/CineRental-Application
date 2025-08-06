import React, { useState } from "react";
import logo from "./assets/logo.svg";
import ringIcon from "./assets/ring.svg";
import moonIcon from "./assets/icons/moon.svg";
import cartIcon from "./assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";

const Header = () => {
  const [showCart, setShowCart] = useState(false)
  function handleCartShow() {
    setShowCart(true)
  }
  return (
    <header className="flex justify-center items-center">
      {
        showCart && <CartDetails onClose={()=>setShowCart(false)} />
      }
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="/">
          <img src={logo} width="139" height="26" alt="Cine Rental Logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-blue-100 dark:bg-blue-900 rounded-lg p-1 inline-block"
              href="#"
            >
              <img src={ringIcon} width="24" height="24" alt="Notifications" />
            </a>
          </li>
          <li>
            <a
              className="bg-blue-100 dark:bg-blue-900 rounded-lg p-1 inline-block"
              href="#"
            >
              <img
                src={moonIcon}
                width="24"
                height="24"
                alt="Toggle Dark Mode"
              />
            </a>
          </li>
          <li>
            
            <a
            onClick={handleCartShow}
              className="bg-blue-100 dark:bg-blue-900 rounded-lg p-1 inline-block"
              href="#"
            >
              <img src={cartIcon} width="24" height="24" alt="Shopping Cart" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
