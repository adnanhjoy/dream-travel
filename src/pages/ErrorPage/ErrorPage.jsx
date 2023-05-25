import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-5'>
            <h1>404</h1>
            <p>Opps ! this page isn,t found</p>
            <Link to='/' className='text-decoration-none text-black-50 border border-0 px-3 py-1 rounded'>Back to Home Page</Link>
        </div>
    );
};

export default ErrorPage;