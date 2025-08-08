import React, { useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // default false

  return (
    <ThemeContext.Provider value={[darkMode, setDarkMode]}>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        {/* ✅ Apply "dark" class here conditionally */}
        <div className={darkMode ? "dark" : ""}>
          <Page />
        </div>
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
