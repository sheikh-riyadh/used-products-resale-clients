import React from 'react';
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Category = ({ category }) => {
    const { categoryName, image, rating } = category
    return (
        <div>

            <div className="card card-compact bg-slate-100 shadow-xl">
                <figure><img className='w-full' src={image} alt="categoryImage" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{categoryName}</h2>
                    <p className='flex gap-2 items-center text-primary text-lg'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        {rating}
                    </p>
                    <div className="card-actions">
                        <Link to={`/category-products/${categoryName}`} className="hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0 w-full">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;