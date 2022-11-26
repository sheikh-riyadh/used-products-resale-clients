import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Spinner from '../../../Components/Spinner/Spinner';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: orders, isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}/orders?email=${user?.email}`)
            const data = await res.json()
            return data

        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
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
                            orders.map((order, i) => {
                                return <tr>
                                    <th>{i + 1}</th>
                                    <td><img className='w-24' src={order.carImage} alt='/'></img></td>
                                    <td>{order.productName}</td>
                                    <td>{order.productPrice}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;