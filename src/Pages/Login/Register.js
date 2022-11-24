import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useTitle } from '../../Hook/userTitle';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';


const Register = () => {
    useTitle('register')
    const { createUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();


    const handleOnSubmit = (data) => {
        const { email, password } = data

        /* Create user here */
        createUser(email, password).then(res => {
            const user = res.user;
            console.log(user)
        }).catch(e => console.error(e))
    }
    return (
        <div className="hero min-h-screen my-10">
            <div className="hero-content flex-col bg-secondary text-base-100 shadow-lg rounded-lg mx-auto w-[400px]">
                <div className="text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold">Register</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit(handleOnSubmit)} className="card-body text-start">
                        <div className="form-control">
                            <input {...register('name', { required: 'Field is required' })} type="name" placeholder="name" className="input input-bordered" />
                            <p className='text-red-800 font-medium text-start mt-1'>{errors.name?.message}</p>
                        </div>
                        <div className="form-control">
                            <input {...register('email', { required: 'Field is required' })} type="email" placeholder="email" className="input input-bordered" />
                            <p className='text-red-800 font-medium text-start mt-1'>{errors.email?.message}</p>
                        </div>
                        <div className="form-control">
                            <label htmlFor='userImage' className="label">
                                Your photo
                            </label>
                            <input {...register('userImage', { required: 'Field is required' })} type="file" accept='image/*' name='userImage' />
                            <p className='text-red-800 font-medium text-start mt-1'>{errors.userImage?.message}</p>
                        </div>
                        <div className="form-control">
                            <select {...register('role')} className='select select-bordered w-full text-secondary' defaultValue={'Seller'} >
                                <option selected disabled>Make seller or buyer</option>
                                <option value="Seller">Seller</option>
                                <option value="Buyer">Buyer</option>
                            </select>
                            <p className='text-red-800 font-medium text-start mt-1'>{errors.role?.message}</p>
                        </div>
                        <div className="form-control">
                            <input {...register('password', { required: 'Field is required' })} type="password" placeholder="password" className="input input-bordered text-secondary" />
                            <p className='text-red-800 font-medium text-start mt-1'>{errors.password?.message}</p>
                        </div>
                        <div>
                            <label>
                                <p className="text-white label-text-alt inline">Already have an account?</p>
                                <Link className='text-white label-text-alt ml-2 link link-hover'>Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0">Register</button>
                        </div>
                    </form>
                    <div className=' text-white flex justify-center gap-5 label-text-alt text-xl'>
                        <button className='flex justify-center items-center'><FaGoogle className='mr-4'></FaGoogle> continue with</button>
                        <button className='flex justify-center items-center'><FaGithub className='mr-4'></FaGithub> continue with</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;