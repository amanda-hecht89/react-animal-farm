import React from 'react';
import backgroundImg from '../farmbackground.jpeg';
import './Main.css';
import Animals from '../Animals/Animals';

export default function Main({ animals }) {
    return (
        <main style={( backgroundImage: `url(${backgroundImg})` )}>
        {
            animals.map({animal, i} => <Animals
                key={animal.name + i}
                {...animal}/>)
        }
        </main>
    );
}
