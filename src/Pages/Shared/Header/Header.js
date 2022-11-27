import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo-dark.png'
import { AuthContext } from '../../../context/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { logOutUser, user, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOutUser().then(() => {
            navigate('/')
        }).catch(e => console.log(e))
    }



    const headerItems = () => {
        return <>
            <li className='mr2 lg:mr-5'><Link to='/home'>Home</Link></li>
            {
                user?.uid ?
                    <>
                        <li><button>{user?.displayName}</button></li>
                        <li className='mr2 lg:mr-5'><Link to='/dashboad'>Dashboad</Link></li>
                        <li><label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">User and buyer</label></li>
                        <li className='mr2 lg:mr-5'><Link to='/my-products'>My products</Link></li>
                        <li className='mr2 lg:mr-5'><Link to='/add-product'>Add product</Link></li>
                        <li className='mr2 lg:mr-5'><Link to='/my-orders'>My orders</Link></li>
                        <li><button onClick={handleLogOut}>Log out</button></li>
                    </>
                    :
                    <>
                        <li className='mr2 lg:mr-5'><Link to='/register'>Register</Link></li>
                        <li className='mr2 lg:mr-5'><Link to='/login'>Login</Link></li>
                    </>


            }
        </>
    }
    return (

        <div>
            {
                user?.uid ?
                    <>
                        <div className="navbar bg-base-100 lg:py-3 lg:px-20">
                            <div className="flex-1">
                                <Link to='/' className="normal-case text-xl">
                                    <img className='w-48' src={logo} alt="logo" />
                                </Link>
                            </div>
                            <div className="flex-none">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn w-14 btn-primary btn-circle avatar">
                                        <div className="avatar">
                                            <div className=" w-full rounded-full">
                                                {
                                                    loading ? <p>loading</p> : <img alt='/' src={user?.photoURL} />
                                                }
                                            </div>
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        {
                                            headerItems()
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="navbar bg-base-100 lg:py-4 lg:px-20 justify-between">
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
                                <Link className="justify-center items-center">
                                    <img className='w-10/12 md:w-44 lg:w-5/12' src={logo} alt="Logo" />
                                </Link>
                            </div>
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal p-0">
                                    {
                                        headerItems()
                                    }
                                </ul>
                                <div className='hidden lg:block'>
                                    <FaUserCircle className='text-2xl'></FaUserCircle>
                                </div>
                            </div>
                            <div className='navbar-end lg:hidden mr-5'>
                                <FaUserCircle className='text-2xl'></FaUserCircle>
                            </div>
                        </div>

                    </>
            }
        </div>
    );
};

export default Header;