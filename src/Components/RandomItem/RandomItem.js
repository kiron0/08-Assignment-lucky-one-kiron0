import React from 'react';
import './RandomItem.css'

const RandomItem = ({random}) => {
    const {instructor, image} = random;

    return (
            instructor ? ( <div>
            <h4 className='random'>Random Selection</h4>
           <h4 className='random-info'>
           <span> 
                <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={image} alt="" /> 
            </span> 
            {instructor}
           </h4>
        </div>) : <div></div> 
       
    );
};

export default RandomItem;