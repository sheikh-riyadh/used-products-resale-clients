import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../Hook/useAdmin';

const AdminRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const [admin, adminLoading] = useAdmin(user?.email)
    if (loading || adminLoading) {
        return <Spinner></Spinner>
    }
    else if (user && admin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRouter;