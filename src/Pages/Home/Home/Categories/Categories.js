import React from 'react';
import { useQuery } from '@tanstack/react-query'
import Spinner from '../../../../Components/Spinner/Spinner';
import Category from './Category';


const Categories = () => {


    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}/categories`)
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='px-5 lg:px-20'>
            <h2 className='my-5 text-3xl lg:text-5xl font-bold'>Category</h2>
            <div>
                <div className="divider before:bg-primary after:bg-secondary mx-auto w-2/12 m-0 p-0"></div>
                <div className="divider before:bg-primary after:bg-secondary mx-auto w-1/12 m-0 p-0"></div>
            </div>
            <div className='grid grid-cols-1 gap-7 mt-5 md:grid-cols-2 lg:grid-cols-4'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;