import React, { useState } from 'react';

import './NewGrub.css';

const NewGrub = props => {
  const [enteredText, setEnteredText] = useState('');

  const addGrubHandler = event => {
    event.preventDefault();

    const newGrub = {
      id: Math.random().toString(),
      text: enteredText
    };

    setEnteredText('');

    props.onAddGrub(newGrub);
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
