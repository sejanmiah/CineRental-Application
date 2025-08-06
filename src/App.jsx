import React, { useState } from "react";
import Header from "./HEader";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";
import Footer from "./Footer";
import { MovieContext } from "./context";

const App = () => {
  const [cartData, setCartData] = useState([])
  return (
    <>
      <MovieContext.Provider value={{cartData,setCartData}}>
        <Header></Header>
        <div className="container mx-auto grid lg:grid-cols-[218px_1fr] place-content-center  gap-[3.5rem]">
          <Sidebar></Sidebar>
          <MovieList></MovieList>
        </div>
        <Footer></Footer>
      </MovieContext.Provider>
    </>
  );
};

export default App;
