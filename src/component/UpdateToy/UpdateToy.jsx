// import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { AuthContext } from '../../providers/AuthProviders';

const UpdateToy = () => {
    const toy = useLoaderData();
    // const {user} = useContext(AuthContext)
    console.log(toy)
    const handUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatedToy = { price, description, quantity }
        fetch(`http://localhost:5000/toys/${toy._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy information Updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })

    }
    return (
        <div className="hero min-h-screen bg-[#f3e8ff]">

            <div className="hero-content ">

                <div className="card flex-shrink-0  shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h1 className="text-2xl text-center font-bold">Update Toy: {toy.name} </h1>
                        <form onSubmit={handUpdate} >
                            <div className='hero-content flex-col lg:flex-row-reverse'>
                                <div >

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" placeholder="Price" defaultValue={toy.price} className="input input-bordered" name="price" required />

                                    </div>


                                </div>
                                <div>



                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input type="text" placeholder="Available Quantity" defaultValue={toy.quantity} className="input input-bordered" name="quantity" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" placeholder="Description" className="input input-bordered" name="description" defaultValue={toy.description} required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[purple]">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;