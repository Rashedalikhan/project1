import style from '../css/Home.module.css';
import React from 'react';

export const Home = () => {
    return (
        <div className={style.container}>
            <div className="w-2/4">
                <img src="monika-grabkowska-P1aohbiT-EY-unsplash.jpg" alt="" className='rounded-r rounded-l' />
            </div>
            <div className='w-2/4 px-5 text-lime-400'>
                <h1 className='text-3xl font-serif py-3' >This is Rashed Ecommerce webiste</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem earum odio repellendus ipsa vel soluta architecto.</p>
            </div>
        </div>
    );
};
