import React, { useEffect } from 'react';

const AnimatedGrid = () => {
    useEffect(() => {
        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            setInterval(() => {
                const newColor = randomColor();
                square.style.backgroundColor = newColor;
                square.style.color = getContrastingColor(newColor);
            }, Math.random() * 1000 + 500); // Random interval between 500ms and 1500ms
        });
    }, []);

    const randomColor = () => {
        const colors = ['#7dd3fc', '#d8b4fe', '#fca5a5', '#86efac', '#67e8f9', '#cbd5e1'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const getContrastingColor = (backgroundColor) => {
        // Convert hex to RGB
        const hex = backgroundColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        // Calculate the luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        // Return black for light backgrounds and white for dark backgrounds
        return luminance > 0.5 ? '#000000' : '#FFFFFF';
    };

    return (
        <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
            <h1 className="head_text text-center mb-4 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
                Welcome to <span className='font-extrabold red_gradient'>XLR Team</span>
                <br className="max-md:hidden" />
                <span className='block text-xl mt-2'>
                    Your <span className='text-blue-700 font-bold'>full-stack web design experts</span> specializing in both 
                    <span className='text-green-700 font-bold'> backend</span> and 
                    <span className='text-green-700 font-bold'> frontend</span> development.
                </span>
            </h1>
            <div className="grid1 grid-cols-20 gap-1 absolute top-0 left-0 w-full h-full">
                {Array.from({ length: 400 }, (_, i) => (
                    <div
                        key={i}
                        className="square w-full h-full"
                        style={{ backgroundColor: randomColor() }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedGrid;
