import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../context/AuthProvider';
import { useCheckAdmin } from '../../Hook/useCheckAdmin';

const AdminRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [checkAdmin, loadingAdmin] = useCheckAdmin(user?.email)
    const location = useLocation()
    if (loading || loadingAdmin) {
        return <Spinner></Spinner>
    }
    else if (!checkAdmin) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default AdminRouter;