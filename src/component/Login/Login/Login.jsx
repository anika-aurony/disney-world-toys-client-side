import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import useTitle from '../../../hooks/useTitle';

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    useTitle('Login')

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error));
        form.reset();
    }

    const handleGoogleSignin = () =>{
        signInWithGoogle()
        .then(result =>{
            const logUser = result.user;
            console.log(logUser);
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div>


            <div className="hero min-h-screen bg-[#f3e8ff]">
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
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" name='password' required/>

                                </div>
                                <div className="form-control mt-4 mb-3">
                                    <button className="btn bg-[#e879f9]">Login</button>
                                </div>
                            </form>

                            <hr />
                            <p className='my-2'>New to Disney World Toys? <span className='text-[purple]'><Link to="/register">Create Account</Link></span> </p>
                            <div className="divider">OR</div>
                            <div className="form-control  mb-3">
                                <button className="btn bg-[#f472b6]" onClick={handleGoogleSignin}>
                                    <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" className='h-10 pe-2' />
                                    Login with Google</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;