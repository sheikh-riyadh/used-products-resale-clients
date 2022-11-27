import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../../Components/Spinner/Spinner';
import Product from './Product';
import car from '../../../../assets/advertisment-car.jpg'

const Advertisment = () => {
    const { data: advertisementProducts, isLoading } = useQuery({
        queryKey: ['advertisement'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}/advertisment`);
            const data = await res.json();
            return data
        }
    })

    if (advertisementProducts?.length === 0) {
        return;
    }
    else if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='my-5 text-3xl lg:text-5xl font-bold'>ENGINEERING & DESIGN IN SYNERGY</h1>
                <p className='text-2xl'>LaFerrari was designed by the Ferrari Styling Centre which worked in synergy with the engineering and development departments from the very start of the model’s inception.</p>
                <img src={car} alt="car" className='mt-10' />
            </div>
            <div className='px-5 my-5 lg:my-20 lg:px-20'>
                <h2 className='my-5 text-3xl lg:text-5xl font-bold uppercase'>Advertisement products</h2>
                <div>
                    <div className="divider before:bg-primary after:bg-secondary mx-auto w-2/12 m-0 p-0"></div>
                    <div className="divider before:bg-primary after:bg-secondary mx-auto w-1/12 m-0 p-0"></div>
                </div>
                <div className='grid grid-cols-1 gap-7 mt-5 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        advertisementProducts.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Advertisment;