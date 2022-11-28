import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useTitle } from '../../Hook/userTitle';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import { useToken } from '../../Hook/useToken';
import { GoogleAuthProvider } from 'firebase/auth';
const googlePrivider = new GoogleAuthProvider()


const Register = () => {
    useTitle('register')
    const { createUser, updateUserProfile, signInWithProvider } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [userEmail, setUserEmail] = useState('')
    const [token] = useToken(userEmail)
    const navigate = useNavigate()

    /* Get access token */
    if (token) {
        navigate('/')
    }

    const handleOnSubmit = (data) => {
        const { email, password, userImage, name, userRole } = data

        /* Get image from form */
        const image = userImage[0]
        const formData = new FormData()
        formData.append('image', image)

        /* Create user here */
        createUser(email, password)
            .then(res => {

                /* Calling imagebb api here  */
                fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageBB_api}`, {
                    method: 'POST',
                    body: formData
                }).then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            const photo = data?.data?.display_url;

                            /* User profile update here*/
                            updateUserProfile(name, photo).then(() => {
                                const user = {
                                    name,
                                    email,
                                    userRole,
                                    userImg: photo,
                                    userVerify: 'false'
                                }
                                /* insert user to data base */
                                fetch(`${process.env.REACT_APP_api_url}/users`, {
                                    method: 'PUT',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(user)
                                })
                                    .then(res => res.json)
                                    .then(data => {
                                        toast.success("Register successfull")
                                        /* Set user email */
                                        setUserEmail(user?.email)
                                    }).catch(e => console.error(e))
                                reset()
                            }).catch(e => console.log(e))
                        }
                    }).catch(e => console.log(e))

            }).catch(e => {
                if (e.message === 'Firebase: Error (auth/email-already-in-use).') {
                    toast.error('User already registered')
                    reset()
                }
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

            setUserEmail(res?.user?.email)
            /* Save user details here */
            fetch(`${process.env.REACT_APP_api_url}/users`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(res => res.json()).then(data => {
                navigate('/')
            })
        }).catch(e => console.log(e))
    }

    return (
        <div className="hero min-h-screen my-10">
            <div className="hero-content flex-col bg-secondary text-base-100 shadow-lg rounded-lg mx-auto w-[345px] lg:w-[400px]">
                <div className="text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold">Register</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit(handleOnSubmit)} className="card-body text-start">
                        <div className="form-control">
                            <input {...register('name', { required: 'Field is required' })} type="name" placeholder="name" className="input input-bordered text-secondary" />
                            <p className='text-white font-medium text-start mt-1'>{errors.name?.message}</p>
                        </div>
                        <div className="form-control">
                            <input {...register('email', { required: 'Field is required' })} type="email" placeholder="email" className="input input-bordered text-secondary" />
                            <p className='text-white font-medium text-start mt-1'>{errors.email?.message}</p>
                        </div>
                        <div className="form-control">
                            <label htmlFor='userImage' className="label">
                                Your photo
                            </label>
                            <input {...register('userImage', { required: 'Field is required' })} type="file" accept='image/*' name='userImage' />
                            <p className='text-white font-medium text-start mt-1'>{errors.userImage?.message}</p>
                        </div>
                        <div className="form-control">
                            <select {...register('userRole')} className='select select-bordered w-full text-secondary' defaultValue={'Seller'} >
                                <option disabled>Make seller or buyer</option>
                                <option value="Seller">Seller</option>
                                <option value="Buyer">Buyer</option>
                            </select>
                            <p className='text-white font-medium text-start mt-1'>{errors.userRole?.message}</p>
                        </div>
                        <div className="form-control">
                            <input {...register('password', { required: 'Field is required' })} type="password" placeholder="password" className="input input-bordered text-secondary" />
                            <p className='text-white font-medium text-start mt-1'>{errors.password?.message}</p>
                        </div>
                        <div>
                            <label>
                                <p className="text-white label-text-alt text-lg inline">Already have an account?</p>
                                <Link to='/login' className='text-white label-text-alt text-lg ml-2 link link-hover'>Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0">Register</button>
                        </div>
                    </form>
                    <div className=' text-white flex justify-center gap-5 label-text-alt text-xl'>
                        <button onClick={handleSignInWithGoogle} className='flex justify-center items-center'><FaGoogle className='mr-4'></FaGoogle> continue with goole</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;