import React from 'react';
import './RandomItem.css'

const RandomItem = ({random}) => {
    const {instructor} = random;
    return (
        <div>
            <h4>Random Selection</h4>
            <p>{instructor}</p>
        </div>
    );
};

export default RandomItem;