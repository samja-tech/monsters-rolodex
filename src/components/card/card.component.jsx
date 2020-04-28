import React from 'react';
import './card.styles.css'


export const Card = probs =>
(
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${probs.monster.id}?set=set2&size=180x180`}/>
        <h2>{probs.monster.name}</h2>        
        <p>{probs.monster.email}</p> 
    </div>
);