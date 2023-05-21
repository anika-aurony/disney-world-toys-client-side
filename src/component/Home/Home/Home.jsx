import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import ShopbyCategory from '../ShopbyCategory/ShopbyCategory';
import Gallery from '../Gallery/Gallery';
import FeaturedToys from '../FeaturedToys/FeaturedToys';
import SoftToys from '../SoftToys/SoftToys';
import useTitle from '../../../hooks/useTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    useTitle('Home')
    return (
        <div className=' bg-[#ede9fe] '>
            <div data-aos="flip-down" data-aos-anchor-placement="top-center">
            <Banner></Banner>
            </div>
            <ShopbyCategory></ShopbyCategory>
            <div
                data-aos="fade-left" 
            >
                <SoftToys></SoftToys>
            </div>
                
            <Gallery></Gallery>
            <FeaturedToys></FeaturedToys>
        </div>
    );
};

export default Home;