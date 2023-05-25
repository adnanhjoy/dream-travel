import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/AuthProvider';

const Register = () => {
    const { createUser } = useContext(UserContext);

    const handleSumbitSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            result.user;
            form.reset();
        })
        .catch(error => console.error(error));

        console.log(name, email, password);
    }

    return (
        <Container>
            <h1 className='text-center'>Signup</h1>
            <Form onSubmit={handleSumbitSignUp} className='w-50 m-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Text className="">
                        Allready have an account ?<Link to='/login'>Login</Link>
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
        </Container>
    );
};

export default Register;