import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const handleOnSubmit = (data) => {

        /* Get form data */
        const {
            carName, categoryName, condition, originalPrice, productImage, productLocation, resalePrice, sellerName, userYears, productDescription
        } = data


        /* Get image from form */
        const image = data.productImage[0]
        const formData = new FormData()
        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageBB_api}`, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(data => {
            if (data.success) {
                const carPhoto = data?.data?.display_url;

                const product = {
                    sellerName,
                    sellerPhoto: user?.photoURL,
                    email: user?.email,
                    carName,
                    carPhoto,
                    userYears,
                    condition,
                    originalPrice,
                    resalePrice,
                    productLocation,
                    productDescription,
                    categoryName,
                    isVerify: 'false',
                    postTime: new Date().toLocaleString()
                }
                saveProduct(product)
            }
        })

        /* Save product to database */
        const saveProduct = (product) => {
            fetch(`${process.env.REACT_APP_api_url}/category`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
        }

    }
    return (
        <div className="hero my-11 lg:my-0">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Add product</h1>
                </div>
                <form onSubmit={handleSubmit(handleOnSubmit)} className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-secondary">
                    <div className="card-body">
                        <div className='grid grid-cols-1 justify-center items-center lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <input {...register('carName', { required: 'Required' })} type="text" placeholder="Product name" className="input input-bordered" />
                                <p className='text-white font-medium text-start mt-1'>{errors.carName?.message}</p>
                            </div>
                            <div className="form-control">
                                <input {...register('originalPrice', { required: 'Required' })} type="text" placeholder="Original price" className="input input-bordered" />
                                <p className='text-white font-medium text-start mt-1'>{errors.originalPrice?.message}</p>
                            </div>
                            <div className="form-control">
                                <input {...register('resalePrice', { required: 'Required' })} type="text" placeholder="Selling price" className="input input-bordered" />
                                <p className='text-white font-medium text-start mt-1'>{errors.resalePrice?.message}</p>
                            </div>
                            <div className="form-control">
                                <select {...register('condition', { required: 'Required' })} className='select select-bordered w-full text-secondary' defaultValue={'Excellent'} >
                                    <option disabled>Condition</option>
                                    <option value="Excellent">Excellent</option>
                                    <option value="Good">Good</option>
                                    <option value="Fair">Fair</option>
                                </select>
                                <p className='text-white font-medium text-start mt-1'>{errors.condition?.message}</p>
                            </div>
                            <div className="form-control">
                                <input {...register('productLocation', { required: 'Required' })} type="text" placeholder="Location" className="input input-bordered" />
                                <p className='text-white font-medium text-start mt-1'>{errors.productLocation?.message}</p>
                            </div>
                            <div className="form-control">
                                <input {...register('userYears', { required: 'Required' })} type="text" placeholder="Year of used" className="input input-bordered" />
                                <p className='text-white font-medium text-start mt-1'>{errors.userYears?.message}</p>
                            </div>
                            <div className="form-control">
                                <select {...register('categoryName', { required: 'Required' })} className='select select-bordered w-full text-secondary' defaultValue={'Tesla'} >
                                    <option disabled>Select category</option>
                                    <option value="Tesla">Tesla</option>
                                    <option value="Ferrari">Ferrari</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Lamborghini">Lamborghini</option>
                                </select>
                                <p className='text-white font-medium text-start mt-1'>{errors.categoryName?.message}</p>
                            </div>
                            <div className="form-control">
                                <input {...register('sellerName', { required: 'Required' })} type="text" placeholder="Your name" className="input input-bordered" />
                                <p className='text-white font-medium text-start mt-1'>{errors.sellerName?.message}</p>
                            </div>
                        </div>
                        <div className="form-control">
                            <label htmlFor='userImage' className="label text-white">
                                Product photo
                            </label>
                            <input {...register('productImage', { required: 'Required' })} type="file" accept='image/*' name='productImage' className='text-white' />
                            <p className='text-white font-medium text-start mt-1'>{errors.productImage?.message}</p>
                        </div>
                        <div className="form-control">
                            <textarea {...register('productDescription', { required: 'Required' })} type="text" placeholder="Product description" className="textarea textarea-bordered"></textarea>
                            <p className='text-white font-medium text-start mt-1'>{errors.productDescription?.message}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0">Post</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;