import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import Facilities from '../Facilities/Facilities';

const Package = () => { 
    // const {id} = useParams();
    // const [places, setPlaces] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/places/${id}`)
    //         .then(res => res.json())
    //         .then(data => setPlaces(data));
    // }, [])

    const places = useLoaderData()


    return (
        <Container className='mt-5'>
            <h1 className='text-center my-5'>Our Packages</h1>
            
            <Row xs={1} md={3} className='g-4'>
            {
                places.map(place => <Facilities
                key={place.id}
                places={place}
                ></Facilities>)
            }
            </Row>
        </Container>
    );
};

export default Package;