import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import './Heroes.css'

const Heroes = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/fakeData.json')
        .then(res => res.json())
        .then(data => setHeroes(data));
    }, []);

    return (
        <div className='course-container'>
            <div className='heroes-container reverse-main'>
            {
                heroes.map(hero => <Hero key={hero.id} learningHeroes={hero}></Hero>)
            }
            </div>
        </div>
    );
};

export default Heroes;