import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaAvianex, FaMapMarkedAlt, FaWalking } from "react-icons/fa";
import './Services.css'

const Services = () => {
    return (
        <Container>
            <h1 className='text-center mt-5'>We Provide Best</h1>
            <p className='text-center mb-5'>Take high quality online courses from the best online instrictors
                around the world & develop your skills.</p>
            <Row xs={1} md={3} className='g-4'>
                <Col>
                    <div className='border p-4 rounded'>
                        <FaMapMarkedAlt className='fs-3 mb-5 shadow-sm service-icon p-3'></FaMapMarkedAlt>
                        <h4>Select Destination</h4>
                        <p>At first choose the place you wanted to go</p>
                    </div>
                </Col>
                <Col>
                    <div className='border p-4 rounded'>
                        <FaAvianex className='fs-3 mb-5 shadow-sm service-icon p-3'></FaAvianex>
                        <h4>Book a Trip</h4>
                        <p>book your tip form our exclusive offers</p>
                    </div>
                </Col>
                <Col>
                    <div className='border p-4 rounded'>
                        <FaWalking className='fs-3 mb-5 shadow-sm service-icon p-3'></FaWalking>
                        <h4>Take your flight</h4>
                        <p>Take your flight on selected date and joy</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;