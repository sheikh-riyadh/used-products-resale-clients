import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../context/AuthProvider';
import useSeller from '../../Hook/useSeller';

const BuyerRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const [buyer, buyerLoading] = useSeller(user?.email)
    if (loading || buyerLoading) {
        return <Spinner></Spinner>
    }
    else if (user && buyer) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default BuyerRouter;