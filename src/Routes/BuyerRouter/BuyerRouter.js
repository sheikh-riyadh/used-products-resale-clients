import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../context/AuthProvider';
import useBuyer from '../../Hook/useSeller';

const BuyerRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const [buyer, buyerLoading] = useBuyer(user?.email)

    console.log('buyer loading', buyerLoading)
    console.log('user loading', loading)
    if (loading || buyerLoading) {
        return <Spinner></Spinner>
    }
    if (user && buyer) {
        console.log('got buyer')
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default BuyerRouter;