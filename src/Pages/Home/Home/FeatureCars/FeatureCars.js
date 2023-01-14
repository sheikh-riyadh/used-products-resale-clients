import React from 'react';
import feacturecar1 from '../../../../assets/feature_car1.jpg'
import feacturecar2 from '../../../../assets/feature_car2.jpg'
import feacturecar3 from '../../../../assets/feature_car3.jpg'

const FeatureCars = () => {
    return (
        <div className='px-5 my-5 lg:my-20 lg:px-20'>
            <h2 className='my-5 text-3xl lg:text-5xl font-bold uppercase'>Feature Cars</h2>
            <div>
                <div className="divider before:bg-primary after:bg-secondary mx-auto w-2/12 m-0 p-0"></div>
                <div className="divider before:bg-primary after:bg-secondary mx-auto w-1/12 m-0 p-0"></div>
            </div>
            <div className='grid grid-cols-1 gap-7 mt-5 md:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <figure><img className='image-full rounded-md' src={feacturecar1} alt="Shoes" /></figure>
                </div>
                <div>
                    <figure><img className='image-full rounded-md' src={feacturecar2} alt="Shoes" /></figure>
                </div>
                <div>
                    <figure><img className='image-full rounded-md' src={feacturecar3} alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default FeatureCars;