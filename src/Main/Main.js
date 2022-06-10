import React from 'react';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList';

export default function Main({ animals }) {
  return (
    <AnimalList animals={ animals }/>
  );
}
