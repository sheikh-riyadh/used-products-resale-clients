import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: sellers } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}/users/sellers`)
            const data = res.json()
            return data
        }
    })
    return (
        <div>
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
                            sellers?.map((seller, i) => <tr
                                key={i}
                            >
                                <td><img className='w-16 h-16 rounded-full' src={seller.userImg} alt='car_image'></img></td>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;