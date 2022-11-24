import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../Components/Button/PrimaryButton';
import logo from '../../../assets/logo-dark.png'
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {
    const { logOutUser, user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOutUser().then(() => {
            navigate('/')
        }).catch(e => console.log(e))
    }



    const headerItems = () => {
        return <>
            <li className='mr2 lg:mr-5'><Link to='/home'>Home</Link></li>
            <li className='mr2 lg:mr-5'><Link to='/login'>Login</Link></li>
            <li className='mr2 lg:mr-5'><Link to='/register'>Register</Link></li>
            <li className='mr2 lg:mr-5'><Link to='/dashboad'>Dashboad</Link></li>
            <li className='mr2 lg:mr-5'><Link to='/my-products'>My products</Link></li>
            <li className='mr2 lg:mr-5'><Link to='/add-product'>Add product</Link></li>
            <li className='mr2 lg:mr-5'><Link to='/my-orders'>My orders</Link></li>
            {user?.uid && <li><button onClick={handleLogOut}>Log out</button></li>}
        </>
    }
    return (
        <div>
            <div className="navbar bg-base-100 lg:py-5 lg:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                headerItems()
                            }
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-xl">
                        <img className='w-48' src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            headerItems()
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Header;