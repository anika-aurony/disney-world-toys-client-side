import React from 'react';
import "./Gallery.css"

const Gallery = () => {
    return (
        <div className='mt-8 bg-[#fae8ff] border-8 border-indigo-500/100 rounded-lg mt-6 w-3/4  mx-auto mob-width'>
            <h1 className='text-3xl text-center pt-8 '>Disney Gallery</h1>
            <div className='hero-content lg:flex-row-reverse padding-mob '>
                
                <img className="mask mask-decagon h-24 " src="https://media.4rgos.it/s/Argos/9366130_R_SET?$Main768$&w=620&h=620" />
                <img className="mask mask-hexagon-2 h-36    p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_XeO42pwz12X9Ey2W8SDeCnMWuO96_4wMw&usqp=CAU" />
                <img className="mask mask-hexagon-2 h-24" src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6002040901941?fmt=webp&qlt=70&wid=2000&hei=2000" />
                <img className="mask mask-hexagon-2 h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYtDqqCnWLhYdIR1UgeOM2om_pL_GGuLoow&usqp=CAU" />
                <img className="mask mask-hexagon-2 h-36 p-2 image-display" src="https://media.very.co.uk/i/very/VDLJM_SQ2_0000000088_NO_COLOR_SLf/disney-princess-aurora-fashion-doll.jpg?$180x240_retinamobilex2$" />
            </div>
            <div className='hero-content lg:flex-row-reverse'>
                <img className="mask mask-hexagon-2 h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOignFQAk7qILLi8vUou5Gu3yunKN0oAYcQ&usqp=CAU" />
                <img className="mask mask-decagon h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDu0gyFmicmDi0GHRKzZfo80J94rbiZhJ67wtVyVilgjvYSZSDj-X60SbkF8xEGf5Jc5Y&usqp=CAU" />
                <img className="mask mask-hexagon-2 h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZGLyzHYagGatwDiq7wkSWSmJ3oDZdM55Pg&usqp=CAU" />
                <img className="mask mask-hexagon-2 h-32 p-1 image-display" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlqNfFaOs-PwHK79oOteWGmdYoFOiArD9kw&usqp=CAU" />

            </div>
            <div className='hero-content lg:flex-row-reverse'>
                <img className="mask mask-hexagon-2 h-24" src="https://cdn.geekspin.co/wp-content/uploads/2022/12/Disney-Princess-Color-Splash-Ariel-HLW00-scaled.jpg?width=800" />
                <img className="mask mask-decagon h-24" src="https://i5.walmartimages.com/asr/5d133532-cb5b-4817-a1a0-396704839bfb.cb16677ac633beb49ae92c8de4b5be07.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF" />
                <img className="mask mask-hexagon-2 h-24 image-display" src="https://cdn.shopify.com/s/files/1/0643/8672/8148/products/61CbG4WLtmL._AC_SL1000_1200x1200.jpg?v=1666900561" />
                <img className="mask mask-hexagon-2 h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyepc2qgKg0tfHqErsjosTDVdrEK3sMjTQQ&usqp=CAU" />
                <img className="mask mask-hexagon-2 h-32 p-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3PcDSd0Z4oVXH7bItfmXxzqNvLnJ9OBpyqF-C4WsrnW5YqKamaH2sH3b5Bevc1seQk0&usqp=CAU" />

            </div>
        </div>
    );
};

export default Gallery;