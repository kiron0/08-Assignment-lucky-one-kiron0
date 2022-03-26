import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Hero from '../Hero/Hero';
import './Heroes.css'

const Heroes = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/fakeData.json')
        .then(res => res.json())
        .then(data => setHeroes(data));
    }, []);

   /* Cart functionality */
    const [cart, setCart] = useState([]);
    const handleAddToCart = (course) => {
    const newCourse = [...cart, course];
        if (cart.length === 0) {
        setCart(newCourse);
        } else {
      const newCart = [...cart];
      const index = newCart.findIndex((item) => item.id === course.id);
      if (index === -1) {
        setCart(newCourse);
        } else {
        newCart[index] = course;
        setCart(newCart);
       }
     }
    };

    /* Remove individually item from cart */
    const removeFromCart = (id) => {
        const newList = cart.filter((item) => item.id !== id);
        setCart(newList);
    };

    /* Remove all item from cart */
    const clearCart = () => {
        const newList = [];
        setCart(newList);
    };
    /* Show random items */
    const [random, setRandom] = useState([]);
    const chooseRandom = () =>{
        const random = cart[Math.floor(Math.random() * cart.length)]; 
        setRandom(random);
        // console.log(random)
    }

    return (
        <div className='course-container'>
            
            <div className='heroes-container reverse-main'>
            {
                heroes.map(hero => <Hero key={hero.id} learningHeroes={hero} handleAddToCart={handleAddToCart}></Hero>)
            }
            </div>

            <div className="cart-container">
                <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} chooseRandom={chooseRandom} random={random}></Cart>
            </div>

        </div>
    );
};

export default Heroes;