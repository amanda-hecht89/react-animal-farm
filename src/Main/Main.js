import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import AnimalList from '../Animals/Animals';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        animals.map((animal, i) => <AnimalList
          key={animal.name + i}
          {...animal}/>)
      }
    </main>
  );
}
