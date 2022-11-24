import React from 'react';
import spinnerPrimary from '../../assets/spinner-primary.gif'

const Spinner = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <img src={spinnerPrimary} alt="spinner" />
        </div>
    );
};

export default Spinner;