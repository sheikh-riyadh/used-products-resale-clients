import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {

    const { data: buyers } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}/users/buyers`)
            const data = res.json()
            return data
        }
    })

    return (
        <div>
            <div>
                <h2 className='text-4xl font-bold my-5 lg:my-10'>All buyers</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
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