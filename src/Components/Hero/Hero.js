import React from 'react';
import './Hero.css'
import { FaStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";

const Hero = (props) => {
    const {learningHeroes, handleAddToCart} = props;
    const {course_name, image, duration, price, instructor, rate} = props.learningHeroes;

    return (
        <div className='hero'>
            <img src={image} alt="" />
            <h4>{course_name}</h4>
            <p>Instructor: <span className='instructor'>{instructor}</span></p>
            <p>Duration: {duration}</p>
            <p>Price: $ {price}</p>
            <p className='rating'>Rating: <FaStar className='star' /> {rate}</p>
            <button onClick={()=> handleAddToCart(learningHeroes)} className='addToCart'><BsCartPlus className='cart-icon'/> Add To Cart</button>
        </div>
    );
};

export default Hero;