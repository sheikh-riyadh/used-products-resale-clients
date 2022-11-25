import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTitle } from '../../Hook/userTitle';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const googlePrivider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const Login = () => {
    useTitle('login')
    const { loginUser, signInWithProvider } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleOnSubmit = (data) => {
        const { email, password } = data


        /* Create user here */
        loginUser(email, password).then(res => {
            navigate(from, { replace: true })
            reset()
        }).catch(e => console.error(e))


    }

    /* Sing in with google here */
    const handleSignInWithGoogle = () => {
        signInWithProvider(googlePrivider).then(res => {
            navigate(from, { replace: true })
        }).catch(e => console.log(e))
    }


    /* Sign in with github here */
    const handleSignInWithGithub = () => {
        signInWithProvider(githubProvider).then(res => {
            console.log(res.user)
        }).catch(e => console.log(e))
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col bg-secondary text-base-100 shadow-lg rounded-lg mx-auto w-[345px] lg:w-[400px]">
                <div className="text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold">Login</h1>
                </div>
                <div>
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
                            <button className="hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0">Register</button>
                        </div>
                    </form>
                    <div className=' text-white flex flex-col lg:flex-row justify-center gap-5 label-text-alt text-xl'>
                        <button onClick={handleSignInWithGoogle} className='flex justify-center items-center'><FaGoogle className='mr-3'></FaGoogle> continue with</button>
                        <button onClick={handleSignInWithGithub} className='flex justify-center items-center'><FaGithub className='mr-3'></FaGithub> continue with</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;