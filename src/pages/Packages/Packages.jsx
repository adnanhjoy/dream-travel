import React, { useEffect, useState } from 'react';
import Place from '../../components/Place/Place';
import { Container, Row } from 'react-bootstrap';

const Packages = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [])

    return (
        <div>
            <h1 className='text-center mt-5'>Featured Tour Places</h1>
            <p className='text-center mb-5'>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
            <Container>
                <Row xs={1} md={2} lg={4} className='g-4'>
                    {
                        places.map(place => <Place
                            key={place.id}
                            place={place}
                        ></Place>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Packages;