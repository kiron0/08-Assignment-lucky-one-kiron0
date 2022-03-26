import React from 'react';
import DisplayCartInfo from '../DisplayCartInfo/DisplayCartInfo';
import RandomItem from '../RandomItem/RandomItem';
import './Cart.css'

const Cart = (props) => {
    const {cart, removeFromCart, clearCart, chooseRandom, random} = props;

    return (
        <>
        <div className='cart reverse-main'>
            <h3>Selected Courses</h3>
            {
                cart.map(courseInfo => <DisplayCartInfo
                    key={courseInfo.id}
                    courseInfo={courseInfo} removeFromCart={removeFromCart}
                ></DisplayCartInfo>)
            }
            <RandomItem random={random}></RandomItem>
            <div className='cart-btn'>
            {
            cart.length > 1 ?  <button onClick={chooseRandom}>Choose One For Me</button> : <div></div>
            }
            <br />
            {
            cart.length > 0 ?  <button onClick={clearCart}>Choose Again</button> : <div></div>
            }
            </div>
        </div>
        </>
    );
};

export default Cart;