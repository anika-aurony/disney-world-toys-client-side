import React from 'react';
import "./SoftToys.css"
const SoftToys = () => {
    return (
        <div>
            <h1 className='text-3xl text-center pt-6' >Toys We Love</h1>
            <p className='text-center py-3'>Toys helps child to develop self-confident.</p>
            <div className='hero-content flex-col lg:flex-row-reverse pb-6'>
              
                    <div className='hover-img'>
                        <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/hp_3up-sq_munchlings-ornaments_20230515_2x?fit=constrain&cropN=0,0,1,1&fmt=webp&qlt=70&wid=1180" className="max-w-sm rounded-lg shadow-2xl" />
                        
                    </div>
               
                <div className="">
                    
                        <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/hp_3up-sq_munchlings-crossbody_20230515_2x?fit=constrain&cropN=0,0,1,1&fmt=webp&qlt=70&wid=1180" className="max-w-sm rounded-lg shadow-2xl " />
                        
                    
                </div>
            </div>
        </div>
    );
};

export default SoftToys;
