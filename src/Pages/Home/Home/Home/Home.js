import React from 'react';
import { useTitle } from '../../../../Hook/userTitle';
import Advertisment from '../Advertisment/Advertisment';
import Analytics from '../Analytics/Analytics';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Categories from '../Categories/Categories';
import FeatureCars from '../FeatureCars/FeatureCars';
import secondary_footer_image from '../../../../assets/secondary_footer.png'


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
            <div>
                <img src={secondary_footer_image} alt="secondary_footer" />
            </div>
        </div>
    );
};

export default Home;