import React from 'react';
import DisplayCartInfo from '../DisplayCartInfo/DisplayCartInfo';
import './Cart.css'

const Cart = (props) => {
    const {cart, removeFromCart, clearCart} = props;
    // if cart items is greater than 4 then slow alert
    if (cart.length > 4) {
        alert('Add only 4 items in cart');
    }
    return (
        <div className='cart reverse-main'>
            <h3>Selected Courses</h3>
            {
                cart.map(courseInfo => <DisplayCartInfo
                    key={courseInfo.id}
                    courseInfo={courseInfo} removeFromCart={removeFromCart}
                ></DisplayCartInfo>)
            }
            <div className='cart-btn'>
            <button>Choose 1 For Me</button><br />
            <button onClick={clearCart}>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;