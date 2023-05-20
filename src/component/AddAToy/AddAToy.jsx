import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const AddAToy = () => {
    const { user } = useContext(AuthContext)

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const sellerName = user?.displayName;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const email = user?.email;
        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const toy = { sellerName, price, rating, photo, email, name, subcategory, quantity, description }
        console.log(toy);

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.insertedId) {
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
        <div>

            <div className="hero min-h-screen bg-[#f3e8ff]">

                <div className="hero-content ">

                    <div className="card flex-shrink-0  shadow-2xl bg-base-100">

                        <div className="card-body">
                            <h1 className="text-2xl text-center font-bold">Add A Toy </h1>
                            <form onSubmit={handleAddToy} >
                                <div className='hero-content flex-col lg:flex-row-reverse'>
                                    <div >
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text"> <b>Seller Email:</b> {user.email} </span>
                                            </label>
                                            {/* <input type="text" placeholder= name='email' className="input input-bordered" /> */}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <input type="text" placeholder="Price" className="input input-bordered" name="price" required />

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Rating</span>
                                            </label>
                                            <input type="text" placeholder="Rating" className="input input-bordered" name="rating" required />

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Photo URL</span>
                                            </label>
                                            <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo" required />

                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text"><b>Seller Name:</b> {user?.displayName}</span>
                                            </label>


                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="name" className="input input-bordered" name="name" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Sub-category</span>
                                            </label>
                                            <input type="text" placeholder="Sub-category" className="input input-bordered" name="subcategory" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Available Quantity</span>
                                            </label>
                                            <input type="text" placeholder="Available Quantity" className="input input-bordered" name="quantity" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" placeholder="Description" className="input input-bordered" name="description" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-[purple]">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;