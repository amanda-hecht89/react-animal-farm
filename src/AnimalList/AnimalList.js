import React from 'react';
import './AnimalList.css';
import backgroundImg from '../background.png';

export default function AnimalList({ animals }) {
  return (
    <div className='back' style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        animals.map((animal, i) => <div style={{
          position: 'absolute',
          top: animal.top,
          left: animal.left
        }} key={animal.name + i}>{animal.name}<img src={`/animalImages/${animal.type}.svg`}/>{animal.says}</div>)  
      }
    </div>
  ); 
}