import React, { useEffect, useState } from 'react';

import './NewGrub.css';

const NewGrub = props => {
  const [enteredText, setEnteredText] = useState('');

  const addGrubHandler = event => {
    event.preventDefault();

    if (enteredText.length > 0) {
      const sendReq = async () => {
        const response = await fetch(`http://localhost:5000/api/grub/${enteredText}`);
        const responseData = await response.json();
        const randomIdx = Math.floor(Math.random() * Math.floor(responseData.total));
        const grub = responseData.businesses[randomIdx];
        const newGrub = {
          id: grub.id,
          text: grub.name
        };
    
        props.onAddGrub(newGrub);
      };
      sendReq();
    }
  };

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-grub" onSubmit={addGrubHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Get Suggestion</button>
    </form>
  );
};

export default NewGrub;
