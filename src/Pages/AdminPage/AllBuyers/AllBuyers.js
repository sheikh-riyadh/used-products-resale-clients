import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../Components/Spinner/Spinner';

const AllBuyers = () => {

    const { data: buyers, refetch, isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}/users/buyers`)
            const data = res.json()
            return data
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_api_url}/user/${id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            if (data.deletedCount > 0) {
                toast.success("Buyer deleted succesfull")
                refetch()
            }
        })
    }

    return (
        <div>
            <div>
                <h2 className='text-4xl font-bold my-5 lg:my-10'>{buyers.length === 0 ? "No buyers found" : "All Buyers"}</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyers?.map((buyer, i) => <tr
                                    key={i}
                                >
                                    <td><img className='w-16 h-16 rounded-full' src={buyer.userImg} alt='car_image'></img></td>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td><button onClick={() => handleDelete(buyer._id)} className='hover:text-gray-100 bg-gradient-to-r from-primary to-red-500 text-white btn border-0'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBuyers;