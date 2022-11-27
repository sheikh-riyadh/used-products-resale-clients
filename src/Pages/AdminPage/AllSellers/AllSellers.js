import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../Components/Spinner/Spinner';
import { AuthContext } from '../../../context/AuthProvider';

const AllSellers = () => {
    const { user } = useContext(AuthContext)
    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['sellers', user.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}/users/sellers`)
            const data = res.json()
            return data
        }
    })

    console.log(user)
    const handleVerify = (id) => {
        fetch(`${process.env.REACT_APP_api_url}/users/verify/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json()).then(data => {
                toast.success('User verified success full')
                refetch()
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h2 className='text-4xl font-bold my-5 lg:my-10'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make verify</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map((seller, i) => <tr
                                key={i}
                            >
                                <td><img className='w-16 h-16 rounded-full' src={seller.userImg} alt='car_image'></img></td>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button onClick={() => handleVerify(seller._id)} className='hover:text-gray-100 bg-gradient-to-r from-green-300 to-green-500 text-white btn border-0' disabled={seller.userVerify === 'true'}>{seller.userVerify === 'true' ? 'verified' : 'Make seller verify'}</button></td>
                                <td><button className='hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;