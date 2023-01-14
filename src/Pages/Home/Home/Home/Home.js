import React from 'react';
import { useTitle } from '../../../../Hook/userTitle';
import Advertisment from '../Advertisment/Advertisment';
import Analytics from '../Analytics/Analytics';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Categories from '../Categories/Categories';
import FeatureCars from '../FeatureCars/FeatureCars';


const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisment></Advertisment>
            <Brands></Brands>
            <Analytics></Analytics>
            <FeatureCars></FeatureCars>
        </div>
    );
};

export default Home;