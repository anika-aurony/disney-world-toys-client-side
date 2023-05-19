import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;   
        const email = form.email.value;   
        const password = form.password.value;
        console.log(name, photo, email, password);
        form.reset();
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="text-center lg:text-left ">
                        <img className='rounded-lg ' src="https://easydrawingguides.com/wp-content/uploads/2017/01/how-to-draw-mickey-mouse-featured-image-1200.png" alt="" srcset="" style={{ height: '350px', width: '400px' }} />

                    </div>
                    <div className="ms-4  card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ms-10">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold">Create Account </h1>
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" name='password' />
                                    {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                                </div>
                                <div className="form-control mt-4 mb-3">
                                    <button className="btn bg-[purple]">Create</button>
                                </div>
                            </form>
                            <hr />
                            <p className='my-2'>Already have an Account? <span className='text-[purple]'><Link to="/login">Sign in</Link></span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;