import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../Hook/useAdmin';
import useSeller from '../Hook/useSeller';
import Header from '../Pages/Shared/Header/Header';

const DashboadLayout = () => {
    const { user } = useContext(AuthContext)
    const [admin] = useAdmin(user?.email)
    const [seller] = useSeller(user?.email)
    return (
        <div>
            <Header></Header>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            admin && <>
                                <li><Link to='/dashboad/all-buyers'>All buyers</Link></li>
                                <li><Link to='/dashboad/all-seller'>All sellers</Link></li>
                            </>
                        }
                        {
                            seller && <>
                                <li><Link to='/dashboad/all-buyers'>Add products</Link></li>
                                <li><Link to='/dashboad/all-seller'>My products</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboadLayout;