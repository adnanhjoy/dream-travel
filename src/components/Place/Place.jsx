import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Place.css';
import { Link } from 'react-router-dom';

const Place = ({place}) => {
    const {id, name, img, time, price, place_id} = place;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} className='package-img' />
                <Card.Body>
                    <Card.Title className='place-title'>
                        <Link className='text-decoration-none text-black-50 ' to={`/places/${id}`}>{name}</Link>
                    </Card.Title>
                    <Card.Text className='d-flex justify-content-between'>
                        <p className='m-0'>{time}</p>
                        <p className='m-0 text-price fw-bold'>$ {price}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Place;