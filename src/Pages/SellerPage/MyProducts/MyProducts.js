import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../Components/Spinner/Spinner';
import { AuthContext } from '../../../context/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext)


    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['my-products', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}/seller-products/${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }
    const handleAdvertisement = (id) => {
        fetch(`${process.env.REACT_APP_api_url}/seller-products/${id}`, {
            method: 'PUT'
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount > 0) {
                toast.success('advertisement successfull.')
                refetch()
            }
        }).catch(e => console.error(e))
    }

    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_api_url}/seller-products/${id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            if (data.deletedCount > 0) {
                toast.success('Product deleted successfully')
                refetch()
            }
        })
    }

    return (
        <div className='mx-10'>
            <h2 className='text-2xl text-start font-bold mb-5'>{products?.length > 0 ? 'My orders' : 'There is no product found'}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sri.</th>
                            <th>Image</th>
                            <th>Product name</th>
                            <th>Category</th>
                            <th>Use of years</th>
                            <th>advertisment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, i) => <tr
                                key={i}
                            >
                                <td>{i + 1}</td>
                                <td><img className='w-16 h-16 rounded-full' src={product.carPhoto} alt='car_image'></img></td>
                                <td>{product.carName}</td>
                                <td>{product.categoryName}</td>
                                <td>{product.userYears}</td>
                                <td><button onClick={() => handleAdvertisement(product._id)} className='hover:text-gray-100 bg-gradient-to-r from-green-300 to-green-500 text-white btn border-0' disabled={product?.advertisement === 'true'} >Make advertisment</button></td>
                                <td><button onClick={() => handleDelete(product._id)} className='hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0'>Delete</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;