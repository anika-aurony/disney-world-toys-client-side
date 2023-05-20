import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';

const ShowDetail = () => {
    const  [toy, setToy] = useState('');
    const params = useParams()
    console.log(toy)
    console.log(`http://localhost:5000/toys/${params.id}`)
    useEffect(() => {
        fetch(`http://localhost:5000/toys/${params.id}`)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [])

    return (
        <div>
            
            <div className="hero min-h-screen bg-[#f3e8ff]">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={toy.photo} className="max-w-sm rounded-lg shadow-1xl" />
                    <div className='ms-6'>
                        <h1 className="text-5xl font-bold">{toy.name}</h1>
                        <p className=" text-1xl pt-3"> {toy.description}</p>
                        <p className="pt-3 text-1xl "><b>Price:</b> ${toy.price}</p>
                        <p className=" text-1xl"><b>Available Quantity:</b> {toy.quantity}</p>
                        <p className=" text-1xl"><b>Rating:</b> {toy.rating}</p>
                        <p className=" text-1xl"><b>Seller:</b> {toy.sellerName}</p>
                        <p className=" text-1xl"><b>Email:</b> {toy.email}</p>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetail;