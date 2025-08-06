import React, { useContext, useState } from "react";
import logo from "./assets/logo.svg";
import ringIcon from "./assets/ring.svg";
import moonIcon from "./assets/icons/moon.svg";
import cartIcon from "./assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
import { MovieContext } from "./context";

const Header = () => {
  const [showCart, setShowCart] = useState(false)
  const {cartData} = useContext(MovieContext)
  console.log(cartData  );
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
              <div className="flex relative justify-between items-center">
              <img src={cartIcon} width="24" height="24" alt="Shopping Cart" />

              {
                cartData.length > 0 && (
                  <span className="text-white font-bold absolute bg-[#39e1aa] py-0 px-2 -top-4 left-3 rounded-full ">{cartData.length}</span>
                )
              }
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
