import React from 'react';
import { Container } from 'react-bootstrap';
import about from '../../assets/about.png'

const About = () => {
    return (
        <Container>
            <p className='mt-5 text-primary'>ABOUT US</p>
            <div className='d-md-flex justify-content-between align-items-center gap-5'>

                <img className='w-50' src={about} alt="about" />

                <div>
                    <h2 className='mb-5'>Explore all corners of <br />
                        the world with us.</h2>
                    <p className=''>These exercises ran in parallel with a series of focus groups comprising of parents. These exercises ran in parallel with a series of focus groups comprising of parents.</p>
                </div>
            </div>
        </Container>
    );
};

export default About;