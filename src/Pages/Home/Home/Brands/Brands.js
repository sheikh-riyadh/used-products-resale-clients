import React from 'react';
import Brand1 from '../../../../assets/brans-1.png'
import Brand2 from '../../../../assets/brans-2.png'
import Brand3 from '../../../../assets/brans-3.png'
import Brand4 from '../../../../assets/brans-4.png'
import Brand5 from '../../../../assets/brans-5.png'


const Brands = () => {
    return (
        <div className='px-5 my-5 lg:my-20 lg:px-20'>
            <h2 className='my-5 text-3xl lg:text-5xl font-bold uppercase'>Our Brands</h2>
            <div>
                <div className="divider before:bg-primary after:bg-secondary mx-auto w-2/12 m-0 p-0"></div>
                <div className="divider before:bg-primary after:bg-secondary mx-auto w-1/12 m-0 p-0"></div>
            </div>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-7 mt-5 lg:grid-cols-5 justify-items-center'>
                <img className="p-5 w-full hover:shadow-md hover:rounded-md" src={Brand1} alt="Brands" />
                <img className="p-5 w-full hover:shadow-md hover:rounded-md" src={Brand2} alt="Brands" />
                <img className="p-5 w-full hover:shadow-md hover:rounded-md" src={Brand3} alt="Brands" />
                <img className="p-5 w-full hover:shadow-md hover:rounded-md" src={Brand4} alt="Brands" />
                <img className="p-5 w-full hover:shadow-md hover:rounded-md" src={Brand5} alt="Brands" />
            </div>
        </div>
    );
};

export default Brands;