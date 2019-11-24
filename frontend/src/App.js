import React, { useState } from 'react';
import logo from './logo.svg';
import GrubList from './components/GrubList/GrubList';
import NewGrub from './components/NewGrub/NewGrub';
import './App.css';

function App() {
  const [grub, setGrub] = useState([]);

  const addNewGrubHandler = newGrub => {
    // setGrub(grub.concat(newGrub));
    setGrub(prevGrub => {
      prevGrub.unshift(newGrub);
      const newList = [...prevGrub];
      return newList;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="grub-suggs">
          <h2>Find Grub</h2>
          <NewGrub onAddGrub={addNewGrubHandler} />
          <GrubList grubs={grub} />
        </div>
      </header>
    </div>
  );
}

export default App;
