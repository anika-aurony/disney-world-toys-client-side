import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full border-8 bg-[#fae8ff] rounded-lg">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src="https://images6.fanpop.com/image/photos/32300000/New-Disney-Store-Princess-Banners-disney-princess-32377859-950-340.jpg" className="w-full " style={{  opacity: '0.8' }}/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images6.fanpop.com/image/photos/32300000/New-Disney-Store-Princess-Banners-disney-princess-32377840-950-340.jpg" className="w-full" style={{  opacity: '0.8' }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images6.fanpop.com/image/photos/32300000/New-Disney-Store-Princess-Banners-disney-princess-32377911-950-340.jpg" className="w-full" style={{  opacity: '0.8' }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://images6.fanpop.com/image/photos/32300000/New-Disney-Store-Princess-Banners-disney-princess-32377809-950-340.jpg" className="w-full" style={{  opacity: '0.8' }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;