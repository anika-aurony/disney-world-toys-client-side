import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';


const AllToys = () => {
    const toys = useLoaderData();
    const [matchedToys, setMactedToys] = useState([])
    // console.log(toys)
    useTitle('All Toys')

    const handleSearch = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const matchToys = toys.filter(toy => toy.name == name);
        setMactedToys(matchToys);

    }

    return (

        <div className='bg-[#ede9fe]'>
            <h1 className='text-3xl text-center pt-3'>All Toys</h1>
            <form className='w-3/4 mx-auto' onSubmit={handleSearch}>
                <div className='flex '>
                    <div className="form-control">

                        <input type="text" placeholder="Search by name" name='name' className="input input-bordered me-4" />
                    </div>
                    <div className="form-control">
                        <button className="btn btn-primary bg-[purple]">Submit</button>
                    </div>
                </div>
            </form>
            {matchedToys.length > 0 && <div className='text-center w-1/2 mx-auto'>
                <h1 className='text-2xl py-3'>Toys by Search</h1>
                <table className='table'>
                <tbody>
                    {
                        matchedToys.map(matchedToy => <tr key={matchedToy._id}>
                            <td><div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={matchedToy.photo} />
                                </div>
                            </div></td>
                            <td>{matchedToy.name}</td>
                            <td>{matchedToy.subcategory}</td>

                            <td>{matchedToy.quantity}</td>
                            <td>${matchedToy.price}</td>
                            <td>{matchedToy.sellerName}</td>

                        </tr>)
                    }
                </tbody>
                </table>
            </div>}
            <div className="overflow-x-auto w-3/4 mx-auto  p-7">
                <table className="table  w-full ">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Toy</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            
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
                                <td>${toy.price}</td>
                                <td>{toy.sellerName}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs"><Link to={`/showDetails/${toy._id}`} >details</Link></button>
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