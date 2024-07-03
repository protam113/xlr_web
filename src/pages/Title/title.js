import React from 'react';

const Title = ({ subTitle, title }) => {
    return (
    <div className='title text-center'>
        <p className='text-3xl font-extrabold tracking-wide red_gradient'>{subTitle}</p>
        <h2 className='text-2xl  text-red-900 mt-2'>{title}</h2>
    </div>
    );
};

export default Title;
