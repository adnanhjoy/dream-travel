import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import testimonial1 from '../../assets/testimonial/image1.jpg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <Container className='mt-5'>
            <p className='text-primary'>TESTIMONIALS</p>
            <h2>What our client say</h2>
            <small className='mb-5'>Create a visual identity for your company, <br /> and an overall brand</small>

            <Row xs={1} md={2} lg={4} className='g-4 mt-4'>
                <Col>
                    <div className='border p-3 rounded mt-5 shadow position-relative'>
                        <div className='d-flex justify-content-center'>
                            <img className='testimonal-img rounded-circle position-absolute' src={testimonial1} alt="" />
                        </div>
                        <div className='text-center'>
                            <p className='m-0 mt-4 fw-bold'>Sayem Ahmed</p>
                            <p className='m-0 mb-4'><small>Product designer</small></p>
                        </div>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <p><small>Before we define any approach, we need to define the brands' overall goal. We then need to dive.</small></p>
                    </div>
                </Col>
                <Col>
                    <div className='border p-3 rounded mt-5 shadow position-relative'>
                        <div className='d-flex justify-content-center'>
                            <img className='testimonal-img rounded-circle position-absolute' src={testimonial1} alt="" />
                        </div>
                        <div className='text-center'>
                            <p className='m-0 mt-4 fw-bold'>Sayem Ahmed</p>
                            <p className='m-0 mb-4'><small>Product designer</small></p>
                        </div>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <p><small>Before we define any approach, we need to define the brands' overall goal. We then need to dive.</small></p>
                    </div>
                </Col>
                <Col>
                    <div className='border p-3 rounded mt-5 shadow position-relative'>
                        <div className='d-flex justify-content-center'>
                            <img className='testimonal-img rounded-circle position-absolute' src={testimonial1} alt="" />
                        </div>
                        <div className='text-center'>
                            <p className='m-0 mt-4 fw-bold'>Sayem Ahmed</p>
                            <p className='m-0 mb-4'><small>Product designer</small></p>
                        </div>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <p><small>Before we define any approach, we need to define the brands' overall goal. We then need to dive.</small></p>
                    </div>
                </Col>
                <Col>
                    <div className='border p-3 rounded mt-5 shadow position-relative'>
                        <div className='d-flex justify-content-center'>
                            <img className='testimonal-img rounded-circle position-absolute' src={testimonial1} alt="" />
                        </div>
                        <div className='text-center'>
                            <p className='m-0 mt-4 fw-bold'>Sayem Ahmed</p>
                            <p className='m-0 mb-4'><small>Product designer</small></p>
                        </div>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <FaStar className='text-warning'></FaStar>
                        <p><small>Before we define any approach, we need to define the brands' overall goal. We then need to dive.</small></p>
                    </div>
                </Col>
                
            </Row>
        </Container>
    );
};

export default Testimonials;