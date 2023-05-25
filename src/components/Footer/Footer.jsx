import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <Row xs={1} md={3} className='bg-black p-5 text-white mt-5 w-100'>
            <Col>
                <h5>Travel</h5>
                <p>There are many variations of passages of available</p>
            </Col>
            <Col>
                <h5>Social</h5>
                <span className='d-flex align-items-center'>
                    <FaFacebook></FaFacebook>
                    <p className='m-0 ms-2'>Facebook</p>
                </span>
                <span className='d-flex align-items-center'>
                    <FaGithub></FaGithub>
                    <p className='m-0 ms-2'>Facebook</p>
                </span>
                <span className='d-flex align-items-center'>
                    <FaLinkedin></FaLinkedin>
                    <p className='m-0 ms-2'>Facebook</p>
                </span>
            </Col>
            <Col>
                <h5>Our Location</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116817.2118605674!2d90.42195359999997!3d23.799465299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1684927939617!5m2!1sen!2sbd" ></iframe>
            </Col>
        </Row>
    );
};

export default Footer;