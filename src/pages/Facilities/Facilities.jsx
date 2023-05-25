import React from 'react';
import { Col } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';

const Facilities = ({ places }) => {
    const { id, name, price, d_price, facilities } = places;
    return (
        <Col className='border rounded p-4 bg-light-subtle'>
            <div>
                <h3 className='text-center my-4'>{name}</h3>
                <h1 className='text-center'>$ {price}</h1>
                <p className='text-decoration-line-through text-center'>$ {d_price}</p>
                <p className='text-center text-danger fw-bold'>Save 56% for First Trip</p>
                <button className='border border-none px-3 py-3 w-100 my-3 rounded bg-primary text-white'>Get Started</button>
                {
                    facilities.map(facility => <span className='d-flex align-items-center'>
                        <FaCheck></FaCheck>
                        <p className='m-0 ms-2'>{facility.name}</p>
                    </span>)
                }

            </div>
        </Col >
    );
};

export default Facilities;