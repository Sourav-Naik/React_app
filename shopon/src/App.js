import React from 'react';
import Items from './Component/Main/Main1/Items/Items';
import Navbar from './Component/Header/Navbar/Navbar';
function App() {
  return (
    <div className=" header App d-flex flex-column bg-info p-0">
      <div>
        <Navbar></Navbar>
      </div>

      <div className="main">
        <Items />
      </div>
      <div className="footer"></div>
    </div>
  );

}

export default App;
