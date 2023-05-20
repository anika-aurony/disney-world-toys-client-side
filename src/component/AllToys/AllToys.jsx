import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAllToys from '../ShowAllToys/ShowAllToys';

const AllToys = () => {
    const toys = useLoaderData();
    // console.log(toys)
    return (

        <div className='bg-[#ede9fe]'>
            <h1 className='text-3xl text-center pt-3'>All Toys</h1>
            <div className="overflow-x-auto w-full  p-7">
                <table className="table  w-full ">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Toy</th>
                            <th>Name</th>
                            <th>Category</th>
                            
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Seller</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='bg-[#ede9fe]'>
                        {
                            toys.map(toy => <tr key={toy._id}>
                                <td><div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={toy.photo} />
                                    </div>
                                </div></td>
                                <td>{toy.name}</td>
                                <td>{toy.subcategory}</td>
                                
                                <td>{toy.quantity}</td>
                                <td>{toy.price}</td>
                                <td>{toy.sellerName}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }

                       

                    </tbody>
                    

                </table>
            </div>

        </div>
    );
};

export default AllToys;