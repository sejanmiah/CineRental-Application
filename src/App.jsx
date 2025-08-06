import React from 'react';
import Header from './HEader';
import Sidebar from './Sidebar';
import MovieList from './cine/MovieList';
import Footer from './Footer';


const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='container mx-auto grid lg:grid-cols-[218px_1fr] place-content-center  gap-[3.5rem]'>
        <Sidebar></Sidebar>
        <MovieList></MovieList>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;