import React from 'react';
import { Link } from 'react-router-dom';
import car from '../../../assets/red-car.png'
import PrimaryButton from '../../../Components/Button/PrimaryButton';

const Banner = () => {
    return (
        <div className='bg-banner bg-cover'>
            <div className='grid h-72 lg:min-h-screen grid-cols-2 lg:grid-cols-12 justify-center items-center px-5 lg:px-20'>
                <div className='lg:col-span-4 mt-10 lg:mt-20 text-start'>
                    <h1 className='text-xl md:text-4xl lg:text-6xl'><span className='lg:text-7xl'>Need</span> some new <span className='lg:text-7xl'>Wheels</span>
                    </h1>
                    <p className='my-2 lg:my-6 lg:text-2xl'>Buy & sell your car on cardealer</p>
                    <div className='flex items-center lg:hidden'>
                        <Link className='bg-gradient-to-r from-primary to-red-500 text-white px-4 py-1 rounded-md border-0'>get start</Link>
                    </div>
                    <div className='hidden lg:block'>
                        <PrimaryButton>Let's get started</PrimaryButton>
                    </div>
                </div>
                <div className='lg:col-span-8 mt-28'>
                    <img className='w-full' src={car} alt="Car" />
                </div>
            </div>
        </div>
    );
};

export default Banner;