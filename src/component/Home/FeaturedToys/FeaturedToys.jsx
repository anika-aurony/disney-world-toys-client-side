import React from 'react';
import "./FeaturedToys.css"
const FeaturedToys = () => {
    return (
        <div>
            <h1 className='text-3xl text-center py-6' >About Disney Characters</h1>
            <div className='p-6 hero-content  lg:flex  mob-responsive'>
                <div className="card w-96 bg-base-100 shadow-xl bg-[#c7d2fe]" style={{height: '450px'}}>
                    <div className="card-body">
                        <h2 className="card-title text-center">Snow White</h2>
                        <p className='text-0.5xl'>"Snow White" is a 19th-century German fairy tale that is today known widely across the world. <br /> The fairy tale features such elements as the magic mirror, the poisoned apple, the glass coffin, and the characters of the Evil Queen and the seven Dwarfs. </p>
                    </div>
                    <figure><img src="https://d23.com/app/uploads/2015/06/snow41160x600-1180x600.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl bg-[#e9d5ff]" style={{height: '450px'}} >
                    
                    <div className="card-body">
                        <h2 className="card-title">
                            Cindrella
                        </h2>
                        <p>Cinderella, the most popular of all fairy tales, is a time-less story of virtue rewarded. Sweet, beautiful Cinderella, cruelly mistreated by her evil stepmother and stepsisters, is helped by her magical fairy godmother, who sends her off to win the heart of a handsome prince and live happily ever after.</p>
                        
                    </div>
                    <figure><img src="https://c4.wallpaperflare.com/wallpaper/677/303/594/cinderella-disney-princess-and-fairy-godmother-images-for-desktop-wallpapers-hd-1920%C3%971200-wallpaper-preview.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl bg-[#ddd6fe]" style={{height: '450px'}}>
                    <div className="card-body">
                        <h2 className="card-title text-center">Sleeping Beauty</h2>
                        <p className='text-0.5xl'>Like many fairy tales, the plot of Sleeping Beauty is centred around a princess who is cursed and can only be saved by true love. Her family is powerless to prevent the curse from taking place, and instead must rely on the princess being found by a prince. </p>
                    </div>
                    <figure><img src="https://w0.peakpx.com/wallpaper/771/1022/HD-wallpaper-sleeping-beauty-flowers-prince-fairy-tale-princess.jpg" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default FeaturedToys;