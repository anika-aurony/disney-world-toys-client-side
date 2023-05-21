import React from 'react';
import Banner from './Banner/Banner';
import ShopbyCategory from '../ShopbyCategory/ShopbyCategory';
import Gallery from '../Gallery/Gallery';
import FeaturedToys from '../FeaturedToys/FeaturedToys';
import SoftToys from '../SoftToys/SoftToys';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div className=' bg-[#ede9fe] '>
            <Banner></Banner>
            <ShopbyCategory></ShopbyCategory>
            <SoftToys></SoftToys>
            <Gallery></Gallery>
            <FeaturedToys></FeaturedToys>
        </div>
    );
};

export default Home;