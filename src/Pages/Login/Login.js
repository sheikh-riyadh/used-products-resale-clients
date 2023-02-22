import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTitle } from '../../Hook/userTitle';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useToken } from '../../Hook/useToken';

const googlePrivider = new GoogleAuthProvider()


const Login = () => {
    useTitle('login')
    let demoemail;
    const { loginUser, signInWithProvider } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit, reset } = useForm()


    const [userEmail, setUserEmail] = useState('johndoe1@gmail.com')
    const [token] = useToken(userEmail)

    console.log(demoemail)

    /* Get location */
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    if (token) {

    }
    /* Get token from using useToken hook */
    const handleOnSubmit = (data) => {
        const { email, password } = data

        /* Create user here */
        loginUser(email, password).then(res => {
            navigate(from, { replace: true })
            setUserEmail('')
            // reset()
        }).catch(e => {
            if (e.message === 'Firebase: Error (auth/wrong-password).') {
                toast.error('Incorrect password')
            } else if (e.message === 'Firebase: Error (auth/user-not-found).') {
                toast.error('User not found please register')
            }
            console.log(e)
            reset()
        })


    }

    /* Sing in with google here */
    const handleSignInWithGoogle = () => {
        signInWithProvider(googlePrivider).then(res => {
            const user = {
                name: res?.user?.displayName,
                email: res?.user?.email,
                userRole: "Buyer",
                userImg: res.user.photoURL,
                userVerify: "false"

            }

            userEmail(res?.user?.email)
            /* Save user details here */
            fetch(`${process.env.REACT_APP_api_url}/users`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(res => res.json()).then(data => {
                navigate(from, { replace: true })
            })
        }).catch(e => console.log(e))
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col bg-secondary text-base-100 shadow-lg rounded-lg mx-auto w-[345px] lg:w-[400px]">
                <div className="text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold">Login</h1>
                </div>
                <div>
                    <h1>Seller email:johndoe@gmail.com</h1>
                    <h1>password:123123</h1>
                    <h1>Buyer email:johndoe1@gmail.com</h1>
                    <h1>password:123123</h1>
                    <form onSubmit={handleSubmit(handleOnSubmit)} className="card-body text-start">
                        <div className="form-control">
                            <input {...register('email', { required: 'Field is required' })} type="email" placeholder="email" className="input input-bordered text-secondary" />
                            <p className='text-red-800 font-medium text-start mt-1'>{errors.email?.message}</p>
                        </div>
                        <div className="form-control">
                            <input {...register('password', { required: 'Field is required' })} type="password" placeholder="password" className="input input-bordered text-secondary" />
                            <p className='text-red-800 font-medium text-start mt-1'>{errors.password?.message}</p>
                        </div>
                        <div>
                            <label>
                                <p className="text-white label-text-alt text-lg inline">New to cardealer?</p>
                                <Link to='/register' className='text-white label-text-alt text-lg ml-2 link link-hover'>Register</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0">Login</button>
                        </div>
                    </form>
                    <div className=' text-white flex flex-col lg:flex-row justify-center gap-5 label-text-alt text-xl'>
                        <button onClick={handleSignInWithGoogle} className='flex justify-center items-center'><FaGoogle className='mr-3'></FaGoogle> continue with goole</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;