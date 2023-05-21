import React from 'react';
import Banner from './Banner/Banner';
import ShopbyCategory from '../ShopbyCategory/ShopbyCategory';
import Gallery from '../Gallery/Gallery';
import FeaturedToys from '../FeaturedToys/FeaturedToys';

const Home = () => {
    return (
        <div className=' bg-[#ede9fe] '>
            <Banner></Banner>
            <ShopbyCategory></ShopbyCategory>
            <Gallery></Gallery>
            <FeaturedToys></FeaturedToys>
        </div>
    );
};

export default Home;