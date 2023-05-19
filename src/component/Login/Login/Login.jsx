import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // form.reset();
    }
    return (
        <div>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="text-center lg:text-left ">
                        <img className='ms-4 rounded-lg ' src="https://guardian.ng/wp-content/uploads/2022/07/mickey-mouse.jpeg" alt="" srcset="" style={{ height: '350px', width: '400px' }} />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ms-10">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold">Sign in </h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" name='password' />

                                </div>
                                <div className="form-control mt-4 mb-3">
                                    <button className="btn bg-[purple]">Login</button>
                                </div>
                            </form>
                            <hr />
                            <p className='my-2'>New to Disney World Toys? <span className='text-[purple]'><Link to="/register">Create Account</Link></span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;