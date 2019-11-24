import React from 'react';

import './GrubList.css';

const GrubList = props => {
  return (
    <ul className="grub-list">
      {props.grubs.map(grub => {
        return <li key={grub.id}>{grub.text}</li>;
      })}
    </ul>
  );
};

export default GrubList;
