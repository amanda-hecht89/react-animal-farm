import React from 'react';
import backgroundImg from '../farmbackground.jeg';
import './Main.css';
import Animals from '../Animals/Animals';

export default function Main({ animal }) {
    return (
        <main style={( backgroundImage: `url(${backgroundImg})` )}>
        {
            Animals.map({animal, i} => <Animals
                key={animal.name + i}
                {...animal}/>)
        }
        </main>
    );
}
