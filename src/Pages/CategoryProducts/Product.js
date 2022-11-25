import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Product = ({ product, setModalDetails }) => {
    const { categoryName, isVarify, postTime, userYears, originalPrice, resalePrice, productLocation, sellerName, carName, sellerPhoto, carPhoto, _id } = product



    return (
        <div>
            <div className='grid lg:grid-cols-12 ga my-5 shadow-xl rounded-xl'>
                <div className='lg:col-span-5 online'>
                    <img className='rounded-xl h-full' src={carPhoto} alt={carName} />
                </div>
                <div className='lg:col-span-7 text-left p-10'>
                    <h2>{carName}</h2>
                    <p><strong>Category: {categoryName}</strong></p>
                    <p><strong>Original price: ${originalPrice}</strong></p>
                    <p><strong>Selling price: ${resalePrice}</strong></p>
                    <p><strong>Lcation: {productLocation}</strong></p>
                    <p><strong>Year of used: {userYears}</strong></p>
                    <p><strong>Post date: {postTime}</strong></p>
                    <div className='flex gap-5 mt-5'>
                        <div>
                            <img className='rounded-full w-12' src={sellerPhoto} alt="" />
                        </div>
                        <div>
                            <p><strong>Seller: {sellerName}</strong></p>

                            <div className='flex gap-2 items-center'>
                                <p className='inline'>Verified:</p>
                                <p>
                                    {
                                        isVarify === 'true' ? <FaCheckCircle className='text-green-600'></FaCheckCircle>
                                            :
                                            'no verify'
                                    }
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className='flex justify-start mt-5 lg:justify-end'>
                        <label onClick={() => setModalDetails(product)} htmlFor="booking-modal" className='hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0'>Buy now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;