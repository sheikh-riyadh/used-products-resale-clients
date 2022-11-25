import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../../Components/Modal/BookingModal';
import Product from './Product';

const CategoryProducts = () => {

    const [modalDetails, setModalDetails] = useState(null)
    const categoryProducts = useLoaderData()
    return (
        <div>
            <div className='bg-black'>
                <div className="hero h-96 bg-category-image bg-cover bg-fixed bg-no-repeat">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">PRODUCTS LIST</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-5 lg:w-9/12 mx-auto my-28'>
                {
                    categoryProducts.map(product => <Product
                        key={product._id}
                        product={product}
                        setModalDetails={setModalDetails}
                    ></Product>)
                }
                <Link to='/home' className='hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0'>Back to categories</Link>

            </div>
            {modalDetails && <BookingModal
                modalDetails={modalDetails}
            ></BookingModal>}
        </div>
    );
};

export default CategoryProducts;