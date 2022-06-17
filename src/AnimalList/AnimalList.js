import React from 'react';
import './AnimalList.css';
import backgroundImg from '../background.png';
import Animals from '../Animals/Animals';

export default function AnimalList({ animals }) {
  return (
    <div className='back' style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        animals.map((animal, i) => <Animals key={animal.name + i} name={animal.name} says={animal.says} type={animal.type} />)
      }
    </div>);
}