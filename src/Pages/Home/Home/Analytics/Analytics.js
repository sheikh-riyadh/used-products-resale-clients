import React from 'react';
import { FaCar, FaRocketchat, FaUserAlt, FaAward } from 'react-icons/fa'

const Analytics = () => {
    return (
        <div className='bg-primary'>
            <div className='grid grid-cols-1 gap-7 mt-5 md:grid-cols-2 lg:grid-cols-4 px-5 my-5 lg:my-20 lg:px-20 text-white py-16 lg:justify-items-center'>
                <div className='border-l-4'>
                    <div className='ml-5'>
                        <h3 className='text-start text-lg font-semibold'>VEHICLES IN STOCK</h3>
                        <div className='mt-2 text-3xl flex gap-5 items-center'>
                            <FaCar></FaCar>
                            <h4 className='font-semibold'>531</h4>
                        </div>
                    </div>
                </div>
                <div className='border-l-4'>
                    <div className='ml-5'>
                        <h3 className='text-start text-lg font-semibold'>DEALER REVIEWS</h3>
                        <div className='mt-2 text-3xl flex gap-5 items-center'>
                            <FaRocketchat></FaRocketchat>
                            <h4 className='font-semibold'>789</h4>
                        </div>
                    </div>
                </div>
                <div className='border-l-4'>
                    <div className='ml-5'>
                        <h3 className='text-start text-lg font-semibold'>HAPPY CUSTOMER</h3>
                        <div className='mt-2 text-3xl flex gap-5 items-center'>
                            <FaUserAlt></FaUserAlt>
                            <h4 className='font-semibold'>856</h4>
                        </div>
                    </div>
                </div>
                <div className='border-l-4'>
                    <div className='ml-5'>
                        <h3 className='text-start text-lg font-semibold'>AWARDS</h3>
                        <div className='mt-2 text-3xl flex gap-5 items-center'>
                            <FaAward></FaAward>
                            <h4 className='font-semibold'>356</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;