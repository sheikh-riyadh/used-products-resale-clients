import React from 'react';
import { Link } from 'react-router-dom';
import Page_404 from '../../assets/404_page.svg'

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-5 uppercase'>Opps.. page not found</h1> <Link className='hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0' to='/'>return to home</Link>
            <img className='w-6/12 mx-auto py-10' src={Page_404} alt="404" />
        </div>
    );
};

export default ErrorPage;