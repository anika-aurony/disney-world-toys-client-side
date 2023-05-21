import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <div className='text-center'>
                <h1>Page not found</h1>
                <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" srcset="" />
                <button className='btn bg-[purple] me-10'><Link to="/">Back to Home</Link></button>
            </div>
        </div>
    );
};

export default Page404;