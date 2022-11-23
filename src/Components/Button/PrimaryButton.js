import React from 'react';

const PrimaryButton = ({ children, handler, customclass }) => {
    return (
        <button
            onClick={handler}
            className={`hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0 ${customclass}`}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;