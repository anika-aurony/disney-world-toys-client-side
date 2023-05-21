import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <div className='text-center'>
                <button className='btn bg-[purple] my-5'><Link to="/">Back to Home</Link></button>
                <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" srcset=""  className='w-1/3 mx-auto'/>

            </div>
        </div>
    );
};

export default Page404;