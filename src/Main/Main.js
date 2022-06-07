import React from 'react';
import './Main.css';
import AnimalList from '../Animals/Animals';

export default function Main({ animals }) {
  return (
    <AnimalList animals={ animals }/>
  );
}
