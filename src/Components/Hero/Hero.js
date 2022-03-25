import React from 'react';
import './Hero.css'

const Hero = (props) => {
    const {course_name, image, duration, price, instructor, rate} = props.learningHeroes;
    return (
        <div className='hero'>
            <img src={image} alt="" />
            <h4>{course_name}</h4>
            <p>Instructor: {instructor}</p>
            <p>Duration: {duration}</p>
            <p>Price: $ {price}</p>
            <p className='rating'>Rating: {rate}</p>
            <button onClick={()=> props.handleAddToCart(props.learningHeroes)} className='addToCart'> Add To Cart</button>
        </div>
    );
};

export default Hero;