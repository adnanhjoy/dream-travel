import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../assets/carousel/carousel1.jpg'
import carousel2 from '../../assets/carousel/carousel2.jpg'
import carousel3 from '../../assets/carousel/carousel3.jpg'
import { Container } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carou-img"
                        src={carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Coxs Bazar</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carou-img"
                        src={carousel2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Saint Martin</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carou-img"
                        src={carousel3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Sajek Valley</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Header;