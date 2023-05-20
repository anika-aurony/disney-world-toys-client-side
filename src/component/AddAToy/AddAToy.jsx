import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const AddAToy = () => {
    const { user } = useContext(AuthContext)
    
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <h1>Add A Toy</h1>
                <div className="hero-content ">

                    <div className="card flex-shrink-0  shadow-2xl bg-base-100">

                        <div className="card-body">
                        <h1 className="text-2xl text-center font-bold">Add A Toy </h1>
                            <div className='hero-content flex-col lg:flex-row-reverse'>
                                <div >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Seller Email</span>
                                        </label>
                                        <input type="text" placeholder={user.email} className="input input-bordered" />
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
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" placeholder={user.displayName} className="input input-bordered" name='sellerName' />

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
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;