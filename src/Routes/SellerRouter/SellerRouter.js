import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../context/AuthProvider';
import useSeller from '../../Hook/useSeller';

const SellerRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const [seller, sellerLoading] = useSeller(user?.email)
    if (loading || sellerLoading) {
        return <Spinner></Spinner>
    }
    else if (user && seller) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRouter;