import React from 'react';
import Main1 from './Component/Main/Main1/Main1';
import Navbar from './Component/Header/Navbar/Navbar';
function App() {
  return (
    <div className="App d-flex flex-column">
      <div id="Navbar">
        <Navbar></Navbar>
      </div>

      <div id="Main">
        <Main1 />
      </div>
      <div></div>
    </div>
  );

}

export default App;
