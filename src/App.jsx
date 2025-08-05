import React from 'react';
import Header from './HEader';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='container grid lg:grid-cols-[218px_1fr] place-content-center place-items-center gap-[3.5rem]'>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default App;