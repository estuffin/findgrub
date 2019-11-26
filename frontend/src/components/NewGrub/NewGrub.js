import React, { useState, useEffect } from 'react';

import './NewGrub.css';

const NewGrub = props => {
  const [enteredText, setEnteredText] = useState('');
  const [grubList, setGrubList] = useState([]);

  const addRandomGrub = () => {
    const randomIdx = Math.floor(Math.random() * grubList.length);
    const grub = grubList[randomIdx];
    const newGrub = {
      id: grub.id,
      text: grub.name
    };
    grubList.splice(randomIdx, 1);
    props.onAddGrub(newGrub);
  }

  useEffect(() => {
    if (grubList.length > 0) {
      addRandomGrub();
    }
  }, [grubList]);

  const addGrubHandler = event => {
    event.preventDefault();

    if (!grubList || grubList.length === 0) {
      if (enteredText.length > 0) {
        const sendReq = async () => {
          console.log('here1');
          const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/grub/${enteredText}`);
          const responseData = await response.json();
          const businessesArr = responseData.businesses.map(d => ({ id: d.id, name: d.name }));
          setGrubList([...businessesArr]);
        };
        sendReq();
      }
    } else {
      addRandomGrub();
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
