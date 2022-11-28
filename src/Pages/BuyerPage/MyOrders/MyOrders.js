import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Spinner from '../../../Components/Spinner/Spinner';
import { AuthContext } from '../../../context/AuthProvider';
import notFound from '../../../assets/no-order.svg'

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: orders, isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}/orders?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data

        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            {
                orders?.length === 0 ?
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-2xl font-bold lg:text-4xl my-10'>No order found</h2>
                        <img className='w-2/5' src={notFound} alt="not_found_items" />
                    </div>
                    :
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">
                                <thead>
                                    <tr>
                                        <th>Sri</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders?.map((order, i) => <tr
                                            key={i}
                                        >
                                            <th>{i + 1}</th>
                                            <td><img className='w-24' src={order?.carImage} alt='car_image'></img></td>
                                            <td>{order?.productName}</td>
                                            <td>{order?.productPrice}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyOrders;