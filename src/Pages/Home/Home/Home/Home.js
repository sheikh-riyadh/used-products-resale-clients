import React from 'react';
import { useTitle } from '../../../../Hook/userTitle';
import Advertisment from '../Advertisment/Advertisment';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisment></Advertisment>
        </div>
    );
};

export default Home;