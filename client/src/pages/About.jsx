import React from 'react';

export const About = () => {
    return (
        <div className='container mx-auto flex flex-col items-center justify-center text-green-400 py-7'>
            <h1 className='text-7xl text-green-400 py-7'>About Us</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro laboriosam quasi animi dolorem dolores, harum cumque quae, consequatur sit numquam aperiam esse dolorum quia placeat eligendi pariatur in! Natus quo fugiat voluptate consequatur debitis, neque exercitationem quia pariatur ea velit quod illo rerum aliquam maxime eligendi veniam odio. Dignissimos, possimus.</p>
            </div>
            <div className='flex flex-row justify-between w-f py-7'>
                <div className='w-40'>
                    <h2 className='text-4xl'>Our Mission</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
                <div className='w-40'>
                    <h2 className='text-4xl'>Our Vision</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p> 
                </div>
            </div>
        </div>
    );
};

