import React from 'react';
import logo from '../../../assets/logo-light.png'

const Footer = () => {
    return (
        <div className='bg-footer-image bg-fixed bg-cover bg-no-repeat bg-center'>
            <footer className="p-5 lg:px-20 bg-black bg-opacity-90 text-base-content">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 text-start justify-center'>
                    <div className='text-white md:p-10 text-start'>
                        <img className='w-48' src={logo} alt="logo" />
                        <p className='text-start mt-5'>We provide everything you <br />need to build an amazing dealership website <br /> developed especially for car sellers dealers or auto motor retailers.</p>
                        <p>Phone: 0123456789</p>
                        <p>Location: Dhaka postogola 1204 nafez nagar</p>
                        <p>Email: example@gmail...com</p>
                    </div>
                    <div className='text-white md:p-10'>
                        <span className="footer-title block">Services</span>
                        <p href='/' className="link link-hover">Buying</p>
                        <p href='/' className="link link-hover">Selling</p>
                        <p href='/' className="link link-hover">Marketing</p>
                        <p href='/' className="link link-hover">Advertisement</p>
                    </div>
                    <div className='text-white md:p-10'>
                        <span className="footer-title block">Company</span>
                        <p href='/' className="link link-hover">About us</p>
                        <p href='/' className="link link-hover">Contact</p>
                        <p href='/' className="link link-hover">Jobs</p>
                        <p href='/' className="link link-hover">Press kit</p>
                    </div>
                    <div className='text-white md:p-10'>
                        <span className="footer-title block">Legal</span>
                        <p href='/' className="link link-hover">Terms of use</p>
                        <p href='/' className="link link-hover">Privacy policy</p>
                        <p href='/' className="link link-hover">Cookie policy</p>
                    </div>
                </div>
            </footer>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:px-20 bg-black bg-opacity-90'>
                <div className='rounded-md bg-secondary bg-opacity-20 p-10 text-white md:p-10 text-start'>
                    <h2>ARE YOU LOOKING FOR A CAR?</h2>
                    <p>Search Our Inventory With Thousands Of Cars And More Cars Are Adding On Daily Basis</p>
                    <button className='mt-5 hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0'> readm more</button>
                </div>
                <div className='rounded-md bg-secondary bg-opacity-20 p-10 text-white md:p-10 text-start'>
                    <h2>DO YOU WANT TO SELL A CAR?</h2>
                    <p>Search Our Inventory With Thousands Of Cars And More Cars Are Adding On Daily Basis</p>
                    <button className='mt-5 hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white  btn border-0'> readm more</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;