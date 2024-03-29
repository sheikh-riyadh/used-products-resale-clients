import React from 'react';
import { Link } from 'react-router-dom';
import car from '../../../../assets/red-car.png'

const Banner = () => {
    return (
        <div className='bg-banner bg-cover'>
            <div className='grid h-72 md:h-96 lg:min-h-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-12 justify-center items-center px-5 lg:px-10 xl:px-20'>
                <div className='lg:col-span-5 mt-10 lg:mt-20 text-start'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl'><span className='lg:text-7xl'>Need</span> some new <span className='lg:text-7xl'>Wheels</span>
                    </h1>
                    <p className='my-2 lg:my-6 lg:text-2xl'>Buy & sell your car on cardealer</p>
                    <div className='flex items-center lg:hidden'>
                        <Link className='bg-gradient-to-r from-primary to-red-500 text-white px-4 py-1 rounded-md border-0'>get start</Link>
                    </div>
                    <div className='hidden lg:block'>
                        <button className='hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0'>Let get started</button>
                    </div>
                </div>
                <div className='hidden md:block lg:block lg:col-span-7 mt-28'>
                    <img className='hidden md:block lg:block w-full' src={car} alt="Car" />
                </div>
            </div>
        </div>
    );
};

export default Banner;