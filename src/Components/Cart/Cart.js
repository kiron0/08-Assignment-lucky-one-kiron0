import React from 'react';
import DisplayCartInfo from '../DisplayCartInfo/DisplayCartInfo';
import './Cart.css'

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div className='cart reverse-main'>
            <h3>Selected Course</h3>
            {
                    cart.map(courseInfo => <DisplayCartInfo
                        key={courseInfo.id}
                        courseInfo={courseInfo} removeFromCart={removeFromCart}
                    ></DisplayCartInfo>)
                }
        </div>
    );
};

export default Cart;