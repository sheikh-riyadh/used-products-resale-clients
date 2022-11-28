import React from 'react';

const Product = ({ product }) => {
    const { carName, carPhoto, condition, resalePrice, sellerPhoto, sellerName, categoryName } = product
    return (
        <div className="card bg-base-100 shadow-xl text-start">
            <figure><img src={carPhoto} alt="carPhoto" /></figure>
            <div className="card-body">
                <h2 className="card-title">{carName}</h2>
                <div className='flex gap-3 items-center'>
                    <img className='rounded-full w-10' src={sellerPhoto} alt="seller" />
                    <span>{sellerName}</span>
                </div>
                <p>Condition: {condition}</p>
                <p>Price: ${resalePrice}</p>
                <p>Category: {categoryName}</p>
                <div className="card-actions justify-end">
                    <button className="hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 w-full text-white btn border-0">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;